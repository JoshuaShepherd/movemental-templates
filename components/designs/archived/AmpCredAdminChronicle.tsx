"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

type CalendarEvent = {
  id: string
  title: string
  day: number
  time: string
  track: string
  color: string
}

const calendarEvents: CalendarEvent[] = [
  { id: "ev-1", title: "AmpCred Diagnostics", day: 3, time: "09:00", track: "Systems", color: "bg-emerald-500" },
  { id: "ev-2", title: "Residency Sync", day: 5, time: "13:00", track: "Residency", color: "bg-sky-500" },
  { id: "ev-3", title: "AI Trust Review", day: 12, time: "10:30", track: "AI", color: "bg-purple-500" },
  { id: "ev-4", title: "Calendar QA", day: 18, time: "15:00", track: "Ops", color: "bg-rose-500" },
  { id: "ev-5", title: "Docs Refresh", day: 24, time: "11:00", track: "Docs", color: "bg-amber-500" },
]

const docsLibrary = [
  { id: "doc-1", title: "AmpCred 1000 Overview", category: "Strategy", updated: "2 days ago", badges: ["PDF", "Deck"] },
  { id: "doc-2", title: "Calendar Playbook", category: "Systems", updated: "5 days ago", badges: ["Guide"] },
  { id: "doc-3", title: "Residency Intake SOP", category: "Operations", updated: "1 day ago", badges: ["SOP"] },
  { id: "doc-4", title: "AI Transparency Checklist", category: "AI", updated: "4 days ago", badges: ["Checklist"] },
  { id: "doc-5", title: "Docs Taxonomy", category: "Knowledge", updated: "7 hours ago", badges: ["Schema"] },
]

const formTracks = ["Systems", "Residency", "AI", "Docs", "Finance"]

export default function AmpCredAdminChronicle() {
  const [calendarView, setCalendarView] = useState<"Month" | "Week" | "Agenda">("Month")
  const [showModal, setShowModal] = useState(false)
  const [formTrack, setFormTrack] = useState("Systems")
  const [docSearch, setDocSearch] = useState("")
  const [docSort, setDocSort] = useState<"recent" | "alpha">("recent")

  const filteredDocs = useMemo(() => {
    const query = docSearch.trim().toLowerCase()
    const sorted = [...docsLibrary]
    sorted.sort((a, b) => {
      if (docSort === "alpha") return a.title.localeCompare(b.title)
      return b.updated.localeCompare(a.updated)
    })
    return sorted.filter((doc) => doc.title.toLowerCase().includes(query) || doc.category.toLowerCase().includes(query))
  }, [docSearch, docSort])

  const monthDays = Array.from({ length: 28 }, (_, i) => i + 1)
  const agendaEvents = calendarEvents.sort((a, b) => a.day - b.day)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060c] via-[#0c1627] to-[#03050a] text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm rounded-full border border-white/30 bg-white/10 text-gray-100 hover:bg-white hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-14">
        <header className="rounded-[40px] border border-white/15 bg-white/5 backdrop-blur p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.6em] text-gray-400">
            <span>AmpCred Admin · Chronicle Console</span>
            <span>•</span>
            <span>No portraits, all telemetry</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-100 leading-[1.05]">
                Orchestrate calendars, forms, and documentation from a single luminous hero console.
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Designed for admin teams that need Alan → Brad → Josh scale without headshots. The hero houses signals, the calendar supports
                every view, the form flexes with real UI components, and docs stay sortable + searchable.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-3xl border border-white/20 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">AmpCred</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">820</p>
              </div>
              <div className="rounded-3xl border border-white/20 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Leaders</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">100</p>
              </div>
              <div className="rounded-3xl border border-white/20 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Docs</p>
                <p className="text-3xl font-semibold text-gray-100 mt-2">312</p>
              </div>
            </div>
          </div>
        </header>

        <section className="rounded-[36px] border border-white/15 bg-white/5 p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Calendar Matrix</p>
              <h2 className="text-3xl font-semibold text-gray-100">State-of-the-art calendar with modal intake</h2>
            </div>
            <div className="ml-auto flex flex-wrap gap-3">
              {(["Month", "Week", "Agenda"] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setCalendarView(view)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    calendarView === view ? "bg-white text-gray-900 border-white" : "text-gray-200 border-white/20"
                  }`}
                >
                  {view}
                </button>
              ))}
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 rounded-full text-sm border border-emerald-400 text-emerald-200 hover:bg-emerald-400 hover:text-gray-900"
              >
                Add Event
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#050d1b]/70 p-6">
            {calendarView === "Month" && (
              <div className="grid grid-cols-7 gap-4">
                {monthDays.map((day) => {
                  const dayEvents = calendarEvents.filter((evt) => evt.day === day)
                  return (
                    <div key={day} className="border border-white/10 rounded-2xl p-4 min-h-[120px]">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{day}</span>
                        <span>{dayEvents.length ? `${dayEvents.length} evt` : ""}</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        {dayEvents.map((evt) => (
                          <div key={evt.id} className={`text-xs px-2 py-1 rounded-full ${evt.color} text-white`}>
                            {evt.time} · {evt.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {calendarView === "Week" && (
              <div className="grid grid-cols-5 gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((dayName, idx) => {
                  const currentDay = idx * 2 + 3
                  const dayEvents = calendarEvents.filter((evt) => Math.abs(evt.day - currentDay) <= 1)
                  return (
                    <div key={dayName} className="border border-white/10 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{dayName}</span>
                        <span>Day {currentDay}</span>
                      </div>
                      {dayEvents.length ? (
                        dayEvents.map((evt) => (
                          <div key={evt.id} className="rounded-xl border border-white/10 bg-white/10 p-3 space-y-1">
                            <p className="text-sm font-semibold text-gray-100">{evt.title}</p>
                            <p className="text-xs text-gray-300">{evt.time} · {evt.track}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500">No sessions</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {calendarView === "Agenda" && (
              <div className="space-y-3">
                {agendaEvents.map((evt) => (
                  <div key={evt.id} className="flex items-center gap-4 border border-white/10 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 min-w-[80px]">Day {evt.day}</div>
                    <div className="text-sm text-gray-300 min-w-[80px]">{evt.time}</div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-100">{evt.title}</p>
                      <p className="text-xs text-gray-400">{evt.track}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${evt.color} text-white`}>{evt.track}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Ops Intake Form</span>
              <span>•</span>
              <span>Custom UI components</span>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-gray-400">Request title</label>
                <input
                  type="text"
                  placeholder="Ex: Launch residency cohort calendar"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-gray-400">Track</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {formTracks.map((track) => (
                    <button
                      key={track}
                      onClick={() => setFormTrack(track)}
                      className={`px-4 py-2 rounded-full border ${
                        formTrack === track ? "bg-white text-gray-900 border-white" : "border-white/20 text-gray-200"
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-gray-400">Priority</label>
                  <select className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100">
                    <option>Critical</option>
                    <option>High</option>
                    <option>Standard</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-gray-400">Due date</label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-gray-400">Description</label>
                <textarea
                  rows={4}
                  placeholder="Provide context, blockers, and desired outcomes…"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {["Need new calendar view", "Docs taxonomy update", "Integrate AI assistant"].map((chip) => (
                  <span key={chip} className="px-4 py-2 rounded-full border border-white/20 text-sm text-gray-200">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-2xl border border-white text-gray-900 bg-white font-semibold">Submit Request</button>
                <button className="px-5 py-3 rounded-2xl border border-white/40 text-gray-200">Save Draft</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[32px] border border-white/15 bg-white/5 p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400">
              <span>Documentation Vault</span>
              <span>•</span>
              <span>Sortable + searchable</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                placeholder="Search documentation"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-500"
              />
              <select
                value={docSort}
                onChange={(e) => setDocSort(e.target.value as "recent" | "alpha")}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-gray-100"
              >
                <option value="recent">Sort · Most recent</option>
                <option value="alpha">Sort · Alphabetical</option>
              </select>
            </div>
            <div className="space-y-3 max-h-[360px] overflow-y-auto pr-2">
              {filteredDocs.map((doc) => (
                <div key={doc.id} className="border border-white/10 rounded-2xl p-4 bg-[#0b1426]/70">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-lg font-semibold text-gray-100">{doc.title}</p>
                    <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-200">{doc.category}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Updated {doc.updated}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {doc.badges.map((badge) => (
                      <span key={badge} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-200">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-40 px-4">
          <div className="max-w-lg w-full rounded-[32px] border border-white/20 bg-[#04070f] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Create event</p>
                <h3 className="text-2xl font-semibold text-gray-100 mt-1">Add calendar entry</h3>
              </div>
              <button onClick={() => setShowModal(false)} className="text-sm text-gray-400 hover:text-gray-100">
                Close
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Event title"
                className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input type="date" className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-gray-100" />
                <input type="time" className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-gray-100" />
              </div>
              <select className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-gray-100">
                {formTracks.map((track) => (
                  <option key={track}>{track}</option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="Details, presenters, links…"
                className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-400"
              />
              <div className="flex gap-3 pt-2">
                <button className="flex-1 rounded-2xl border border-emerald-400 text-emerald-200 px-4 py-3 hover:bg-emerald-400 hover:text-gray-900">
                  Save Event
                </button>
                <button onClick={() => setShowModal(false)} className="rounded-2xl border border-white/20 px-4 py-3 text-gray-300">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

