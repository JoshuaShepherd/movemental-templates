"use client"

import { useMemo, useState } from "react"

type Filter = { label: string; value: string }

const filters: Filter[] = [
  { label: "All entries", value: "all" },
  { label: "Launch notes", value: "launch" },
  { label: "Field notes", value: "field" },
  { label: "Think pieces", value: "think" },
  { label: "Data stories", value: "data" },
]

const catalog = [
  {
    id: "launch-anthem",
    title: "Launch Anthem: Designing the First 90 Days",
    filter: "launch",
    abstract: "A funnel of articles, podcasts, and cohorts that introduces a thought leader to a newly acquired audience.",
  },
  {
    id: "field-signal",
    title: "Field Signal: Lagos North",
    filter: "field",
    abstract: "In-field correspondents capture four emergent behaviors from micro-church collectives.",
  },
  {
    id: "think-grid",
    title: "Think Grid: Unbundling the Seminary",
    filter: "think",
    abstract: "A persuasive longform article with citations, figures, and footnotes.",
  },
  {
    id: "data-ledger",
    title: "Data Ledger: Newsletter Retention",
    filter: "data",
    abstract: "Full data story complete with inline annotations and chart captions.",
  },
]

const typographicBlocks = [
  {
    title: "Ordered clarity",
    body: "Use ordered lists to articulate sequential delivery of a movement strategy.",
    ordered: ["Define the core opportunity.", "List your amplifier assets.", "Codify the next broadcast."],
  },
]

export default function ArticlePrismNavigator() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedId, setSelectedId] = useState("think-grid")
  const filteredCatalog = useMemo(() => {
    if (activeFilter === "all") return catalog
    return catalog.filter((item) => item.filter === activeFilter)
  }, [activeFilter])
  const active = catalog.find((item) => item.id === selectedId) ?? catalog[0]

  return (
    <div className="min-h-screen bg-[#fdfcf9] text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <header className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.6em] text-gray-500">Article prism navigator</p>
          <h1 className="text-4xl font-semibold font-[var(--font-playfair)]">One page, two experiences</h1>
          <p className="text-gray-700 max-w-3xl">
            A split canvas that shows an article management grid on the left and the full narrative article on the right. The prism motif
            leans into color-coded filters, progressive disclosure, and typographic richness for the longform view.
          </p>
        </header>

        <section className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-1.5 text-xs rounded-full border ${
                    activeFilter === filter.value
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
              {filteredCatalog.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left px-5 py-4 hover:bg-gray-50 ${
                    selectedId === item.id ? "bg-gray-50 border-l-4 border-gray-900" : "border-l-4 border-transparent"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">{item.filter}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.abstract}</p>
                </button>
              ))}
            </div>
          </div>

          <article className="lg:col-span-3 rounded-[36px] border border-gray-200 bg-white shadow-xl p-8 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.6em] text-rose-500">Think piece</p>
              <h2 className="text-4xl font-[var(--font-playfair)] text-gray-900">Think Grid: Unbundling the Seminary</h2>
              <p className="text-sm text-gray-500">By Jordan Castillo · 17 min read</p>
            </div>

            <p className="text-gray-800 leading-relaxed">
              Movements need articles that read like masterclasses. This longform view demonstrates drop caps, lists, footnotes, and figcaption
              styling on the same canvas as the management system so designers can evaluate everything at once.
            </p>

            {typographicBlocks.map((block) => (
              <section key={block.title} className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">{block.title}</h3>
                <p className="text-gray-700">{block.body}</p>
                <ol className="list-decimal pl-6 space-y-1 text-gray-800">
                  {block.ordered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            ))}

            <blockquote className="border-l-4 border-gray-900 pl-6 italic text-xl text-gray-900">
              “An article system is only as good as its ability to keep the reader oriented while the editor experiments.”
            </blockquote>

            <figure className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="h-40 rounded-xl bg-gradient-to-r from-amber-100 via-white to-rose-100" />
              <figcaption className="mt-4 text-sm text-gray-600">
                Figure 08 · Prism color system showing cross-category filtering chips.
              </figcaption>
            </figure>
          </article>
        </section>
      </main>
    </div>
  )
}

