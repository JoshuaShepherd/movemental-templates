"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Ops Director requiring overview of agent network
// Philosophy: Contextual agent grid with capability cards, metrics, escalation paths
// Experiment: Grid of agent personas showing capabilities, quick actions, usage metrics

type AgentCard = {
  id: string
  name: string
  missions: number
  avgTime: string
  capabilities: string[]
  escalation: string
}

const agentCards: AgentCard[] = [
  {
    id: "agent-design",
    name: "Design Systems",
    missions: 128,
    avgTime: "06m",
    capabilities: ["Hero concept", "Motion spec", "Contrast audit"],
    escalation: "Movement Creative Director",
  },
  {
    id: "agent-research",
    name: "Research & Personas",
    missions: 94,
    avgTime: "08m",
    capabilities: ["Persona rewrite", "Insight brief", "Reading plan"],
    escalation: "Research Guild",
  },
  {
    id: "agent-qa",
    name: "QA & Accessibility",
    missions: 87,
    avgTime: "05m",
    capabilities: ["Responsive QA", "WCAG checklist", "Playwright"],
    escalation: "Quality Council",
  },
  {
    id: "agent-ops",
    name: "Ops & Archive",
    missions: 102,
    avgTime: "07m",
    capabilities: ["Archive sync", "Metadata audit", "Schedule"],
    escalation: "Ops Commander",
  },
]

export default function AlanHirschHero35() {
  const [selectedId, setSelectedId] = useState(agentCards[0].id)
  const selected = agentCards.find((agent) => agent.id === selectedId) ?? agentCards[0]

  return (
    <div className="min-h-screen bg-[#03060f] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm border border-white/20 rounded-full bg-white/5">← Back to Game</Link>
      </div>
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Agentic Grid</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Contextual Agent Grid</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          View every agent persona, capabilities, usage metrics, and escalation paths in one dashboard. Assign quick actions with a
          single click.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
          {agentCards.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelectedId(agent.id)}
              className={`rounded-3xl border px-5 py-6 text-left transition-all ${
                selectedId === agent.id ? "border-purple-400 bg-purple-500/10" : "border-white/15 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{agent.name}</h3>
                <p className="text-sm text-white/70">{agent.missions} missions</p>
              </div>
              <p className="text-sm text-white/60">Avg time {agent.avgTime}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {agent.capabilities.map((capability) => (
                  <span key={capability} className="px-3 py-1 text-xs rounded-full bg-white/10">
                    {capability}
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/60 mt-4">Escalation · {agent.escalation}</p>
            </button>
          ))}
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Selected agent</p>
            <h2 className="text-3xl font-semibold mt-2">{selected.name}</h2>
            <p className="text-sm text-white/60">{selected.capabilities.length} capabilities</p>
            <Button className="mt-4 rounded-full px-6 py-2 h-auto bg-white text-black hover:bg-gray-200">Assign task</Button>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Usage metrics</p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between text-sm">
                <span>Last 7 days</span>
                <strong>42 calls</strong>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>SLA hit rate</span>
                <strong>98%</strong>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Escalations</span>
                <strong>3</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
