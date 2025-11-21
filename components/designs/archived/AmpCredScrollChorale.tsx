"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const storyline = [
  {
    title: "Prelude · What “Amplified” Actually Means",
    description:
      "AmpCred 1000 is Movemental’s map for turning offline authority into machine-readable, assistant-friendly proof. Higher scores mean better crawl frequency, richer snippets, multi-surface discovery, and networked referrals.",
    beats: ["Search + GEO favor structured entities", "Behavioral lift feeds the algo loop", "Owning multiple surfaces beats a single SERP"],
  },
  {
    title: "Chorus I · Acts 1–3",
    description:
      "Alan gets cinematic infrastructure, Brad links in, Josh reveals the AI lab. Together they prove that digital rigor + network cosigns can 30–80× an audience without changing the offer mix.",
    beats: ["AmpCred climbs into the 400–600 bracket within weeks", "Reciprocal citations become the new backlink economy", "Invisible builders become ‘credible by association’"],
  },
  {
    title: "Chorus II · Acts 4–6",
    description:
      "Dave brings megachurch reach, the 100-leader cohort flips the network flywheel, and user #1000 ramps to ~770 points in a month thanks to AI-orchestrated linking.",
    beats: ["Movemental domain hits 820 AmpCred", "Audience multipliers reach 400–500× for top tier", "Late joiners start on a lattice rather than zero"],
  },
  {
    title: "Finale · Act 7 + AI Spillover",
    description:
      "Entity inheritance lets AI content borrow movement authority. Transparency badges and semantic link assistants teach the web what ethical AI looks like in ministry contexts.",
    beats: ["Assistants cite Movemental by default", "AI offerings become a revenue layer", "Trust flows into adjacent verticals"],
  },
]

const aiPractices = [
  {
    title: "Entity inheritance",
    detail: "Once Google recognizes Alan for movement leadership, any AI content he publishes carries that canonical trust immediately.",
  },
  {
    title: "Network co-signs",
    detail: "Josh’s AI guides link out to every practitioner applying AI ethically, proving AI isn’t a bolt-on topic.",
  },
  {
    title: "Structured AI playbooks",
    detail: "Schema for Tool, Guide, Workflow, and Assessment make GEO surfaces ingest best practices without friction.",
  },
  {
    title: "AI transparency badges",
    detail: "Trust Center receipts outline voice safety, theological integrity, and human oversight so assistants see governance.",
  },
]

const playbook = [
  "Keep the gate tight—1,000 curated leaders maintain AmpCred integrity.",
  "Document every AI experiment, governance decision, and residency outcome.",
  "Productize AI assets (copilots, translation pipelines, Trust Center kits) for reuse.",
  "Sequence expansion: platform → consulting → residencies → verticals → licensing → AI-for-Good.",
  "Measure impact (audience, revenue, time saved, ethical incidents prevented) via annual AmpCred Impact Reports.",
  "Invite aligned anchors whenever entering new arenas.",
]

const economics = [
  {
    header: "Five-year trajectory",
    detail:
      "Leaders hit AmpCred 900+, becoming default citations for their fields. Movemental is recognized as the category steward of movement-era leadership + AI ethics.",
  },
  {
    header: "Ten-year horizon",
    detail:
      "Residencies + apprenticeships, corporate AI talent pipelines, and vertical spin-outs add ~$40.9M ARR with weighted 7.5× multiple → ~$307M valuation.",
  },
  {
    header: "Agentic licensing",
    detail:
      "200 licenses/year at $10K base (w/ $1K add-ons) adds $2M+ high-margin cash while extending credibility to adjacent creator communities.",
  },
]

export default function AmpCredScrollChorale() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1b0f1f] to-[#120a24] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20">
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-16">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-400">AmpCred Scroll · Chorale Edition</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-100">A lyrical scroll that reads like a movement canticle</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed">
            Think editorial field notes meets art-book spreads. Each “chorus” unfurls with Framer Motion fade-ups, subtle parallax
            gradients, and score-like metadata rails so readers feel the crescendo from Alan’s launch to AI-for-Good.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="px-4 py-2 rounded-full border border-white/20 uppercase tracking-[0.4em] bg-white/5">
              Scroll cues every 120vh
            </span>
            <span>Background hues shift per chorus to mimic orchestral movements.</span>
          </div>
        </header>

        <section className="space-y-10">
          {storyline.map((chapter, index) => (
            <motion.article
              key={chapter.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[40px] border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-gray-300">
                <span>{["Prelude", "Chorus I", "Chorus II", "Finale"][index]}</span>
                <span className="h-px flex-1 bg-white/20" />
                <span>Viewport {index + 1}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mt-6">{chapter.title}</h2>
              <p className="text-lg text-gray-200 mt-4 leading-relaxed">{chapter.description}</p>
              <ul className="mt-6 space-y-3 text-base text-gray-100 list-disc pl-6">
                {chapter.beats.map((beat) => (
                  <li key={beat}>{beat}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[44px] border border-white/15 bg-gradient-to-br from-[#1b1837] to-[#0f132a] p-10 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-purple-200">AI credibility practices</p>
            <h2 className="text-4xl font-semibold text-gray-100">How Spillover Becomes a Choir of Trust Signals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {aiPractices.map((practice) => (
              <div key={practice.title} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-purple-200">{practice.title}</p>
                <p className="mt-3 text-base text-gray-100 leading-relaxed">{practice.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[44px] border border-white/15 bg-white/5 p-10 space-y-6"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Credibility choreography</p>
            <h2 className="text-4xl font-semibold text-gray-100">Playbook to reach AmpCred 1000 without breaking the spell</h2>
          </div>
          <ul className="space-y-4 text-base text-gray-100 list-disc pl-6">
            {playbook.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[44px] border border-white/15 bg-gradient-to-r from-[#1a0f2b] via-[#240f3a] to-[#1b1031] p-10 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-300">Economic finale</p>
            <h2 className="text-4xl font-semibold text-gray-100">Why the movement becomes a mid-nine-figure enterprise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {economics.map((item) => (
              <div key={item.header} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-purple-200">{item.header}</p>
                <p className="mt-3 text-base text-gray-100 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            AmpCred becomes trust capital. Every partnership—whether with cities, universities, or NGOs—starts ahead of the curve because
            the lattice already documented hundreds of proof points.
          </p>
        </motion.section>
      </main>
    </div>
  )
}

