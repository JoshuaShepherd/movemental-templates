"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Ops Director / Librarian
// Philosophy: Control room dashboard with global search, tag matrix, update feed, AI concierge suggestions
// Experiment: Archive control center combining analytics, tag matrix, quick actions, and AI concierge

type MovementTag = {
  id: string
  label: string
  count: number
  trend: string
}

const movementTags: MovementTag[] = [
  { id: "apostolic", label: "Apostolic", count: 42, trend: "+6" },
  { id: "communitas", label: "Communitas", count: 31, trend: "+2" },
  { id: "formation", label: "Formation", count: 28, trend: "-1" },
  { id: "calendar", label: "Calendar", count: 14, trend: "+4" },
  { id: "ai", label: "AI", count: 17, trend: "+8" },
]

type UpdateItem = {
  id: string
  title: string
  timestamp: string
  detail: string
}

const updates: UpdateItem[] = [
  {
    id: "upd-01",
    title: "New Communitas toolkit added",
    timestamp: "2h ago",
    detail: "Includes 8 new rituals + audio assets.",
  },
  {
    id: "upd-02",
    title: "Movement intelligence data refreshed",
    timestamp: "6h ago",
    detail: "Network health board updated with Q1 signals.",
  },
]

type ConciergeSuggestion = {
  id: string
  prompt: string
  detail: string
}

const conciergeSuggestions: ConciergeSuggestion[] = [
  {
    id: "cs-01",
    prompt: "Summon research concierge",
    detail: "Describe the research gap and I’ll stage relevant volumes + citations.",
  },
  {
    id: "cs-02",
    prompt: "Draft briefing",
    detail: "Summaries + charts for your next board update.",
  },
]

export default function AlanHirschHero33() {
  const [query, setQuery] = useState("")
  const filteredTags = useMemo(() => movementTags.filter((tag) => tag.label.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <div className="min-h-screen bg-[#03030a] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link href="/" className="px-5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-full">← Back to Game</Link>
      </div>
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-10">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Control Room</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Movemental All-Access Control Room</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          Monitor every archive update, run global searches, dispatch AI concierge workflows, and track tag matrices from a single
          interface.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Global search across archive"
                className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none"
              />
              <Button className="rounded-full px-6 py-3 h-auto bg-white text-black hover:bg-gray-200">Search</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Tag matrix</p>
                <p className="text-sm text-white/70">{filteredTags.length} tags</p>
              </div>
              <Button className="rounded-full px-5 py-2 h-auto bg-white/10 text-white border border-white/20">Export</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {filteredTags.map((tag) => (
                <div key={tag.id} className="rounded-2xl border border-white/15 p-4">
                  <p className="text-sm font-semibold">{tag.label}</p>
                  <p className="text-2xl font-semibold mt-2">{tag.count}</p>
                  <p className="text-xs text-green-300 mt-1">{tag.trend}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Live updates</p>
              <Button className="rounded-full px-4 py-1 text-xs bg-white/10 text-white border border-white/20">Subscribe</Button>
            </div>
            <div className="space-y-4">
              {updates.map((update) => (
                <div key={update.id} className="rounded-2xl border border-white/15 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-semibold">{update.title}</p>
                    <p className="text-white/60">{update.timestamp}</p>
                  </div>
                  <p className="text-sm text-white/70 mt-1">{update.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">AI concierge</p>
            <div className="space-y-3 mt-4">
              {conciergeSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm font-semibold">{suggestion.prompt}</p>
                  <p className="text-sm text-white/70 mt-1">{suggestion.detail}</p>
                  <Button className="mt-3 h-auto px-4 py-1 text-xs rounded-full bg-white text-black hover:bg-gray-200">Launch</Button>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Quick actions</p>
            <div className="grid gap-3 mt-4">
              {[
                "Start archive brief",
                "Add resource drop",
                "Email summary to team",
              ].map((action) => (
                <button key={action} className="rounded-2xl border border-white/15 px-4 py-3 text-left text-sm hover:bg-white/10">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
