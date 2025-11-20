"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// Design Choice: Interactive Portfolio Showcase
// Completely different content structure - portfolio/documentary style
// Interactive elements, hover states, reveal animations
// Focus on visual storytelling with minimal text
// Card-based exploration interface

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig)

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const portfolioItems = [
    {
      id: 1,
      title: "The Forgotten Ways",
      year: "2006",
      image: "/alan/alan-hirsch-1-2x-tablet.webp",
      category: "Book",
      description: "Reawakening the Missional Church",
      stats: { copies: "100K+", languages: 15, impact: "Global Movement" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "The Shaping of Things to Come",
      year: "2003",
      image: "/alan/alan-hirsch-2-2x.webp",
      category: "Book",
      description: "Innovation and Mission for the 21st Century",
      stats: { awards: 3, seminaries: 200, impact: "Award-Winning" },
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "5Q Framework",
      year: "2016",
      image: "/alan/alan-hirsch-3-2x.webp",
      category: "Framework",
      description: "Reactivating the Original Intelligence",
      stats: { churches: "5K+", assessments: "25K+", impact: "Global Adoption" },
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "The Permanent Revolution",
      year: "2012",
      image: "/alan/alan-candid-1.webp",
      category: "Book",
      description: "Apostolic Imagination and Practice",
      stats: { countries: 50, leaders: "10K+", impact: "Worldwide" },
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Untamed",
      year: "2010",
      image: "/alan/alan-candid-2.webp",
      category: "Book",
      description: "Reactivating Missional Discipleship",
      stats: { movements: 100, readers: "75K+", impact: "Movement Catalyst" },
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "ReJesus",
      year: "2009",
      image: "/alan/alan-headshot-4x5.webp",
      category: "Book",
      description: "A Wild Messiah for a Missional Church",
      stats: { translations: 12, impact: "Paradigm Shift" },
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const achievements = [
    { label: "Books Published", value: "15+", icon: "📚" },
    { label: "Languages", value: "15+", icon: "🌍" },
    { label: "Churches Impacted", value: "5,000+", icon: "⛪" },
    { label: "Countries", value: "50+", icon: "🗺️" },
    { label: "Years Active", value: "20+", icon: "⏳" },
    { label: "Books Sold", value: "100K+", icon: "📖" },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero Section - Interactive */}
      <motion.section
        style={{ opacity: heroOpacity }}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <motion.div
          style={{ x, y }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-wider uppercase text-white/60">
              Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
          >
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Alan Hirsch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Exploring two decades of missional innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="text-base px-10 py-6 h-auto bg-white text-black hover:bg-white/90 font-semibold rounded-full border-0"
            >
              Explore Portfolio
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <span className="text-xs tracking-wider uppercase text-white/40 block mb-2">Scroll</span>
            <div className="w-px h-12 bg-white/20 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Portfolio Grid - Interactive Cards */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4 block">Work</span>
            <h2 className="text-6xl md:text-7xl font-black">Portfolio</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredCard === item.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {item.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {Object.entries(item.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-white/40 capitalize">{key}</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Stats Grid */}
      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4 block">Impact</span>
            <h2 className="text-6xl md:text-7xl font-black">By The Numbers</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {achievement.value}
                </div>
                <div className="text-sm text-white/60">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Explore the Work
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Dive deeper into the books, frameworks, and movements that have shaped missional thinking worldwide.
            </p>
            <Button
              size="lg"
              className="text-base px-12 py-6 h-auto bg-white text-black hover:bg-white/90 font-semibold rounded-full border-0"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-[#1a1a1a] border border-white/10 rounded-full hover:border-white/30 hover:bg-[#252525] transition-colors text-white font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
