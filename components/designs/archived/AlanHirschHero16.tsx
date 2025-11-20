/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Scholarly Artistic Excellence
// Award-winning Behance-worthy design combining academic rigor with artistic expression
// Museum-quality typography, sophisticated layout, refined details
// Balance of intellectual depth and visual beauty

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  const scholarlyWorks = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      year: "2006",
      citation: "Hirsch, A. (2006). The Forgotten Ways: Reactivating the Missional Church. Brazos Press.",
      impact: "Translated into 15 languages, influencing theological discourse across continents",
      category: "Missional Theology",
      pages: "320",
      isbn: "978-1-58743-164-7",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century Church",
      year: "2003",
      citation: "Frost, M., & Hirsch, A. (2003). The Shaping of Things to Come: Innovation and Mission for the 21st Century Church. Hendrickson Publishers.",
      impact: "Award-winning work adopted by seminaries and church leadership programs globally",
      category: "Church Innovation",
      pages: "240",
      isbn: "978-1-56563-659-7",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence and Capacity of the People of God",
      year: "2016",
      citation: "Hirsch, A. (2016). 5Q: Reactivating the Original Intelligence and Capacity of the People of God. 100 Movements Publishing.",
      impact: "Framework implemented in 5,000+ churches, transforming leadership structures",
      category: "Apostolic Ministry",
      pages: "400",
      isbn: "978-0-995-45670-0",
    },
  ]

  const academicThemes = [
    {
      latin: "Apostolicus",
      english: "Apostolic",
      description: "The pioneering capacity to establish new expressions of faith and community",
      color: "from-amber-600 to-orange-600",
    },
    {
      latin: "Missionalis",
      english: "Missional",
      description: "Embedding mission as the fundamental nature of ecclesial existence",
      color: "from-slate-600 to-gray-700",
    },
    {
      latin: "Organicus",
      english: "Organic",
      description: "Structures that emerge naturally from relationships and shared purpose",
      color: "from-emerald-600 to-teal-600",
    },
    {
      latin: "Communitas",
      english: "Communitas",
      description: "The deep bond formed through shared mission and collective risk",
      color: "from-indigo-600 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      {/* Hero Section - Scholarly Typography */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #1a1a1a 2px, #1a1a1a 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, #1a1a1a 2px, #1a1a1a 4px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Typographic Hero */}
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px flex-1 bg-[#1a1a1a]" />
                <span className="text-xs tracking-[0.5em] uppercase text-[#666] font-medium">
                  Scholar • Author • Theologian
                </span>
                <div className="h-px flex-1 bg-[#1a1a1a]" />
              </motion.div>

              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-[0.9] tracking-tighter font-[var(--font-playfair)]">
                <span className="block">Alan</span>
                <span className="block text-[#4a4a4a]">Hirsch</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#4a4a4a] max-w-2xl">
                  A systematic exploration of missional theology,
                  apostolic imagination, and ecclesial transformation
                </p>
                <p className="text-lg text-[#666] leading-relaxed max-w-xl italic">
                  "The church exists for mission as fire exists for burning."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button className="px-8 py-4 h-auto bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#2a2a2a] rounded-none font-medium tracking-wide text-sm uppercase">
                  Scholarly Works
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 h-auto border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f6] rounded-none font-medium tracking-wide text-sm uppercase"
                >
                  Academic Papers
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Artistic Image Presentation */}
            <motion.div
              style={{ scale: imageScale }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#1a1a1a]/20" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#1a1a1a]/20" />
                
                <div className="relative border-4 border-[#1a1a1a] p-2">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e8e8]">
                    <Image
                      src="/alan/alan-headshot-4x5.webp"
                      alt="Alan Hirsch"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Academic Badge */}
                <div className="absolute -bottom-4 right-8 bg-[#1a1a1a] text-[#faf9f6] px-6 py-3">
                  <p className="text-xs tracking-wider uppercase font-medium">Since 2003</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Minimalist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Scroll</span>
            <div className="w-px h-16 bg-[#1a1a1a]/30" />
          </div>
        </motion.div>
      </motion.section>

      {/* Academic Themes - Scholarly Presentation */}
      <section className="relative px-6 py-32 bg-white border-y border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#666] font-medium">
                Core Thematic Framework
              </span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Foundational Concepts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {academicThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="border-l-4 border-[#1a1a1a] pl-8 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-black text-[#4a4a4a] font-[var(--font-playfair)] italic">
                      {theme.latin}
                    </span>
                    <span className="text-sm tracking-wider uppercase text-[#999]">
                      {theme.english}
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed text-[#4a4a4a] max-w-md">
                    {theme.description}
                  </p>
                  <div className={`h-1 w-24 bg-gradient-to-r ${theme.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarly Works - Academic Citation Style */}
      <section className="relative px-6 py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#666] font-medium">
                Selected Publications
              </span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Scholarly Works
            </h2>
          </motion.div>

          <div className="space-y-16">
            {scholarlyWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs tracking-wider uppercase text-[#999] font-medium">
                        {work.year}
                      </span>
                      <span className="text-xs tracking-wider uppercase text-[#999]">
                        {work.category}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black leading-tight font-[var(--font-playfair)] mb-3">
                      {work.title}
                    </h3>
                    <p className="text-xl text-[#4a4a4a] italic mb-6">{work.subtitle}</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-[#1a1a1a] pl-6 py-4 space-y-2">
                    <p className="text-sm text-[#666] leading-relaxed font-mono">
                      {work.citation}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-[#999] pt-2">
                      <span>{work.pages} pages</span>
                      <span>•</span>
                      <span>ISBN {work.isbn}</span>
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-2xl">
                    {work.impact}
                  </p>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="sticky top-8">
                    <div className="aspect-[3/4] relative bg-[#e8e8e8] border-2 border-[#1a1a1a]">
                      <Image
                        src={`/alan/alan-hirsch-${index + 1}-2x-tablet.webp`}
                        alt={work.title}
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

      {/* Academic Impact - Data Presentation */}
      <section className="relative px-6 py-32 bg-white border-y border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-32 bg-[#1a1a1a]" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#666] font-medium">
                Academic Impact
              </span>
              <div className="h-px w-32 bg-[#1a1a1a]" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight font-[var(--font-playfair)]">
              Global Influence
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Languages", value: "15+", detail: "Translations" },
              { label: "Churches", value: "5,000+", detail: "Using 5Q Framework" },
              { label: "Books Sold", value: "100K+", detail: "Worldwide" },
              { label: "Countries", value: "50+", detail: "Global Reach" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black mb-2 text-[#1a1a1a] font-[var(--font-playfair)]">
                  {stat.value}
                </div>
                <div className="text-sm tracking-wider uppercase text-[#666] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#999]">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimalist */}
      <section className="relative px-6 py-32 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black leading-tight font-[var(--font-playfair)] mb-8">
              Continuing the Discourse
            </h2>
            <p className="text-xl text-[#4a4a4a] leading-relaxed mb-12 max-w-2xl mx-auto">
              Alan Hirsch's scholarly contributions continue to shape theological discourse
              and ecclesial practice in communities worldwide.
            </p>
            <Button className="px-10 py-4 h-auto bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#2a2a2a] rounded-none font-medium tracking-wide text-sm uppercase">
              Explore Academic Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border-2 border-[#1a1a1a] rounded-none hover:bg-[#1a1a1a] hover:text-[#faf9f6] transition-colors text-[#1a1a1a] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
