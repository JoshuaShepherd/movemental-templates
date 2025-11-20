/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Archived Design: Subtle Glassmorphism with Asymmetric Layouts
// Archived Date: Third attempt

export default function AlanHirschHero3() {
  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      stats: "Translated into 15+ languages",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      stats: "Used in seminaries worldwide",
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      stats: "Framework adopted globally",
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      stats: "Inspired new movements",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      stats: "5,000+ churches using 5Q",
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      stats: "Changed how we see Jesus",
    },
  ]

  const insights = [
    {
      title: "Apostolic Imagination",
      description: "The creative capacity to pioneer new expressions of faith that transform culture",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life, not just programs",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-30 filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen opacity-30 filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -70, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen opacity-20 filter blur-3xl"
        />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/alan/alan-hirsch-2-2x.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-none"
            >
              Alan Hirsch
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-white/95 mb-4 font-light">
                Pioneer of Missional Movements
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Thought leader, author, and catalyst for church transformation
                through apostolic imagination and organic community
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 h-auto bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-xl"
                >
                  Explore His Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-7 h-auto border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-md"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Core Insights
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Foundational concepts that shape missional thinking and practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full border-0 backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${insight.gradient}`} />
                  <CardHeader className="pb-4 pt-8">
                    <CardTitle className="!text-2xl !mb-4 !text-white !font-bold">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-white/90 !leading-relaxed !font-normal">
                      {insight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Key Works
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Seminal books that have shaped missional thinking worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="!text-2xl !mb-2 !text-white !font-bold leading-tight">
                          {movement.title}
                        </CardTitle>
                        <p className="text-sm font-semibold text-purple-300 dark:text-purple-400 mb-3">
                          {movement.subtitle}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="inline-block px-3 py-1 backdrop-blur-md bg-white/20 border border-white/30 text-white text-sm font-bold rounded-full">
                          {movement.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium !text-white/80 uppercase tracking-wider">
                        {movement.category}
                      </span>
                      <span className="!text-white/50">•</span>
                      <span className="text-xs font-medium text-blue-300">
                        {movement.impact}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-medium !text-white/70 italic">
                        {movement.stats}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-white/90 !leading-relaxed !font-normal">
                      {movement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">
              Shaping the Future
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
              activating apostolic imagination and missional DNA in communities across the globe.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-xl"
              >
                Explore the Movement
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all text-white shadow-xl hover:shadow-2xl font-medium"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}


