"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Resource Cartographer
// Philosophy: Map-based resource atlas with category chips, preview modals, download tracking
// Experiment: Archive view centered on a map interface with interactive pins and download tracker

type AtlasPin = {
  id: string
  title: string
  region: string
  lat: number
  lng: number
  resources: number
  highlight: string
}

const atlasPins: AtlasPin[] = [
  { id: "pin-01", title: "Johannesburg Movement Studio", region: "Africa", lat: -26.2041, lng: 28.0473, resources: 12, highlight: "Communitas labs" },
  { id: "pin-02", title: "Melbourne Praxis Lab", region: "Oceania", lat: -37.8136, lng: 144.9631, resources: 15, highlight: "Formation toolkits" },
  { id: "pin-03", title: "Lisbon Research Hub", region: "Europe", lat: 38.7223, lng: -9.1393, resources: 9, highlight: "Intelligence briefs" },
  { id: "pin-04", title: "Austin Design House", region: "North America", lat: 30.2672, lng: -97.7431, resources: 18, highlight: "Design systems" },
]

type DownloadStat = {
  id: string
  title: string
  downloads: number
  delta: string
}

const downloadStats: DownloadStat[] = [
  { id: "stat-01", title: "Communitas Field Guide", downloads: 482, delta: "+18%" },
  { id: "stat-02", title: "Movement Intelligence Almanac", downloads: 351, delta: "+9%" },
  { id: "stat-03", title: "Formation Analog Toolkit", downloads: 267, delta: "+3%" },
]

const categories = ["All", "Communitas", "Intelligence", "Formation", "Design"]

export default function AlanHirschHero32() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [focusedPin, setFocusedPin] = useState(atlasPins[0])

  return (
    <div className="min-h-screen bg-[#02040a] text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm border border-white/20 rounded-full bg-white/5 backdrop-blur hover:bg-white/10"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-24">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Resource Atlas</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Movemental Resource Atlas</h1>
        <p className="text-lg text-white/80 mt-4 max-w-3xl">
          Navigate every Movemental resource drop on a living map. Filter by category, preview modals, and track downloads in real
          time.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border ${
                activeCategory === category ? "border-cyan-400 bg-cyan-500/10" : "border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-[#051429] to-[#02050b] overflow-hidden">
            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{ backgroundImage: "url('/public/maps/world-grid.svg')" }}
            />
            <div className="absolute inset-0">
              {atlasPins.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setFocusedPin(pin)}
                  className={`absolute -translate-y-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold border ${
                    focusedPin.id === pin.id ? "border-cyan-400 bg-cyan-500/20" : "border-white/30 bg-white/10"
                  }`}
                  style={{
                    top: `${50 - pin.lat * 0.5}%`,
                    left: `${50 + pin.lng * 0.5}%`,
                  }}
                >
                  {pin.region}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Focused region</p>
            <h3 className="text-2xl font-semibold mt-2">{focusedPin.title}</h3>
            <p className="text-sm text-white/70 mt-2">{focusedPin.resources} resources · {focusedPin.highlight}</p>
            <Button className="mt-4 rounded-full px-6 py-2 h-auto text-sm bg-white text-black hover:bg-gray-200">Open library</Button>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Download tracker</p>
            <div className="space-y-4 mt-4">
              {downloadStats.map((stat) => (
                <div key={stat.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{stat.title}</p>
                    <p className="text-xs text-white/60">{stat.delta}</p>
                  </div>
                  <p className="text-xl font-semibold">{stat.downloads}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
