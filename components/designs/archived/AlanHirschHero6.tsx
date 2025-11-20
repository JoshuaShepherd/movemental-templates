/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Editorial Print Design
// Inspired by high-end magazines and academic journals
// Strong typographic hierarchy, clean layouts, minimal subtle animations
// Print-inspired palette: black, white, cream, with single accent color

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      highlight: "Translated into 15+ languages",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      highlight: "Used in seminaries worldwide",
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      highlight: "Framework adopted globally",
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      highlight: "Inspired new movements",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      highlight: "5,000+ churches using 5Q",
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      highlight: "Changed how we see Jesus",
    },
  ]

  const insights = [
    {
      title: "Apostolic Imagination",
      description: "The creative capacity to pioneer new expressions of faith that transform culture and communities",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life, not just programs or events",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership structures",
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture at scale",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      {/* Hero Section - Editorial Style */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] text-[#faf9f6]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/alan/alan-hirsch-1-2x-tablet.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="mb-8">
              <span className="text-sm tracking-[0.3em] uppercase text-[#d4af37] font-medium">
                Thought Leader • Author • Catalyst
              </span>
            </div>
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 tracking-tighter leading-none font-[var(--font-playfair)]">
              Alan
              <br />
              Hirsch
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-light mb-12 leading-relaxed text-[#e8e8e0]">
                Pioneer of missional movements and apostolic imagination
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-base px-12 py-6 h-auto bg-[#d4af37] text-[#1a1a1a] hover:bg-[#b8941f] font-semibold rounded-none border-0"
                >
                  Explore His Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-12 py-6 h-auto border-2 border-[#faf9f6] text-[#faf9f6] hover:bg-[#faf9f6] hover:text-[#1a1a1a] font-semibold rounded-none"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial-style scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-[#d4af37]">Scroll</span>
            <div className="w-px h-16 bg-[#d4af37]/40">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-8 bg-[#d4af37]"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Editorial Quote Section */}
      <section className="relative py-32 px-6 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-6xl md:text-8xl font-light text-[#d4af37] font-[var(--font-playfair)]">"</span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-[#1a1a1a]"
            >
              The church exists for mission as fire exists for burning.
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#1a1a1a]" />
              <span className="text-sm tracking-[0.2em] uppercase text-[#666]">Alan Hirsch</span>
              <div className="w-16 h-px bg-[#1a1a1a]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Insights - Editorial Grid */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-20 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4 block">Core Insights</span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-[#1a1a1a] font-[var(--font-playfair)]">
                Foundational Concepts
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insights.map((insight, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-0 shadow-none bg-transparent h-full rounded-none">
                    <CardHeader className="pb-4 pt-0">
                      <div className="mb-4">
                        <div className="w-12 h-px bg-[#d4af37] mb-4" />
                      </div>
                      <CardTitle className="!text-2xl !mb-4 !text-[#1a1a1a] !font-bold leading-tight">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="!text-base !text-[#666] !leading-relaxed !font-normal">
                        {insight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Works - Editorial Layout */}
      <section className="relative py-32 px-6 bg-[#1a1a1a] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-20 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4 block">Key Works</span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-[#faf9f6] font-[var(--font-playfair)]">
                Seminal Publications
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {movements.map((movement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-[#333] bg-[#1a1a1a] hover:border-[#d4af37] transition-colors duration-300 h-full rounded-none">
                    <CardHeader className="pb-4 pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="text-xs tracking-[0.2em] uppercase text-[#d4af37]">
                              {movement.category}
                            </span>
                          </div>
                          <CardTitle className="!text-3xl !mb-3 !text-[#faf9f6] !font-bold leading-tight">
                            {movement.title}
                          </CardTitle>
                          <p className="text-lg font-light text-[#d4af37] mb-4">{movement.subtitle}</p>
                        </div>
                        <div className="ml-4">
                          <span className="text-2xl font-black text-[#d4af37]">{movement.year}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="w-16 h-px bg-[#d4af37]" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="!text-base !text-[#e8e8e0] !leading-relaxed !font-normal mb-4">
                        {movement.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-[#d4af37]">
                        <span>{movement.impact}</span>
                        <span>•</span>
                        <span className="italic">{movement.highlight}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section - Editorial CTA */}
      <section className="relative py-32 px-6 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4 block">Impact</span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-[#1a1a1a] font-[var(--font-playfair)] mb-8">
                Shaping the Future
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#666] max-w-2xl mx-auto leading-relaxed mb-12">
                Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
                activating apostolic imagination and missional DNA in communities across the globe.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="text-base px-12 py-6 h-auto bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#333] font-semibold rounded-none border-0"
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
          className="px-5 py-2.5 text-sm bg-[#1a1a1a] border-2 border-[#1a1a1a] rounded-none hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors text-[#faf9f6] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
