"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const acts = [
  {
    id: "act-1",
    title: "Act 1 · Alan’s Digital Debut",
    ampCred: "50 → 420",
    audience: "1× → 30× reach",
    revenue: "~30× commerce lift",
    summary:
      "Movemental ingests decades of sermons and books, wraps them in cinematic React/Next.js structure, and proves that offline authority becomes machine-readable proof once schema, speed, and storytelling align.",
    lesson: "Digitized canon + flawless UX = credibility that assistants can finally cite.",
  },
  {
    id: "act-2",
    title: "Act 2 · Brad Joins, Links Fly",
    ampCred: "60 → 520",
    audience: "≈70× reach",
    revenue: "~28× baseline",
    summary:
      "Brad’s legacy posts relaunch beside fresh case studies while Alan cites him on day one. The first interlinked pair shows Google a credible cluster, lifting both leaders at once.",
    lesson: "Reciprocal citations beat transactional backlinks—context makes every mention compounding.",
  },
  {
    id: "act-3",
    title: "Act 3 · Josh Steps Out",
    ampCred: "80 → 620",
    audience: "≈80× reach",
    revenue: "Cohorts sell out",
    summary:
      "The invisible builder publishes three years of AI research with interactive demos. Alan + Brad cite him immediately, proving that anonymous experts can become ‘credible by association’ overnight.",
    lesson: "The platform doesn’t just scale fame; it reveals hidden practitioners the moment they ship.",
  },
  {
    id: "act-4",
    title: "Act 4 · Dave Expands the Map",
    ampCred: "100 → 700",
    audience: "≈180× network reach",
    revenue: "Movemental take grows automatically",
    summary:
      "Dave imports megachurch-scale reach, movement entrepreneurship, and multi-site playbooks. Conferences and partners reference the new hub, making the domain itself feel like an expert knowledge spine.",
    lesson: "Every new leader compounds attention instead of diluting it when the scaffolding is shared.",
  },
  {
    id: "act-5",
    title: "Act 5 · 100-Leader Inflection",
    ampCred: "Alan 820 · Brad 780 · Dave 800 · Josh 740",
    audience: "200×–500× depending on tier",
    revenue: "Revenue ∝ Audience × Conversion × ARPPU holds true",
    summary:
      "AI-suggested citations, semantic link assistants, and co-author prompts turn linking into muscle memory. The domain crosses 820 AmpCred and becomes the category signal in both Google and generative engines.",
    lesson: "Network intelligence keeps offers discoverable everywhere buyers make decisions.",
  },
  {
    id: "act-6",
    title: "Act 6 · User #1000 Arrives",
    ampCred: "70 baseline → ~770 in month one",
    audience: "≈220× lift",
    revenue: "5,000 readers → 1.1M impressions",
    summary:
      "Backlog imports, automatic backlinks from the hub, and AI-catalyzed collaborations let late joiners stand on a lattice instead of starting from zero.",
    lesson: "The fuller the network, the faster credibility compounds for newcomers.",
  },
  {
    id: "act-7",
    title: "Act 7 · AI Credibility Spillover",
    ampCred: "Movemental leaders hit 600–900 on AI topics",
    audience: "Assistants default to Movemental answers",
    revenue: "AI offerings add a new layer",
    summary:
      "Entity inheritance, shared AI guardrails, and transparency badges make ethical AI guidance the natural extension of movement leadership.",
    lesson: "Trust earned in one domain transfers to adjacent domains when the network cross-links relentlessly.",
  },
]

const brackets = [
  { name: "Foundation", points: "0–199", moves: "Domain live, baseline analytics, 10+ quality posts, manual backlinks." },
  {
    name: "Movemental Launch",
    points: "200–399",
    moves: "React/Next.js deployment, schema-rich import, design system, AI editorial workflow.",
  },
  {
    name: "Early Network Effects",
    points: "400–599",
    moves: "Reciprocal linking, co-authored releases, trust widgets, AI backlink prompts.",
  },
  {
    name: "Platform Intelligence",
    points: "600–799",
    moves: "Semantic link assistant, AI graph enrichment, automated outreach drafts, network analytics.",
  },
  {
    name: "Full Scenius",
    points: "800–949",
    moves: "Cross-discipline cohorts, knowledge hubs, Gate dashboards, AI co-authoring, external citations.",
  },
  {
    name: "Category Dominance",
    points: "950–1000",
    moves: "100-platform lattice, assistants reference Movemental by default, annual Movemental index cited by press.",
  },
]

const spillovers = [
  {
    title: "Keyword spillover",
    detail: "Canonical answers for one topic earn testing on adjacent queries (leadership development, AI for ministry, cohort design).",
  },
  {
    title: "Entity graph lift",
    detail: "Fresh Knowledge Graph nodes feed assistants, newsletters, LMS libraries, and research tools even when nobody searches.",
  },
  {
    title: "Assistant defaulting",
    detail: "Gemini, OpenAI, and Perplexity cite Movemental posts because schema, corroboration, and trust center receipts are in place.",
  },
  {
    title: "Network referrals",
    detail: "Every leader’s email list, cohort, and event becomes an acquisition channel pulling readers through the lattice.",
  },
  {
    title: "Product expansion",
    detail: "High visibility lowers launch friction for courses, cohorts, translations, and AI copilots aimed at already-warm audiences.",
  },
]

const aiTrajectory = [
  {
    year: "Years 1–2",
    focus: "Publish AI office hours, custom GPT workflows, ethical guardrails. AmpCred 600+ content already ranks for niche searches.",
  },
  {
    year: "Year 3",
    focus: "Case studies document AI in practice (translation pilots, content repurposing). AI posts hit AmpCred 800 territory.",
  },
  {
    year: "Year 4",
    focus: "Seminaries, publishers, and denominational boards cite Movemental’s AI approach as the standard for embodied leadership.",
  },
  {
    year: "Year 5",
    focus: "Assistants default to Movemental for “AI for pastors” or “AI governance for faith orgs,” cementing the category.",
  },
]

const valuation = [
  {
    lens: "Core Platform ARR",
    detail: "Conservative $20K creator revenue × 10% take = ~$2M ARR, valued at 8–12× for high-margin marketplace SaaS.",
  },
  {
    lens: "AI Consulting & Copilots",
    detail: "50–100 org engagements averaging $50K/year = $2.5M–$5M ARR, valued 6–8× when productized.",
  },
  {
    lens: "Strategic Premium",
    detail: "Scarcity gate + proprietary AI corpus justify 1–2× ARR premium. Total valuation $40M–$100M depending on mix.",
  },
]

export default function AmpCredDeckCelestialCodex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010409] via-[#050b16] to-[#0d1529] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20">
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-16">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-300">AmpCred Deck · Celestial Codex</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-100">Alan → Brad → Josh → Dave → 100 Leaders → User #1000</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
            A GSAP-inspired scroll (built with Framer Motion cues) that behaves like an illuminated manuscript. Each act earns its own
            cinematic panel, telemetry ribbons, and “lesson” captions so readers feel the compounding credibility at every viewport.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 uppercase tracking-[0.4em]">Scroll to advance</span>
            <span className="text-gray-400">Motion cues trigger at 30% viewport · color system ensures WCAG contrast</span>
          </div>
        </header>

        <section className="space-y-10">
          {acts.map((act, index) => (
            <motion.article
              key={act.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[36px] border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)]"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.5em] text-gray-300">
                <span>{(index + 1).toString().padStart(2, "0")}</span>
                <span className="text-gray-500">•</span>
                <span>ampcred jump {act.ampCred}</span>
                <span className="text-gray-500">•</span>
                <span>{act.audience}</span>
                <span className="text-gray-500">•</span>
                <span>{act.revenue}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mt-6 text-gray-100">{act.title}</h2>
              <p className="mt-4 text-lg text-gray-200 leading-relaxed">{act.summary}</p>
              <div className="mt-6 rounded-3xl border border-white/15 bg-[#0f1c33]/70 px-6 py-4">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Lesson</p>
                <p className="text-base text-gray-200 mt-2">{act.lesson}</p>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#09162b] via-[#0d1f3f] to-[#081226] p-10 space-y-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs uppercase tracking-[0.7em] text-gray-300">Appendix · AmpCred 1000 scale</p>
            <div className="h-px flex-1 bg-white/20" />
            <span className="px-3 py-1 text-[11px] rounded-full border border-white/20">Every bracket stacks machine-readable trust</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brackets.map((bracket) => (
              <div key={bracket.name} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-200">{bracket.points}</p>
                <h3 className="text-2xl font-semibold mt-3 text-gray-100">{bracket.name}</h3>
                <p className="mt-3 text-base text-gray-200 leading-relaxed">{bracket.moves}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 space-y-10"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-300">Why amplification doesn’t cap at search volume</p>
            <h2 className="text-4xl font-semibold text-gray-100">Spillover mechanics that keep adding demand</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {spillovers.map((spill) => (
              <div key={spill.title} className="rounded-3xl border border-white/15 bg-[#0d182f]/70 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-200">{spill.title}</p>
                <p className="mt-3 text-base text-gray-200 leading-relaxed">{spill.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[44px] border border-white/10 bg-gradient-to-r from-[#071129] via-[#090f2b] to-[#0f1a3d] p-10 space-y-10"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-300">Five-year AI influence trajectory</p>
            <h2 className="text-4xl font-semibold text-gray-100">AI credibility spillover, staged like a lunar orbit</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {aiTrajectory.map((stage) => (
              <div key={stage.year} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-200">{stage.year}</p>
                <p className="mt-3 text-base text-gray-100 leading-relaxed">{stage.focus}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[44px] border border-white/10 bg-white/5 p-10 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-300">HBR lens · valuation snapshot</p>
            <h2 className="text-4xl font-semibold text-gray-100">“Proof engine” economics for investors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valuation.map((item) => (
              <div key={item.lens} className="rounded-3xl border border-white/15 bg-[#0b1427]/70 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-blue-200">{item.lens}</p>
                <p className="mt-3 text-base text-gray-100 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            Floor: ~$40M when counting platform ARR at 8× plus consulting at services multiples. Ceiling: ~$100M when AI productization
            earns double-digit SaaS multiples + scarcity premium.
          </p>
        </motion.section>
      </main>
    </div>
  )
}

