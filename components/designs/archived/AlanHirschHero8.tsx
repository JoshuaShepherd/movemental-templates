/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Neumorphism with Data Visualization
// Soft shadows, subtle depth, tactile surfaces
// Clean backgrounds with soft color palette
// Data visualization elements for impact metrics
// Minimal, modern aesthetic with depth

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      highlight: "Translated into 15+ languages",
      stats: { copies: 100000, languages: 15 },
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      highlight: "Used in seminaries worldwide",
      stats: { awards: 3, seminaries: 200 },
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      highlight: "Framework adopted globally",
      stats: { churches: 5000, countries: 50 },
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      highlight: "Inspired new movements",
      stats: { movements: 100, leaders: 10000 },
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      highlight: "5,000+ churches using 5Q",
      stats: { churches: 5000, assessments: 25000 },
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      highlight: "Changed how we see Jesus",
      stats: { readers: 75000, translations: 12 },
    },
  ]

  const insights = [
    {
      title: "Apostolic Imagination",
      description: "The creative capacity to pioneer new expressions of faith that transform culture and communities",
      icon: "🚀",
      percentage: 95,
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life, not just programs or events",
      icon: "🌍",
      percentage: 88,
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership structures",
      icon: "🌱",
      percentage: 92,
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture at scale",
      icon: "📈",
      percentage: 90,
    },
  ]

  const globalStats = [
    { label: "Books Sold", value: "100K+", color: "from-blue-400 to-blue-600" },
    { label: "Languages", value: "15+", color: "from-purple-400 to-purple-600" },
    { label: "Churches", value: "5K+", color: "from-green-400 to-green-600" },
    { label: "Countries", value: "50+", color: "from-orange-400 to-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
      {/* Hero Section - Neumorphic */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-6 py-3 rounded-2xl bg-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] text-gray-700 font-semibold"
              >
                Thought Leader • Author • Catalyst
              </motion.div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <span className="block text-gray-800">Alan</span>
                <span className="block text-gray-700">Hirsch</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed"
              >
                Pioneer of missional movements
                <br />
                and apostolic imagination
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="text-base px-10 py-6 h-auto bg-white text-gray-800 hover:bg-gray-50 font-semibold rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all border-0"
                >
                  Explore His Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-10 py-6 h-auto bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all border-0"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Neumorphic Frame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl p-8 bg-white shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/alan/alan-hirsch-3-2x.webp"
                    alt="Alan Hirsch"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-wider uppercase text-gray-500">Scroll</span>
            <div className="w-12 h-20 rounded-full bg-white shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-4 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Global Stats - Neumorphic Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl p-8 bg-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all text-center"
              >
                <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Insights - Neumorphic with Progress Bars */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">Core Insights</span>
            <h2 className="text-6xl md:text-7xl font-black text-gray-800">Foundational Concepts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl p-8 bg-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl">{insight.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{insight.title}</h3>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${insight.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{insight.percentage}% Impact</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Works - Neumorphic Cards */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 block">Key Works</span>
            <h2 className="text-6xl md:text-7xl font-black text-gray-800">Seminal Publications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl p-8 bg-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">
                        {movement.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{movement.title}</h3>
                    <p className="text-lg font-light text-gray-600 mb-4">{movement.subtitle}</p>
                  </div>
                  <div className="ml-4">
                    <div className="px-4 py-2 rounded-2xl bg-gray-100 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                      <span className="text-xl font-black text-gray-700">{movement.year}</span>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{movement.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Impact</span>
                    <span className="font-semibold text-gray-700">{movement.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Reach</span>
                    <span className="font-semibold text-gray-700 italic">{movement.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Neumorphic CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] p-12 md:p-16 bg-white shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-800">Shaping the Future</h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
                activating apostolic imagination and missional DNA in communities across the globe.
              </p>
              <Button
                size="lg"
                className="text-base px-10 py-6 h-auto bg-white text-gray-800 hover:bg-gray-50 font-semibold rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all border-0"
              >
                Explore the Movement
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white text-gray-800 hover:bg-gray-50 font-medium rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all border-0 block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
