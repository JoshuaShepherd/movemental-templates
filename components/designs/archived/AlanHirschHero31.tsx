"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Knowledge Ops Lead
// Philosophy: Knowledge vault with federated search, filters, pinned collections, save queue
// Experiment: Archive & resources center with search, filter chips, pinned items, save-for-later queue

type Resource = {
  id: string
  title: string
  type: string
  tags: string[]
  updated: string
  summary: string
}

const resources: Resource[] = [
  {
    id: "res-01",
    title: "Movement Intelligence Almanac Q1",
    type: "Report",
    tags: ["Intelligence", "Data", "Dashboard"],
    updated: "Mar 12, 2025",
    summary: "Quarterly network health report with dashboards and CSV exports.",
  },
  {
    id: "res-02",
    title: "Communitas Field Guide",
    type: "Guide",
    tags: ["Communitas", "Rituals"],
    updated: "Feb 28, 2025",
    summary: "40 ritual cards, facilitation scripts, and audio cues for liminal gatherings.",
  },
  {
    id: "res-03",
    title: "Missional Economics Brief",
    type: "Brief",
    tags: ["Apostolic", "Finance"],
    updated: "Jan 15, 2025",
    summary: "Funding models for apostolic networks with ROI dashboards.",
  },
  {
    id: "res-04",
    title: "Formation Analog Toolkit",
    type: "Toolkit",
    tags: ["Formation", "Analog"],
    updated: "Dec 04, 2024",
    summary: "Printable cards, photography, and cohort scripts for analog formation.",
  },
]

const filters = ["All", "Report", "Guide", "Brief", "Toolkit"]

export default function AlanHirschHero31() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [saved, setSaved] = useState<string[]>(["res-02"])

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchFilter = filter === "All" || resource.type === filter
      const matchSearch = resource.title.toLowerCase().includes(search.toLowerCase()) || resource.summary.toLowerCase().includes(search.toLowerCase())
      return matchFilter && matchSearch
    })
  }, [filter, search])

  const toggleSaved = (id: string) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((resId) => resId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm border border-white/20 rounded-full bg-white/5 backdrop-blur hover:bg-white/10"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Knowledge Vault</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Movemental Resources & Research Vault</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          Federated search across movement research, toolkits, decks, and commentary. Pin collections, export to research stacks, and
          manage institutional access.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-white text-black hover:bg-gray-200">
            Query entire vault
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 h-auto text-sm border-white/40 text-white hover:bg-white/10"
          >
            Download data dictionary
          </Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 space-y-8">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Global search</p>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, summary, tags"
              className="mt-3 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {filters.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-4 py-1.5 rounded-full text-sm border ${
                    filter === option ? "border-blue-400 bg-blue-500/20" : "border-white/15 text-white/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Saved queue</p>
                <p className="text-sm text-white/70">{saved.length} items</p>
              </div>
              <Button className="rounded-full px-4 py-1 text-xs bg-white/10 text-white border border-white/20">Export queue</Button>
            </div>
            <div className="mt-4 space-y-3">
              {saved.map((id) => {
                const resource = resources.find((res) => res.id === id)
                if (!resource) return null
                return (
                  <div key={id} className="rounded-2xl border border-white/15 px-4 py-3 text-sm">
                    <p className="font-semibold">{resource.title}</p>
                    <p className="text-white/70">{resource.type}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{resource.type}</p>
                  <h3 className="text-2xl font-semibold">{resource.title}</h3>
                  <p className="text-sm text-white/70 mt-1">Updated {resource.updated}</p>
                </div>
                <div className="flex gap-2">
                  <Button className="rounded-full px-6 py-2 h-auto text-sm bg-white text-black hover:bg-gray-200">Open</Button>
                  <Button
                    variant="outline"
                    onClick={() => toggleSaved(resource.id)}
                    className="rounded-full px-6 py-2 h-auto text-sm border-white/40 text-white hover:bg-white/10"
                  >
                    {saved.includes(resource.id) ? "Remove" : "Save"}
                  </Button>
                </div>
              </div>
              <p className="text-white/80 mt-4">{resource.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {resource.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
