"use client"

import { useState } from "react"
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookMarked,
  CalendarRange,
  ChevronRight,
  Globe2,
  GraduationCap,
  Home,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react"

type NavSection = {
  title: string
  items: { id: string; label: string; icon: typeof Activity; badge?: string }[]
}

const navSections: NavSection[] = [
  {
    title: "Command",
    items: [
      { id: "overview", label: "Overview", icon: LayoutDashboard, badge: "LIVE" },
      { id: "signals", label: "Signals", icon: Activity },
    ],
  },
  {
    title: "Field Work",
    items: [
      { id: "movements", label: "Movements", icon: Globe2 },
      { id: "residencies", label: "Residencies", icon: Home },
    ],
  },
  {
    title: "Learning",
    items: [
      { id: "learning", label: "Learning", icon: GraduationCap },
      { id: "communities", label: "Communities", icon: Users },
    ],
  },
  {
    title: "Operations",
    items: [
      { id: "finance", label: "Finance", icon: Wallet },
      { id: "ai", label: "AI Studio", icon: Sparkles },
      { id: "settings", label: "Settings", icon: Settings },
    ],
  },
]

const runwayTiles = [
  { label: "Runway Weeks", value: "23.4", detail: "Trust-first + pledges locked", accent: "border-[#c18f4a]" },
  { label: "Active Residencies", value: "12", detail: "5 preparing to launch", accent: "border-[#7f91ff]" },
  { label: "Learning Signals", value: "408", detail: "Weekly micro-moments logged", accent: "border-[#37a18b]" },
]

const commitments = [
  { title: "Cohort Studios", metric: "78%", caption: "Lesson plans locked" },
  { title: "Residency Hosts", metric: "64", caption: "Ready for onboarding" },
  { title: "Scholarship Calls", metric: "11", caption: "Remaining this week" },
]

const eventBuckets = [
  { label: "Field Interviews", count: 6, icon: BookMarked },
  { label: "Learning Labs", count: 3, icon: GraduationCap },
  { label: "Finance Syncs", count: 2, icon: Wallet },
]

const aiThreads = [
  {
    label: "Chronicle summary",
    detail: "AI pinpoints three quotes that are carrying the story arc this week. Share inside the Chronicle doc.",
    tag: "Narrative",
  },
  {
    label: "Residency context",
    detail: "Two hosts still lack arrival rituals. Suggest migrating the Ritual Composer template.",
    tag: "Residencies",
  },
  {
    label: "Signals triage",
    detail: "Movements > Prairie Lab has a 72-hour spike. Consider surfacing it on the home hero.",
    tag: "Signals",
  },
]

const timeline = [
  { label: "Morning", slots: ["Scholarship calls", "Residency intake"] },
  { label: "Midday", slots: ["Learning lab synthesis", "Movement updates"] },
  { label: "Afternoon", slots: ["Finance review", "AI Studio pairing"] },
]

const collapsedHint = (label: string) => (
  <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
    {label}
  </span>
)

export default function DashboardScoutHorizon() {
  const [expanded, setExpanded] = useState(false)
  const [activeNav, setActiveNav] = useState("overview")

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-gray-900">
      <div className="flex min-h-screen">
        <aside
          className={`flex h-screen flex-col border-r border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-900 text-base font-semibold text-white">M</div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-gray-900">Movemental</p>
                  <p className="text-xs text-gray-600">Scout Horizon</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              aria-label="Toggle navigation rail"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:bg-gray-50"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
            {navSections.map((section) => (
              <div key={section.title}>
                {expanded && <p className="mb-3 px-3 text-xs uppercase tracking-[0.4em] text-gray-600">{section.title}</p>}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeNav === item.id
                    return (
                      <div key={item.id} className="group relative">
                        <button
                          onClick={() => setActiveNav(item.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                            isActive ? "bg-gray-900 text-white" : "text-gray-800 hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {expanded && (
                            <div className="flex w-full items-center justify-between">
                              <span className="font-semibold">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600">{item.badge}</span>
                              )}
                            </div>
                          )}
                        </button>
                        {!expanded && collapsedHint(item.label)}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 px-10 py-12">
          <div className="rounded-[36px] border border-gray-200 bg-white px-8 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-600">Movemental Dashboard</p>
                <h1 className="text-4xl font-semibold text-gray-900">Scout Horizon</h1>
                <p className="max-w-2xl text-base text-gray-700">
                  Icon-only by default, so research, timeline, and operations have the full pane. Expand the rail when you need headings.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                  Share digest
                </button>
                <button className="rounded-full border border-transparent bg-gray-900 px-5 py-2 text-sm font-semibold text-white">
                  New insight
                </button>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-4 lg:grid-cols-3">
            {runwayTiles.map((tile) => (
              <article key={tile.label} className={`rounded-3xl border ${tile.accent} bg-white p-6 shadow-sm`}>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">{tile.label}</p>
                <p className="mt-4 text-4xl font-semibold text-gray-900">{tile.value}</p>
                <p className="mt-2 text-sm text-gray-700">{tile.detail}</p>
              </article>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-600">Week cadence</p>
                  <h2 className="text-2xl font-semibold text-gray-900">Commitments</h2>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-700" />
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {commitments.map((commitment) => (
                  <div key={commitment.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-600">{commitment.title}</p>
                    <p className="mt-3 text-3xl font-semibold text-gray-900">{commitment.metric}</p>
                    <p className="mt-1 text-sm text-gray-700">{commitment.caption}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-600">Timeline grid</p>
                    <p className="text-lg font-semibold text-gray-900">Minimal arrow expands the same nav structure</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-gray-700" />
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {timeline.map((slot) => (
                    <div key={slot.label} className="rounded-2xl border border-dashed border-gray-300 p-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-600">{slot.label}</p>
                      <ul className="mt-3 space-y-1 text-sm text-gray-800">
                        {slot.slots.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-600">Schedule</p>
                  <h2 className="text-2xl font-semibold text-gray-900">Event Buckets</h2>
                </div>
                <CalendarRange className="h-5 w-5 text-gray-700" />
              </div>
              <div className="mt-5 space-y-4">
                {eventBuckets.map((bucket) => {
                  const Icon = bucket.icon
                  return (
                    <div key={bucket.label} className="flex items-center justify-between rounded-3xl border border-gray-200 bg-gray-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-gray-900">{bucket.label}</p>
                          <p className="text-sm text-gray-700">Upcoming</p>
                        </div>
                      </div>
                      <span className="text-3xl font-semibold text-gray-900">{bucket.count}</span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-600">AI threads</p>
                <div className="mt-4 space-y-4">
                  {aiThreads.map((thread) => (
                    <div key={thread.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">
                        <span>{thread.tag}</span>
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="mt-2 text-base font-semibold text-gray-900">{thread.label}</p>
                      <p className="mt-1 text-sm text-gray-700">{thread.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section className="mt-8 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-600">Narrative cadence</p>
                <h2 className="text-2xl font-semibold text-gray-900">AI Studio Threads</h2>
              </div>
              <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gray-900">
                Expand rail
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {aiThreads.map((thread) => (
                <article key={`${thread.label}-card`} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-600">{thread.tag}</p>
                  <p className="mt-3 text-lg font-semibold text-gray-900">{thread.label}</p>
                  <p className="mt-1 text-sm text-gray-700">{thread.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


