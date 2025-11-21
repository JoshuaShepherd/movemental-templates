"use client"

import { useState } from "react"

const metrics = [
  { label: "Active cohorts", value: "24", delta: "+6" },
  { label: "Weekly reach", value: "182K", delta: "+12%" },
  { label: "Volunteers", value: "1,280", delta: "+3%" },
]

const timeline = [
  { time: "09:30", title: "Prayer briefing", status: "Live", leader: "Avery" },
  { time: "11:00", title: "Content rehearsal", status: "Upcoming", leader: "Elena" },
  { time: "14:00", title: "Residency Q&A", status: "Prep", leader: "Samir" },
]

const sectors = [
  { name: "North America", value: 72 },
  { name: "Europe", value: 54 },
  { name: "APAC", value: 36 },
]

export default function DashboardMovementCommand() {
  const [selectedMetric, setSelectedMetric] = useState("All initiatives")

  return (
    <div className="min-h-screen bg-[#030711] text-slate-100">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-cyan-400">Movement Command</p>
            <h1 className="text-4xl font-semibold">Global Command Dashboard</h1>
            <p className="text-slate-400">Monitor cohorts, timelines, and territory health from a single hero panel.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-full px-5 py-3 flex items-center gap-2 text-sm">
            <span>View:</span>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="bg-transparent focus:outline-none text-white"
            >
              <option>All initiatives</option>
              <option>Residencies</option>
              <option>Broadcast</option>
              <option>Church plants</option>
            </select>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
              <div className="flex items-end gap-3 mt-3">
                <span className="text-4xl font-semibold">{metric.value}</span>
                <span className="text-cyan-300 text-sm">{metric.delta}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-[32px] bg-white/5 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Command timeline</h2>
              <button className="text-sm text-cyan-300 underline">View all</button>
            </div>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.title} className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm text-slate-400">{item.time}</p>
                    <p className="text-lg font-medium text-white">{item.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">{item.status}</p>
                    <p className="text-sm text-white">{item.leader}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 space-y-5">
            <h3 className="text-2xl font-semibold">Territory pulse</h3>
            {sectors.map((sector) => (
              <div key={sector.name}>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{sector.name}</span>
                  <span>{sector.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 mt-2">
                  <div className="h-full rounded-full bg-cyan-400" style={{ width: `${sector.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

