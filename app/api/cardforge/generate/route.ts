import { NextResponse } from "next/server"
import OpenAI from "openai"
import sharp from "sharp"

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY server environment variable." },
      { status: 500 }
    )
  }

  try {
    let body: { prompt?: unknown; imageDataUrl?: unknown }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 })
    }

    const { prompt, imageDataUrl } = body

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 })
    }

    const contentPayload: Array<{
      role: "user"
      content: Array<
        | { type: "input_text"; text: string }
        | { type: "input_file"; filename?: string; file_data: string }
      >
    }> = [
      {
        role: "user",
        content: [{ type: "input_text", text: prompt }],
      },
    ]

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    if (imageDataUrl && typeof imageDataUrl === "string") {
      const dataUrlMatch = imageDataUrl.match(
        /^data:(?<mime>.+);base64,(?<data>.+)$/i
      ) as { groups?: { mime: string; data: string } } | null

      if (!dataUrlMatch?.groups) {
        return NextResponse.json(
          { error: "Uploaded image must be a valid base64 data URL." },
          { status: 400 }
        )
      }

      const { mime, data } = dataUrlMatch.groups
      const buffer = Buffer.from(data, "base64")

      if (!mime.startsWith("image/")) {
        return NextResponse.json(
          { error: "Only image uploads are supported." },
          { status: 400 }
        )
      }

      const processedBuffer = mime === "image/png" ? buffer : await sharp(buffer).png().toBuffer()

      contentPayload[0].content.push({
        type: "input_file",
        filename: "uploaded-card-image.png",
        file_data: `data:image/png;base64,${processedBuffer.toString("base64")}`,
      })
    }

    const response = await openai.responses.create({
      model: "gpt-4o",
      input: contentPayload,
      tools: [
        {
          type: "image_generation",
          size: "1024x1536",
          quality: "high",
          background: "transparent",
        },
      ],
      tool_choice: { type: "image_generation" },
    })

    const imageCall = response.output.find(
      (output) => output.type === "image_generation_call"
    ) as
      | {
          type: "image_generation_call"
          result: string
          revised_prompt?: string
        }
      | undefined

    if (!imageCall) {
      return NextResponse.json(
        { error: "Image generation did not return any output." },
        { status: 502 }
      )
    }

    return NextResponse.json({
      image: imageCall.result,
      revisedPrompt: imageCall.revised_prompt ?? null,
    })
  } catch (error) {
    console.error("[cardforge-generate]", error)
    return NextResponse.json(
      { error: "Unable to generate image. Please try again." },
      { status: 500 }
    )
  }
}


