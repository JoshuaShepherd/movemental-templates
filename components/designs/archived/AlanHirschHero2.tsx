/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Archived Design: Bold Typography with Editorial Layout & Gradient Accents
// Archived Date: Second attempt

export default function AlanHirschHero2() {
  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      icon: "📖",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      icon: "🚀",
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      icon: "⚡",
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      icon: "🔥",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      icon: "🧬",
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      icon: "✝️",
    },
  ]

  const keyThemes = [
    {
      title: "Apostolic Imagination",
      description: "Activating the creative capacity of the church to pioneer new expressions of faith",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into the very fabric of church life and identity",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership structures",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/alan/alan-hirsch-1-2x-tablet.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-white tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Alan Hirsch
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 font-light leading-tight">
                Pioneer of Missional Movements
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Thought leader, author, and catalyst for church transformation
                through apostolic imagination and organic community
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-xl shadow-purple-500/30 border-0"
                >
                  Explore His Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-7 h-auto border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-md shadow-lg"
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
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-gray-100 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Core Themes
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Foundational concepts that shape missional thinking and practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-white">
                  <div className={`h-2 bg-gradient-to-r ${theme.color}`} />
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="!text-xl !mb-3 !text-gray-900 dark:!text-gray-100 !font-bold">
                      {theme.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-gray-700 dark:!text-gray-300 !leading-relaxed !font-normal">
                      {theme.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-gray-100 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Key Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Seminal books that have shaped missional thinking worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group perspective-1000"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-purple-500 transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="text-4xl mb-3">{movement.icon}</div>
                        <CardTitle className="!text-2xl !mb-2 !text-gray-900 dark:!text-gray-100 !font-bold leading-tight">
                          {movement.title}
                        </CardTitle>
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                          {movement.subtitle}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 text-sm font-bold rounded-full">
                          {movement.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium !text-gray-700 dark:!text-gray-300 uppercase tracking-wider">
                        {movement.category}
                      </span>
                      <span className="!text-gray-500 dark:!text-gray-500">•</span>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {movement.impact}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-gray-700 dark:!text-gray-300 !leading-relaxed !font-normal">
                      {movement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Shaping the Future
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
              activating apostolic imagination and missional DNA in communities across the globe.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-xl shadow-purple-500/30"
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
          className="px-5 py-2.5 text-sm bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg hover:bg-white transition-all text-gray-900 shadow-xl hover:shadow-2xl font-medium"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}


