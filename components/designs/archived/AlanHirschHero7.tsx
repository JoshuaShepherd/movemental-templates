/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Asymmetrical Layouts with Organic Shapes
// Bold, dynamic layouts with organic blob shapes, overlapping elements
// Vibrant gradient color scheme with fluid animations
// Breaking traditional grid constraints for visual interest

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
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
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life, not just programs or events",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership structures",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture at scale",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl"
        />
      </div>

      {/* Hero Section - Asymmetrical Layout */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Text Content (Asymmetrical) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:col-start-2 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold rounded-full">
                  Thought Leader
                </span>
              </motion.div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Alan
                </span>
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
                  Hirsch
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl font-light mb-8 text-purple-200"
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
                  className="text-base px-8 py-6 h-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-semibold rounded-full border-0 shadow-lg shadow-purple-500/50"
                >
                  Explore His Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 h-auto border-2 border-purple-400 text-purple-200 hover:bg-purple-500/20 font-semibold rounded-full backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image (Asymmetrical) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 lg:col-start-8 relative z-10"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"
                />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <Image
                    src="/alan/alan-hirsch-2-2x.webp"
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
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-wider uppercase text-purple-300">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Core Insights - Asymmetrical Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span className="text-sm tracking-[0.3em] uppercase text-purple-300">Core Insights</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-center mb-4">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Foundational Concepts
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} rounded-3xl blur-xl opacity-30`} />
                <Card className="relative border-0 bg-white/10 backdrop-blur-md rounded-3xl p-8 h-full hover:bg-white/15 transition-colors">
                  <CardHeader className="pb-4 pt-0">
                    <div className={`w-16 h-1 bg-gradient-to-r ${insight.color} rounded-full mb-6`} />
                    <CardTitle className="!text-3xl !mb-4 !text-white !font-bold leading-tight">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-purple-200 !leading-relaxed !font-normal">
                      {insight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Works - Asymmetrical Masonry Layout */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              <span className="text-sm tracking-[0.3em] uppercase text-pink-300">Key Works</span>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Seminal Publications
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: (index % 3) * 2 - 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: (index % 3) * 1 - 1 }}
                className={`${index === 0 ? "md:col-span-2 lg:col-span-1" : ""} ${index === 2 ? "lg:col-span-2" : ""}`}
              >
                <Card className="border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 h-full hover:from-white/15 hover:to-white/10 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader className="pb-4 pt-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="mb-3">
                          <span className="text-xs tracking-wider uppercase text-purple-300 font-semibold">
                            {movement.category}
                          </span>
                        </div>
                        <CardTitle className="!text-3xl !mb-3 !text-white !font-bold leading-tight">
                          {movement.title}
                        </CardTitle>
                        <p className="text-lg font-light text-pink-300 mb-4">{movement.subtitle}</p>
                      </div>
                      <div className="ml-4">
                        <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                          <span className="text-xl font-black text-white">{movement.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-purple-200 !leading-relaxed !font-normal mb-4">
                      {movement.description}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200">
                        {movement.impact}
                      </span>
                      <span className="px-3 py-1 bg-pink-500/30 rounded-full text-pink-200 italic">
                        {movement.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Asymmetrical CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-[3rem] p-12 md:p-16 text-center border border-white/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Shaping the Future
                  </span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-purple-200 max-w-2xl mx-auto leading-relaxed mb-12">
                  Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
                  activating apostolic imagination and missional DNA in communities across the globe.
                </p>
                <Button
                  size="lg"
                  className="text-base px-10 py-6 h-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-semibold rounded-full border-0 shadow-lg shadow-purple-500/50"
                >
                  Explore the Movement
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full hover:bg-white/20 hover:border-purple-400 transition-colors text-white font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
