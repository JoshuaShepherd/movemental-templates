"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import { archivedDesigns, type ArchivedDesign } from "./designData"

const typeOrder = [
  "Hero Experiences",
  "Editorial & Narrative",
  "Interactive Systems",
  "Education Platforms",
  "AI & Tools",
  "Archive & Resources",
  "Agentic UI",
]

const sortOptions = [
  { value: "score-desc", label: "Score: High to Low" },
  { value: "score-asc", label: "Score: Low to High" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "alpha", label: "Alphabetical" },
]

const palettePresets: Record<string, string[]> = {
  "Hero Experiences": ["#050505", "#3b3b3b", "#b8b8b1", "#f8f7f3"],
  "Editorial & Narrative": ["#1a1a1a", "#4a4a4a", "#c3b59f", "#faf9f6"],
  "Interactive Systems": ["#050f1f", "#0f172a", "#94a3b8", "#f0f4f8"],
  "Education Platforms": ["#0f172a", "#334155", "#94a3b8", "#f8fafc"],
  "AI & Tools": ["#030617", "#1e1b4b", "#a5b4fc", "#f4f6ff"],
  "Archive & Resources": ["#111827", "#374151", "#9ca3af", "#f3f4f6"],
  "Agentic UI": ["#020617", "#0f172a", "#475569", "#e2e8f0"],
  default: ["#111111", "#333333", "#999999", "#f4f4f4"],
}

const typographyPresets: Record<
  string,
  { heading: string; body: string; accent: string }
> = {
  "Hero Experiences": { heading: "Neue Montreal", body: "Inter", accent: "Space Mono" },
  "Editorial & Narrative": { heading: "Playfair Display", body: "Source Serif", accent: "Archivo" },
  "Interactive Systems": { heading: "Söhne", body: "Inter", accent: "JetBrains Mono" },
  "Education Platforms": { heading: "Canela", body: "IBM Plex Sans", accent: "Maison Mono" },
  "AI & Tools": { heading: "Whyte", body: "General Sans", accent: "Space Grotesk" },
  "Archive & Resources": { heading: "Gerstner Programm", body: "Inter", accent: "IBM Plex Mono" },
  "Agentic UI": { heading: "Suisse Intl", body: "GT America", accent: "Operator Mono" },
  default: { heading: "Inter", body: "Inter", accent: "Space Mono" },
}

const movementDescriptions: Record<string, string> = {
  "Hero Experiences": "Immersive hero canvases with cinematic typography, motion cues, and visceral storytelling.",
  "Editorial & Narrative": "Magazine-grade spreads with refined serif systems, scholastic structure, and narrative cadence.",
  "Interactive Systems": "Product-forward views with dashboards, filters, and systems logic modeled for digital products.",
  "Education Platforms": "Readers, LMS flows, and courseware scaffolds built for learning rituals and pedagogy.",
  "AI & Tools": "Applied AI sandboxes, toolkits, and experimental builders exploring agentic workflows.",
  "Archive & Resources": "Searchable collections, atlases, and vaults curating Movemental research artifacts.",
  "Agentic UI": "Agent consoles, summon panels, and workflow builders that choreograph hybrid human+AI teams.",
}

const getPalette = (type: string) => palettePresets[type] ?? palettePresets.default
const getTypography = (type: string) => typographyPresets[type] ?? typographyPresets.default

const getContrastColor = (hex: string) => {
  const normalized = hex.replace("#", "")
  const value = parseInt(normalized.length === 3 ? normalized.repeat(2) : normalized, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.65 ? "#1a1a1a" : "#f8f8f8"
}

const keywordsForDesign = (design: ArchivedDesign) => [design.movement, design.content, ...design.tags].join(" • ")

const typeFilters = ["All", ...typeOrder]
const movementFilters = ["All", ...new Set(archivedDesigns.map((design) => design.movement))]

export default function ArchivePage() {
  const [activeType, setActiveType] = useState("All")
  const [movementFilter, setMovementFilter] = useState("All")
  const [sort, setSort] = useState("score-desc")
  const [search, setSearch] = useState("")
  const [selectedDesign, setSelectedDesign] = useState<ArchivedDesign | null>(null)
  const [previewId, setPreviewId] = useState<string | null>(null)

  const filteredDesigns = useMemo(() => {
    const query = search.trim().toLowerCase()

    const filtered = archivedDesigns.filter((design) => {
      const matchesType = activeType === "All" || design.type === activeType
      const matchesMovement = movementFilter === "All" || design.movement === movementFilter
      const matchesSearch =
        !query ||
        [design.name, design.style, design.movement, design.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query)

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
    const bucket = new Map<string, ArchivedDesign[]>()
    typeOrder.forEach((type) => bucket.set(type, []))

    filteredDesigns.forEach((design) => {
      if (!bucket.has(design.type)) {
        bucket.set(design.type, [])
      }
      bucket.get(design.type)!.push(design)
    })

    return bucket
  }, [filteredDesigns])

  const visibleTypes = (activeType === "All" ? typeOrder : [activeType]).filter(
    (type) => (groupedByType.get(type)?.length ?? 0) > 0
  )

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#131313] dark:bg-[#020202] dark:text-gray-100">
      <div className="relative max-w-6xl mx-auto px-6 py-20 space-y-16">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.65em] text-gray-600 dark:text-gray-300">Movemental Archive</p>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-[var(--font-playfair)]">
            _Scholarly Exhibition Catalogue
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Inspired by Alan Hirsch&rsquo;s Scholarly Artistic Excellence (#16), this archive behaves like a curated museum wall.
            Each template card carries a catalog number, palette swatches, typographic dossier, and mini-window preview—plus a
            progressive modal that documents the style language in depth.
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
              placeholder="Search by title, palette, tags, movement"
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
            <span>{filteredDesigns.length} templates on display</span>
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
          </div>
        </div>

        {filteredDesigns.length === 0 && (
          <div className="p-16 rounded-[36px] border border-dashed border-gray-300 dark:border-gray-700 text-center bg-white/70 dark:bg-gray-900/50">
            <p className="text-3xl font-semibold mb-4">No templates match yet.</p>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
              Adjust the filters or search phrasing and the gallery will reflow instantly.
            </p>
          </div>
        )}

        <div className="space-y-16">
          <AnimatePresence>
            {visibleTypes.map((type, typeIndex) => {
              const designs = groupedByType.get(type) ?? []
              if (!designs.length) return null

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
                        <p className="text-[10px] uppercase tracking-[0.7em] text-gray-500 dark:text-gray-400">Gallery Type</p>
                        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)]">{type}</h2>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
                        {movementDescriptions[type] ?? "Curated study in applied design systems."}
                      </div>
                      <span className="px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.4em] uppercase border border-gray-200 dark:border-gray-700">
                        {designs.length} pieces
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                      {designs.map((design) => {
                        const cardId = `#${design.order.toString().padStart(3, "0")}`
                        const palette = getPalette(design.type)
                        return (
                          <article
                            key={design.id}
                            className="relative border border-gray-200 dark:border-gray-800 rounded-[30px] p-6 bg-white/90 dark:bg-gray-950/70 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.9)]"
                          >
                            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400 mb-4">
                              <span>{cardId}</span>
                              <span>{design.year}</span>
                            </div>
                            <h3 className="text-2xl font-semibold font-[var(--font-playfair)] text-gray-900 dark:text-gray-100">
                              {design.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{design.style}</p>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mt-3">
                              {design.movement} · {design.content}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                              {design.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center gap-2 mt-5">
                              {palette.slice(0, 4).map((color) => (
                                <span
                                  key={`${design.id}-${color}`}
                                  className="flex-1 h-1.5 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-6 text-[11px] uppercase tracking-[0.3em] text-gray-600 dark:text-gray-300">
                              <button
                                onClick={() => setSelectedDesign(design)}
                                className="col-span-2 border border-gray-300 dark:border-gray-700 rounded-full py-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white/10 transition-colors"
                              >
                                Style dossier
                              </button>
                              <button
                                onClick={() => setPreviewId((prev) => (prev === design.id ? null : design.id))}
                                className="border border-dashed border-gray-400 dark:border-gray-600 rounded-full py-2 lowercase tracking-[0.4em] text-gray-500 dark:text-gray-400 hover:border-gray-900 dark:hover:border-gray-200"
                              >
                                highlight preview
                              </button>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                              <Link
                                href={`/archive/${design.id}`}
                                className="px-4 py-2 rounded-full border border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors text-[11px] uppercase tracking-[0.3em]"
                              >
                                Launch template
                              </Link>
                              <span className="text-[11px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                                Score {design.score}%
                              </span>
                            </div>

                            {previewId === design.id && (
                              <WindowedPreview design={design} onClose={() => setPreviewId(null)} />
                            )}
                          </article>
                        )
                      })}
                    </div>
                  </div>
                </motion.section>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedDesign && <DesignModal design={selectedDesign} onClose={() => setSelectedDesign(null)} />}
      </AnimatePresence>
    </div>
  )
}

function WindowedPreview({ design, onClose }: { design: ArchivedDesign; onClose: () => void }) {
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
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300">{design.movement}</p>
            <p className="text-xs text-gray-700 dark:text-gray-200 mt-2 line-clamp-3">{design.style}</p>
          </div>
        </div>
        <Link
          href={`/archive/${design.id}`}
          className="block text-center text-[10px] uppercase tracking-[0.4em] text-gray-700 dark:text-gray-200 underline"
        >
          Open window
        </Link>
      </div>
    </motion.div>
  )
}

function DesignModal({ design, onClose }: { design: ArchivedDesign; onClose: () => void }) {
  const palette = getPalette(design.type)
  const typography = getTypography(design.type)

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
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">Style dossier</p>
            <h3 className="text-3xl font-[var(--font-playfair)] mt-2">{design.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{design.style}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>

        <p className="text-base text-gray-700 dark:text-gray-300 mt-6">
          {design.style} anchored in the {design.movement} movement. Expect {design.type.toLowerCase()} behaviors with emphasis on{" "}
          {design.tags.join(", ")} and a {design.content.toLowerCase()} core.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Keywords</p>
            <p className="text-base text-gray-800 dark:text-gray-100 mt-3">{keywordsForDesign(design)}</p>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">Color palette</p>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {palette.map((color) => (
                <div
                  key={`${design.id}-${color}`}
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
              href={`/archive/${design.id}`}
              className="mt-4 block text-center px-4 py-3 rounded-full border border-gray-900 dark:border-gray-100 text-[11px] uppercase tracking-[0.4em] hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              View template
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}