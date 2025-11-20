"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"

type ArchivedDesign = {
  id: string
  name: string
  style: string
  content: string
  date: string
  year: number
  score: number
  type: string
  movement: string
  tags: string[]
  order: number
}

const archivedDesigns: ArchivedDesign[] = [
  {
    id: "alan-hirsch-hero-1",
    name: "Alan Hirsch - Content-First Minimalism",
    style: "Content-First Minimalism with Hero Image",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 88,
    type: "Hero Experiences",
    movement: "Content-First Minimalism",
    tags: ["Hero", "Minimal", "Content-first"],
    order: 1,
  },
  {
    id: "alan-hirsch-hero-2",
    name: "Alan Hirsch - Bold Typography & Editorial",
    style: "Bold Typography with Editorial Layout & Gradient Accents",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 90,
    type: "Editorial & Narrative",
    movement: "Bold Editorial Typography",
    tags: ["Editorial", "Serif", "Gradient"],
    order: 2,
  },
  {
    id: "alan-hirsch-hero-3",
    name: "Alan Hirsch - Glassmorphism",
    style: "Subtle Glassmorphism with Asymmetric Layouts",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 92,
    type: "Hero Experiences",
    movement: "Glassmorphism Hero",
    tags: ["Glass", "Hero", "Asymmetric"],
    order: 3,
  },
  {
    id: "alan-hirsch-hero-4",
    name: "Alan Hirsch - Dark High Contrast",
    style: "Dark Mode with High Contrast & Asymmetric Grids",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 91,
    type: "Hero Experiences",
    movement: "Dark High Contrast",
    tags: ["Dark", "High contrast", "Hero"],
    order: 4,
  },
  {
    id: "alan-hirsch-hero-5",
    name: "Alan Hirsch - GSAP Academic",
    style: "GSAP-Powered with Classic Academic Palette",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 95,
    type: "Interactive Systems",
    movement: "GSAP Academic Motion",
    tags: ["GSAP", "Motion", "Academic"],
    order: 5,
  },
  {
    id: "alan-hirsch-hero-6",
    name: "Alan Hirsch - Editorial Print",
    style: "Editorial Print Design",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 93,
    type: "Editorial & Narrative",
    movement: "Editorial Print",
    tags: ["Print", "Editorial", "Grid"],
    order: 6,
  },
  {
    id: "alan-hirsch-hero-7",
    name: "Alan Hirsch - Asymmetrical Organic",
    style: "Asymmetrical Layouts with Organic Shapes",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 94,
    type: "Editorial & Narrative",
    movement: "Asymmetrical Organic",
    tags: ["Organic", "Asymmetric", "Hero"],
    order: 7,
  },
  {
    id: "alan-hirsch-hero-8",
    name: "Alan Hirsch - Neumorphism Data",
    style: "Neumorphism with Data Visualization",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 92,
    type: "Interactive Systems",
    movement: "Neumorphic Data Visualization",
    tags: ["Neumorphism", "Data", "Cards"],
    order: 8,
  },
  {
    id: "alan-hirsch-hero-9",
    name: "Alan Hirsch - Narrative Storytelling",
    style: "Narrative Storytelling with Magazine Layout",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 96,
    type: "Editorial & Narrative",
    movement: "Narrative Storytelling",
    tags: ["Narrative", "Magazine", "Story"],
    order: 9,
  },
  {
    id: "alan-hirsch-hero-10",
    name: "Alan Hirsch - Interactive Portfolio",
    style: "Interactive Portfolio Showcase",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 93,
    type: "Hero Experiences",
    movement: "Interactive Portfolio",
    tags: ["Portfolio", "Interactive", "Hover"],
    order: 10,
  },
  {
    id: "alan-hirsch-hero-11",
    name: "Alan Hirsch - Immersive 3D Exhibition",
    style: "Immersive 3D Exhibition with Gallery Layout",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 97,
    type: "Interactive Systems",
    movement: "Immersive Exhibition",
    tags: ["3D", "Gallery", "Immersive"],
    order: 11,
  },
  {
    id: "alan-hirsch-hero-12",
    name: "Alan Hirsch - Calendar Integrated",
    style: "Calendar-Integrated Homepage with Multiple Views",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 95,
    type: "Interactive Systems",
    movement: "Calendar Integration",
    tags: ["Calendar", "Scheduling", "Product"],
    order: 12,
  },
  {
    id: "alan-hirsch-hero-13",
    name: "Alan Hirsch - Blog Article Focused",
    style: "Blog/Article-Focused Homepage with Magazine Layout",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 94,
    type: "Editorial & Narrative",
    movement: "Blog Magazine",
    tags: ["Articles", "Magazine", "Editorial"],
    order: 13,
  },
  {
    id: "alan-hirsch-hero-14",
    name: "CardForge - AI Baseball Card Customizer",
    style: "AI-Powered Baseball Card Customizer",
    content: "Baseball Card Customizer",
    date: "2024",
    year: 2024,
    score: 98,
    type: "AI & Tools",
    movement: "AI Baseball Customizer",
    tags: ["AI", "Customizer", "Tool"],
    order: 14,
  },
  {
    id: "alan-hirsch-hero-15",
    name: "Alan Hirsch - Sleek Modern",
    style: "Sleek Modern Design with Gradient Aesthetics",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 96,
    type: "Hero Experiences",
    movement: "Sleek Modern",
    tags: ["Modern", "Gradient", "Hero"],
    order: 15,
  },
  {
    id: "alan-hirsch-hero-16",
    name: "Alan Hirsch - Scholarly Artistic Excellence",
    style: "Scholarly Artistic Excellence with Academic Rigor",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 99,
    type: "Editorial & Narrative",
    movement: "Scholarly Artistic",
    tags: ["Scholarly", "Artistic", "Print"],
    order: 16,
  },
  {
    id: "alan-hirsch-hero-17",
    name: "Alan Hirsch - Scholarly Artistic Excellence v2",
    style: "Scholarly Artistic Excellence v2 with Refined Layout",
    content: "Alan Hirsch Hero Section",
    date: "2024",
    year: 2024,
    score: 99,
    type: "Editorial & Narrative",
    movement: "Scholarly Excellence v2",
    tags: ["Scholarly", "Serif", "Museum"],
    order: 17,
  },
  {
    id: "alan-hirsch-hero-18",
    name: "Knowledge Center with AI Integration",
    style: "Knowledge Center with Search, Filtering, AI Widgets, Newsletter",
    content: "Knowledge Center",
    date: "2024",
    year: 2024,
    score: 97,
    type: "AI & Tools",
    movement: "Knowledge Center + AI",
    tags: ["Search", "AI", "Knowledge"],
    order: 18,
  },
  {
    id: "alan-hirsch-hero-19",
    name: "Custom LMS - mDNA Learning Platform",
    style: "Custom LMS with Scholarly Design for Teaching mDNA",
    content: "LMS Platform",
    date: "2024",
    year: 2024,
    score: 98,
    type: "Education Platforms",
    movement: "Custom LMS",
    tags: ["LMS", "Learning", "Scholarly"],
    order: 19,
  },
  {
    id: "alan-hirsch-hero-20",
    name: "Long-Form Reader + AI Insight",
    style: "Long-form reader with contextual AI assistant",
    content: "Reader Interface",
    date: "2025",
    year: 2025,
    score: 98,
    type: "Education Platforms",
    movement: "Long-Form Reader",
    tags: ["Reader", "AI", "Insight"],
    order: 20,
  },
]

const typeOrder = [
  "Hero Experiences",
  "Editorial & Narrative",
  "Interactive Systems",
  "Education Platforms",
  "AI & Tools",
]

const sortOptions = [
  { value: "score-desc", label: "Score: High to Low" },
  { value: "score-asc", label: "Score: Low to High" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "alpha", label: "Alphabetical" },
]

const typeFilters = ["All", ...typeOrder]
const movementFilters = ["All", ...new Set(archivedDesigns.map((design) => design.movement))]

export default function ArchivePage() {
  const [activeType, setActiveType] = useState("All")
  const [movementFilter, setMovementFilter] = useState("All")
  const [sort, setSort] = useState("score-desc")
  const [search, setSearch] = useState("")

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Archive</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">Design Archive</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Explore every Movemental design experiment. Filter by type, movement, or score and dive into the exact execution
            instantly.
          </p>
        </header>

        <div className="sticky top-4 z-10 mb-12 bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-gray-200 dark:border-gray-800 p-6 shadow-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              {typeFilters.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeType === type
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, style, tags"
                className="lg:col-span-2 px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
              <select
                value={movementFilter}
                onChange={(e) => setMovementFilter(e.target.value)}
                className="px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
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
                className="px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <span>{filteredDesigns.length} design snapshots</span>
              <span>•</span>
              <button
                onClick={() => {
                  setActiveType("All")
                  setMovementFilter("All")
                  setSort("score-desc")
                  setSearch("")
                }}
                className="underline underline-offset-4 text-gray-600 dark:text-gray-400"
              >
                Reset selector
              </button>
            </div>
          </div>
        </div>

        {filteredDesigns.length === 0 && (
          <div className="p-12 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 text-center">
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">No matches yet.</p>
            <p className="text-gray-700 dark:text-gray-300">
              Adjust the type or movement filters to see archived executions.
            </p>
          </div>
        )}

        <div className="space-y-12">
          <AnimatePresence>
            {visibleTypes.map((type) => {
              const designs = groupedByType.get(type) ?? []
              if (designs.length === 0) return null

              return (
                <motion.section
                  key={type}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">Type</p>
                      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{type}</h2>
                    </div>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      {designs.length} concepts
                    </span>
                  </div>

                  <motion.div layout className="grid md:grid-cols-2 gap-5">
                    {designs.map((design) => (
                      <motion.div
                        key={design.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
                      >
                        <Link href={`/archive/${design.id}`} className="block p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{design.name}</h3>
                            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{design.score}%</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{design.style}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {design.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center justify-between text-sm text-gray-700 dark:text-gray-300">
                            <span>{design.movement}</span>
                            <span>•</span>
                            <span>{design.content}</span>
                            <span>•</span>
                            <span>{design.date}</span>
                          </div>
                        </Link>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/40 to-gray-900/0 dark:from-white/0 dark:via-white/40 dark:to-white/0 group-hover:scale-x-110 transition-transform" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
