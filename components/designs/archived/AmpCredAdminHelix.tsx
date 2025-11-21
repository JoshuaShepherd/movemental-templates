"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

const helixEvents = [
  { id: "hx-1", title: "Global Calendar QA", day: 2, time: "08:30", type: "Calendar", color: "bg-amber-400" },
  { id: "hx-2", title: "Residency Sprint Demo", day: 7, time: "14:00", type: "Residency", color: "bg-emerald-500" },
  { id: "hx-3", title: "AI Audit", day: 15, time: "10:00", type: "AI", color: "bg-cyan-400" },
  { id: "hx-4", title: "Docs Migration", day: 19, time: "12:00", type: "Docs", color: "bg-fuchsia-500" },
  { id: "hx-5", title: "Finance Review", day: 26, time: "16:30", type: "Finance", color: "bg-orange-500" },
]

const helixDocs = [
  { id: "hdoc-1", title: "AmpCred Admin Charter", tags: ["Charter", "PDF"], owner: "Ops", updated: "Today" },
  { id: "hdoc-2", title: "Calendar Systems Spec", tags: ["Spec"], owner: "Systems", updated: "Yesterday" },
  { id: "hdoc-3", title: "Custom Form Library", tags: ["UI Library"], owner: "Design", updated: "2 days" },
  { id: "hdoc-4", title: "Doc Taxonomy Matrix", tags: ["Taxonomy"], owner: "Knowledge", updated: "5 days" },
]

export default function AmpCredAdminHelix() {
  const [view, setView] = useState<"Month" | "Week" | "Agenda">("Month")
  const [modalOpen, setModalOpen] = useState(false)
  const [docQuery, setDocQuery] = useState("")
  const [docOwner, setDocOwner] = useState("All")

  const docsFiltered = useMemo(() => {
    return helixDocs.filter((doc) => {
      const matchesQuery = doc.title.toLowerCase().includes(docQuery.toLowerCase())
      const matchesOwner = docOwner === "All" || doc.owner === docOwner
      return matchesQuery && matchesOwner
    })
  }, [docQuery, docOwner])

  const monthCells = Array.from({ length: 30 }, (_, i) => i + 1)
  const agenda = helixEvents.sort((a, b) => a.day - b.day)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070d12] via-[#152126] to-[#040607] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm rounded-full border border-white/30 bg-white/10 text-gray-100 hover:bg-white hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-12">
        <section className="rounded-[44px] border border-white/15 bg-white/5 backdrop-blur p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400">
            <span>AmpCred Admin · Helix Grid</span>
            <span>•</span>
            <span>Hero without portraits</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-100 leading-[1.05]">
                The helix hero mixes timeline ribbons, AmpCred telemetry, and admin toggles—with zero headshots.
              </h1>
              <p className="text-lg text-gray-200">
                Every control routes directly to admin needs: calendars, custom forms, documentation. No fluff, just luminous data.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 rounded-full border border-white/30">AmpCred 810</span>
                <span className="px-4 py-2 rounded-full border border-white/30">Calendar in-sync</span>
                <span className="px-4 py-2 rounded-full border border-white/30">Docs indexed</span>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {["Calendar Modes", "Form Builder", "Docs Engine", "GSAP Animations"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/20 bg-white/10 p-4 text-center text-sm text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-white/15 bg-white/5 p-8 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            {(["Month", "Week", "Agenda"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setView(option)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  view === option ? "bg-white text-gray-900 border-white" : "text-gray-200 border-white/20"
                }`}
              >
                {option}
              </button>
            ))}
            <button
              onClick={() => setModalOpen(true)}
              className="ml-auto px-4 py-2 rounded-full border border-cyan-400 text-cyan-200 hover:bg-cyan-400 hover:text-gray-900"
            >
              Add to calendar
            </button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#091015]/80 p-6 min-h-[320px]">
            {view === "Month" && (
              <div className="grid grid-cols-6 gap-4">
                {monthCells.map((day) => {
                  const events = helixEvents.filter((evt) => evt.day === day)
                  return (
                    <div key={day} className="border border-white/10 rounded-2xl p-3">
                      <p className="text-sm text-gray-400">{day}</p>
                      <div className="mt-2 space-y-1">
                        {events.map((evt) => (
                          <div key={evt.id} className={`${evt.color} text-xs text-gray-900 font-semibold px-2 py-1 rounded-full`}>
                            {evt.time} · {evt.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
            {view === "Week" && (
              <div className="grid grid-cols-4 gap-4">
                {["Mon", "Tue", "Wed", "Thu"].map((day, idx) => {
                  const dayNumber = idx * 3 + 1
                  const evts = helixEvents.filter((evt) => Math.abs(evt.day - dayNumber) <= 1)
                  return (
                    <div key={day} className="border border-white/10 rounded-2xl p-4 space-y-2">
                      <p className="text-sm text-gray-400">
                        {day} · day {dayNumber}
                      </p>
                      {evts.length ? (
                        evts.map((evt) => (
                          <div key={evt.id} className="rounded-xl border border-white/10 bg-white/10 p-3">
                            <p className="text-sm font-semibold text-gray-100">{evt.title}</p>
                            <p className="text-xs text-gray-400">{evt.time} · {evt.type}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500">Focus block</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
            {view === "Agenda" && (
              <div className="space-y-3">
                {agenda.map((evt) => (
                  <div key={evt.id} className="flex items-center gap-4 border border-white/10 rounded-2xl p-4">
                    <span className="text-sm text-gray-400 min-w-[70px]">Day {evt.day}</span>
                    <span className="text-sm text-gray-400 min-w-[70px]">{evt.time}</span>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-100">{evt.title}</p>
                      <p className="text-xs text-gray-400">{evt.type}</p>
                    </div>
                    <span className={`${evt.color} text-xs text-gray-900 font-semibold px-3 py-1 rounded-full`}>{evt.type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-[32px] border border-white/15 bg-white/5 p-7 space-y-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Custom form</span>
              <span>Helix intake</span>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Request name"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <select className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100">
                  <option>Systems</option>
                  <option>Residency</option>
                  <option>AI</option>
                </select>
                <select className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100">
                  <option>Critical</option>
                  <option>High</option>
                  <option>Normal</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Describe the request, share context, add links."
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="flex gap-3 pt-2">
                <button className="flex-1 rounded-2xl border border-white text-gray-900 bg-white px-4 py-3 font-semibold">Submit</button>
                <button className="rounded-2xl border border-white/30 text-gray-200 px-4 py-3">Attach</button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-7 rounded-[32px] border border-white/15 bg-white/5 p-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Docs section</span>
              <span>Sortable · Searchable</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <input
                value={docQuery}
                onChange={(e) => setDocQuery(e.target.value)}
                placeholder="Search docs"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-500"
              />
              <select
                value={docOwner}
                onChange={(e) => setDocOwner(e.target.value)}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100"
              >
                <option>All</option>
                <option>Ops</option>
                <option>Systems</option>
                <option>Design</option>
                <option>Knowledge</option>
              </select>
              <button className="rounded-2xl border border-white/20 text-sm text-gray-200 px-4 py-3">Download filtered</button>
            </div>
            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-2">
              {docsFiltered.map((doc) => (
                <div key={doc.id} className="border border-white/10 rounded-2xl p-4 bg-[#0a1018]/80">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-100">{doc.title}</p>
                    <span className="text-xs text-gray-400">{doc.updated}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{doc.owner}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-40 px-4">
          <div className="max-w-md w-full rounded-[32px] border border-white/20 bg-[#05090f] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Calendar modal</p>
              <button onClick={() => setModalOpen(false)} className="text-sm text-gray-400 hover:text-gray-100">
                Close
              </button>
            </div>
            <input type="text" placeholder="Event title" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100" />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100" />
              <input type="time" className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100" />
            </div>
            <textarea
              rows={3}
              placeholder="Description"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100"
            />
            <div className="flex gap-3">
              <button className="flex-1 rounded-2xl border border-cyan-400 text-cyan-200 px-4 py-3 hover:bg-cyan-400 hover:text-gray-900">
                Save event
              </button>
              <button onClick={() => setModalOpen(false)} className="rounded-2xl border border-white/20 px-4 py-3 text-gray-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

