"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Movement Strategist
// Philosophy: Swiss editorial grid commerce with strict typography and modular stats
// Experiment: Movemental Bookstore Grid with curated collections, bundle builder, conversion cues

type FeatureTile = {
  id: string
  title: string
  description: string
  badge: string
}

const featureTiles: FeatureTile[] = [
  {
    id: "curation",
    title: "Curated shelves",
    description: "Each volume annotated by Movemental editors with implementation notes and leadership prompts.",
    badge: "Editors&rsquo; desk",
  },
  {
    id: "bundles",
    title: "Bundle builder",
    description: "Assemble mission-specific bundles and ship to distributed teams in a single dispatch.",
    badge: "New",
  },
  {
    id: "dispatch",
    title: "Same-week dispatch",
    description: "Global fulfillment rituals ensure boxes arrive with onboarding guides and QR-linked salons.",
    badge: "72h SLA",
  },
]

type Collection = {
  id: string
  label: string
  color: string
  count: number
  summary: string
}

const collections: Collection[] = [
  {
    id: "apostolic",
    label: "Apostolic architects",
    color: "border-gray-900",
    count: 12,
    summary: "Blueprints, diagnostics, and field manuals for apostolic teams.",
  },
  {
    id: "communitas",
    label: "Communitas rituals",
    color: "border-emerald-500",
    count: 9,
    summary: "Liminal practices, courage liturgies, and communal storytelling decks.",
  },
  {
    id: "intelligence",
    label: "Movement intelligence",
    color: "border-blue-500",
    count: 7,
    summary: "Research decks, intelligence almanacs, and cultural field reports.",
  },
  {
    id: "formation",
    label: "Formation studios",
    color: "border-amber-500",
    count: 11,
    summary: "Guided workbooks, analog kits, and tactile readers for communities.",
  },
]

type Volume = {
  id: string
  title: string
  subtitle: string
  format: string
  price: number
  shipTime: string
  accent: string
  category: string
  stats: string[]
  highlight?: boolean
}

const volumes: Volume[] = [
  {
    id: "vol-01",
    title: "Analog Futures Reader",
    subtitle: "Liturgies for transitional seasons",
    format: "Softcover + audio companion",
    price: 32,
    shipTime: "Ships in 24h",
    accent: "from-amber-200 via-amber-50 to-white",
    category: "Formation studios",
    stats: ["4.8 rating", "184 reviews", "Analog kit"],
    highlight: true,
  },
  {
    id: "vol-02",
    title: "Movement Architects",
    subtitle: "Field manual for missional teams",
    format: "Hardcover collector edition",
    price: 58,
    shipTime: "Ships in 48h",
    accent: "from-slate-900 via-slate-800 to-slate-600",
    category: "Apostolic architects",
    stats: ["4.9 rating", "Signed", "Blueprint inserts"],
  },
  {
    id: "vol-03",
    title: "Communitas Ritual Deck",
    subtitle: "40 micro rituals for courageous teams",
    format: "Card deck + digital briefings",
    price: 28,
    shipTime: "Ships next day",
    accent: "from-emerald-200 via-emerald-50 to-white",
    category: "Communitas rituals",
    stats: ["4.7 rating", "Limited run", "Foil edges"],
  },
  {
    id: "vol-04",
    title: "Movement Intelligence Almanac",
    subtitle: "Quarterly intelligence drop",
    format: "Print + dashboard access",
    price: 72,
    shipTime: "Ships weekly",
    accent: "from-blue-900 via-blue-800 to-blue-600",
    category: "Movement intelligence",
    stats: ["4.9 rating", "Data viz", "Branch rights"],
  },
]

const stats = [
  { label: "Curated titles", value: "34", detail: "Hand-annotated this quarter" },
  { label: "Bundle conversions", value: "68%", detail: "Leaders buy in sets" },
  { label: "Dispatch SLA", value: "72h", detail: "Global network" },
]

const filters = ["All titles", "Signed editions", "Analog kits", "Digital bundles", "For teams", "Preorder"]

export default function AlanHirschHero25() {
  const [activeFilter, setActiveFilter] = useState("All titles")
  const [selectedVolumeId, setSelectedVolumeId] = useState(volumes[0].id)

  const selectedVolume = useMemo(() => volumes.find((volume) => volume.id === selectedVolumeId) ?? volumes[0], [selectedVolumeId])

  return (
    <div className="min-h-screen bg-[#f7f5f2] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-20">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-100 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcf9] via-[#f6f3ee] to-[#f0ede6] dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-[0.4em] uppercase text-gray-700 dark:text-gray-300 mb-6">Movemental Editions · Commerce Grid</p>
              <h1 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                A Swiss-inspired bookstore for movement architects
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Hardbound research, analog decks, and intelligence almanacs organized like a meticulous editorial spread.
                Every shelf ships with a point-of-use briefing so teams know exactly how to implement the work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800">
                  Start bundle builder
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 h-auto text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
                >
                  Download catalog PDF
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-gray-200 dark:border-gray-800 p-5 rounded-2xl bg-white/90 dark:bg-gray-900/60">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">{stat.label}</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 border border-gray-200 dark:border-gray-800 rounded-3xl bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mb-2">Editors&rsquo; highlight</p>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{selectedVolume.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{selectedVolume.subtitle}</p>
              </div>
              <div className={`p-8 bg-gradient-to-br ${selectedVolume.accent} min-h-[220px] flex flex-col justify-end`}>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-800/80">{selectedVolume.category}</p>
                <p className="text-gray-900 text-4xl font-semibold mt-3">${selectedVolume.price}</p>
                <p className="text-sm text-gray-800/80">{selectedVolume.format}</p>
              </div>
              <div className="p-8 flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide text-xs">Ships</p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">{selectedVolume.shipTime}</p>
                </div>
                <Button className="rounded-full px-6 py-2 h-auto text-sm bg-gray-900 text-white hover:bg-gray-800">
                  Add to cart
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border text-sm font-semibold tracking-wide transition-all ${
                activeFilter === filter
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="bg-[#fdfcf9] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className={`border-2 ${collection.color} rounded-3xl p-6 bg-white dark:bg-gray-950`}>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mb-2">Collection</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{collection.label}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{collection.summary}</p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{collection.count} volumes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature tiles */}
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          {featureTiles.map((tile) => (
            <div key={tile.id} className="border border-gray-200 dark:border-gray-800 rounded-3xl p-6 bg-gray-50 dark:bg-gray-900/70">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">{tile.badge}</span>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-4">{tile.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{tile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volumes grid */}
      <section className="bg-[#f7f5f2] dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-3xl p-6 bg-white dark:bg-gray-900">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Bundle builder</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-3">Curate a drop</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">
                Choose up to four volumes per shipment. We include a briefing card, facilitation prompts, and onboarding script for
                your teams.
              </p>
              <Button className="mt-6 rounded-full px-6 py-2 h-auto text-sm bg-gray-900 text-white hover:bg-gray-800">
                Start curating
              </Button>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-3xl p-6 bg-white dark:bg-gray-900">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Selected volume</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{selectedVolume.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{selectedVolume.format}</p>
              <ul className="mt-4 space-y-2">
                {selectedVolume.stats.map((stat) => (
                  <li key={stat} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {volumes.map((volume) => (
                <motion.button
                  key={volume.id}
                  onClick={() => setSelectedVolumeId(volume.id)}
                  whileHover={{ y: -4 }}
                  className={`text-left border-2 rounded-3xl p-6 transition-all ${
                    selectedVolumeId === volume.id
                      ? "border-gray-900 bg-white dark:bg-gray-900"
                      : "border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">{volume.category}</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-3">{volume.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{volume.subtitle}</p>
                  <div className="flex items-center justify-between mt-6 text-sm">
                    <p className="text-gray-900 dark:text-gray-100 font-medium">${volume.price}</p>
                    <p className="text-gray-600 dark:text-gray-400">{volume.shipTime}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
