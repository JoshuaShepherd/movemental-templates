"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Knowledge Center with AI Integration
// Best-in-class articles/resources page with search, filtering, AI widgets
// Progressively disclosed AI interaction, email newsletter
// Comprehensive resource hub design

type ResourceType = "article" | "video" | "book" | "podcast" | "framework" | "all"
type Category = "Missional Theology" | "Church Innovation" | "Apostolic Ministry" | "Discipleship" | "Leadership" | "all"

interface Resource {
  id: string
  title: string
  excerpt: string
  type: ResourceType
  category: Category
  author: string
  date: string
  readTime: number
  tags: string[]
  featured?: boolean
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Rediscovering Apostolic Imagination in a Post-Christian World",
    excerpt: "How the church can recover its pioneering DNA and move beyond attractional models to truly missional expressions.",
    type: "article",
    category: "Missional Theology",
    author: "Alan Hirsch",
    date: "2024-12-15",
    readTime: 12,
    tags: ["Apostolic", "Movement", "Church Innovation"],
    featured: true,
  },
  {
    id: "2",
    title: "The 5Q Framework: Activating the Original Intelligence",
    excerpt: "Understanding how the fivefold ministry gifts create a complete system for church health and missional effectiveness.",
    type: "framework",
    category: "Apostolic Ministry",
    author: "Alan Hirsch",
    date: "2024-12-10",
    readTime: 15,
    tags: ["5Q", "Leadership", "Ministry Gifts"],
    featured: true,
  },
  {
    id: "3",
    title: "From Attractional to Missional: The Great Shift",
    excerpt: "Why churches are moving from 'come and see' to 'go and be'—and what that means for leadership and structure.",
    type: "article",
    category: "Church Innovation",
    author: "Alan Hirsch",
    date: "2024-12-05",
    readTime: 10,
    tags: ["Missional", "Leadership", "Transformation"],
  },
  {
    id: "4",
    title: "Communitas: The Bond That Forms in Mission",
    excerpt: "How shared risk and purpose create deeper community than programs ever could—and why this matters for discipleship.",
    type: "article",
    category: "Discipleship",
    author: "Alan Hirsch",
    date: "2024-11-28",
    readTime: 8,
    tags: ["Community", "Mission", "Discipleship"],
  },
  {
    id: "5",
    title: "The Forgotten Ways - Book Discussion",
    excerpt: "A comprehensive exploration of apostolic genius and the reactivation of missional DNA in contemporary contexts.",
    type: "book",
    category: "Missional Theology",
    author: "Alan Hirsch",
    date: "2024-11-20",
    readTime: 320,
    tags: ["Apostolic", "Missional", "Church"],
  },
  {
    id: "6",
    title: "Organic vs. Organized: Finding the Balance",
    excerpt: "How to create structures that support movement without controlling it—the art of organizational design for missional communities.",
    type: "article",
    category: "Leadership",
    author: "Alan Hirsch",
    date: "2024-11-15",
    readTime: 9,
    tags: ["Organization", "Movement", "Structure"],
  },
  {
    id: "7",
    title: "Missional Church Podcast - Episode 42",
    excerpt: "Deep dive into apostolic imagination and how it transforms church leadership and community formation.",
    type: "podcast",
    category: "Apostolic Ministry",
    author: "Alan Hirsch",
    date: "2024-11-10",
    readTime: 45,
    tags: ["Podcast", "Apostolic", "Leadership"],
  },
  {
    id: "8",
    title: "5Q Assessment Tool: Implementation Guide",
    excerpt: "Step-by-step guide to implementing the 5Q framework in your church context with practical tools and resources.",
    type: "framework",
    category: "Apostolic Ministry",
    author: "Alan Hirsch",
    date: "2024-11-05",
    readTime: 20,
    tags: ["5Q", "Framework", "Implementation"],
  },
]

export default function AlanHirschHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<ResourceType>("all")
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [showAiWidget, setShowAiWidget] = useState(false)
  const [aiQuery, setAiQuery] = useState("")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const categories: Category[] = ["Missional Theology", "Church Innovation", "Apostolic Ministry", "Discipleship", "Leadership"]
  const types: ResourceType[] = ["article", "video", "book", "podcast", "framework"]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesType && matchesCategory
  })

  const featuredResources = resources.filter(r => r.featured)
  const regularResources = filteredResources.filter(r => !r.featured)

  const getTypeIcon = (type: ResourceType) => {
    switch (type) {
      case "article": return "📄"
      case "video": return "🎥"
      case "book": return "📚"
      case "podcast": return "🎙️"
      case "framework": return "🔧"
      default: return "📄"
    }
  }

  const getTypeColor = (type: ResourceType) => {
    switch (type) {
      case "article": return "bg-blue-500"
      case "video": return "bg-red-500"
      case "book": return "bg-amber-500"
      case "podcast": return "bg-purple-500"
      case "framework": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-wider uppercase mb-6">
              Knowledge Center
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore articles, frameworks, books, and insights on missional theology and church innovation
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, frameworks, books..."
                className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-lg"
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="mt-4 text-sm text-gray-400">
              {filteredResources.length} {filteredResources.length === 1 ? "result" : "results"} found
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {/* Type Filter */}
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10">
              <span className="text-xs text-gray-400 px-3">Type:</span>
              <button
                onClick={() => setSelectedType("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === "all"
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                All
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    selectedType === type
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {getTypeIcon(type)} {type}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10">
              <span className="text-xs text-gray-400 px-3">Category:</span>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-purple-500 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-500 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {featuredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)} {resource.type}
                    </div>
                    <span className="text-xs text-gray-400">{resource.readTime} min</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{resource.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">All Resources</h2>
            <button
              onClick={() => setShowAiWidget(!showAiWidget)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {showAiWidget ? "Hide" : "Show"} AI Assistant
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)} {resource.type}
                  </div>
                  <span className="text-xs text-gray-400">{resource.readTime} min</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {resource.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/10 rounded text-xs text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          {regularResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No resources found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedType("all")
                  setSelectedCategory("all")
                }}
                className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* AI Assistant Widget - Progressively Disclosed */}
      <AnimatePresence>
        {showAiWidget && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-gradient-to-br from-purple-900/95 to-pink-900/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold">AI Assistant</h3>
                    <p className="text-xs text-gray-300">Ask me anything</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAiWidget(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="Ask about missional theology, 5Q framework..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && aiQuery) {
                      // Handle AI query
                      console.log("AI Query:", aiQuery)
                    }
                  }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (aiQuery) {
                        console.log("AI Query:", aiQuery)
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-sm font-semibold"
                  >
                    Ask
                  </button>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm">
                    Examples
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  Powered by advanced AI. Get instant answers about resources and concepts.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Newsletter Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and resources delivered to your inbox weekly.
            </p>
            {!subscribed ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) {
                    setSubscribed(true)
                    // Handle subscription
                    console.log("Subscribed:", email)
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                />
                <Button
                  type="submit"
                  className="px-8 py-4 h-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl font-semibold whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/50 rounded-xl p-6"
              >
                <p className="text-lg font-semibold text-green-400">
                  ✓ Successfully subscribed! Check your email to confirm.
                </p>
              </motion.div>
            )}
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors text-white font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
