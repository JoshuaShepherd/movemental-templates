/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Sleek, Modern, Sexy Alan Hirsch Design
// Bold typography, smooth animations, premium dark aesthetic
// Interactive elements, striking visuals, sophisticated layout

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -200])

  const works = [
    {
      title: "The Forgotten Ways",
      year: "2006",
      description: "Reawakening the Missional Church",
      image: "/alan/alan-hirsch-1-2x-tablet.webp",
      stat: "100K+ copies",
    },
    {
      title: "The Shaping of Things to Come",
      year: "2003",
      description: "Innovation and Mission for the 21st Century",
      image: "/alan/alan-hirsch-2-2x.webp",
      stat: "Award-winning",
    },
    {
      title: "5Q Framework",
      year: "2016",
      description: "Reactivating the Original Intelligence",
      image: "/alan/alan-hirsch-3-2x.webp",
      stat: "5,000+ churches",
    },
    {
      title: "The Permanent Revolution",
      year: "2012",
      description: "Apostolic Imagination and Practice",
      image: "/alan/alan-candid-1.webp",
      stat: "Global impact",
    },
  ]

  const principles = [
    { icon: "🚀", title: "Apostolic", desc: "Pioneering new expressions" },
    { icon: "🌍", title: "Missional", desc: "Embedded in every aspect" },
    { icon: "🌱", title: "Organic", desc: "Authentic relationships" },
    { icon: "⚡", title: "Movement", desc: "Transforming culture" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm tracking-wider uppercase">
                  Thought Leader
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
              >
                <span className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                  Alan
                </span>
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
                  Hirsch
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed max-w-2xl"
              >
                Pioneer of missional movements
                <br />
                <span className="text-pink-400">and apostolic imagination</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="px-10 py-6 h-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-full border-0 shadow-lg shadow-pink-500/50"
                >
                  Explore His Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-6 h-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold rounded-full"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-5 relative z-10"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(236, 72, 153, 0.3)",
                      "0 0 80px rgba(168, 85, 247, 0.4)",
                      "0 0 60px rgba(236, 72, 153, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-2xl"
                />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                  <Image
                    src="/alan/alan-headshot-4x5.webp"
                    alt="Alan Hirsch"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-wider uppercase text-white/40">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-pink-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Core Principles */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-pink-400 mb-4 block">
              Core Principles
            </span>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Foundational Concepts
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 group-hover:border-pink-500/50 transition-all duration-500 h-full">
                  <div className="text-5xl mb-4">{principle.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-white/60">{principle.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Works */}
      <section className="relative px-6 py-32 bg-gradient-to-b from-black via-black/50 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-4 block">
              Key Works
            </span>
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Seminal Publications
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index + 10)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 group-hover:border-pink-500/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredCard === index + 10 ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {work.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-white/70 mb-4 text-lg">{work.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-400 font-semibold">{work.stat}</span>
                      <span className="text-white/40 group-hover:text-pink-400 transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shaping the Future
              </span>
            </h2>
            <p className="text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
              activating apostolic imagination and missional DNA.
            </p>
            <Button
              size="lg"
              className="px-12 py-6 h-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-full border-0 shadow-lg shadow-pink-500/50 text-lg"
            >
              Explore the Movement
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors text-white font-medium block border-white/20"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
