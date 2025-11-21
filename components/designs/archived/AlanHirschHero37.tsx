"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Creative Producer assembling a high-contrast broadcast brief
// Philosophy: Brutalism-Lite — sharp grids, heavy typography, fluorescent accent blocks
// Experiment: Command board that fuses movement stats, program toggles, and signal feeds in a stark editorial grid

const focusTracks = [
  {
    id: "systems",
    label: "SYSTEMS ATLAS",
    title: "Codify Movement Systems",
    description: "Map the five-m fold into shippable rituals and give designers hard edges to build around.",
    metric: "42% coverage",
    outputs: ["Ops schematics", "Agent briefs"],
  },
  {
    id: "broadcast",
    label: "BROADCAST LAB",
    title: "Brutalist Broadcast Drops",
    description: "Weekly monochrome video drops with fluorescent overlays and unapologetic scripture anchors.",
    metric: "7 films queued",
    outputs: ["Shot list", "Palette refs"],
  },
  {
    id: "residency",
    label: "FIELD RESIDENCY",
    title: "Residency Signal Panel",
    description: "Real-time view of who is on the ground, what’s failing, and what needs to be amplified tonight.",
    metric: "18 live sites",
    outputs: ["Heatmap", "Escalations"],
  },
]

const brutalPrograms = [
  { title: "Movement Diagnostics Console", status: "LIVE", detail: "Triage grid · 9 streams", tone: "text-gray-100" },
  { title: "Narrative Citation Rail", status: "STANDBY", detail: "Footnotes + pull quotes", tone: "text-gray-300" },
  { title: "Residency Dispatch Board", status: "LIVE", detail: "Ops + housing feed", tone: "text-gray-100" },
]

const signalFeed = [
  { id: "sig-01", title: "Jakarta collective wants neon typeset of mDNA", time: "00:12", priority: "HIGH" },
  { id: "sig-02", title: "Residency #18 requested brutal slides for night 2", time: "01:47", priority: "MED" },
  { id: "sig-03", title: "AI agent flagged low contrast in hero variant B", time: "02:10", priority: "HIGH" },
]

export default function AlanHirschHero37() {
  const [activeFocus, setActiveFocus] = useState(focusTracks[0].id)

  const activeTrack = useMemo(
    () => focusTracks.find((track) => track.id === activeFocus) ?? focusTracks[0],
    [activeFocus]
  )

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm border-2 border-white rounded-full bg-transparent text-gray-100 hover:bg-white hover:text-black transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-16">
        <section className="grid lg:grid-cols-12 gap-10 border-y-4 border-white py-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.7em] text-gray-300">Brutalism Mode · v37</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase leading-none text-gray-100">
              Movemental Field Manual
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Ultra-high-contrast grid that behaves like a print-ready manifesto. Every block is intentional—no gradients, no
              softness. Just Movement DNA, fluorescent accents, and actionable signal feeds.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase">
              <span className="px-4 py-3 border-4 border-white text-gray-100 tracking-[0.35em]">Score · 97</span>
              <span className="px-4 py-3 border-4 border-white text-gray-100 tracking-[0.35em]">Persona · Producer</span>
              <span className="px-4 py-3 border-4 border-white text-gray-100 tracking-[0.35em]">Palette · Noir + Neon</span>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-[#050505] p-6 border-4 border-white">
              <p className="text-xs uppercase tracking-[0.7em]">Primary Directive</p>
              <h2 className="text-3xl font-black mt-4">SHIP WITH EDGE</h2>
              <p className="text-base font-medium mt-2">
                No rounded corners. No gray mush. Ops and design must read like a command memo with creative voltage.
              </p>
              <Button
                className="mt-6 bg-[#050505] text-gray-100 border-2 border-[#050505] rounded-none px-6 py-3 text-sm uppercase tracking-[0.4em] hover:bg-transparent hover:text-[#050505]"
              >
                Deploy Brutal Kit
              </Button>
            </div>
            <div className="border-4 border-white p-5">
              <p className="text-xs uppercase tracking-[0.6em] text-gray-300">Spike Alerts</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/40 pb-2">
                  <span>Contrast Debt</span>
                  <span className="text-[#f9ff2b] font-bold">00:27</span>
                </div>
                <div className="flex justify-between border-b border-white/40 pb-2">
                  <span>Residency Escalations</span>
                  <span className="text-gray-100 font-bold">3 live</span>
                </div>
                <div className="flex justify-between">
                  <span>Broadcast Requests</span>
                  <span className="text-gray-100 font-bold">12 awaiting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.7em] text-gray-400">Focus Tracks</p>
            <div className="space-y-3">
              {focusTracks.map((track) => {
                const isActive = track.id === activeFocus
                return (
                  <button
                    key={track.id}
                    onClick={() => setActiveFocus(track.id)}
                    className={`w-full border-4 px-5 py-6 text-left transition-transform duration-150 ${
                      isActive
                        ? "bg-[#f9ff2b] border-[#f9ff2b] text-gray-900"
                        : "bg-transparent border-white text-gray-100 hover:-translate-y-1"
                    }`}
                  >
                    <p
                      className={`text-[10px] uppercase tracking-[0.6em] ${
                        isActive ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {track.label}
                    </p>
                    <h3 className="text-2xl font-black mt-2">{track.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em]">
                      <span>{track.metric}</span>
                      <span>•</span>
                      <span>{track.outputs.join(" / ")}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-6 border-4 border-white p-8 bg-[#0a0a0a]">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Drilldown</p>
            <h3 className="text-3xl md:text-4xl font-black text-gray-100 mt-4">{activeTrack.title}</h3>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">{activeTrack.description}</p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {activeTrack.outputs.map((output) => (
                <div key={output} className="border-4 border-white px-4 py-5">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">Deliverable</p>
                  <p className="text-xl font-black text-gray-100 mt-2">{output}</p>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-transparent border-2 border-white rounded-none px-6 py-3 uppercase tracking-[0.4em] text-sm hover:bg-white hover:text-[#050505]">
              Export Brutal Board
            </Button>
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-10 border-y-4 border-white py-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.6em] text-gray-300">
              <span>Program Grid</span>
              <span>•</span>
              <span>Systems × Narrative × Ops</span>
            </div>
            <div className="space-y-4">
              {brutalPrograms.map((program) => (
                <div key={program.title} className="border-4 border-white px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-2xl font-black text-gray-100">{program.title}</p>
                    <span
                      className={`px-3 py-1 text-[11px] font-black uppercase tracking-[0.3em] border-2 border-white ${program.tone}`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{program.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.7em] text-gray-400">Signal Feed</p>
              <Button className="bg-transparent border-2 border-white rounded-none px-4 py-2 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-[#050505]">
                Push Update
              </Button>
            </div>
            <div className="space-y-4">
              {signalFeed.map((signal) => (
                <div key={signal.id} className="border-4 border-white p-5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.45em] text-gray-400">
                    <span>{signal.time}</span>
                    <span>{signal.priority}</span>
                  </div>
                  <p className="text-xl font-semibold text-gray-100 mt-3">{signal.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-4 border-white p-8 bg-[#0a0a0a]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.7em] text-gray-400">Archive Integration</p>
              <h3 className="text-3xl font-black text-gray-100 mt-3">Glass is banned · Steel is in</h3>
              <p className="text-lg text-gray-200 mt-3">
                This template is purpose-built to close the Brutalism gap from the original guide. It’s unapologetic, print-inspired,
                and still responsive with proper contrast checks for every block.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-4 border-white px-5 py-4">
                <span className="text-sm uppercase tracking-[0.5em] text-gray-300">Contrast</span>
                <span className="text-2xl font-black text-gray-100">4.8:1</span>
              </div>
              <div className="flex items-center justify-between border-4 border-white px-5 py-4">
                <span className="text-sm uppercase tracking-[0.5em] text-gray-300">Hover States</span>
                <span className="text-2xl font-black text-gray-100">ALL</span>
              </div>
              <div className="flex items-center justify-between border-4 border-white px-5 py-4">
                <span className="text-sm uppercase tracking-[0.5em] text-gray-300">Dark Mode</span>
                <span className="text-2xl font-black text-gray-100">Primary</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

