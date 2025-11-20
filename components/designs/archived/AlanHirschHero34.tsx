"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Ops Coordinator needing agent help
// Philosophy: Docked summon panel listing specialized agents with quick prompts
// Experiment: Agentic interaction front-end with summon panel, capability cards, and prompt composer

type Agent = {
  id: string
  name: string
  role: string
  specialties: string[]
  status: "online" | "busy" | "offline"
}

const agents: Agent[] = [
  {
    id: "agent-design",
    name: "Design Director",
    role: "UI + Motion",
    specialties: ["Framer Motion", "Contrast QA"],
    status: "online",
  },
  {
    id: "agent-research",
    name: "Research Strategist",
    role: "Persona + Insights",
    specialties: ["Persona rewrites", "Outline"],
    status: "busy",
  },
  {
    id: "agent-qa",
    name: "QA & Accessibility",
    role: "Testing",
    specialties: ["WCAG", "Responsive"],
    status: "online",
  },
]

const quickPrompts = [
  "Summarize the latest research drop",
  "Draft hero copy for LMS",
  "Run contrast audit",
]

export default function AlanHirschHero34() {
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0].id)
  const [prompt, setPrompt] = useState("")
  const selectedAgent = agents.find((agent) => agent.id === selectedAgentId) ?? agents[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050913] via-[#0a131f] to-[#111f36] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-full">← Back to Game</Link>
      </div>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Agentic Panel</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Summon Movemental Agents</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          Docked panel for summoning specialized agents. Select a role, review capabilities, and dispatch structured prompts.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-4">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelectedAgentId(agent.id)}
              className={`w-full text-left rounded-3xl border px-5 py-4 transition-all ${
                selectedAgentId === agent.id ? "border-cyan-400 bg-cyan-500/10" : "border-white/15 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{agent.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full ${agent.status === "online" ? "bg-emerald-500/20" : "bg-amber-500/20"}`}>
                  {agent.status}
                </span>
              </div>
              <p className="text-sm text-white/70">{agent.role}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {agent.specialties.map((spec) => (
                  <span key={spec} className="px-3 py-1 rounded-full text-xs bg-white/10">
                    {spec}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Selected agent</p>
            <h2 className="text-3xl font-semibold mt-2">{selectedAgent.name}</h2>
            <p className="text-sm text-white/70">{selectedAgent.role} · {selectedAgent.specialties.join(", ")}</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickPrompts.map((qp) => (
                <button key={qp} onClick={() => setPrompt(qp)} className="px-4 py-2 rounded-full text-sm border border-white/20">
                  {qp}
                </button>
              ))}
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you need..."
              className="w-full h-40 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-white/60">Context auto-attached from archive</p>
              <Button className="rounded-full px-6 py-2 h-auto bg-white text-black hover:bg-gray-200">Dispatch</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
