/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const promptOptions = [
  {
    title: "Neon Stadium Legend",
    subtitle: "Vibrant lights + motion trails",
    prompt:
      "Use the provided athlete photo as the central figure. Keep their likeness intact while placing them under night-game neon stadium lights with dramatic rim lighting, particle sparks, and glowing typography.",
    gradient: "from-blue-500/80 to-purple-500/80",
  },
  {
    title: "Retro 90s Hologram",
    subtitle: "Throwback foil sheen",
    prompt:
      "Keep the uploaded player intact and wrap them in a 1990s holographic trading card aesthetic with teal + purple gradients, chrome borders, and etched foil patterns.",
    gradient: "from-purple-500/80 to-pink-500/80",
  },
  {
    title: "Golden Hour MVP",
    subtitle: "Sunset drama + lens flare",
    prompt:
      "Retain the subject from the base image and bathe them in golden hour sunlight with cinematic lens flares, soft dust motes, and a warm championship glow.",
    gradient: "from-amber-500/80 to-orange-500/80",
  },
  {
    title: "Cosmic All-Star",
    subtitle: "Galaxy courtside energy",
    prompt:
      "Preserve the athlete while surrounding them with cosmic clouds, constellations, and electric energy rings inspired by premium sci-fi sports cards.",
    gradient: "from-indigo-500/80 to-cyan-500/80",
  },
  {
    title: "Electric Rookie Debut",
    subtitle: "Confetti + broadcast overlays",
    prompt:
      "Highlight the provided image with bold TV broadcast graphics, dynamic diagonal typography, confetti, and scoreboard HUD elements celebrating a rookie debut.",
    gradient: "from-pink-500/80 to-red-500/80",
  },
  {
    title: "Icebound Defender",
    subtitle: "Cool blues + crystalline shards",
    prompt:
      "Use the uploaded subject and embed them in a frosted, ice-shard environment with cool teal lighting, crystalline typography, and vapor trails.",
    gradient: "from-sky-500/80 to-blue-600/80",
  },
  {
    title: "Streetball Graffiti",
    subtitle: "Concrete + spray texture",
    prompt:
      "Keep the athlete recognizable while compositing them onto an urban court backdrop with graffiti layers, gritty textures, neon paint drips, and bold stencil stats.",
    gradient: "from-lime-500/80 to-emerald-500/80",
  },
  {
    title: "Championship Parade",
    subtitle: "Ticker tape celebration",
    prompt:
      "Maintain the original player and set them amid a championship parade scene with ticker tape, cheering silhouettes, gold confetti, and metallic embossing.",
    gradient: "from-yellow-400/80 to-amber-500/80",
  },
  {
    title: "Monochrome Icon",
    subtitle: "Black + white with a single accent",
    prompt:
      "Transform the base image into a high-contrast monochrome portrait that keeps the face natural while adding one bold accent color stripe and luxe typography.",
    gradient: "from-slate-500/80 to-gray-800/80",
  },
  {
    title: "Vaporwave Velocity",
    subtitle: "Synth gradients + grid horizon",
    prompt:
      "Respect the subject's likeness and stage them in a vaporwave-inspired scene with magenta/cyan gradients, a retro-future grid floor, and chrome numbering.",
    gradient: "from-fuchsia-500/80 to-cyan-400/80",
  },
]

// Design Choice: AI-Powered Baseball Card Customizer
// 1-of-1 custom sports card editor with image upload
// AI image generation integration UI (ChatGPT 4o)
// Premium, polished design for card creation

export default function AlanHirschHero() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [cardData, setCardData] = useState({
    name: "",
    position: "",
    team: "",
    stats: "",
    year: new Date().getFullYear().toString(),
  })
  const [aiPrompt, setAiPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAiPanel, setShowAiPanel] = useState(false)
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(null)
  const [generationError, setGenerationError] = useState<string | null>(null)
  const [revisedPrompt, setRevisedPrompt] = useState<string | null>(null)
  const [lastGeneratedAt, setLastGeneratedAt] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        setGeneratedImage(null)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        setGeneratedImage(null)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handlePresetSelect = useCallback((prompt: string, index: number) => {
    setAiPrompt(prompt)
    setSelectedPromptIndex(index)
    setShowAiPanel(true)
  }, [])

  const handleAiGenerate = useCallback(async () => {
    if (!uploadedImage) {
      setGenerationError("Upload or select a base image first.")
      return
    }

    if (!aiPrompt.trim()) {
      setGenerationError("Choose a preset or write a prompt before generating.")
      return
    }

    setIsGenerating(true)
    setGenerationError(null)

    try {
      const response = await fetch("/api/cardforge/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `${aiPrompt.trim()} Style it like a premium sports trading card and keep the athlete faithful to the base photo.`,
          imageDataUrl: uploadedImage,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Image generation failed.")
      }

      if (data.image) {
        setGeneratedImage(`data:image/png;base64,${data.image}`)
        setRevisedPrompt(data.revisedPrompt ?? null)
        setLastGeneratedAt(new Date().toLocaleTimeString())
      }
    } catch (error) {
      console.error(error)
      setGenerationError(
        error instanceof Error ? error.message : "Unable to generate image. Please try again."
      )
    } finally {
      setIsGenerating(false)
    }
  }, [aiPrompt, uploadedImage])

  const activeCardImage = generatedImage ?? uploadedImage

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm tracking-wider uppercase text-blue-300 mb-6">
              AI-Powered • 1-of-1 Custom Cards
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CardForge
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Create your own custom sports card. Upload any image or generate one with AI.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Powered by ChatGPT 4o image generation. Every card is unique, every card is yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Upload & Customization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Image Upload */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="relative border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-900/50"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {uploadedImage ? (
                  <div className="relative">
                    <Image
                      src={uploadedImage}
                      alt="Uploaded"
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-lg mx-auto"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setUploadedImage(null)
                        setGeneratedImage(null)
                        setSelectedPromptIndex(null)
                      }}
                      className="absolute top-2 right-2 px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-xl font-semibold mb-2">Upload Your Image</p>
                    <p className="text-gray-400">Click or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG, WEBP up to 10MB</p>
                  </div>
                )}
              </div>
              {uploadedImage && (
                <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                      Preselected base image
                    </p>
                    <p className="text-sm text-gray-400">
                      We lock this photo into every OpenAI edit so the athlete always stays on-model.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setUploadedImage(null)
                      setGeneratedImage(null)
                      setSelectedPromptIndex(null)
                    }}
                    className="text-sm font-semibold text-blue-300 hover:text-blue-200 underline"
                  >
                    Choose different photo
                  </button>
                </div>
              )}

              {/* Card Details Form */}
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 space-y-4">
                <h3 className="text-xl font-bold mb-4">Card Details</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    placeholder="Player Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Position</label>
                    <input
                      type="text"
                      value={cardData.position}
                      onChange={(e) => setCardData({ ...cardData, position: e.target.value })}
                      placeholder="Position"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Year</label>
                    <input
                      type="text"
                      value={cardData.year}
                      onChange={(e) => setCardData({ ...cardData, year: e.target.value })}
                      placeholder="2024"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Team</label>
                  <input
                    type="text"
                    value={cardData.team}
                    onChange={(e) => setCardData({ ...cardData, team: e.target.value })}
                    placeholder="Team Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Stats</label>
                  <textarea
                    value={cardData.stats}
                    onChange={(e) => setCardData({ ...cardData, stats: e.target.value })}
                    placeholder=".350 AVG • 45 HR • 120 RBI"
                    rows={2}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  />
                </div>
              </div>

              {/* AI Generation Panel */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <span>✨</span> AI Image Generator
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">Powered by ChatGPT 4o</p>
                  </div>
                  <button
                    onClick={() => setShowAiPanel(!showAiPanel)}
                    className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {showAiPanel ? "Hide" : "Show"}
                  </button>
                </div>
                <AnimatePresence>
                  {showAiPanel && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                          Pick a style
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {promptOptions.map((preset, index) => (
                            <button
                              key={preset.title}
                              type="button"
                              onClick={() => handlePresetSelect(preset.prompt, index)}
                              className={`text-left rounded-2xl border px-4 py-4 bg-gradient-to-r ${preset.gradient} transition-all duration-200 hover:scale-[1.02] ${
                                selectedPromptIndex === index
                                  ? "border-white/70 shadow-lg shadow-purple-500/30"
                                  : "border-white/20 shadow-md shadow-black/30"
                              }`}
                              aria-pressed={selectedPromptIndex === index}
                            >
                              <p className="text-sm font-semibold text-white">{preset.title}</p>
                              <p className="text-xs text-gray-100/80 mt-1">{preset.subtitle}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Or describe your own concept
                        </label>
                        <textarea
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          placeholder="e.g., 'Dynamic overhead dunk, chrome typography, raining sparks, midnight arena'"
                          rows={3}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                        />
                      </div>
                      {generationError && (
                        <div className="rounded-xl border border-red-500/60 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                          {generationError}
                        </div>
                      )}
                      <Button
                        onClick={handleAiGenerate}
                        disabled={!aiPrompt || isGenerating}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin">⏳</span>
                            Generating with OpenAI...
                          </span>
                        ) : (
                          "Generate card art with OpenAI"
                        )}
                      </Button>
                      <p className="text-xs text-gray-400">
                        We submit your prompt + base image through the OpenAI Responses API with the
                        `image_generation` tool (`size: 1024x1536`, `quality: high`, `background:
                        transparent`) as detailed in the SDK documentation.
                      </p>
                      {(revisedPrompt || lastGeneratedAt) && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm space-y-2 text-gray-200">
                          {lastGeneratedAt && (
                            <p>
                              <span className="font-semibold text-white">Last render:</span>{" "}
                              {lastGeneratedAt}
                            </p>
                          )}
                          {revisedPrompt && (
                            <p className="text-gray-300">
                              <span className="font-semibold text-white">Model refinement:</span>{" "}
                              {revisedPrompt}
                            </p>
                          )}
                        </div>
                      )}
                      {generatedImage && (
                        <div className="rounded-2xl border border-emerald-500/50 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                          New AI artwork is live in your card preview. Download the card to grab the
                          transparent PNG.
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right: Card Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="sticky top-8"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Card Preview</h3>
                <div className="relative aspect-[2.5/3.5] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl overflow-hidden border-2 border-gray-600">
                  {activeCardImage ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={activeCardImage}
                        alt="Card"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-6xl mb-4">⚾</div>
                        <p className="text-lg">Upload an image to preview</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Card Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2">
                      {cardData.name && (
                        <h4 className="text-3xl font-black text-white drop-shadow-lg">
                          {cardData.name}
                        </h4>
                      )}
                      <div className="flex items-center gap-4 text-sm text-white/90">
                        {cardData.position && (
                          <span className="font-semibold">{cardData.position}</span>
                        )}
                        {cardData.team && (
                          <>
                            <span>•</span>
                            <span>{cardData.team}</span>
                          </>
                        )}
                        {cardData.year && (
                          <>
                            <span>•</span>
                            <span>{cardData.year}</span>
                          </>
                        )}
                      </div>
                      {cardData.stats && (
                        <p className="text-sm text-white/80 font-medium">{cardData.stats}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg">
                    Download Card
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-600 hover:border-gray-500 text-white font-semibold py-3 rounded-lg"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why CardForge?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The only platform that combines custom image upload with AI-powered generation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "1-of-1 Custom Cards",
                description: "Every card you create is unique. Upload your own images or generate them with AI. No two cards are ever the same.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Generation",
                description: "Powered by ChatGPT 4o's advanced image generation. Describe your vision, and watch it come to life.",
              },
              {
                icon: "⚡",
                title: "Instant Creation",
                description: "Create professional-grade sports cards in minutes. Download, share, or print your custom cards instantly.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Create Your First Card
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating your custom 1-of-1 sports card today. Upload an image or let AI generate one for you.
            </p>
            <Button className="px-10 py-4 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-lg rounded-full">
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors text-white font-medium block backdrop-blur-sm"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
