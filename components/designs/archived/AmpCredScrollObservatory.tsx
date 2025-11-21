"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const pillars = [
  {
    label: "Credibility transfer",
    detail: "Hundreds of proof points make institutions comfortable adopting Movemental’s AI playbooks.",
    metric: "AmpCred 900 cohort voices",
  },
  {
    label: "Model scarcity",
    detail: "Faith-based orgs lack embodied AI frameworks, so Movemental’s documented stack becomes the rare commodity.",
    metric: "AI Transparency badges + Trust Center receipts",
  },
  {
    label: "Platform data advantage",
    detail: "Longitudinal data from 1,000 leaders reveals what converts, what saves time, and how governance holds.",
    metric: "Network telemetry → productized copilots",
  },
]

const consultingStack = [
  { name: "AI Readiness Labs", detail: "6–12 week audits covering content, data, and cultural readiness for AI adoption." },
  { name: "Custom Copilot Builds", detail: "Voice-safe workflows deployed inside orgs with governance and usage pricing." },
  { name: "Ethical AI Frameworks", detail: "Workshops + certifications that codify human oversight and theological integrity." },
  { name: "Networked Learning Consortia", detail: "Shared cohorts where multiple orgs progress together with quarterly best-practice drops." },
]

const longView = [
  {
    horizon: "Years 1–3",
    moves: ["Platform + AI consulting", "Refine translation + copilot modules", "Document every governance decision"],
    revenue: "$23M ARR trajectory (platform + AI products)",
  },
  {
    horizon: "Years 4–6",
    moves: ["Launch AI residencies", "Corporate talent pipeline", "Pilot first vertical partnership (sports writers)"],
    revenue: "$15M ARR from residencies + training + first JV",
  },
  {
    horizon: "Years 7–10",
    moves: ["Scale residencies", "Add two more verticals", "Introduce licensing kits for adjacent creators"],
    revenue: "$40M+ ARR w/ weighted 7.5× multiple → ~$307M valuation",
  },
]

const impact = [
  {
    topic: "AI-for-Good nonprofit (post-1,000 leaders)",
    bullets: [
      "Deploy AI teams into city networks with proven guardrails.",
      "Train cohorts of young leaders so neighborhoods access ethical AI.",
      "Publish transparency reports so funders trust faith-led AI governance.",
    ],
  },
  {
    topic: "Licensing agentic digital kits",
    bullets: [
      "Offer $10K base stacks (content copilot, translation, analytics, Trust Center templates).",
      "Targets: B&B collectives, indie musicians, fiction writers—anyone needing credible storytelling infrastructure.",
      "200 licenses/year → $2M high-margin revenue, ARPU climbs with $1K add-ons.",
    ],
  },
]

const math = [
  { label: "Audience scaling", value: "AmpCred 900 ≈ 250× baseline reach" },
  { label: "Conversion math", value: "3% of 5M impressions = 150K buyers" },
  { label: "ARPPU reality", value: "$200–$1,000/yr (books, memberships, coaching)" },
  { label: "Movemental take", value: "10% rev share → $100K per $1M creator revenue" },
]

export default function AmpCredScrollObservatory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf3] via-[#f6f0e4] to-[#efe7d7] text-gray-900">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm rounded-full border border-gray-300 bg-white/80 text-gray-900 hover:bg-white">
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-16">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-600">AmpCred Scroll · Observatory Edition</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">The Proof Engine Viewed from an Academic Observatory</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
            This treatment frames the entire case study like an HBR field report—soft sunlight, wide margins, typographic ribs, and
            parallax-esque bands that summarize every economic implication as readers scroll. Think GSAP timelines translated into
            layered linen paper.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="px-4 py-2 rounded-full border border-gray-300 bg-white uppercase tracking-[0.4em]">
              Sticky chapter nav on scroll
            </span>
            <span>Each section fades upward with 0.4s easing for “observatory sweep.”</span>
          </div>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-gray-200 bg-white/80 p-10 space-y-8 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.4)]"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-600">Consulting flywheel</p>
            <h2 className="text-4xl font-semibold text-gray-900">Movemental AI Consulting ≠ side quest—it is the natural sequel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-500">{pillar.label}</p>
                <p className="text-base text-gray-800 leading-relaxed">{pillar.detail}</p>
                <p className="text-sm font-semibold text-gray-900">{pillar.metric}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {consultingStack.map((item) => (
              <div key={item.name} className="rounded-3xl border border-gray-200 bg-[#fdf8ef] p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600">{item.name}</p>
                <p className="mt-3 text-base text-gray-800 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-gray-200 bg-white p-10 space-y-10"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-600">Economic math</p>
            <h2 className="text-4xl font-semibold text-gray-900">Grounded revenue story (no hype, just ratios)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {math.map((item) => (
              <div key={item.label} className="rounded-3xl border border-gray-200 bg-[#f6f0e4] p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600">{item.label}</p>
                <p className="mt-3 text-lg text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            With 100 leaders averaging $20K revenue each, Movemental’s 10% share alone clears ~$2M ARR. Layer consulting + AI products
            on top and the proof engine approaches eight figures quickly.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[44px] border border-gray-200 bg-white/90 p-10 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-600">Ten-year execution stack</p>
            <h2 className="text-4xl font-semibold text-gray-900">Sequenced expansion, not scattered bets</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {longView.map((stage) => (
              <div key={stage.horizon} className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600">{stage.horizon}</p>
                <ul className="list-disc pl-5 space-y-2 text-base text-gray-800">
                  {stage.moves.map((move) => (
                    <li key={move}>{move}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-gray-900">{stage.revenue}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Weighted multiple ~7.5× on $40.9M ARR lands at ~$307M valuation, with a strategic premium pushing toward $350M when
            licensing revenue behaves like software.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[44px] border border-gray-200 bg-white p-10 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-600">Impact spillovers</p>
            <h2 className="text-4xl font-semibold text-gray-900">How AmpCred becomes social infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {impact.map((item) => (
              <div key={item.topic} className="rounded-3xl border border-gray-200 bg-[#fdf8ef] p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600">{item.topic}</p>
                <ul className="mt-4 space-y-2 text-base text-gray-800 list-disc pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Launching AI-for-Good today would burn energy proving credibility. Waiting until the lattice holds 1,000 leaders means
            funders start with trust instead of skepticism.
          </p>
        </motion.section>
      </main>
    </div>
  )
}

