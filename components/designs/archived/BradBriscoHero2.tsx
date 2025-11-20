"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const modes = [
  { id: "residency", label: "Residency home" },
  { id: "diagnostics", label: "Diagnostic OS" },
  { id: "network", label: "Network signals" },
]

const diagnostics = [
  {
    lane: "Apostolic impulse",
    score: 82,
    insight: "Leaders over-index on teaching vs. experimentation—rebalance in next sprint.",
  },
  {
    lane: "Communitas patterns",
    score: 76,
    insight: "Tension rituals missing in two hubs; deploy liminal labs toolkit.",
  },
  {
    lane: "Movement economics",
    score: 68,
    insight: "Subscription energy dipping; layer Brad’s bivocational field kit.",
  },
]

const cohorts = [
  { title: "Residency · Wave 04", status: "Live", roster: 22, focus: "Planting teams in post-suburban grids" },
  { title: "Catalyst Intensive", status: "Forming", roster: 16, focus: "Deploying 90-day experiments" },
  { title: "Send Network Alumni", status: "On deck", roster: 38, focus: "Scaling micro-church ecosystems" },
]

const signalFeed = [
  { label: "West KC", note: "Two households ready to host dinner church ― request Brad drop-in", priority: "High" },
  { label: "Berlin West", note: "Collective seeking governance guardrails", priority: "Medium" },
  { label: "Dallas core", note: "Whiteboard sprint scheduled; need deployment doc", priority: "High" },
]

const playlists = [
  { id: "whiteboard", label: "Whiteboard vault", runtime: "17 sessions", detail: "Grayscale capture of Brad’s top diagrams" },
  { id: "missiology", label: "Missiology briefs", runtime: "12 briefs", detail: "PDFs for leaders to teach within 48h" },
  { id: "diagnostic", label: "Diagnostic walkthroughs", runtime: "9 films", detail: "Brad narrates four-lane grid" },
]

export default function BradBriscoHero2() {
  const [activeMode, setActiveMode] = useState(modes[0].id)
  const modeSubtitle = useMemo(() => {
    switch (activeMode) {
      case "diagnostics":
        return "Switch into Brad’s grayscale operating system to see live scores and interventions."
      case "network":
        return "Surface the quiet leader signals Brad watches for before launching the next cohort."
      default:
        return "The residency home that loads first: crisp black & white, whiteboard-first, distraction free."
    }
  }, [activeMode])

  return (
    <div className="min-h-screen bg-[#f7f7f5] dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-semibold border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900" />
          <div
            className="absolute inset-10 rounded-[40px] border border-gray-200/70 dark:border-gray-800/70"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-5">Brad Brisco · Grayscale OS</p>
              <h1 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Three-mode hero built for Brad’s diagnostic rhythm
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{modeSubtitle}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                      activeMode === mode.id
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:border-gray-500"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="h-auto rounded-full px-7 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Open Brad console</Button>
                <Button
                  variant="outline"
                  className="h-auto rounded-full px-7 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
                >
                  Export monochrome deck
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-xl space-y-6">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-black/30">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-2">Mode snapshot</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {activeMode === "network" ? "Signals feed pinned to hero" : "Diagnostics grid driving hero metrics"}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {["Focus", "Clarity", "Reach"].map((label, idx) => (
                      <div key={label} className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{label}</p>
                        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{activeMode === "diagnostics" ? 90 - idx * 7 : 84 - idx * 3}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <Image
                    src="/brad/brad-brisco-2.jpeg"
                    alt="Brad Brisco coaching"
                    width={640}
                    height={420}
                    className="object-cover grayscale"
                  />
                  <div className="p-4 bg-gray-900 text-white text-sm">
                    Brad keeps portraits grayscale so the work stays foregrounded. This hero respects that by dimming the photo and
                    elevating the system panels.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#080808] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-[28px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/60 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-3">Diagnostics grid</p>
            <div className="space-y-6">
              {diagnostics.map((item) => (
                <div key={item.lane}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{item.lane}</p>
                    <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.score}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 mt-2">
                    <div
                      className="h-2 rounded-full bg-gray-900 dark:bg-gray-100"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{item.insight}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Residency cohorts</p>
            <div className="space-y-6">
              {cohorts.map((cohort) => (
                <div key={cohort.title} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{cohort.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100">{cohort.status}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{cohort.focus}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mt-3">{cohort.roster} leaders on roster</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1ef] dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Signal feed</p>
            <div className="space-y-6">
              {signalFeed.map((signal) => (
                <div key={signal.label} className="border-b border-gray-200 dark:border-gray-800 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{signal.label}</h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{signal.priority}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{signal.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Grayscale playlists</p>
            <div className="grid md:grid-cols-3 gap-4">
              {playlists.map((playlist) => (
                <div key={playlist.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900/60">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{playlist.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-3">{playlist.runtime}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{playlist.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-gray-400 dark:border-gray-700 p-5 text-sm text-gray-700 dark:text-gray-300">
              Every playlist defaults to grayscale overlays so Brad’s face stays diffused while his frameworks stay tack-sharp.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/brad/brad-brisco-1.jpeg"
              alt="Brad Brisco grayscale"
              width={640}
              height={800}
              className="rounded-[28px] border border-gray-300 dark:border-gray-700 object-cover grayscale"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Design intent</p>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Built for clean, monochrome cognition</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Brad’s personal feedback drove every decision—clean grids, grayscale portraits, and whiteboard textures that feel like
              an actual planning day. Each mode keeps color noise at zero so strategy sits front-center.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="h-auto rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Test interactions</Button>
              <Button
                variant="outline"
                className="h-auto rounded-full px-6 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
              >
                Add Brad feedback
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


