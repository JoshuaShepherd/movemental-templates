"use client"

import { useState } from "react"

const feeds = [
  { id: "campfire", location: "Campfire Dispatch", mood: "Warm", excerpt: "Leaders co-authored a field journal inside WhatsApp." },
  { id: "delta", location: "Delta Studio", mood: "Neutral", excerpt: "Article templates shift when cohorts expect transcripts." },
  { id: "icebreaker", location: "Icebreaker Reports", mood: "Cool", excerpt: "Look for captions doing the heavy lifting." },
]

const articleSections = [
  {
    heading: "Lists meet narrative",
    body: "Fieldnotes love list structures. Blend bullet moments with small paragraphs so the article breathes.",
    bullets: ["Lead with an observation.", "Back it with a quote.", "Add a captioned artifact."],
  },
]

export default function ArticleFieldnotesAtelier() {
  const [activeFeed, setActiveFeed] = useState("delta")

  return (
    <div className="min-h-screen bg-[#fdfdf5] text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-4 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.6em] text-gray-500">Fieldnotes atelier</p>
          <h1 className="text-4xl font-[var(--font-playfair)]">Analog warmth + digital precision</h1>
          <p className="text-gray-700">
            Card-stack feed for article management plus a textured article panel. Designed to feel tactile while showcasing the typographic
            system inside a longform view.
          </p>

          <div className="space-y-3">
            {feeds.map((feed) => (
              <button
                key={feed.id}
                onClick={() => setActiveFeed(feed.id)}
                className={`w-full rounded-3xl border px-5 py-4 text-left transition-all ${
                  activeFeed === feed.id ? "border-gray-900 bg-white shadow-lg" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">{feed.location}</p>
                <p className="text-lg font-semibold">{feed.excerpt}</p>
                <p className="text-xs text-gray-500 mt-1">{feed.mood} tone</p>
              </button>
            ))}
          </div>
        </aside>

        <article className="lg:col-span-8 rounded-[32px] border border-gray-200 bg-white shadow-xl p-8 space-y-6">
          <header className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">Longform article view</p>
            <h2 className="text-4xl font-[var(--font-playfair)]">Delta Studio: Building Article Rituals</h2>
            <p className="text-sm text-gray-500">By Elise Prado · 10 min read</p>
          </header>

          <p className="text-gray-800">
            Fieldnotes often arrive messy. The atelier pattern cleans them up with in-flow search, filters, and a canvas that reveals how quotes,
            captions, and lists perform once published.
          </p>

          {articleSections.map((section) => (
            <section key={section.heading} className="space-y-2">
              <h3 className="text-2xl font-semibold">{section.heading}</h3>
              <p className="text-gray-700">{section.body}</p>
              <ul className="list-disc pl-5 text-gray-800">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}

          <blockquote className="border-l-4 border-amber-500 pl-6 italic text-xl">
            “Capture the quote, but give it a caption so readers understand the context instantly.”
          </blockquote>

          <figure className="border border-gray-200 rounded-2xl p-4 bg-gray-50">
            <div className="h-32 rounded-xl bg-[repeating-linear-gradient(45deg,#e5e5d8,#e5e5d8_10px,#fdfdf5_10px,#fdfdf5_20px)]" />
            <figcaption className="mt-3 text-sm text-gray-600">
              Figure 05 · Caption style with small caps + color-coded figure numbers.
            </figcaption>
          </figure>
        </article>
      </main>
    </div>
  )
}

