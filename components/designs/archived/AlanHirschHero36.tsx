"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Ops Director building workflows
// Philosophy: Adaptive workflow builder with drag-like stages, agent assignments, status indicators
// Experiment: Interface that lets teams assemble multi-stage workflows and assign agents per stage

type Stage = {
  id: string
  title: string
  description: string
  agent: string
  status: "pending" | "active" | "done"
}

const initialStages: Stage[] = [
  {
    id: "stage-01",
    title: "Research Brief",
    description: "Summon research agent to synthesize latest archive entries",
    agent: "Research Strategist",
    status: "active",
  },
  {
    id: "stage-02",
    title: "Design Sprint",
    description: "Design agent produces hero concepts + motion spec",
    agent: "Design Systems",
    status: "pending",
  },
  {
    id: "stage-03",
    title: "QA Sweep",
    description: "QA agent runs responsive + contrast checks",
    agent: "QA & Accessibility",
    status: "pending",
  },
]

const notifications = [
  { id: "note-01", message: "Design agent added motion spec", time: "3m ago" },
  { id: "note-02", message: "QA stage ready for assignment", time: "10m ago" },
]

export default function AlanHirschHero36() {
  const [stages, setStages] = useState(initialStages)

  const advanceStage = (id: string) => {
    setStages((prev) =>
      prev.map((stage) =>
        stage.id === id
          ? { ...stage, status: stage.status === "pending" ? "active" : "done" }
          : stage
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#010106] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm border border-white/20 rounded-full bg-white/5">← Back to Game</Link>
      </div>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Workflow Builder</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Adaptive Agent Workflow Builder</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          Assemble drag-inspired stages, assign agents, and monitor status with live notifications and escalation controls.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-4">
          {stages.map((stage) => (
            <div key={stage.id} className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stage</p>
                  <h3 className="text-2xl font-semibold">{stage.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{stage.description}</p>
                  <p className="text-xs text-white/60 mt-2">Agent · {stage.agent}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Status</p>
                  <p className="text-lg font-semibold">{stage.status}</p>
                  <Button
                    onClick={() => advanceStage(stage.id)}
                    className="mt-3 rounded-full px-4 py-2 h-auto text-sm bg-white text-black hover:bg-gray-200"
                  >
                    Advance
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Button className="rounded-full px-6 py-3 h-auto text-sm bg-white/10 border border-white/20 text-white">Add stage</Button>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Notifications</p>
            <div className="space-y-3 mt-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm font-semibold">{notification.message}</p>
                  <p className="text-xs text-white/60">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Workflow summary</p>
            <div className="flex items-center justify-between text-sm mt-4">
              <span>Stages</span>
              <strong>{stages.length}</strong>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span>Agents assigned</span>
              <strong>4</strong>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span>SLA on track</span>
              <strong>97%</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
