"use client"

import { useState } from "react"

const tags = ["All content", "Articles", "Podcasts", "Video", "Cohort assets"]
const trending = [
  { title: "City on the Edge", views: "42k", completion: "78%" },
  { title: "Residency Week 3 Toolkit", views: "18k", completion: "92%" },
  { title: "Microchurch Primer", views: "25k", completion: "64%" },
]

const sources = [
  { label: "Email", percent: 35 },
  { label: "Organic search", percent: 28 },
  { label: "Community app", percent: 22 },
  { label: "Social", percent: 15 },
]

export default function DashboardContentPulse() {
  const [activeTag, setActiveTag] = useState("All content")

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-emerald-500">Media Studio</p>
          <h1 className="text-4xl font-semibold">Content Pulse Dashboard</h1>
          <p className="text-slate-600">Track engagement, funnel sources, and top-performing assets from a single hero view.</p>
          <div className="flex flex-wrap gap-3">
            {tags.	map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  activeTag === tag ? "bg-emerald-500 text-white border-emerald-500" : "border-slate-200 text-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500">Total plays</p>
            <p className="text-4xl font-semibold mt-2">182,340</p>
            <p className="text-emerald-500 text-sm mt-1">+14% vs last week</p>
          </div>
          <div className="p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500">Avg. completion</p>
            <p className="text-4xl font-semibold mt-2">71%</p>
            <div className="mt-3 h-2 bg-slate-100 rounded-full">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "71%" }} />
            </div>
          </div>
          <div className="p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500">New subscribers</p>
            <p className="text-4xl font-semibold mt-2">2,430</p>
            <p className="text-slate-500 text-sm mt-1">Top source: Email</p>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-[32px] border border-slate-100 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Trending assets</h2>
            <div className="space-y-4">
              {trending.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-slate-50 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.views} views</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Completion</p>
                    <p className="text-lg font-semibold">{item.completion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[32px] border border-slate-100 shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold">Top sources</h3>
            {sources.map((source) => (
              <div key={source.label}>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{source.label}</span>
                  <span>{source.percent}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 mt-2">
                  <div className="h-full rounded-full bg-slate-900" style={{ width: `${source.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

