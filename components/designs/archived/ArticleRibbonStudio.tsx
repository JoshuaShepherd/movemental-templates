"use client"

import { useMemo, useState } from "react"

const ribbons = [
  { id: "spotlight", title: "Spotlight Essays", color: "from-rose-500 to-orange-400" },
  { id: "briefings", title: "Briefings", color: "from-sky-500 to-cyan-400" },
  { id: "atlas", title: "Atlas Notes", color: "from-emerald-500 to-lime-400" },
]

const library = [
  {
    id: "spotlight",
    heading: "Spotlight Essay: Movement Architects",
    summary: "Full typographic demo with multi-column pull quotes and callouts.",
  },
  {
    id: "briefings",
    heading: "Briefing: Weekly Signals",
    summary: "Shorter writing style but still requires captions and lists.",
  },
  {
    id: "atlas",
    heading: "Atlas Note: Global Chapters",
    summary: "Cartographic storytelling with figure callouts.",
  },
]

const paragraphs = [
  "Ribbon Studio organizes articles using color-coded ribbons across the top. Editors can click a ribbon to isolate a set of articles and see the full article view refresh inline.",
  "The typographic palette uses geometric sans headlines paired with a clean serif body to echo printed annual reports.",
]

export default function ArticleRibbonStudio() {
  const [activeRibbon, setActiveRibbon] = useState("spotlight")
  const activeArticle = useMemo(() => library.find((item) => item.id === activeRibbon) ?? library[0], [activeRibbon])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        <header className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.6em] text-gray-500">Ribbon studio</p>
          <h1 className="text-4xl font-semibold font-[var(--font-playfair)]">Article ribbons + full story canvas</h1>
          <p className="text-gray-700 max-w-3xl">
            Each ribbon toggles metadata, filters, and color-coded mini cards while the right-hand column showcases the actual longform layout
            with blockquotes, lists, and captions.
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {ribbons.map((ribbon) => (
              <button
                key={ribbon.id}
                onClick={() => setActiveRibbon(ribbon.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${ribbon.color} ${
                  activeRibbon === ribbon.id ? "" : "opacity-60 hover:opacity-100"
                }`}
              >
                {ribbon.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 space-y-4">
              {library.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl border px-4 py-3 text-left ${
                    item.id === activeRibbon ? "border-gray-900 bg-white" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{item.id}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{item.heading}</h3>
                  <p className="text-sm text-gray-600">{item.summary}</p>
                </div>
              ))}
            </div>

            <article className="rounded-[32px] border border-gray-200 bg-white shadow-xl p-8 space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">{activeRibbon}</p>
                <h2 className="text-3xl font-[var(--font-playfair)]">{activeArticle.heading}</h2>
                <p className="text-sm text-gray-500">By Colin Diaz · 15 min read</p>
              </div>

              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-800">
                  {paragraph}
                </p>
              ))}

              <blockquote className="border-l-4 border-rose-500 pl-6 italic text-xl">
                “Color-coded ribbons keep the editorial mind in ‘overview mode’ while the reader is absorbed in the narrative.”
              </blockquote>

              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                <li>Show bullet lists for frameworks.</li>
                <li>Use numbered callouts for complex diagrams.</li>
              </ul>

              <figure className="border border-gray-200 rounded-2xl p-4 bg-gray-50">
                <div className="h-32 rounded-xl bg-gradient-to-r from-rose-100 via-white to-orange-100" />
                <figcaption className="mt-3 text-sm text-gray-600">
                  Figure 03 · Ribbon palette encoded into the article figure caption.
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}

