"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import { archivedAgents, type ArchivedAgent, agentTypeOrder } from "./agentsData"
import { styleSpecs, type StyleSpec } from "../archive/styleSpecs"

const sortOptions = [
  { value: "score-desc", label: "Reliability: High to Low" },
  { value: "score-asc", label: "Reliability: Low to High" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "alpha", label: "Alphabetical" },
]

const palettePresets: Record<string, string[]> = {
  "Voice & Presence": ["#010409", "#111827", "#6366F1", "#F1F5F9"],
  "Ops & Systems": ["#020617", "#0F172A", "#38BDF8", "#E2E8F0"],
  "Research & Advisory": ["#0D0B0F", "#1F1B24", "#C0B69B", "#F7F3EA"],
  "Formation & Coaching": ["#0B1720", "#12323E", "#34D399", "#F0FDF4"],
  default: ["#111111", "#333333", "#999999", "#f4f4f4"],
}

const typographyPresets: Record<string, { heading: string; body: string; accent: string }> = {
  "Voice & Presence": { heading: "Suisse Intl", body: "Inter", accent: "Space Mono" },
  "Ops & Systems": { heading: "Söhne", body: "IBM Plex Sans", accent: "JetBrains Mono" },
  "Research & Advisory": { heading: "Playfair Display", body: "Source Serif", accent: "Operator Mono" },
  "Formation & Coaching": { heading: "Canela", body: "General Sans", accent: "Maison Mono" },
  default: { heading: "Inter", body: "Inter", accent: "Space Mono" },
}

const movementDescriptions: Record<string, string> = {
  "Voice & Presence":
    "Realtime companions that modulate tone, sentiment, and ritual pacing for live gatherings and remote liturgies.",
  "Ops & Systems":
    "Console-grade assistants that run diagnostics, geo-awareness, and escalation flows inside the Control Plane.",
  "Research & Advisory":
    "Scholarly analysts that braid archives, citations, and governance memos into briefings leaders can trust.",
  "Formation & Coaching":
    "Mentor-style guides with curriculum memory, practice cues, and accountability rituals for ongoing formation.",
}

const defaultStyleSpec: StyleSpec = {
  palette: palettePresets.default,
  typography: typographyPresets.default,
}

const getPalette = (type: string) => palettePresets[type] ?? defaultStyleSpec.palette
const getTypography = (type: string) => typographyPresets[type] ?? defaultStyleSpec.typography

const getStyleSpec = (agent: ArchivedAgent): StyleSpec => {
  const spec = styleSpecs[agent.id]
  if (spec) {
    return {
      palette: spec.palette.length ? spec.palette : getPalette(agent.type),
      typography: spec.typography ?? getTypography(agent.type),
    }
  }

  return {
    palette: getPalette(agent.type),
    typography: getTypography(agent.type),
  }
}

const getContrastColor = (hex: string) => {
  const normalized = hex.replace("#", "")
  const value = parseInt(normalized.length === 3 ? normalized.repeat(2) : normalized, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.65 ? "#1a1a1a" : "#f8f8f8"
}

const keywordsForAgent = (agent: ArchivedAgent) => [agent.movement, agent.content, ...agent.tags].join(" • ")

const typeFilters = ["All", ...agentTypeOrder]
const movementFilters = ["All", ...new Set(archivedAgents.map((agent) => agent.movement))]

type ViewMode = "card" | "list"

export default function AgentsArchivePage() {
  const [activeType, setActiveType] = useState("All")
  const [movementFilter, setMovementFilter] = useState("All")
  const [sort, setSort] = useState("score-desc")
  const [search, setSearch] = useState("")
  const [selectedAgent, setSelectedAgent] = useState<ArchivedAgent | null>(null)
  const [previewId, setPreviewId] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("card")
  const [collapsedTypes, setCollapsedTypes] = useState<Record<string, boolean>>(() =>
    agentTypeOrder.reduce((acc, type) => {
      acc[type] = true
      return acc
    }, {} as Record<string, boolean>)
  )

  const filteredAgents = useMemo(() => {
    const query = search.trim().toLowerCase()

    const filtered = archivedAgents.filter((agent) => {
      const matchesType = activeType === "All" || agent.type === activeType
      const matchesMovement = movementFilter === "All" || agent.movement === movementFilter
      const matchesSearch =
        !query || [agent.name, agent.style, agent.movement, agent.tags.join(" ")].join(" ").toLowerCase().includes(query)

      return matchesType && matchesMovement && matchesSearch
    })

    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case "score-asc":
          return a.score - b.score
        case "newest":
          return b.year - a.year || b.order - a.order
        case "oldest":
          return a.year - b.year || a.order - b.order
        case "alpha":
          return a.name.localeCompare(b.name)
        default:
          return b.score - a.score
      }
    })

    return sorted
  }, [activeType, movementFilter, search, sort])

  const groupedByType = useMemo(() => {
    const bucket = new Map<string, ArchivedAgent[]>()
    agentTypeOrder.forEach((type) => bucket.set(type, []))

    filteredAgents.forEach((agent) => {
      if (!bucket.has(agent.type)) {
        bucket.set(agent.type, [])
      }
      bucket.get(agent.type)!.push(agent)
    })

    return bucket
  }, [filteredAgents])

  const visibleTypes = (activeType === "All" ? agentTypeOrder : [activeType]).filter(
    (type) => (groupedByType.get(type)?.length ?? 0) > 0
  )

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#131313] dark:bg-[#020202] dark:text-gray-100">
      <div className="relative max-w-6xl mx-auto px-6 py-20 space-y-16">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.65em] text-gray-600 dark:text-gray-300">Movemental Control Plane</p>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-[var(--font-playfair)]">
            _Agent Systems Catalogue
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Mirroring the Scholarly Exhibition Catalogue, this view inventories the agent stack—complete with catalog IDs,
            palette DNA, typographic dossiers, and pop-out previews so every persona can be summoned with the same clarity as
            our template archive.
          </p>
        </header>

        <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 backdrop-blur px-8 py-10 space-y-8 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.8)]">
          <div className="flex flex-wrap gap-3">
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2 rounded-full text-[10px] font-semibold tracking-[0.35em] uppercase border transition-all ${
                  activeType === type
                    ? "bg-[#131313] text-[#fefcf8] border-[#131313]"
                    : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, palette, tags, movement"
              className="lg:col-span-2 px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
            <select
              value={movementFilter}
              onChange={(e) => setMovementFilter(e.target.value)}
              className="px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
            >
              {movementFilters.map((movement) => (
                <option key={movement} value={movement}>
                  {movement}
                </option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">
            <span>{filteredAgents.length} agents cataloged</span>
            <span>•</span>
            <button
              onClick={() => {
                setActiveType("All")
                setMovementFilter("All")
                setSort("score-desc")
                setSearch("")
              }}
              className="underline underline-offset-4"
            >
              Reset filters
            </button>
            <span>•</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("card")}
                className={`px-3 py-1 rounded-full border text-[10px] ${
                  viewMode === "card"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                }`}
              >
                Card
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 rounded-full border text-[10px] ${
                  viewMode === "list"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {filteredAgents.length === 0 && (
          <div className="p-16 rounded-[36px] border border-dashed border-gray-300 dark:border-gray-700 text-center bg-white/70 dark:bg-gray-900/50">
            <p className="text-3xl font-semibold mb-4">No agents match yet.</p>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
              Adjust the filters or search phrasing and the dossier wall will reflow instantly.
            </p>
          </div>
        )}

        <div className="space-y-16">
          <AnimatePresence>
            {visibleTypes.map((type, typeIndex) => {
              const agents = groupedByType.get(type) ?? []
              if (!agents.length) return null

              return (
                <motion.section
                  key={type}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: typeIndex * 0.05 }}
                  className="relative rounded-[40px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#090909] overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.25),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_60%)]" />
                  <div className="relative p-10 space-y-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.7em] text-gray-500 dark:text-gray-400">Agent Suite</p>
                        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)]">{type}</h2>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
                        {movementDescriptions[type] ?? "Curated study in applied agent orchestration."}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.4em] uppercase border border-gray-200 dark:border-gray-700">
                          {agents.length} entries
                        </span>
                        <button
                          onClick={() =>
                            setCollapsedTypes((prev) => ({
                              ...prev,
                              [type]: !prev[type],
                            }))
                          }
                          className="text-[10px] uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300 underline"
                        >
                          {collapsedTypes[type] ? "Expand" : "Collapse"}
                        </button>
                      </div>
                    </div>

                    {!collapsedTypes[type] && (
                      <div className={viewMode === "card" ? "grid md:grid-cols-2 gap-7" : "space-y-4"}>
                        {agents.map((agent) => {
                          const cardId = `#${agent.order.toString().padStart(3, "0")}`
                          const styleSpec = getStyleSpec(agent)
                          return (
                            <article
                              id={agent.id}
                              key={agent.id}
                              className={`relative border border-gray-200 dark:border-gray-800 rounded-[30px] p-6 bg-white/90 dark:bg-gray-950/70 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.9)] ${
                                viewMode === "list" ? "flex flex-col gap-5" : ""
                              }`}
                            >
                              <div className={`space-y-4 ${viewMode === "list" ? "lg:flex lg:items-center lg:gap-6" : ""}`}>
                                <div className={`space-y-3 min-w-0 ${viewMode === "list" ? "flex-1" : ""}`}>
                                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">
                                    <span>{cardId}</span>
                                    <span>{agent.year}</span>
                                  </div>
                                  <div className="space-y-2 min-w-0">
                                    <h3 className="text-2xl font-semibold font-[var(--font-playfair)] text-gray-900 dark:text-gray-100 break-words">
                                      {agent.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 break-words">{agent.style}</p>
                                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 break-words">
                                      {agent.movement} · {agent.content}
                                    </p>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {agent.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>

                                  <div className="flex items-center gap-2">
                                    {styleSpec.palette.slice(0, 4).map((color) => (
                                      <span key={`${agent.id}-${color}`} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                                    ))}
                                  </div>
                                </div>

                                {viewMode === "list" && (
                                  <div className="flex flex-col gap-4 flex-shrink-0 min-w-[220px]">
                                    <div className="grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.3em] text-gray-600 dark:text-gray-300">
                                      <button
                                        onClick={() => setSelectedAgent(agent)}
                                        className="col-span-2 border border-gray-300 dark:border-gray-700 rounded-full py-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white/10 transition-colors"
                                      >
                                        Agent dossier
                                      </button>
                                      <button
                                        onClick={() => setPreviewId((prev) => (prev === agent.id ? null : agent.id))}
                                        className="col-span-2 border border-dashed border-gray-400 dark:border-gray-600 rounded-full py-2 lowercase tracking-[0.4em] text-gray-500 dark:text-gray-400 hover:border-gray-900 dark:hover:border-gray-200"
                                      >
                                        highlight preview
                                      </button>
                                    </div>
                                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                                      <Link
                                        href={`/agents/${agent.id}`}
                                        className="px-4 py-2 rounded-full border border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
                                      >
                                        Launch agent
                                      </Link>
                                      <span>Reliability {agent.score}%</span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {viewMode === "card" && (
                                <>
                                  <div className="grid grid-cols-3 gap-3 mt-6 text-[11px] uppercase tracking-[0.3em] text-gray-600 dark:text-gray-300">
                                    <button
                                      onClick={() => setSelectedAgent(agent)}
                                      className="col-span-2 border border-gray-300 dark:border-gray-700 rounded-full py-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white/10 transition-colors"
                                    >
                                      Agent dossier
                                    </button>
                                    <button
                                      onClick={() => setPreviewId((prev) => (prev === agent.id ? null : agent.id))}
                                      className="border border-dashed border-gray-400 dark:border-gray-600 rounded-full py-2 lowercase tracking-[0.4em] text-gray-500 dark:text-gray-400 hover:border-gray-900 dark:hover:border-gray-200"
                                    >
                                      highlight preview
                                    </button>
                                  </div>

                                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                                    <Link
                                      href={`/agents/${agent.id}`}
                                      className="px-4 py-2 rounded-full border border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors text-[11px] uppercase tracking-[0.3em]"
                                    >
                                      Launch agent
                                    </Link>
                                    <span className="text-[11px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                                      Reliability {agent.score}%
                                    </span>
                                  </div>
                                </>
                              )}

                              {previewId === agent.id && <WindowedPreview agent={agent} onClose={() => setPreviewId(null)} />}
                            </article>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </motion.section>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedAgent && <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />}
      </AnimatePresence>
    </div>
  )
}

function WindowedPreview({ agent, onClose }: { agent: ArchivedAgent; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-6 right-6 w-52 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-3 py-2 text-[10px] uppercase tracking-[0.4em] border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
        <span>preview</span>
        <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          ×
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="ml-2">Mini window</span>
          </div>
          <div className="p-3 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300">{agent.movement}</p>
            <p className="text-xs text-gray-700 dark:text-gray-200 mt-2 line-clamp-3">{agent.style}</p>
          </div>
        </div>
        <Link
          href={`/agents/${agent.id}`}
          className="block text-center text-[10px] uppercase tracking-[0.4em] text-gray-700 dark:text-gray-200 underline"
        >
          Open dossier
        </Link>
      </div>
    </motion.div>
  )
}

function AgentModal({ agent, onClose }: { agent: ArchivedAgent; onClose: () => void }) {
  const { palette, typography } = getStyleSpec(agent)

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-3xl w-full rounded-[36px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">Agent dossier</p>
            <h3 className="text-3xl font-[var(--font-playfair)] mt-2">{agent.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{agent.style}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg leading-none">
            ×
          </button>
        </div>

        <p className="text-base text-gray-700 dark:text-gray-300 mt-6">
          {agent.style} anchored in the {agent.movement} suite. Expect {agent.type.toLowerCase()} behaviors with emphasis on{" "}
          {agent.tags.join(", ")} and a {agent.content.toLowerCase()} remit.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Keywords</p>
            <p className="text-base text-gray-800 dark:text-gray-100 mt-3">{keywordsForAgent(agent)}</p>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Color palette</p>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {palette.map((color) => (
                <div
                  key={`${agent.id}-${color}`}
                  className="rounded-2xl py-6 flex flex-col items-center justify-center border border-gray-200/50 dark:border-gray-700/60"
                  style={{ backgroundColor: color, color: getContrastColor(color) }}
                >
                  <span className="text-[10px] uppercase tracking-[0.4em]">HEX</span>
                  <span className="text-xs font-semibold mt-1">{color.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="col-span-2 rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Typography stack</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Heading</p>
                <p className="text-xl">{typography.heading}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Body</p>
                <p className="text-lg">{typography.body}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Accent</p>
                <p className="text-lg">{typography.accent}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Launch</p>
            <Link
              href={`/agents/${agent.id}`}
              className="mt-4 block text-center px-4 py-3 rounded-full border border-gray-900 dark:border-gray-100 text-[11px] uppercase tracking-[0.4em] hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              View agent
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}


