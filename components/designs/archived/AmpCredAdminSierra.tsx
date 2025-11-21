"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

const sierraEvents = [
  { id: "sr-1", title: "Assistant QA", day: 4, time: "09:30", lane: "AI", color: "bg-violet-500" },
  { id: "sr-2", title: "Docs Sprint", day: 9, time: "11:00", lane: "Docs", color: "bg-blue-500" },
  { id: "sr-3", title: "Calendar Pilot", day: 14, time: "15:30", lane: "Calendar", color: "bg-teal-400" },
  { id: "sr-4", title: "Residency Studio", day: 21, time: "13:00", lane: "Residency", color: "bg-rose-400" },
  { id: "sr-5", title: "Finance Sync", day: 27, time: "17:00", lane: "Finance", color: "bg-amber-400" },
]

const sierraDocs = [
  { id: "sdoc-1", title: "Admin Sierra - Runbook", type: "Runbook", status: "Signed" },
  { id: "sdoc-2", title: "Calendar Modal Patterns", type: "Pattern", status: "Draft" },
  { id: "sdoc-3", title: "Form Component Library", type: "Library", status: "Approved" },
  { id: "sdoc-4", title: "Docs Sorting Spec", type: "Spec", status: "In Review" },
]

export default function AmpCredAdminSierra() {
  const [calendarMode, setCalendarMode] = useState<"Month" | "Week" | "Agenda">("Month")
  const [modalVisible, setModalVisible] = useState(false)
  const [docFilter, setDocFilter] = useState("All")
  const [docText, setDocText] = useState("")

  const docsResult = useMemo(() => {
    return sierraDocs.filter((doc) => {
      const matchesFilter = docFilter === "All" || doc.status === docFilter
      const matchesSearch = doc.title.toLowerCase().includes(docText.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [docFilter, docText])

  const monthGrid = Array.from({ length: 28 }, (_, i) => i + 1)
  const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const agendaList = sierraEvents.sort((a, b) => a.day - b.day)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0B15] via-[#150F26] to-[#050309] text-gray-100">
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
            <span>AmpCred Admin · Sierra Array</span>
            <span>•</span>
            <span>Hero uses gradient geometry, not portraits</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-gray-100">
                Sierra hero surfaces admin-critical intel: multi-view calendars, custom forms, docs indexes.
              </h1>
              <p className="text-lg text-gray-200">
                Perfect for rapid status. Hero callouts highlight AmpCred telemetry, queue counts, and doc freshness with zero headshots.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400">AmpCred</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">825</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Calendar</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">4 modes</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Docs</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">+280</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-white/15 bg-white/5 p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {(["Month", "Week", "Agenda"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setCalendarMode(mode)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  calendarMode === mode ? "bg-white text-gray-900 border-white" : "border-white/20 text-gray-200"
                }`}
              >
                {mode}
              </button>
            ))}
            <button
              onClick={() => setModalVisible(true)}
              className="ml-auto px-4 py-2 rounded-full border border-violet-400 text-violet-200 hover:bg-violet-400 hover:text-gray-900"
            >
              New entry
            </button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#090818]/80 p-6">
            {calendarMode === "Month" && (
              <div className="grid grid-cols-7 gap-4">
                {monthGrid.map((day) => {
                  const events = sierraEvents.filter((evt) => evt.day === day)
                  return (
                    <div key={day} className="border border-white/10 rounded-2xl p-3">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{day}</span>
                        <span>{events.length ? `${events.length} evt` : ""}</span>
                      </div>
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
            {calendarMode === "Week" && (
              <div className="grid grid-cols-5 gap-4">
                {weekNames.map((name, idx) => {
                  const dayNumber = idx * 3 + 2
                  const events = sierraEvents.filter((evt) => Math.abs(evt.day - dayNumber) <= 1)
                  return (
                    <div key={name} className="border border-white/10 rounded-2xl p-4 space-y-2">
                      <p className="text-sm text-gray-400">
                        {name} · day {dayNumber}
                      </p>
                      {events.length ? (
                        events.map((evt) => (
                          <div key={evt.id} className="rounded-xl border border-white/10 bg-white/10 p-3">
                            <p className="text-sm font-semibold text-gray-100">{evt.title}</p>
                            <p className="text-xs text-gray-400">{evt.time} · {evt.lane}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500">No items</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
            {calendarMode === "Agenda" && (
              <div className="space-y-3">
                {agendaList.map((evt) => (
                  <div key={evt.id} className="flex items-center gap-4 border border-white/10 rounded-2xl p-4">
                    <span className="text-sm text-gray-400 min-w-[80px]">Day {evt.day}</span>
                    <span className="text-sm text-gray-400 min-w-[80px]">{evt.time}</span>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-100">{evt.title}</p>
                      <p className="text-xs text-gray-400">{evt.lane}</p>
                    </div>
                    <span className={`${evt.color} text-xs text-gray-900 font-semibold px-3 py-1 rounded-full`}>{evt.lane}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Custom form</span>
              <span>Varied UI components</span>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Form name"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <select className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100">
                  <option>Connect to calendar</option>
                  <option>Docs request</option>
                </select>
                <input type="date" className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                {["Needs dev", "Needs design", "Needs ops"].map((pill) => (
                  <button key={pill} className="rounded-2xl border border-white/20 px-3 py-2 text-gray-200">
                    {pill}
                  </button>
                ))}
              </div>
              <textarea
                rows={4}
                placeholder="Explain the request"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="flex gap-3">
                <button className="flex-1 rounded-2xl border border-white text-gray-900 bg-white px-4 py-3 font-semibold">Send</button>
                <button className="rounded-2xl border border-white/30 text-gray-200 px-4 py-3">Add attachments</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Docs section</span>
              <span>Search + status filters</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                value={docText}
                onChange={(e) => setDocText(e.target.value)}
                placeholder="Search docs"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-500"
              />
              <select
                value={docFilter}
                onChange={(e) => setDocFilter(e.target.value)}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100"
              >
                <option>All</option>
                <option>Signed</option>
                <option>Draft</option>
                <option>Approved</option>
                <option>In Review</option>
              </select>
            </div>
            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
              {docsResult.map((doc) => (
                <div key={doc.id} className="border border-white/10 rounded-2xl p-4 bg-[#0b0f1f]/80">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-100">{doc.title}</p>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        doc.status === "Signed"
                          ? "border-emerald-400 text-emerald-200"
                          : doc.status === "Draft"
                            ? "border-yellow-400 text-yellow-200"
                            : doc.status === "Approved"
                              ? "border-cyan-400 text-cyan-200"
                              : "border-white/30 text-gray-200"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{doc.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {modalVisible && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-40 px-4">
          <div className="max-w-md w-full rounded-[32px] border border-white/20 bg-[#070812] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Add calendar entry</p>
              <button onClick={() => setModalVisible(false)} className="text-sm text-gray-400 hover:text-gray-100">
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
              placeholder="Details"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400"
            />
            <div className="flex gap-3">
              <button className="flex-1 rounded-2xl border border-violet-400 text-violet-200 px-4 py-3 hover:bg-violet-400 hover:text-gray-900">
                Create event
              </button>
              <button onClick={() => setModalVisible(false)} className="rounded-2xl border border-white/20 px-4 py-3 text-gray-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

