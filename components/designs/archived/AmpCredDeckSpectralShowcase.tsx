"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type Slide = {
  id: string
  label: string
  title: string
  summary: string
  ampCred: string
  multiplier: string
  revenue: string
  bullets: string[]
  chips: string[]
  gradient: string
  accent: string
}

const slides: Slide[] = [
  {
    id: "alan",
    label: "Act 1",
    title: "Alan Hirsch · Digital Canon Launch",
    summary:
      "React/Next.js infrastructure ingests decades of sermons and schema. Offline canon becomes machine-readable proof with cinematic UX.",
    ampCred: "50 → 420",
    multiplier: "30× Reader Lift",
    revenue: "~30× revenue math without changing offers.",
    bullets: ["Full content ingestion (1k+ pieces)", "Structured schema + Trust Center", "Cinematic storytelling boosts dwell"],
    chips: ["React/Next.js", "Schema Sweep", "Cinematic UX"],
    gradient: "from-[#050915] via-[#0b1a33] to-[#050910]",
    accent: "#7dd3fc",
  },
  {
    id: "brad",
    label: "Act 2",
    title: "Brad Brisco · Reciprocal Lift",
    summary:
      "Legacy posts relaunch with fresh case studies. Alan cites Brad day one, and Brad fires citations back. Google now sees a credible cluster.",
    ampCred: "60 → 520",
    multiplier: "70× Reach",
    revenue: "28× offers (same price points).",
    bullets: ["Reciprocal linking > transactional backlinks", "Case studies + endorsements same week", "Contextual citations raise both boats"],
    chips: ["Reciprocal Links", "Contextual Citations", "Cluster Signal"],
    gradient: "from-[#0a0b1d] via-[#1a1440] to-[#05030e]",
    accent: "#f472b6",
  },
  {
    id: "josh",
    label: "Act 3",
    title: "Josh Shepherd · Credible by Association",
    summary:
      "The invisible AI builder publishes three years of research plus interactive demos. Alan + Brad cite him immediately, so AI topics inherit trust.",
    ampCred: "80 → 620",
    multiplier: "80× Reach",
    revenue: "Cohorts + templates sell out.",
    bullets: ["Interactive demos show AI guardrails", "Dual endorsements route readers overnight", "Assistant-ready metadata embedded"],
    chips: ["AI Demos", "Dual Endorsements", "Metadata Discipline"],
    gradient: "from-[#050511] via-[#101836] to-[#041029]",
    accent: "#c084fc",
  },
  {
    id: "dave",
    label: "Act 4",
    title: "Dave Ferguson · Megascale Amplifier",
    summary:
      "Megachurch-scale reach and entrepreneurial playbooks land on the lattice. Conferences and partners cite the new hub; Movemental domain behaves like a knowledge spine.",
    ampCred: "100 → 700",
    multiplier: "180× Network Reach",
    revenue: "Movemental take grows with every leader.",
    bullets: ["Multi-vertical content import", "Conference backlinks + co-branded drops", "Movement domain hits 680+ AmpCred"],
    chips: ["Megascale Reach", "Conference Backlinks", "680+ Domain AmpCred"],
    gradient: "from-[#050710] via-[#0d1429] to-[#05060a]",
    accent: "#facc15",
  },
  {
    id: "network",
    label: "Acts 5–7",
    title: "100-Leader Lattice + AI Spillover",
    summary:
      "AI-suggested citations, semantic link assistants, and co-author prompts make linking reflexive. Assistants default to Movemental for movement leadership + ethical AI.",
    ampCred: "740–820",
    multiplier: "200×–500× depending on tier",
    revenue: "Revenue ∝ Audience × Conversion × ARPPU still holds.",
    bullets: [
      "Semantic link assistant orchestrates backlinks",
      "Assistant-ready transparency badges for AI",
      "100-leader cohort propels user #1000 to ~770 AmpCred in weeks",
    ],
    chips: ["Semantic Links", "AI Transparency", "User #1000"],
    gradient: "from-[#020817] via-[#071937] to-[#020511]",
    accent: "#38bdf8",
  },
]

const showcasePanels = [
  {
    title: "AI Readiness Labs",
    detail: "6–12 week audits covering content, data, and cultural readiness. Benchmarks drawn from live AmpCred telemetry.",
    value: "$50K+ retainers",
  },
  {
    title: "Custom Copilot Builds",
    detail: "Voice-safe workflows embedded in org stacks with governance baked in. Pricing scales with seats + usage.",
    value: "$75K build + usage",
  },
  {
    title: "Residency Grid",
    detail: "AmpCred residencies and apprenticeships train 18–24 year olds to ship ethical AI with Movement DNA.",
    value: "$12K tuition · 300 seats",
  },
  {
    title: "Agentic Licensing Kits",
    detail: "Modular translation + copilot + Trust Center bundles for adjacent creators (hospitality, music, fiction).",
    value: "$10K base · $2K add-ons",
  },
]

const momentRails = [
  { label: "Foundation", detail: "0–199 points · Domain live, schema baseline" },
  { label: "Movemental Launch", detail: "200–399 · React/Next.js deployment, design system" },
  { label: "Early Network", detail: "400–599 · Reciprocal links, trust widgets, co-author drops" },
  { label: "Platform Intelligence", detail: "600–799 · Semantic link assistant, AI graph enrichment" },
  { label: "Full Scenius", detail: "800–949 · Knowledge hubs, Gate dashboards, AI co-authoring" },
  { label: "Category Dominance", detail: "950–1000 · Assistants default to Movemental answers" },
]

export default function AmpCredDeckSpectralShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const deckRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [])

  useGSAP(
    () => {
      const activeSlide = slideRefs.current[activeIndex]
      if (activeSlide) {
        gsap.fromTo(
          activeSlide,
          { opacity: 0, y: 80, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        )
      }
      gsap.to(".deck-progress", {
        width: `${((activeIndex + 1) / slides.length) * 100}%`,
        duration: 0.6,
        ease: "power2.out",
      })
    },
    { dependencies: [activeIndex], scope: deckRef }
  )

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex])

  const handleSetSlide = (index: number) => {
    setActiveIndex(index)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length)
      }, 7000)
    }
  }

  return (
    <div ref={deckRef} className={`min-h-screen bg-gradient-to-br ${activeSlide.gradient} text-gray-100`}>
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm rounded-full border border-white/30 bg-white/10 text-gray-100 hover:bg-white hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-14">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-300">AmpCred Deck · Spectral Showcase</p>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-100 leading-[1.05]">
                GSAP-powered deck that behaves like a Movemental boardroom premiere.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Scroll or tap through slides to feel the Alan → Brad → Josh → Dave → 100-leader arc. GSAP drives choreographed transitions,
                ambient gradients, and progress scrubbing. Every panel maps directly to the AmpCred 1000 case study.
              </p>
            </div>
            <div className="ml-auto text-right space-y-2">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Auto-advance</p>
              <p className="text-2xl font-semibold text-gray-100">Every 7s · Tap to pause</p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="deck-progress h-full bg-gradient-to-r from-[#38bdf8] via-[#c084fc] to-[#f9a8d4] rounded-full" />
          </div>
        </header>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative min-h-[420px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={(el) => {
                  slideRefs.current[index] = el
                }}
                className={`absolute inset-0 rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_60px_140px_-90px_rgba(15,23,42,0.9)] transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.6em] text-gray-300">
                  <span>{slide.label}</span>
                  <span>•</span>
                  <span>{slide.chips.join(" • ")}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mt-5">{slide.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed mt-4">{slide.summary}</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  <div className="rounded-2xl border border-white/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300">AmpCred</p>
                    <p className="text-2xl font-semibold text-gray-100 mt-2">{slide.ampCred}</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300">Audience</p>
                    <p className="text-2xl font-semibold text-gray-100 mt-2">{slide.multiplier}</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 p-4">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300">Revenue Effect</p>
                    <p className="text-lg font-semibold text-gray-100 mt-2">{slide.revenue}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-base text-gray-100 list-disc pl-5">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 rounded-[32px] border border-white/15 bg-white/5 backdrop-blur p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-300">Slide Selector</p>
            <div className="space-y-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => handleSetSlide(index)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all ${
                    index === activeIndex
                      ? "border-white bg-white/10 text-gray-100"
                      : "border-white/20 text-gray-300 hover:border-white/40"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.45em]">
                    <span>{slide.label}</span>
                    <span>{slide.ampCred}</span>
                  </div>
                  <p className="text-lg font-semibold mt-1">{slide.title}</p>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 text-sm text-gray-300">
              <span>Use ← → or tap cards</span>
              <span>
                {activeIndex + 1}/{slides.length}
              </span>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-gray-400">
              <span>Showcase Stack</span>
              <span>•</span>
              <span>Consulting + Residencies + Licensing</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {showcasePanels.map((panel) => (
                <div key={panel.title} className="rounded-2xl border border-white/20 p-5 bg-black/10">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-100">{panel.title}</p>
                    <span className="text-xs uppercase tracking-[0.4em] text-gray-300">{panel.value}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">{panel.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-gray-400">
              <span>AmpCred Rails</span>
              <span>•</span>
              <span>0 → 1000</span>
            </div>
            <div className="space-y-3">
              {momentRails.map((moment, idx) => (
                <div key={moment.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: idx <= activeIndex ? activeSlide.accent : "rgba(255,255,255,0.2)" }}
                    />
                    {idx < momentRails.length - 1 && <div className="w-px h-8 bg-white/20" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-100">{moment.label}</p>
                    <p className="text-xs text-gray-300">{moment.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.6em] text-gray-300">
            <span>Why this deck lives in the Archive</span>
            <span>•</span>
            <span>Scroll + keypress aware</span>
            <span>•</span>
            <span>Backed by case study math</span>
          </div>
          <p className="text-lg text-gray-100 max-w-4xl">
            Built with GSAP timelines, MotionPath-inspired scrubs, and Lenis-friendly scroll cues (autoplay friendly). Perfect for presenting
            the AmpCred 1000 proof engine to investors, creators, or institutions that need visceral evidence.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.4em] text-gray-300">
            <span className="px-4 py-2 rounded-full border border-white/30">Contrast ≥ 4.5:1</span>
            <span className="px-4 py-2 rounded-full border border-white/30">GSAP + @gsap/react</span>
            <span className="px-4 py-2 rounded-full border border-white/30">Auto + manual control</span>
            <span className="px-4 py-2 rounded-full border border-white/30">AI-ready metadata</span>
          </div>
        </section>
      </main>
    </div>
  )
}

