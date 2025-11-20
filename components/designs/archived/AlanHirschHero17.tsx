/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Scholarly Artistic Excellence v2
// Another award-winning Behance-worthy design
// Different layout approach, same sophistication
// Museum-quality presentation with refined details

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98])
  const sectionY = useTransform(scrollYProgress, [0, 0.6], [0, -50])

  const theoreticalFrameworks = [
    {
      title: "Apostolic Genius",
      latin: "Genius Apostolicus",
      definition: "The inherent capacity of the church to pioneer new expressions of faith that transform culture",
      components: ["Pioneering", "Movement", "Transformation"],
      color: "#8B4513",
    },
    {
      title: "Missional DNA",
      latin: "DNA Missionalis",
      definition: "The fundamental nature of the church as sent, not gathered; mission is ontology, not activity",
      components: ["Sentness", "Incarnation", "Contextualization"],
      color: "#2F4F4F",
    },
    {
      title: "Organic Systems",
      latin: "Systema Organica",
      definition: "Ecclesial structures that emerge naturally from relationships rather than imposed hierarchy",
      components: ["Decentralization", "Relational", "Emergent"],
      color: "#556B2F",
    },
    {
      title: "Communitas",
      latin: "Communitas",
      definition: "The deep bond formed through shared mission and collective risk, transcending mere community",
      components: ["Shared Risk", "Common Purpose", "Deep Bond"],
      color: "#4B0082",
    },
  ]

  const publications = [
    {
      title: "The Forgotten Ways",
      year: "2006",
      publisher: "Brazos Press",
      pages: 320,
      isbn: "978-1-58743-164-7",
      abstract: "A systematic exploration of apostolic genius and the reactivation of missional DNA in contemporary ecclesial contexts.",
      impact: "Translated into 15 languages, adopted by theological institutions globally",
      image: "/alan/alan-hirsch-1-2x-tablet.webp",
    },
    {
      title: "The Shaping of Things to Come",
      year: "2003",
      publisher: "Hendrickson Publishers",
      pages: 240,
      isbn: "978-1-56563-659-7",
      abstract: "Co-authored examination of innovation and mission for the 21st century church, introducing missional vocabulary.",
      impact: "Award-winning work, foundational text in church innovation discourse",
      image: "/alan/alan-hirsch-2-2x.webp",
    },
    {
      title: "5Q: Reactivating the Original Intelligence",
      year: "2016",
      publisher: "100 Movements Publishing",
      pages: 400,
      isbn: "978-0-995-45670-0",
      abstract: "Comprehensive framework for activating the fivefold ministry gifts (APEST) in contemporary church contexts.",
      impact: "Framework implemented in 5,000+ churches, transforming leadership structures worldwide",
      image: "/alan/alan-hirsch-3-2x.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#0a0a0a]">
      {/* Hero Section - Refined Typography */}
      <motion.section
        style={{ scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0a0a0a 1px, transparent 1px),
                             linear-gradient(90deg, #0a0a0a 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Left: Typographic Mastery */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-6 space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-[#0a0a0a]" />
                  <span className="text-[10px] tracking-[0.6em] uppercase text-[#666] font-medium">
                    Theological Scholar
                  </span>
                  <div className="w-12 h-px bg-[#0a0a0a]" />
                </div>
              </motion.div>

              <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-[-0.02em] font-[var(--font-playfair)]">
                <span className="block text-[#0a0a0a]">Alan</span>
                <span className="block text-[#3a3a3a]">Hirsch</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl font-light leading-[1.8] text-[#2a2a2a] max-w-lg">
                  Systematic theologian and missiologist exploring
                  apostolic imagination, ecclesial transformation,
                  and the reactivation of missional DNA.
                </p>
                <p className="text-base text-[#666] leading-relaxed italic max-w-md">
                  "We don't need to invent new ways of being church.
                  We need to remember the old ways we've forgotten."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.9 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Button className="px-7 py-3.5 h-auto bg-[#0a0a0a] text-[#f5f4f0] hover:bg-[#1a1a1a] rounded-sm font-medium tracking-wide text-xs uppercase">
                  Scholarly Works
                </Button>
                <Button
                  variant="outline"
                  className="px-7 py-3.5 h-auto border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f4f0] rounded-sm font-medium tracking-wide text-xs uppercase"
                >
                  Research Papers
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Artistic Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative">
                {/* Decorative Frame Elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 border border-[#0a0a0a]/30" />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-[#0a0a0a]/30" />
                
                <div className="relative border-2 border-[#0a0a0a] p-1">
                  <div className="relative aspect-[2/3] overflow-hidden bg-[#e0e0e0]">
                    <Image
                      src="/alan/alan-headshot-4x5.webp"
                      alt="Alan Hirsch"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Scholarly Annotation */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#0a0a0a] text-[#f5f4f0] px-5 py-2">
                  <p className="text-[10px] tracking-wider uppercase font-medium">Est. 2003</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#999]">Scroll</span>
            <div className="w-px h-12 bg-[#0a0a0a]/20" />
          </div>
        </motion.div>
      </motion.section>

      {/* Theoretical Frameworks - Academic Presentation */}
      <motion.section
        style={{ y: sectionY }}
        className="relative px-6 py-32 bg-white border-t border-[#d0d0d0]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-px bg-[#0a0a0a]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#666] font-medium">
                Theoretical Framework
              </span>
              <div className="w-16 h-px bg-[#0a0a0a]" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Core Concepts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {theoreticalFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: index * 0.12 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className="border-l-[3px] border-[#0a0a0a] pl-10 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-[#3a3a3a] font-[var(--font-playfair)] italic">
                        {framework.latin}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a]">
                      {framework.title}
                    </h3>
                  </div>
                  
                  <p className="text-base leading-[1.7] text-[#2a2a2a] max-w-md">
                    {framework.definition}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {framework.components.map((component, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs tracking-wide uppercase text-[#666] border border-[#0a0a0a]/20"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div 
                    className="h-[2px] w-20 transition-all duration-500"
                    style={{ 
                      backgroundColor: hoveredIndex === index ? framework.color : '#0a0a0a',
                      width: hoveredIndex === index ? '120px' : '80px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Publications - Scholarly Catalog */}
      <section className="relative px-6 py-32 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-px bg-[#0a0a0a]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#666] font-medium">
                Selected Publications
              </span>
              <div className="w-16 h-px bg-[#0a0a0a]" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Scholarly Works
            </h2>
          </motion.div>

          <div className="space-y-20">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs tracking-wider uppercase text-[#999] font-medium">
                        {pub.year}
                      </span>
                      <span className="text-xs tracking-wider uppercase text-[#999]">
                        {pub.publisher}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black leading-tight font-[var(--font-playfair)]">
                      {pub.title}
                    </h3>
                  </div>
                  
                  <div className="bg-white border-l-[3px] border-[#0a0a0a] pl-8 py-6 space-y-3">
                    <p className="text-sm leading-[1.8] text-[#2a2a2a] font-mono">
                      {pub.abstract}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-[#999] pt-2 border-t border-[#0a0a0a]/10">
                      <span>{pub.pages} pages</span>
                      <span>•</span>
                      <span className="font-mono">ISBN {pub.isbn}</span>
                    </div>
                  </div>
                  
                  <p className="text-base leading-[1.7] text-[#2a2a2a] max-w-2xl">
                    {pub.impact}
                  </p>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="sticky top-8">
                    <div className="aspect-[2/3] relative bg-[#e0e0e0] border border-[#0a0a0a]">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Metrics */}
      <section className="relative px-6 py-32 bg-white border-y border-[#d0d0d0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-24 h-px bg-[#0a0a0a]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#666] font-medium">
                Academic Impact
              </span>
              <div className="w-24 h-px bg-[#0a0a0a]" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Global Influence
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Languages", value: "15+", sub: "Translations" },
              { label: "Churches", value: "5,000+", sub: "Using 5Q" },
              { label: "Books Sold", value: "100K+", sub: "Worldwide" },
              { label: "Countries", value: "50+", sub: "Global Reach" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black mb-2 text-[#0a0a0a] font-[var(--font-playfair)]">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wider uppercase text-[#666] mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#999]">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Refined */}
      <section className="relative px-6 py-32 bg-[#f5f4f0]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[var(--font-playfair)] mb-10">
              Continuing the Academic Discourse
            </h2>
            <p className="text-lg text-[#2a2a2a] leading-[1.8] mb-12 max-w-2xl mx-auto">
              Alan Hirsch's scholarly contributions continue to shape theological discourse
              and ecclesial practice in communities worldwide.
            </p>
            <Button className="px-9 py-3.5 h-auto bg-[#0a0a0a] text-[#f5f4f0] hover:bg-[#1a1a1a] rounded-sm font-medium tracking-wide text-xs uppercase">
              Explore Scholarly Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border border-[#0a0a0a] rounded-sm hover:bg-[#0a0a0a] hover:text-[#f5f4f0] transition-colors text-[#0a0a0a] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
