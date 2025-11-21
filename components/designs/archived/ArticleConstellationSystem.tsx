"use client"

import { useMemo, useState } from "react"

type Article = {
  id: string
  title: string
  author: string
  category: string
  summary: string
  body: string[]
  quote: string
  figure: { caption: string; details: string }
  bullets: string[]
}

const articles: Article[] = [
  {
    id: "signals",
    title: "Signals of a Postlinear Movement",
    author: "Avery Sloan",
    category: "Intelligence Deck",
    summary: "Twelve diagnostic cues leaders watch when the narrative arc breaks open.",
    body: [
      "When movements accelerate, the article cadence shifts from planned drops to responsive field dispatches.",
      "An articles management layer must surface these dispatches while retaining evergreen research.",
    ],
    quote: "Great editorial systems feel like an air-traffic tower for narratives.",
    figure: { caption: "Diagram 04 · Narrative telemetry stack", details: "Three-lane telemetry with cross-field annotation" },
    bullets: ["Map the cadence of release windows.", "Surface drift between voice + readership.", "Log sentient AI assists."],
  },
  {
    id: "atlas",
    title: "Atlas of Digital Scholar Studios",
    author: "Mara Okoye",
    category: "Research Archive",
    summary: "Cataloging twelve studios that run publication, cohorts, and counsel inside a single graph.",
    body: [
      "Studios prefer filters that combine movement, tone, and readiness indicators.",
      "Present the full article view alongside the browsing controls so teams never lose context.",
    ],
    quote: "Let the article breathe—pull quotes, figure notes, ordered logic, and typographic rituals matter.",
    figure: { caption: "Plate 07 · Typographic stack", details: "Canela Display + Inter + Maison Mono" },
    bullets: ["List + blockquote pairings show rhythm.", "Captions anchor longform trust.", "Filters should feel architectural."],
  },
]

const categories = ["All", "Intelligence Deck", "Research Archive"]

export default function ArticleConstellationSystem() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [activeId, setActiveId] = useState(articles[0].id)

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category
      const matchesQuery =
        !query ||
        [article.title, article.summary, article.author, article.category].join(" ").toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const activeArticle = articles.find((article) => article.id === activeId) ?? articles[0]

  return (
    <div className="min-h-screen bg-[#f5f3f0] dark:bg-[#050505] text-gray-900 dark:text-gray-100">
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-600 dark:text-gray-400">Article constellation control</p>
          <h1 className="text-4xl md:text-5xl font-semibold font-[var(--font-playfair)]">Sea of articles, anchored by one view</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
            Search the stack, toggle categories, and watch the right-hand longform article refresh without losing context. Designed to
            showcase multi-typographic rituals—lists, blockquotes, captions, footnotes—while retaining a powerful management console.
          </p>
        </header>

        <section className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author, notes…"
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
              <div className="flex flex-wrap gap-3 mt-4">
                {categories.map((option) => (
                  <button
                    key={option}
                    onClick={() => setCategory(option)}
                    className={`px-4 py-1.5 text-xs rounded-full border ${
                      category === option
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 max-h-[520px] overflow-auto pr-2">
              {filtered.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setActiveId(article.id)}
                  className={`w-full text-left rounded-3xl border p-5 transition-all ${
                    activeId === article.id
                      ? "border-gray-900 bg-white shadow-lg dark:bg-gray-900"
                      : "border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/50 hover:border-gray-400"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">{article.category}</p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{article.summary}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">By {article.author}</p>
                </button>
              ))}
            </div>
          </div>

          <article className="lg:col-span-3 rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">{activeArticle.category}</p>
              <h2 className="text-3xl font-semibold font-[var(--font-playfair)] text-gray-900 dark:text-gray-100">
                {activeArticle.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">By {activeArticle.author}</p>
            </div>

            {activeArticle.body.map((para) => (
              <p key={para} className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {para}
              </p>
            ))}

            <blockquote className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 italic text-xl text-gray-900 dark:text-gray-100">
              “{activeArticle.quote}”
            </blockquote>

            <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
              {activeArticle.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className="border border-gray-200 dark:border-gray-800 rounded-2xl p-4 bg-gray-50 dark:bg-gray-900/60">
              <div className="h-32 rounded-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
              <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">{activeArticle.figure.caption}</span> · {activeArticle.figure.details}
              </figcaption>
            </figure>
          </article>
        </section>
      </main>
    </div>
  )
}

