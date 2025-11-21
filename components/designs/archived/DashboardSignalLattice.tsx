"use client"

import { useState } from "react"
import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  ChevronRight,
  Flame,
  LayoutDashboard,
  LogOut,
  PenSquare,
  Radar,
  Search,
  Settings2,
  Sparkles,
  Users,
} from "lucide-react"

type NavItem = {
  label: string
  icon: typeof Activity
  badge?: string
}

const navSections: { title: string; items: NavItem[] }[] = [
  {
    title: "Quick Actions",
    items: [
      { label: "Create Content", icon: PenSquare, badge: "Primary" },
      { label: "Signal Automations", icon: Sparkles },
    ],
  },
  {
    title: "Core",
    items: [{ label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "Content",
    items: [
      { label: "Manage Content", icon: Activity },
      { label: "Courses", icon: BookOpen },
      { label: "Templates", icon: Radar },
    ],
  },
  {
    title: "Analytics",
    items: [
      { label: "Analytics Overview", icon: BarChart3 },
      { label: "AI Insights", icon: Brain },
    ],
  },
  {
    title: "Users",
    items: [
      { label: "User Management", icon: Users },
      { label: "Organizations", icon: Building2 },
    ],
  },
]

const signatures = [
  { label: "Story drafts", value: 18, delta: "+4 ready", color: "text-emerald-300" },
  { label: "Modules live", value: 42, delta: "+3 today", color: "text-sky-300" },
  { label: "Communities engaged", value: 11, delta: "steady", color: "text-indigo-300" },
]

const radarFeed = [
  {
    title: "Residency Field Notes",
    detail: "3 segments ready to publish",
    mood: "green",
  },
  {
    title: "Courses",
    detail: "Advanced Movement track needs QA",
    mood: "amber",
  },
  {
    title: "Templates",
    detail: "2 requests pending review",
    mood: "blue",
  },
]

const aiMoments = [
  { title: "Structure parity", body: "AI ensured layout parity across 12 files" },
  { title: "Flex builder", body: "Suggested 4 modular sections for Q1 cohort" },
  { title: "Tone audit", body: "Flagged 2 articles for clarity review" },
]

export default function DashboardSignalLattice() {
  const [expanded, setExpanded] = useState(false)
  const [activeItem, setActiveItem] = useState("Dashboard")

  const tooltip = (label: string) => (
    <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
      {label}
    </span>
  )

  return (
    <div className="min-h-screen bg-[#01030a] text-gray-100">
      <div className="flex">
        <aside
          className={`flex flex-col border-r border-white/5 bg-[#02061a]/90 backdrop-blur-2xl transition-all duration-300 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white text-gray-900 flex items-center justify-center font-semibold">AH</div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-white">Alan Hirsch</p>
                  <p className="text-xs text-gray-400">Platform</p>
                </div>
              )}
            </div>
            <button
              className="h-10 w-10 rounded-xl border border-white/10 text-white flex items-center justify-center"
              onClick={() => setExpanded((prev) => !prev)}
              aria-label="Toggle sidebar"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-6 space-y-6">
            {navSections.map((section) => (
              <div key={section.title}>
                {expanded && (
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500 px-3 mb-3">{section.title}</p>
                )}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeItem === item.label
                    return (
                      <div key={item.label} className="group relative">
                        <button
                          onClick={() => setActiveItem(item.label)}
                          className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-colors ${
                            isActive ? "bg-white text-gray-900" : "text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {expanded && (
                            <div className="flex items-center justify-between w-full">
                              <span className="font-medium">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{item.badge}</span>
                              )}
                            </div>
                          )}
                        </button>
                        {!expanded && tooltip(item.label)}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 px-3 py-4 space-y-3">
            {[
              { label: "Search", icon: Search },
              { label: "Settings", icon: Settings2 },
              { label: "Sign Out", icon: LogOut },
            ].map((action) => {
              const Icon = action.icon
              return (
                <div key={action.label} className="group relative">
                  <button className="w-full flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-gray-300 hover:bg-white/10">
                    <Icon className="h-4 w-4" />
                    {expanded && <span className="font-medium">{action.label}</span>}
                  </button>
                  {!expanded && tooltip(action.label)}
                </div>
              )
            })}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-3 py-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center font-semibold">A</div>
              {expanded && (
                <div className="text-sm">
                  <p className="font-semibold text-white">alan@alanhirsch.com</p>
                  <p className="text-gray-400">User</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        <main className="flex-1 px-10 py-12 space-y-10">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#050a1e] via-[#050b29] to-[#020611] p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Alan Hirsch Platform</p>
                <h1 className="text-4xl font-semibold text-white">Signal Lattice</h1>
                <p className="text-gray-300 max-w-2xl mt-2">
                  Icon-only rail, cinematic canvas. Expand just-in-time when you need headings; collapse for uninterrupted dashboard
                  space.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-white/60">
                  Queue Review
                </button>
                <button className="rounded-full bg-white text-gray-900 px-5 py-2 text-sm font-semibold">Start Session</button>
              </div>
            </div>
          </div>

          <section className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Primary action</p>
                  <h2 className="text-2xl font-semibold text-white">Create Content</h2>
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-emerald-300">Primary</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 px-5 py-4">
                  <p className="text-sm text-gray-400">Flexibility</p>
                  <p className="text-4xl font-semibold text-white">High</p>
                </div>
                <div className="rounded-3xl border border-white/10 px-5 py-4">
                  <p className="text-sm text-gray-400">Structure</p>
                  <p className="text-4xl font-semibold text-white">Guided</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 px-5 py-4">
                <p className="text-sm text-gray-400">Next milestone</p>
                <p className="text-3xl font-semibold text-white">Draft 15 launches in 56m</p>
              </div>
              <button className="w-full rounded-2xl bg-white text-gray-900 py-3 text-sm font-semibold tracking-[0.3em] uppercase">
                Open composer
              </button>
            </div>

            <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-6 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Momentum</p>
                <Flame className="h-4 w-4 text-amber-300" />
              </div>
              <div className="space-y-4">
                {signatures.map((signature) => (
                  <div key={signature.label} className="rounded-3xl border border-white/10 px-4 py-3">
                    <p className="text-sm text-gray-400">{signature.label}</p>
                    <p className="text-3xl font-semibold text-white mt-1">{signature.value}</p>
                    <p className={`text-sm ${signature.color}`}>{signature.delta}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Radar</p>
                  <h3 className="text-2xl font-semibold text-white">Live systems</h3>
                </div>
                <button className="text-sm text-gray-300 underline">View detail</button>
              </div>
              <div className="space-y-4">
                {radarFeed.map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-3xl border border-white/10 px-5 py-4">
                    <div>
                      <p className="text-sm text-gray-400">{item.title}</p>
                      <p className="text-lg font-medium text-white">{item.detail}</p>
                    </div>
                    <span
                      className={`text-xs uppercase tracking-[0.4em] ${
                        item.mood === "green"
                          ? "text-emerald-300"
                          : item.mood === "amber"
                            ? "text-amber-300"
                            : "text-sky-300"
                      }`}
                    >
                      {item.mood}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">AI Notes</p>
                  <h3 className="text-2xl font-semibold text-white">Insights</h3>
                </div>
                <button className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.35em]">
                  Sync
                </button>
              </div>
              <div className="space-y-4">
                {aiMoments.map((moment) => (
                  <div key={moment.title} className="rounded-3xl border border-white/10 px-4 py-3">
                    <p className="text-sm text-gray-400">{moment.title}</p>
                    <p className="text-lg font-medium text-white">{moment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


