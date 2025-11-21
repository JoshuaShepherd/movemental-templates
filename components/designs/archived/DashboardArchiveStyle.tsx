"use client"

import { useState } from "react"

const sections = [
  {
    type: "Hero Experiences",
    concepts: [
      { name: "Movement Command", score: 97, tags: ["Timeline", "KPIs"], date: "May 2025" },
      { name: "Residency Health", score: 95, tags: ["Cohorts", "Checklist"], date: "May 2025" },
    ],
  },
  {
    type: "Interactive Systems",
    concepts: [
      { name: "Content Pulse", score: 95, tags: ["Analytics", "Trending"], date: "May 2025" },
      { name: "Finance Stewardship", score: 95, tags: ["Funds", "Tasks"], date: "May 2025" },
    ],
  },
]

const viewOptions = ["Card", "List"]

export default function DashboardArchiveStyle() {
  const [viewMode, setViewMode] = useState("Card")
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
    sections.reduce((acc, section) => ({ ...acc, [section.type]: true }), {})
  )

  const toggleSection = (type: string) => {
    setCollapsed((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#131313]">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.65em] text-gray-600">Archive Style</p>
          <h1 className="text-4xl font-semibold font-[var(--font-playfair)]">Archive Command Dashboard</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Mirrors the /archive experience: collapse toggles, view switcher, and template cards with palette bars—all in a single dashboard.
          </p>
          <div className="flex gap-3">
            {viewOptions.	map((option) => (
              <button
                key={option}
                onClick={() => setViewMode(option)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  viewMode === option ? "bg-[#131313] text-white" : "border-gray-300 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.type} className="rounded-[32px] border border-gray-200 bg-white shadow-[0_30px_60px_-40px_rgba(15,23,42,0.2)]">
              <div className="flex flex-wrap items-center justify-between px-6 py-5 border-b border-gray-200">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">Type</p>
                  <h2 className="text-2xl font-semibold font-[var(--font-playfair)]">{section.type}</h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{section.concepts.length} concepts</span>
                  <button onClick={() => toggleSection(section.type)} className="underline">
                    {collapsed[section.type] ? "Expand" : "Collapse"}
                  </button>
                </div>
              </div>

              {!collapsed[section.type] && (
                <div className={viewMode === "Card" ? "grid md:grid-cols-2 gap-6 p-6" : "p-6 space-y-4"}>
                  {section.concepts.map((concept) => (
                    <div
                      key={concept.name}
                      className={`rounded-2xl border border-gray-200 bg-white p-5 flex ${
                        viewMode === "List" ? "flex-col md:flex-row gap-4" : "flex-col gap-3"
                      }`}
                    >
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{section.type}</p>
                        <h3 className="text-xl font-semibold text-gray-900">{concept.name}</h3>
                        <p className="text-sm text-gray-600">{concept.tags.join(" • ")}</p>
                        <p className="text-xs text-gray-400 mt-1">{concept.date}</p>
                        <div className="flex gap-1 mt-4">
                          {[0, 1, 2, 3].map((index) => (
                            <span key={index} className="flex-1 h-1.5 rounded-full bg-gray-200" />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end justify-between text-sm">
                        <span className="text-gray-500 uppercase tracking-[0.4em]">Score</span>
                        <span className="text-2xl font-bold text-gray-900">{concept.score}%</span>
                        <button className="mt-2 px-4 py-2 rounded-full border border-gray-900 text-gray-900 text-xs uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition">
                          Launch
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

