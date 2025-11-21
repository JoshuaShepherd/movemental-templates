"use client"

import { useState } from "react"

const tags = ["All", "Operations", "Storycraft", "Field Brief", "Data"]

const rows = [
  {
    id: "ops-sequence",
    title: "Operational Sequencing Playbook",
    tag: "Operations",
    reads: "4.8k",
    time: "12 min read",
  },
  {
    id: "storycraft",
    title: "Storycraft in Distributed Teams",
    tag: "Storycraft",
    reads: "6.1k",
    time: "14 min read",
  },
  {
    id: "field-brief",
    title: "Field Brief · Lagos Micro-Press Labs",
    tag: "Field Brief",
    reads: "3.9k",
    time: "9 min read",
  },
  {
    id: "data-slate",
    title: "Data Slate: Newsletter Retention Models",
    tag: "Data",
    reads: "5.5k",
    time: "11 min read",
  },
]

const articleBody = [
  {
    heading: "Grid-first layout",
    content:
      "Split the viewport into a management rail and a full article canvas. Allow the search + filter layer to pin at the top so editors can change context without losing scroll position.",
  },
  {
    heading: "Typographic stack",
    content:
      "This version uses a high-contrast serif for the article heading, a humanist sans for body copy, and a mono accent for metadata. Pairing them creates rhythm in longform reading.",
  },
]

export default function ArticleChronicleWorkspace() {
  const [activeTag, setActiveTag] = useState("All")
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] via-[#131822] to-[#0a0c11] text-gray-100">
      <main className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
        <section className="lg:col-span-4 space-y-6">
          <header>
            <p className="text-[10px] uppercase tracking-[0.6em] text-gray-400">Chronicle workspace</p>
            <h1 className="text-3xl font-semibold text-white">Articles management, cinematic dark mode</h1>
          </header>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 space-y-4">
            <input
              placeholder="Search articles across cohorts"
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 text-xs rounded-full border ${
                    activeTag === tag
                      ? "border-white bg-white/20"
                      : "border-white/20 text-gray-300 hover:border-white/40"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.id}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-4 flex flex-col gap-1 hover:border-white/30 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">{row.tag}</p>
                <h3 className="text-xl font-semibold text-white">{row.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{row.reads} reads</span>
                  <span>•</span>
                  <span>{row.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <article className="lg:col-span-8 rounded-[36px] border border-white/10 bg-[#0a0d14]/70 backdrop-blur p-10 space-y-6 shadow-2xl">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.6em] text-teal-300">Storycraft</p>
            <h2 className="text-4xl font-[var(--font-playfair)]">Storycraft in Distributed Teams</h2>
            <p className="text-sm text-gray-300">By Mara Okoye · 14 min read</p>
          </div>

          {articleBody.map((block) => (
            <section key={block.heading} className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">{block.heading}</h3>
              <p className="text-gray-200 leading-relaxed">{block.content}</p>
            </section>
          ))}

          <blockquote className="border-l-4 border-teal-400 pl-6 italic text-2xl text-white">
            “Dark UI still needs typographic warmth—don’t let the console swallow the prose.”
          </blockquote>

          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Use ordered lists to map choreography.</li>
            <li>Call out figure captions so readers can scan quickly.</li>
            <li>Anchors should be accessible both via keyboard and pointer.</li>
          </ul>

          <figure className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="h-36 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_60%)]" />
            <figcaption className="mt-4 text-sm text-gray-300">
              Figure 02 · Distributed editing lanes · Captures the interplay between editors, AI linters, and publication gates.
            </figcaption>
          </figure>
        </article>
      </main>
    </div>
  )
}

