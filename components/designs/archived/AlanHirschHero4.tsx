/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Archived Design: Dark Mode with High Contrast & Asymmetric Grids
// Archived Date: Fourth attempt

export default function AlanHirschHero4() {
  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      highlight: "Translated into 15+ languages",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      highlight: "Used in seminaries worldwide",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      highlight: "Framework adopted globally",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      highlight: "Inspired new movements",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      highlight: "5,000+ churches using 5Q",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      highlight: "Changed how we see Jesus",
      gradient: "from-pink-500 to-purple-500",
    },
  ]

  const principles = [
    {
      title: "Apostolic Imagination",
      description: "The creative capacity to pioneer new expressions of faith",
      number: "01",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life",
      number: "02",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership",
      number: "03",
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture",
      number: "04",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-pink-500 rounded-[70%_30%_50%_50%/30%_60%_40%_70%] opacity-10 blur-3xl" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/alan/alan-hirsch-3-2x.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-white tracking-tighter leading-none"
            >
              Alan Hirsch
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 font-light leading-tight">
                Pioneer of Missional Movements
              </p>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Thought leader, author, and catalyst for church transformation
                through apostolic imagination and organic community
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-2xl shadow-purple-500/50 border-0"
                >
                  Explore His Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-7 h-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2 shadow-lg shadow-purple-500/30">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Core Principles
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Foundational concepts that shape missional thinking and practice
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {principles.map((principle, index) => {
              const isLarge = index === 0 || index === 3
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${isLarge ? 'col-span-12 md:col-span-6' : 'col-span-12 md:col-span-6'} lg:col-span-3`}
                >
                  <Card className="h-full border-2 border-gray-800 hover:border-purple-500 transition-all duration-500 cursor-pointer bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-6xl font-black text-purple-500/30">{principle.number}</span>
                        <CardTitle className="!text-2xl !text-white !font-bold !mt-4">
                          {principle.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="!text-base !text-gray-300 !leading-relaxed !font-normal">
                        {principle.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black">
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
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Seminal books that have shaped missional thinking worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-800 hover:border-purple-500 transition-all duration-500 cursor-pointer bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${movement.gradient}`} />
                  
                  <CardHeader className="pb-4 pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="!text-2xl !mb-2 !text-white !font-bold leading-tight">
                          {movement.title}
                        </CardTitle>
                        <p className="text-sm font-semibold text-purple-400 mb-3">
                          {movement.subtitle}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${movement.gradient} text-white text-sm font-bold rounded-full shadow-lg`}>
                          {movement.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium !text-gray-400 uppercase tracking-wider">
                        {movement.category}
                      </span>
                      <span className="!text-gray-600">•</span>
                      <span className="text-xs font-medium text-blue-400">
                        {movement.impact}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-medium !text-purple-400 italic">
                        {movement.highlight}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-base !text-gray-300 !leading-relaxed !font-normal">
                      {movement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center border-2 border-purple-500/30 rounded-3xl p-12 md:p-16 bg-gradient-to-br from-gray-900 to-black"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">
              Shaping the Future
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
              activating apostolic imagination and missional DNA in communities across the globe.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-2xl shadow-purple-500/50 border-0"
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
          className="px-5 py-2.5 text-sm bg-gray-900 border-2 border-gray-800 rounded-lg hover:border-purple-500 hover:bg-gray-800 transition-all text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 font-medium"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}


