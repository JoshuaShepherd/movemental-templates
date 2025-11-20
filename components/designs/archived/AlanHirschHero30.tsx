"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Accessibility-first Reader / Learning Teams
// Philosophy: Accessible reading studio with typography controls, contrast toggles, AI insight dock, annotation timeline
// Experiment: Long-form reader with adjustable typography, contrast, AI insights, and annotation timeline

type Annotation = {
  id: string
  quote: string
  author: string
  context: string
  timestamp: string
}

const annotations: Annotation[] = [
  {
    id: "ann-01",
    quote: "Movements are fractal; the smallest faithful cell contains the pattern of the whole.",
    author: "Alan Hirsch",
    context: "Chapter 2",
    timestamp: "12:48",
  },
  {
    id: "ann-02",
    quote: "Communitas is sparked when the challenge exceeds our capacity.",
    author: "Jo Saxton",
    context: "Interview",
    timestamp: "26:10",
  },
]

const aiInsights = [
  {
    id: "ai-01",
    title: "Movement Pattern Detected",
    detail: "The text references apostolic genius alongside organic systems. Suggest combining both in your synthesis.",
    action: "Insert to notes",
  },
  {
    id: "ai-02",
    title: "Citation Reminder",
    detail: "You referenced Frost (2006). Want me to add the full citation to your bibliography?",
    action: "Add citation",
  },
]

export default function AlanHirschHero30() {
  const [fontSize, setFontSize] = useState(18)
  const [lineHeight, setLineHeight] = useState(1.7)
  const [contrast, setContrast] = useState<"light" | "sepia" | "dark">("light")

  return (
    <div className={contrast === "dark" ? "bg-[#050505] text-white" : contrast === "sepia" ? "bg-[#f6f0e0] text-gray-900" : "bg-white text-gray-900"}>
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm border rounded-full transition-colors"
          style={{
            backgroundColor: contrast === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            color: contrast === "dark" ? "#fff" : "#111",
            borderColor: contrast === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
          }}
        >
          ← Back to Game
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-[0.6em] opacity-70">Accessible Reading Studio</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Alan Hirsch Reader · Adjustable Typography Edition</h1>
        <p className="text-lg mt-4 max-w-3xl opacity-80">
          Tailored for long-form cohorts that need adjustable typography, high-contrast modes, AI insights, and collaborative
          annotations.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          {(["light", "sepia", "dark"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setContrast(mode)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold ${contrast === mode ? "border-blue-600" : "border-gray-300"}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 space-y-8">
          <div className="rounded-3xl border border-gray-200 p-6" style={{ borderColor: contrast === "dark" ? "rgba(255,255,255,0.2)" : "#e5e7eb", backgroundColor: contrast === "dark" ? "rgba(255,255,255,0.05)" : "#fff" }}>
            <p className="text-xs uppercase tracking-[0.4em] opacity-70">Typography</p>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Font size</span>
                  <span>{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min={14}
                  max={24}
                  step={1}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="mt-2 w-full accent-blue-600"
                />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Line height</span>
                  <span>{lineHeight.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={1.4}
                  max={2}
                  step={0.1}
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(parseFloat(e.target.value).toFixed(1)))}
                  className="mt-2 w-full accent-blue-600"
                />
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 p-6" style={{ borderColor: contrast === "dark" ? "rgba(255,255,255,0.2)" : "#e5e7eb", backgroundColor: contrast === "dark" ? "rgba(255,255,255,0.05)" : "#fff" }}>
            <p className="text-xs uppercase tracking-[0.4em] opacity-70">AI insights</p>
            <div className="space-y-4 mt-4">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="rounded-2xl border border-dashed border-current/20 p-4">
                  <h3 className="text-sm font-semibold">{insight.title}</h3>
                  <p className="text-sm opacity-80 mt-1">{insight.detail}</p>
                  <Button className="mt-3 h-auto px-4 py-1 text-xs rounded-full">{insight.action}</Button>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-8">
          <article
            className="rounded-3xl border border-gray-200 p-8 shadow"
            style={{
              borderColor: contrast === "dark" ? "rgba(255,255,255,0.2)" : "#e5e7eb",
              backgroundColor: contrast === "dark" ? "rgba(255,255,255,0.05)" : "#fff",
              fontSize,
              lineHeight,
            }}
          >
            <h2 className="text-3xl font-semibold">Chapter 1 · Apostolic Genius Revisited</h2>
            <p className="mt-6">
              Apostolic genius is the innate capacity of the church to incarnate, adapt, and pioneer in every context. When we
              examine the stories of underground movements, refugee churches, and digital-native communities, we see the same pattern:
              Jesus at the center, discipleship as a verb, and communitas forged in mission.
            </p>
            <p className="mt-4">
              This accessible edition layers transcripts, analysis, and AI-generated insights so research teams can annotate and
              export learnings effortlessly.
            </p>
          </article>

          <div className="rounded-3xl border border-gray-200 p-6" style={{ borderColor: contrast === "dark" ? "rgba(255,255,255,0.2)" : "#e5e7eb", backgroundColor: contrast === "dark" ? "rgba(255,255,255,0.05)" : "#fff" }}>
            <p className="text-xs uppercase tracking-[0.4em] opacity-70">Annotation timeline</p>
            <div className="mt-4 space-y-4">
              {annotations.map((annotation) => (
                <div key={annotation.id} className="flex gap-4">
                  <div className="w-24 text-sm font-semibold opacity-70">{annotation.timestamp}</div>
                  <div>
                    <p className="text-sm font-medium">“{annotation.quote}”</p>
                    <p className="text-xs opacity-70 mt-1">
                      {annotation.author} · {annotation.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
