"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Blog/Article-Focused Homepage
// Magazine-style article layout with featured posts
// Article cards, reading time, categories, tags
// Full article preview component

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  category: string
  tags: string[]
  image?: string
  featured?: boolean
}

const articles: Article[] = [
  {
    id: "1",
    title: "Rediscovering Apostolic Imagination in a Post-Christian World",
    excerpt: "How the church can recover its pioneering DNA and move beyond attractional models to truly missional expressions that transform culture.",
    content: `The church in the West finds itself at a critical juncture. The cultural landscape has shifted dramatically, and the old models of doing church—built on attraction, programs, and centralized leadership—are showing their limitations. But this isn't a crisis; it's an opportunity to rediscover something we've forgotten.

Apostolic imagination isn't about creating new structures or programs. It's about recovering a way of seeing and being that was present in the early church and in every movement that has truly transformed culture. It's the capacity to pioneer, to see what others don't see, to go where others won't go.

When we activate apostolic imagination, we begin to see the church not as a building or an event, but as a movement. We start to understand that mission isn't something we do—it's who we are. This shift in perspective changes everything.

The challenge isn't that we need to invent something new. The challenge is that we need to remember what we've forgotten. The apostolic pattern is there in Scripture, in history, in movements that have changed the world. We just need eyes to see it.`,
    author: "Alan Hirsch",
    date: "December 15, 2024",
    readTime: 8,
    category: "Missional Theology",
    tags: ["Apostolic", "Movement", "Church Innovation"],
    image: "/alan/alan-hirsch-1-2x-tablet.webp",
    featured: true,
  },
  {
    id: "2",
    title: "The 5Q Framework: Activating the Original Intelligence",
    excerpt: "Understanding how the fivefold ministry gifts (APEST) create a complete system for church health and missional effectiveness.",
    content: `The fivefold ministry framework—Apostolic, Prophetic, Evangelistic, Shepherding, and Teaching—isn't just a theological concept. It's a practical system for understanding how the church is meant to function.

Each gift brings something essential. The apostolic gift brings pioneering and movement. The prophetic brings challenge and vision. The evangelistic brings expansion and outreach. The shepherding brings care and community. The teaching brings wisdom and understanding.

When all five are present and activated, the church has everything it needs to be healthy and effective. But when one or more are missing, we see dysfunction and limitation.

The 5Q framework helps churches diagnose their current state and identify what's missing. It's not about finding fault—it's about discovering potential. Every church has all five gifts present in some form. The question is whether they're being recognized, released, and integrated into the life of the community.

This isn't about roles or positions. It's about functions and gifts. It's about creating an environment where all five can flourish and work together.`,
    author: "Alan Hirsch",
    date: "December 10, 2024",
    readTime: 6,
    category: "Church Systems",
    tags: ["5Q", "Leadership", "Ministry Gifts"],
    image: "/alan/alan-hirsch-2-2x.webp",
    featured: true,
  },
  {
    id: "3",
    title: "From Attractional to Missional: The Great Shift",
    excerpt: "Why churches are moving from 'come and see' to 'go and be'—and what that means for leadership, structure, and community.",
    content: `The shift from attractional to missional isn't just a change in strategy. It's a fundamental reorientation of how we understand the church's purpose and identity.

Attractional models assume that if we build it, they will come. If we create the right program, the right music, the right message, people will be drawn to us. This model has worked in some contexts, but it's showing its limitations in a post-Christian culture.

Missional models start from a different place. They assume that the church exists for mission, not the other way around. The church doesn't have a mission—the church is a mission. This changes everything about how we structure, lead, and live as community.

This shift requires new forms of leadership. It requires decentralized structures. It requires a different kind of community—one that's formed around mission, not just around shared interests or demographics.

The good news is that this isn't new. It's actually a return to the apostolic pattern we see in the New Testament. We're not inventing something—we're rediscovering something.`,
    author: "Alan Hirsch",
    date: "December 5, 2024",
    readTime: 7,
    category: "Church Innovation",
    tags: ["Missional", "Leadership", "Transformation"],
    image: "/alan/alan-hirsch-3-2x.webp",
  },
  {
    id: "4",
    title: "Communitas: The Bond That Forms in Mission",
    excerpt: "How shared risk and purpose create deeper community than programs ever could—and why this matters for discipleship.",
    content: `There's a difference between community and communitas. Community can be comfortable, safe, predictable. Communitas is forged in the fires of shared mission and risk.

When people face challenges together, when they share a common purpose that requires something of them, something deeper forms. This is communitas—the bond that comes not from proximity or similarity, but from shared mission.

This is what we see in the early church. They weren't just meeting together because they liked each other. They were bound together by a mission that was bigger than themselves. They were facing persecution, cultural resistance, and the challenge of pioneering something new.

That shared risk and purpose created a depth of relationship that programs and events can't replicate. This is why missional communities often have deeper bonds than attractional churches—not because they're better people, but because they're facing something together.

If we want deeper community, we don't need better programs. We need shared mission. We need to step into something that requires something of us. That's where communitas forms.`,
    author: "Alan Hirsch",
    date: "November 28, 2024",
    readTime: 5,
    category: "Discipleship",
    tags: ["Community", "Mission", "Discipleship"],
  },
  {
    id: "5",
    title: "Organic vs. Organized: Finding the Balance",
    excerpt: "How to create structures that support movement without controlling it—the art of organizational design for missional communities.",
    content: `There's a tension in missional movements between being organic and being organized. Too much organization kills movement. Too little organization prevents sustainability.

The key is understanding what kind of organization supports movement rather than controlling it. Traditional organizational models are built for stability and control. Missional movements need structures that support flexibility and multiplication.

This means decentralized leadership. It means networks rather than hierarchies. It means permission-giving rather than permission-withholding. It means creating frameworks that guide rather than rules that constrain.

The early church had organization—they had apostles, elders, deacons. But this organization served the movement, not the other way around. The structure was flexible enough to adapt to new contexts while maintaining enough coherence to stay connected.

We need to learn this balance. Too much control, and the movement dies. Too little structure, and it fragments. The art is in creating just enough organization to support the organic movement of the Spirit.`,
    author: "Alan Hirsch",
    date: "November 20, 2024",
    readTime: 6,
    category: "Church Systems",
    tags: ["Organization", "Movement", "Structure"],
  },
]

export default function AlanHirschHero() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [filterCategory, setFilterCategory] = useState<string | null>(null)

  const featuredArticles = articles.filter((a) => a.featured)
  const categories = Array.from(new Set(articles.map((a) => a.category)))

  const filteredArticles = filterCategory
    ? articles.filter((a) => a.category === filterCategory)
    : articles

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-[#888] mb-4 block">
                Articles & Insights
              </span>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight font-[var(--font-playfair)]">
                Alan Hirsch
              </h1>
              <p className="text-xl text-[#ccc] mb-8 leading-relaxed">
                Exploring missional theology, church innovation, and apostolic imagination
                through articles, essays, and reflections.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="px-8 py-4 h-auto bg-white text-[#1a1a1a] hover:bg-[#e0e0e0] rounded-none font-semibold">
                  Subscribe to Updates
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 h-auto border-2 border-white text-white hover:bg-white/10 rounded-none font-semibold"
                >
                  Browse All Articles
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border-4 border-white/20">
                <Image
                  src="/alan/alan-headshot-4x5.webp"
                  alt="Alan Hirsch"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {!selectedArticle && (
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-[#666] mb-4 block">
                Featured
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-4 font-[var(--font-playfair)]">
                Latest Articles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer"
                >
                  {article.image && (
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-xs font-semibold rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-[#666]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                    <h3 className="text-3xl font-bold group-hover:text-[#666] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#666] leading-relaxed">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#f0f0f0] text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      {!selectedArticle && (
        <section className="px-6 py-12 bg-[#f5f5f5] border-y border-[#e0e0e0]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-semibold text-[#666]">Filter by category:</span>
              <button
                onClick={() => setFilterCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filterCategory === null
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-[#666] hover:bg-[#e0e0e0]"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    filterCategory === category
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-white text-[#666] hover:bg-[#e0e0e0]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      {!selectedArticle && (
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                .filter((a) => !a.featured)
                .map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs text-[#666]">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime} min</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-[#666] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#666] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1a1a1a] bg-[#f0f0f0] px-3 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-[#666] group-hover:text-[#1a1a1a] transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Article View */}
      {selectedArticle && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-6 py-20 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="mb-8 text-[#666] hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
            >
              ← Back to Articles
            </button>

            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime} min read</span>
                  <span>•</span>
                  <span>{selectedArticle.category}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight font-[var(--font-playfair)]">
                  {selectedArticle.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#f0f0f0] text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedArticle.image && (
                  <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
                    <Image
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="text-lg leading-relaxed text-[#333] space-y-6">
                {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e0e0e0]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#666]">AH</span>
                  </div>
                  <div>
                    <p className="font-semibold">{selectedArticle.author}</p>
                    <p className="text-sm text-[#666]">Author & Thought Leader</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </motion.section>
      )}

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border-2 border-[#1a1a1a] rounded-none hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
