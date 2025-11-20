"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type StockStatus = "in-stock" | "limited" | "preorder"

interface Book {
  id: string
  title: string
  author: string
  category: string
  format: string
  price: number
  rating: number
  reviews: number
  inventory: number
  movement: string
  tags: string[]
  description: string
  shipping: string
  status: StockStatus
  coverColor: string
  releaseNumber: number
  curationScore: number
  featured?: boolean
}

const books: Book[] = [
  {
    id: "book-01",
    title: "Movement Architects",
    author: "Alan Hirsch",
    category: "Missional Strategy",
    format: "Hardcover",
    price: 48,
    rating: 4.9,
    reviews: 428,
    inventory: 38,
    movement: "Movement Architects",
    tags: ["Signed first edition", "Blueprint series"],
    description:
      "Blueprint-level strategy book with annotated diagrams and field-tested rituals for teams launching decentralized churches.",
    shipping: "Ships in 24h",
    status: "in-stock",
    coverColor: "from-indigo-600 via-indigo-500 to-purple-500",
    releaseNumber: 24,
    curationScore: 98,
    featured: true,
  },
  {
    id: "book-02",
    title: "Field Notes on Communitas",
    author: "Jo Saxton",
    category: "Culture Labs",
    format: "Softcover",
    price: 32,
    rating: 4.8,
    reviews: 312,
    inventory: 62,
    movement: "Communal Formation",
    tags: ["Community labs", "Conversation prompts"],
    description:
      "A conversational field guide that pairs weekly experiments with story fragments from emerging faith communities across four continents.",
    shipping: "Ships in 48h",
    status: "limited",
    coverColor: "from-rose-500 via-orange-400 to-amber-400",
    releaseNumber: 22,
    curationScore: 94,
  },
  {
    id: "book-03",
    title: "Counterform Leadership Workbook",
    author: "Design Game Studio",
    category: "Leadership Systems",
    format: "Collector Set",
    price: 68,
    rating: 4.95,
    reviews: 189,
    inventory: 18,
    movement: "Leadership Practices",
    tags: ["Tabbed workbook", "Foil stamped"],
    description:
      "A tactile workbook with perforated briefs, laminated canvases, and QR-linked micro-lessons for leaders re-patterning their organizations.",
    shipping: "Ships in 72h",
    status: "limited",
    coverColor: "from-slate-900 via-slate-800 to-slate-700",
    releaseNumber: 23,
    curationScore: 96,
  },
  {
    id: "book-04",
    title: "Analog Futures Reader",
    author: "Movemental Press",
    category: "Spiritual Practices",
    format: "Softcover",
    price: 28,
    rating: 4.7,
    reviews: 256,
    inventory: 74,
    movement: "Analog Futures",
    tags: ["Margin notes", "Reader playlists"],
    description:
      "A slow-reading anthology that pairs print-only essays with analog rituals, curated playlists, and QR-enabled ambient soundscapes.",
    shipping: "Ships in 24h",
    status: "in-stock",
    coverColor: "from-emerald-500 via-teal-500 to-cyan-500",
    releaseNumber: 21,
    curationScore: 90,
  },
  {
    id: "book-05",
    title: "Missional DNA Anthology",
    author: "Movement Researchers",
    category: "Missional Strategy",
    format: "Hardcover",
    price: 54,
    rating: 4.85,
    reviews: 341,
    inventory: 41,
    movement: "Missional DNA",
    tags: ["Archivist inserts", "Full-color diagrams"],
    description:
      "A sweeping anthology of essays, diagrams, and case studies mapping how apostolic genius is re-emerging in urban, suburban, and digital parishes.",
    shipping: "Ships in 48h",
    status: "preorder",
    coverColor: "from-blue-900 via-blue-800 to-indigo-800",
    releaseNumber: 25,
    curationScore: 97,
  },
  {
    id: "book-06",
    title: "Movement Calendar & Rituals",
    author: "Movemental Studio",
    category: "Operations",
    format: "Collector Set",
    price: 72,
    rating: 4.6,
    reviews: 128,
    inventory: 12,
    movement: "Operational Rhythms",
    tags: ["Brass binding", "Seasonal spreads"],
    description:
      "A wall-calendar-meets-playbook with detachable ritual cards, quarterly planning spreads, and luminous foil indicators for communal milestones.",
    shipping: "Ships in 72h",
    status: "limited",
    coverColor: "from-amber-500 via-amber-400 to-yellow-400",
    releaseNumber: 20,
    curationScore: 88,
  },
  {
    id: "book-07",
    title: "Design Game Companion",
    author: "Movemental Design",
    category: "Design Systems",
    format: "Hardcover",
    price: 58,
    rating: 4.92,
    reviews: 263,
    inventory: 29,
    movement: "Design Playbooks",
    tags: ["GSAP breakdowns", "Case commentary"],
    description:
      "A premium companion volume for the Design Game with annotated spreads, GSAP timeline walkthroughs, and QR-linked component sandboxes.",
    shipping: "Ships in 24h",
    status: "in-stock",
    coverColor: "from-fuchsia-500 via-purple-500 to-violet-500",
    releaseNumber: 19,
    curationScore: 93,
  },
  {
    id: "book-08",
    title: "Movement Intelligence Almanac",
    author: "Movement Analysts",
    category: "Research",
    format: "Digital + Print",
    price: 64,
    rating: 4.83,
    reviews: 198,
    inventory: 55,
    movement: "Intelligence Reports",
    tags: ["Edge data", "QR dashboards"],
    description:
      "A dual-format almanac that pairs a premium print piece with an always-on intelligence dashboard for tracking movement health signals.",
    shipping: "Instant digital + 48h print",
    status: "in-stock",
    coverColor: "from-cyan-600 via-blue-600 to-slate-700",
    releaseNumber: 18,
    curationScore: 91,
  },
  {
    id: "book-09",
    title: "Liminal Season Liturgies",
    author: "Brooke Prentis",
    category: "Spiritual Practices",
    format: "Softcover",
    price: 26,
    rating: 4.75,
    reviews: 221,
    inventory: 67,
    movement: "Seasonal Formation",
    tags: ["Seasonal scripts", "Night readings"],
    description:
      "A set of twilight liturgies, blessings, and spoken-word pieces for communities navigating thresholds, transitions, and new beginnings.",
    shipping: "Ships in 24h",
    status: "in-stock",
    coverColor: "from-slate-800 via-slate-700 to-slate-600",
    releaseNumber: 17,
    curationScore: 89,
  },
]

const heroStats = [
  { label: "Curated titles", value: "09", detail: "Every title vetted and annotated" },
  { label: "Average rating", value: "4.85", detail: "Verified readers, no paid boosts" },
  { label: "Same-week dispatch", value: "82%", detail: "Orders leave within 72 hours" },
]

const sortOptions = [
  { value: "curated", label: "Curated order" },
  { value: "newest", label: "Newest arrivals" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
]

const viewOptions = [
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
]

const categoryFilters = ["All", ...new Set(books.map((book) => book.category))]
const formatFilters = ["All", ...new Set(books.map((book) => book.format))]
const movementFilters = ["All", ...new Set(books.map((book) => book.movement))]

export default function AlanHirschHero21() {
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [formatFilter, setFormatFilter] = useState("All")
  const [movementFilter, setMovementFilter] = useState("All")
  const [sortOption, setSortOption] = useState("curated")
  const [view, setView] = useState<"grid" | "list">("grid")
  const [search, setSearch] = useState("")

  const featuredBook = books.find((book) => book.featured) ?? books[0]

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase()

    const filtered = books.filter((book) => {
      const matchesCategory = categoryFilter === "All" || book.category === categoryFilter
      const matchesFormat = formatFilter === "All" || book.format === formatFilter
      const matchesMovement = movementFilter === "All" || book.movement === movementFilter
      const matchesSearch =
        !query ||
        [book.title, book.author, book.description, book.tags.join(" ")].some((field) =>
          field.toLowerCase().includes(query)
        )

      return matchesCategory && matchesFormat && matchesMovement && matchesSearch
    })

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.releaseNumber - a.releaseNumber
        default:
          return b.curationScore - a.curationScore
      }
    })

    return sorted
  }, [categoryFilter, formatFilter, movementFilter, search, sortOption])

  const resetFilters = () => {
    setCategoryFilter("All")
    setFormatFilter("All")
    setMovementFilter("All")
    setSortOption("curated")
    setSearch("")
  }

  const secondaryHighlights = [
    {
      title: "Collector Bundles",
      description: "Tri-book pairings with archival sleeves, wax seals, and live onboarding calls for launch teams.",
      badge: "New",
    },
    {
      title: "Movemental Membership",
      description: "Monthly drop that includes annotated PDFs, live salons, and early access to limited pressings.",
      badge: "Waitlist",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-20">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-100 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.4em] uppercase text-gray-700 dark:text-gray-300 mb-6">
                Movemental Editions · Book Commerce
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                A Curated Bookstore for Movement Architects
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The Movemental reading room meets ecommerce: signed editions, annotated workbooks, and intelligent bundles that
                ship with ritual guides, playlists, and access to live salons.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-7 py-3 h-auto rounded-full text-sm font-semibold">
                  Shop signed editions
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5 px-7 py-3 h-auto rounded-full text-sm"
                >
                  Browse entire catalog
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
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
              className="bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-xl backdrop-blur"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Featured release</p>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{featuredBook.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300">by {featuredBook.author}</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white">
                  {featuredBook.status === "preorder" ? "Preorder" : "In stock"}
                </span>
              </div>
              <div className={`rounded-3xl px-8 py-12 text-white bg-gradient-to-br ${featuredBook.coverColor} shadow-2xl mb-8`}>
                <p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-4">Collector sleeve</p>
                <h3 className="text-3xl font-bold mb-3">{featuredBook.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm">{featuredBook.description}</p>
                <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
                  <span>Rating {featuredBook.rating.toFixed(2)}</span>
                  <span>•</span>
                  <span>{featuredBook.reviews} reviews</span>
                  <span>•</span>
                  <span>{featuredBook.shipping}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
                  <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">${featuredBook.price}</p>
                </div>
                <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-3 h-auto text-sm font-semibold">
                  Add to book bag
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="sticky top-16 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur rounded-3xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">Selector</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Curate your stack</h3>
                </div>
                <div className="flex gap-2">
                  {viewOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setView(option.value as "grid" | "list")}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        view === option.value
                          ? "bg-gray-900 text-white border-gray-900"
                          : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex overflow-x-auto gap-3 pb-2">
                {categoryFilters.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`relative px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                      categoryFilter === category
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search titles, authors, rituals"
                  className="col-span-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
                <select
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                >
                  {formatFilters.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
                <select
                  value={movementFilter}
                  onChange={(e) => setMovementFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                >
                  {movementFilters.map((movement) => (
                    <option key={movement} value={movement}>
                      {movement}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span>{filteredBooks.length} selections</span>
                  <span className="text-gray-400">|</span>
                  <label className="text-gray-600 dark:text-gray-400" htmlFor="sort">
                    Sort by
                  </label>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-600 dark:text-gray-400 underline underline-offset-4"
                >
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <section className="bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {view === "grid" ? (
            <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col justify-between rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)]"
                  >
                    <div className={`px-6 pt-6 pb-10 bg-gradient-to-br ${book.coverColor} text-white`}>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-3">{book.category}</p>
                      <h3 className="text-2xl font-semibold mb-1">{book.title}</h3>
                      <p className="text-white/80 text-sm">{book.author}</p>
                      <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
                        <span>{book.rating.toFixed(2)} rating</span>
                        <span>•</span>
                        <span>{book.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
                      <p className="text-sm leading-relaxed">{book.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Price</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">${book.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {book.status === "in-stock" && "Ships now"}
                            {book.status === "limited" && "Limited run"}
                            {book.status === "preorder" && "Reserve today"}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{book.shipping}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-2xl py-5 h-auto text-sm font-semibold">
                        Add to bag
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div layout className="space-y-6">
              <AnimatePresence>
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                  >
                    <div className={`md:w-1/3 rounded-2xl p-8 text-white bg-gradient-to-br ${book.coverColor}`}>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3">{book.format}</p>
                      <h3 className="text-3xl font-semibold mb-2">{book.title}</h3>
                      <p className="text-white/80">{book.author}</p>
                    </div>
                    <div className="md:flex-1 space-y-4 text-gray-700 dark:text-gray-300">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{book.category}</span>
                        <span>•</span>
                        <span>{book.movement}</span>
                        <span>•</span>
                        <span>{book.rating.toFixed(2)} rating</span>
                        <span>•</span>
                        <span>{book.inventory} copies ready</span>
                      </div>
                      <p className="leading-relaxed text-sm">{book.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {book.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Price</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">${book.price}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Shipping</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{book.shipping}</p>
                        </div>
                        <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-3 h-auto text-sm font-semibold">
                          Add to bag
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {filteredBooks.length === 0 && (
            <div className="mt-12 p-10 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No titles match this stack yet.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Adjust your filters to explore signed editions, workbooks, and movement intelligence reports.
              </p>
              <Button onClick={resetFilters} className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-3 h-auto text-sm font-semibold">
                Reset selector
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Secondary highlights */}
      <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-8 rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)]"
              >
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white">{highlight.badge}</span>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-3">{highlight.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
                <button className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-100 underline underline-offset-4">
                  Join the waitlist →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
