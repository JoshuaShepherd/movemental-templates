"use client"

import { useMemo, useState } from "react"
import {
  Activity,
  ArrowRight,
  Brush,
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

const panels = [
  { label: "Movement velocity", value: "128%", detail: "vs rolling 30 day", gradient: "from-[#6bd9ff] via-[#4b7dff] to-[#0a0f1f]" },
  { label: "Residency roster", value: "42 teams", detail: "8 waiting for slots", gradient: "from-[#ffb347] via-[#ffcc33] to-[#1f1300]" },
  { label: "Learning cadence", value: "312 sparks", detail: "Signals captured this week", gradient: "from-[#9dfbaa] via-[#4ade80] to-[#041409]" },
]

const studioTiles = [
  { title: "Ritual Composer", detail: "Generates onboarding rituals", status: "v2 shipping", color: "bg-gradient-to-br from-[#fdf2ff] to-[#fbe4ff]" },
  { title: "Residency Ledger", detail: "Tracks trust splits & host runway", status: "Live", color: "bg-gradient-to-br from-[#e0f2ff] to-[#f0fbff]" },
  { title: "Scholarship Pulses", detail: "Monitors call backlog + priority", status: "Prototype", color: "bg-gradient-to-br from-[#fef7e5] to-[#fff5d7]" },
]

const fieldMoments = [
  { label: "Signals", description: "Prairie Lab attention spike • 42 hrs", action: "Surface in hero" },
  { label: "Residencies", description: "Four hosts need artifact kits", action: "Send kit" },
  { label: "Finance", description: "Trust pool unlocked +$42k", action: "Reallocate" },
]

const aiNotes = [
  {
    id: "note-1",
    title: "Icon rail defaults",
    body: "Keep nav collapsed for 74% of interactions. Expand on hover or arrow so the dashboard canvas remains wide.",
    tag: "UX",
  },
  {
    id: "note-2",
    title: "Content parity",
    body: "When expanded, mirror the icon order exactly—Command, Field Work, Learning, Operations.",
    tag: "Systems",
  },
  {
    id: "note-3",
    title: "Tooltip etiquette",
    body: "Tooltips hold the label, not the badge. Minimal means zero redundant chrome when the panel is collapsed.",
    tag: "Patterns",
  },
]

const collapsedHint = (label: string) => (
  <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
    {label}
  </span>
)

export default function DashboardLumenArc() {
  const [expanded, setExpanded] = useState(false)
  const [activeNav, setActiveNav] = useState("overview")
  const [activePanel, setActivePanel] = useState("Movement velocity")

  const featuredPanel = useMemo(() => panels.find((panel) => panel.label === activePanel) ?? panels[0], [activePanel])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#060b1a] to-[#090b18] text-white">
      <div className="flex min-h-screen">
        <aside
          className={`flex h-screen flex-col border-r border-white/5 bg-black/30 backdrop-blur-2xl transition-all duration-300 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-900">M</div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-white">Movemental</p>
                  <p className="text-xs text-slate-200">Lumen Arc</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              aria-label="Toggle navigation rail"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
            {navSections.map((section) => (
              <div key={section.title}>
                {expanded && <p className="mb-3 px-3 text-xs uppercase tracking-[0.4em] text-slate-200">{section.title}</p>}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeNav === item.id
                    return (
                      <div key={item.id} className="group relative">
                        <button
                          onClick={() => setActiveNav(item.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                            isActive ? "bg-white text-slate-900" : "text-slate-100 hover:bg-white/10"
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
        </aside>

        <main className="flex-1 px-10 py-12">
          <div className="rounded-[40px] border border-white/10 bg-white/5 px-8 py-10 shadow-[0_45px_140px_rgba(0,0,0,0.55)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.5em] text-slate-200">Movemental Console</p>
                <h1 className="text-4xl font-semibold text-white">Lumen Arc</h1>
                <p className="max-w-2xl text-base text-slate-100">
                  Icon-only is the default. Minimal arrow expands to headings when collaborators need orientation; otherwise the full screen
                  stays dedicated to cards, rituals, and signals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white hover:border-white/50">
                  Invite collaborator
                </button>
                <button className="rounded-full border border-transparent bg-white px-5 py-2 text-sm font-semibold text-slate-900">
                  Start ritual
                </button>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-4 lg:grid-cols-3">
            {panels.map((panel) => (
              <button
                key={panel.label}
                onClick={() => setActivePanel(panel.label)}
                className={`rounded-3xl border border-white/15 bg-gradient-to-br ${panel.gradient} p-6 text-left transition ${
                  activePanel === panel.label ? "ring-2 ring-white/70" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/90">{panel.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{panel.value}</p>
                <p className="mt-2 text-sm text-white/90">{panel.detail}</p>
              </button>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[36px] border border-white/10 bg-[#060a16]/90 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Featured panel</p>
                  <h2 className="text-2xl font-semibold text-white">{featuredPanel.label}</h2>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-100">
                <p className="text-sm">
                  {featuredPanel.value} • {featuredPanel.detail}
                </p>
                <p className="mt-2 text-base text-white">
                  Minimal nav rails keep the cinematic feel. Expand when new collaborators arrive or when creating walkthroughs.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {studioTiles.map((tile) => (
                  <div key={tile.title} className={`rounded-3xl border border-white/10 ${tile.color} p-4 text-slate-900`}>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-600">{tile.status}</p>
                    <p className="mt-2 text-lg font-semibold">{tile.title}</p>
                    <p className="mt-1 text-sm text-slate-700">{tile.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[36px] border border-white/10 bg-[#060a16]/90 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Field moments</p>
                  <h2 className="text-2xl font-semibold text-white">Quiet status board</h2>
                </div>
                <Brush className="h-5 w-5 text-slate-200" />
              </div>
              <div className="mt-4 space-y-4">
                {fieldMoments.map((moment) => (
                  <div key={moment.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                      <span>{moment.label}</span>
                      <span>{moment.action}</span>
                    </div>
                    <p className="mt-2 text-base text-white">{moment.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-8 rounded-[36px] border border-white/10 bg-[#060a16]/90 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-200">AI studio</p>
                <h2 className="text-2xl font-semibold text-white">Tooltips + rail guidance</h2>
              </div>
              <Sparkles className="h-5 w-5 text-slate-200" />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {aiNotes.map((note) => (
                <article key={note.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">{note.tag}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{note.title}</p>
                  <p className="mt-1 text-sm text-slate-100">{note.body}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


