"use client"

import { useMemo, useState } from "react"
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  ChevronRight,
  Clock3,
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
  items: {
    id: string
    label: string
    icon: typeof Activity
    badge?: string
  }[]
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

const ledgerStats = [
  { label: "Activation Rate", value: "86%", detail: "↑ 4.1% vs last sprint", accent: "from-cyan-400/40 via-cyan-400/10 to-transparent" },
  { label: "Residency Health", value: "34", detail: "Teams with green status", accent: "from-emerald-400/40 via-emerald-400/10 to-transparent" },
  { label: "Scholarship Pool", value: "$412k", detail: "Collective runway • 23 weeks", accent: "from-amber-400/40 via-amber-400/10 to-transparent" },
]

const signalBands = [
  { id: "scenius", title: "Scenius Temperature", metric: "72%", delta: "+6.4%", status: "Stabilizing", color: "bg-cyan-300" },
  { id: "fellowship", title: "Fellowship Momentum", metric: "54", delta: "+3 cohorts", status: "Booking", color: "bg-rose-300" },
  { id: "donors", title: "Donor Rhythm", metric: "91%", delta: "+2.3%", status: "Warm", color: "bg-violet-300" },
]

const timelineMoments = [
  { time: "09:20", title: "Residency dossier review", detail: "8 submissions | 3 priority", chip: "Residencies" },
  { time: "12:00", title: "Movement Signals sync", detail: "Focus on Prairie Lab", chip: "Signals" },
  { time: "14:45", title: "AI Studio push", detail: "Ship ritual composer v2", chip: "AI Studio" },
  { time: "17:10", title: "Finance recalibration", detail: "Adjust trust-first splits", chip: "Finance" },
]

const initiativeQueue = [
  { id: "M-908", title: "Prairie Lab demo rail", owner: "Alan Hirsch", stage: "Prototype", hue: "text-cyan-200" },
  { id: "M-909", title: "Residency host guides", owner: "Brad Brisco", stage: "Polish", hue: "text-amber-200" },
  { id: "M-910", title: "Scholarship onboarding film", owner: "Collective Studio", stage: "Shoot", hue: "text-emerald-200" },
]

const aiInsights = [
  {
    title: "Invite window",
    detail: "Signals suggest a 36-hour window for Prairie Lab invites while attention is still compounding.",
    tag: "Signals",
  },
  { title: "Curriculum gap", detail: "Learning paths lack ritual prompts for week three micro-lessons.", tag: "Learning" },
  {
    title: "Funding nudge",
    detail: "Two donors reached trust threshold (>90). Unlock the stewardship deck for a higher close rate.",
    tag: "Finance",
  },
]

const collapsedHint = (label: string) => (
  <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
    {label}
  </span>
)

export default function DashboardGlyphLedger() {
  const [expanded, setExpanded] = useState(false)
  const [activeNav, setActiveNav] = useState("overview")
  const [selectedBand, setSelectedBand] = useState(signalBands[0].id)

  const activeBand = useMemo(() => signalBands.find((band) => band.id === selectedBand) ?? signalBands[0], [selectedBand])

  return (
    <div className="min-h-screen bg-[#03060f] text-slate-100">
      <div className="flex min-h-screen">
        <aside
          className={`flex h-screen flex-col border-r border-white/5 bg-gradient-to-b from-[#050815]/95 via-[#040612]/95 to-[#02040a]/95 backdrop-blur-2xl transition-all duration-300 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-900">
                M
              </div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-white">Movemental</p>
                  <p className="text-xs text-slate-300">Glyph Ledger</p>
                </div>
              )}
            </div>
            <button
              aria-label="Toggle navigation rail"
              onClick={() => setExpanded((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
            {navSections.map((section) => (
              <div key={section.title}>
                {expanded && <p className="mb-3 px-3 text-xs uppercase tracking-[0.4em] text-slate-300">{section.title}</p>}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeNav === item.id
                    return (
                      <div key={item.id} className="group relative">
                        <button
                          onClick={() => setActiveNav(item.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                            isActive ? "bg-white text-slate-900" : "text-slate-200 hover:bg-white/10"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {expanded && (
                            <div className="flex w-full items-center justify-between">
                              <span className="font-semibold">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-200">{item.badge}</span>
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

          <div className="border-t border-white/5 px-3 py-4">
            <div className="group relative">
              <button className="flex w-full items-center justify-center rounded-2xl border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
                <CalendarClock className="h-4 w-4" />
                {expanded && <span className="ml-2 font-medium">Schedule</span>}
              </button>
              {!expanded && collapsedHint("Schedule")}
            </div>
          </div>
        </aside>

        <main className="flex-1 px-10 py-12">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0c1224] via-[#080d1a] to-[#04060d] px-8 py-10 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.5em] text-slate-300">Movemental Console</p>
                <h1 className="text-4xl font-semibold text-white">Glyph Ledger</h1>
                <p className="max-w-2xl text-base text-slate-200">
                  Icon-first navigation leaves the canvas wide open. Expand only when you need section labels; stay inside the signal grid
                  the rest of the time.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40">
                  Share Brief
                </button>
                <button className="rounded-full border border-transparent bg-white px-5 py-2 text-sm font-semibold text-slate-900">
                  Launch Ritual
                </button>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-4 lg:grid-cols-3">
            {ledgerStats.map((stat) => (
              <article
                key={stat.label}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${stat.accent} p-6 backdrop-blur`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">{stat.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-100">{stat.detail}</p>
              </article>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[32px] border border-white/10 bg-[#050915]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Signal Bands</p>
                  <h2 className="text-2xl font-semibold text-white">Command Density</h2>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                  Export
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-5 grid gap-4">
                {signalBands.map((band) => (
                  <button
                    key={band.id}
                    onClick={() => setSelectedBand(band.id)}
                    className={`flex items-center gap-4 rounded-3xl border px-4 py-4 text-left transition ${
                      band.id === selectedBand ? "border-white bg-white/5" : "border-white/15 hover:border-white/40"
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-2xl ${band.color}`} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">{band.title}</p>
                      <p className="text-base text-slate-100">{band.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-semibold text-white">{band.metric}</p>
                      <p className="text-sm text-emerald-300">{band.delta}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Focused Insight</p>
                <p className="mt-3 text-xl font-semibold text-white">{activeBand.title}</p>
                <p className="mt-2 text-sm text-slate-100">
                  When the rail expands, highlight the same indicators. Collapsing keeps the focus on data and removes duplicate chrome.
                </p>
              </div>
            </article>

            <article className="rounded-[32px] border border-white/10 bg-[#050915]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Timeline</p>
                  <h2 className="text-2xl font-semibold text-white">Focus Moments</h2>
                </div>
                <Clock3 className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-5 space-y-4">
                {timelineMoments.map((moment) => (
                  <div key={moment.title} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-cyan-200">{moment.time}</div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-white">{moment.title}</p>
                      <p className="text-sm text-slate-200">{moment.detail}</p>
                      <span className="mt-2 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                        {moment.chip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-[32px] border border-white/10 bg-[#050915]/90 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Initiatives</p>
                  <h2 className="text-2xl font-semibold text-white">Studio Queue</h2>
                </div>
                <BarChart3 className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-4 space-y-3">
                {initiativeQueue.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">{item.id}</p>
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-200">{item.owner}</p>
                      </div>
                      <span className={`text-sm font-semibold ${item.hue}`}>{item.stage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[32px] border border-white/10 bg-[#050915]/90 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300">AI Studio</p>
                  <h2 className="text-2xl font-semibold text-white">Insights</h2>
                </div>
                <Sparkles className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-4 space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">{insight.tag}</p>
                      <ArrowUpRight className="h-4 w-4 text-slate-200" />
                    </div>
                    <p className="mt-2 text-lg font-semibold text-white">{insight.title}</p>
                    <p className="mt-1 text-sm text-slate-100">{insight.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}


