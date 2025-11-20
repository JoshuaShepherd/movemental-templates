"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Research Partner / Institutional Buyer
// Philosophy: Data-rich, high-contrast research marketplace with split-pane filters and licensing CTA
// Experiment: Research Library Marketplace with advanced filters, citation exports, institutional licensing flow

type FilterOption = {
  id: string
  label: string
  count: number
}

const topicFilters: FilterOption[] = [
  { id: "all", label: "All topics", count: 87 },
  { id: "apostolic", label: "Apostolic Leadership", count: 18 },
  { id: "communitas", label: "Communitas", count: 12 },
  { id: "intelligence", label: "Movement Intelligence", count: 22 },
  { id: "formation", label: "Formation", count: 15 },
]

const yearFilters: FilterOption[] = [
  { id: "2025", label: "2025", count: 9 },
  { id: "2024", label: "2024", count: 23 },
  { id: "2023", label: "2023", count: 18 },
  { id: "legacy", label: "Legacy", count: 37 },
]

type ResearchVolume = {
  id: string
  title: string
  category: string
  year: string
  abstract: string
  signals: string[]
  formats: string[]
  price: string
  metrics: { label: string; value: string }[]
}

const researchLibrary: ResearchVolume[] = [
  {
    id: "research-01",
    title: "Movement Intelligence Almanac Q1",
    category: "Movement Intelligence",
    year: "2025",
    abstract: "A quarterly intelligence package with field reports from six continents, network health dashboards, and predictive insights.",
    signals: ["Heatmaps", "Dashboard", "Signals"],
    formats: ["Print", "Dashboard", "CSV"],
    price: "$3,200",
    metrics: [
      { label: "Networks tracked", value: "128" },
      { label: "Data points", value: "52k" },
      { label: "Accuracy", value: "96%" },
    ],
  },
  {
    id: "research-02",
    title: "Communitas Cultural Field Report",
    category: "Communitas",
    year: "2024",
    abstract: "Ethnographic study on liminal spaces, including interviews, transcripts, and ritual design templates.",
    signals: ["Ethnography", "Audio", "Template"],
    formats: ["PDF", "Audio", "Miro"],
    price: "$1,100",
    metrics: [
      { label: "Cities sampled", value: "14" },
      { label: "Interviews", value: "62" },
      { label: "Pages", value: "184" },
    ],
  },
  {
    id: "research-03",
    title: "Missional Economics Brief",
    category: "Apostolic Leadership",
    year: "2025",
    abstract: "Financial modeling + case studies on funding apostolic networks across three continents.",
    signals: ["Finance", "Case studies", "APEX"],
    formats: ["PDF", "Spreadsheet", "Keynote"],
    price: "$2,450",
    metrics: [
      { label: "Models", value: "8" },
      { label: "Case studies", value: "12" },
      { label: "ROI scenarios", value: "5" },
    ],
  },
  {
    id: "research-04",
    title: "Analog Formation Compendium",
    category: "Formation",
    year: "2023",
    abstract: "Anthology of analog practices with annotated liturgies, cohort facilitation scripts, and artifact photography.",
    signals: ["Analog", "Liturgies", "Photography"],
    formats: ["Hardcover", "PDF", "Gallery"],
    price: "$780",
    metrics: [
      { label: "Practices", value: "40" },
      { label: "Photos", value: "210" },
      { label: "Cohort scripts", value: "18" },
    ],
  },
]

type Stat = {
  label: string
  value: string
  note: string
}

const heroStats: Stat[] = [
  { label: "Research volumes", value: "87", note: "Curated & updated" },
  { label: "Institutional licenses", value: "62", note: "Universities + networks" },
  { label: "Live signals", value: "52k", note: "Real-time datapoints" },
]

const licensingPerks = [
  { label: "Citation exports", detail: "APA, MLA, Chicago, routed to Zotero/Mendeley" },
  { label: "Branch licensing", detail: "Roll out access by region, with usage analytics" },
  { label: "Security", detail: "Watermarked PDFs + SSO enforcement" },
]

export default function AlanHirschHero27() {
  const [topicFilter, setTopicFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("2025")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [selectedResearchId, setSelectedResearchId] = useState(researchLibrary[0].id)

  const filteredResearch = useMemo(() => {
    return researchLibrary.filter((volume) => {
      const topicMatch = topicFilter === "all" || volume.category.toLowerCase().includes(topicFilter)
      const yearMatch = yearFilter === "legacy" ? volume.year !== "2025" : volume.year === yearFilter
      return topicMatch && yearMatch
    })
  }, [topicFilter, yearFilter])

  const selectedResearch = useMemo(
    () => filteredResearch.find((volume) => volume.id === selectedResearchId) ?? filteredResearch[0],
    [filteredResearch, selectedResearchId]
  )

  return (
    <div className="min-h-screen bg-[#05060a] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-black/70 border border-white/15 rounded-full backdrop-blur hover:bg-white/10 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,160,255,0.25),_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-300">Research Library Marketplace</p>
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
                Institutional intelligence for Movemental partners
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Commission-grade research volumes, cultural field reports, and live dashboards built for universities, denominations,
                and research partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-white text-black hover:bg-gray-200">
                  Start licensing flow
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 h-auto text-sm border-white/40 text-white hover:bg-white/10"
                >
                  Schedule research preview
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="border border-white/15 rounded-2xl p-5 bg-white/5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-semibold text-white mt-2">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 border border-white/15 rounded-3xl bg-white/5 backdrop-blur-xl p-8"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Licensing suite</p>
              <h3 className="text-2xl font-semibold text-white mt-3">Institutional concierge</h3>
              <p className="text-sm text-gray-300 mt-2">
                Submit your credentials once. Our team provisions SSO, watermarking, and data exports for your entire organization.
              </p>
              <div className="grid gap-4 mt-6">
                {licensingPerks.map((perk) => (
                  <div key={perk.label} className="border border-white/10 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-blue-300">{perk.label}</p>
                    <p className="text-sm text-gray-200 mt-2">{perk.detail}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white">
                Begin licensing request
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter + content split */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-lg p-6 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Topics</p>
            <div className="space-y-2">
              {topicFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTopicFilter(filter.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border text-sm transition-all ${
                    topicFilter === filter.id
                      ? "border-blue-400 bg-blue-500/10 text-white"
                      : "border-white/15 text-gray-300 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{filter.label}</span>
                    <span className="text-xs text-gray-400">{filter.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Year</p>
            <div className="flex flex-wrap gap-2">
              {yearFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setYearFilter(filter.id)}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold tracking-wide ${
                    yearFilter === filter.id
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-gray-300 hover:border-white/40"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">View</p>
            <div className="flex gap-3">
              {(["grid", "table"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`flex-1 text-center px-4 py-2 rounded-xl border text-sm font-semibold ${
                    viewMode === mode ? "border-white text-white" : "border-white/20 text-gray-300"
                  }`}
                >
                  {mode === "grid" ? "Grid" : "Table"}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-8">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResearch.map((volume) => (
                <motion.button
                  key={volume.id}
                  onClick={() => setSelectedResearchId(volume.id)}
                  className={`text-left border rounded-3xl p-6 transition-all backdrop-blur ${
                    selectedResearchId === volume.id
                      ? "border-blue-400 bg-blue-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{volume.year}</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">{volume.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{volume.abstract}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {volume.formats.map((format) => (
                      <span key={format} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
                        {format}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 rounded-3xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-gray-300 uppercase tracking-wide text-xs">
                  <tr>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Year</th>
                    <th className="px-6 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResearch.map((volume) => (
                    <tr
                      key={volume.id}
                      className={`border-t border-white/5 ${selectedResearchId === volume.id ? "bg-white/5" : "hover:bg-white/5"}`}
                    >
                      <td className="px-6 py-4 text-white">{volume.title}</td>
                      <td className="px-6 py-4 text-gray-300">{volume.category}</td>
                      <td className="px-6 py-4 text-gray-300">{volume.year}</td>
                      <td className="px-6 py-4 text-gray-100">{volume.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedResearch && (
            <div className="border border-white/15 rounded-3xl bg-white/5 backdrop-blur-xl p-8">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Selected volume</p>
                  <h3 className="text-3xl font-semibold text-white">{selectedResearch.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{selectedResearch.abstract}</p>
                </div>
                <Button className="rounded-full px-6 py-2 h-auto bg-blue-500 hover:bg-blue-400 text-white">
                  Export citations
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {selectedResearch.metrics.map((metric) => (
                  <div key={metric.label} className="border border-white/10 rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{metric.label}</p>
                    <p className="text-2xl font-semibold text-white mt-2">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedResearch.signals.map((signal) => (
                  <span key={signal} className="text-xs px-4 py-1.5 rounded-full bg-white/10 text-white">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
