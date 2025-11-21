"use client"

import { useMemo, useState } from "react"
import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  Calendar,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  PenSquare,
  Plus,
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

const navBlueprint: { title: string; items: NavItem[] }[] = [
  {
    title: "Quick Actions",
    items: [
      { label: "Create Content", icon: PenSquare, badge: "Primary" },
      { label: "Idea Vault", icon: Sparkles },
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
      { label: "Templates", icon: Calendar },
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

const sprintCards = [
  { label: "Drafts", value: 12, caption: "in review", color: "text-blue-600" },
  { label: "Lessons", value: 6, caption: "record today", color: "text-indigo-600" },
  { label: "Templates", value: 18, caption: "ready to ship", color: "text-emerald-600" },
]

const collaborators = [
  { name: "Naomi", task: "Outline chapter nine", status: "In flight" },
  { name: "Jonas", task: "Audit cohort prompts", status: "Review" },
  { name: "Priya", task: "Template QA sprint", status: "Complete" },
]

const timeline = [
  { time: "09:00", title: "Residency Mentoring", detail: "Live for 42 people" },
  { time: "12:00", title: "Content Systems Standup", detail: "AI + humans" },
  { time: "15:30", title: "Template Builder Sync", detail: "Focus on icon rail" },
]

export default function DashboardOrbitPane() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState("Dashboard")

  const collapsedTooltip = useMemo(
    () => (label: string) => (
      <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 rounded-full bg-gray-900 text-white text-xs px-3 py-1 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {label}
      </span>
    ),
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f0ff] via-white to-[#eef8ff] text-gray-900">
      <div className="flex">
        <aside
          className={`flex flex-col border-r border-gray-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200/70">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-semibold">AH</div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-gray-900">Alan Hirsch</p>
                  <p className="text-xs text-gray-500">Platform</p>
                </div>
              )}
            </div>
            <button
              className="h-10 w-10 rounded-xl border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-100"
              onClick={() => setExpanded((prev) => !prev)}
              aria-label="Toggle sidebar"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-6 space-y-6">
            {navBlueprint.map((section) => (
              <div key={section.title}>
                {expanded && (
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500 px-3 mb-3">{section.title}</p>
                )}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = active === item.label
                    return (
                      <div key={item.label} className="group relative">
                        <button
                          onClick={() => setActive(item.label)}
                          className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-colors ${
                            isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {expanded && (
                            <div className="flex items-center justify-between w-full">
                              <span className="font-medium">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">{item.badge}</span>
                              )}
                            </div>
                          )}
                        </button>
                        {!expanded && collapsedTooltip(item.label)}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200/70 px-3 py-4 space-y-3">
            {[
              { label: "Search", icon: Search },
              { label: "Settings", icon: Settings2 },
              { label: "Sign Out", icon: LogOut },
            ].map((action) => {
              const Icon = action.icon
              return (
                <div key={action.label} className="group relative">
                  <button className="w-full flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Icon className="h-4 w-4" />
                    {expanded && <span className="font-medium">{action.label}</span>}
                  </button>
                  {!expanded && collapsedTooltip(action.label)}
                </div>
              )
            })}
            <div className="flex items-center gap-3 rounded-2xl bg-gray-900 text-white px-3 py-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center font-semibold">A</div>
              {expanded && (
                <div className="text-sm">
                  <p className="font-semibold">alan@alanhirsch.com</p>
                  <p className="text-gray-300">User</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        <main className="flex-1 px-10 py-12 space-y-10">
          <div className="rounded-[36px] border border-gray-200 bg-white/90 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Alan Hirsch Platform</p>
                <h1 className="text-4xl font-semibold text-gray-900">Orbit Pane Console</h1>
                <p className="text-gray-700 max-w-2xl mt-2">
                  Minimal icon bar stays collapsed by default so this canvas can stretch. Tap the arrow for context layers when you
                  want section headings.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:border-gray-500">
                  Share Update
                </button>
                <button className="rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-semibold">Start Writing</button>
              </div>
            </div>
          </div>

          <section className="grid xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-[32px] border border-gray-200 bg-white p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Primary action</p>
                  <h2 className="text-2xl font-semibold text-gray-900">Create content</h2>
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-emerald-600">Primary</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-gray-200 px-5 py-4">
                  <p className="text-sm text-gray-500">Flexibility</p>
                  <p className="text-4xl font-semibold text-gray-900">Adaptive</p>
                </div>
                <div className="rounded-3xl border border-gray-200 px-5 py-4">
                  <p className="text-sm text-gray-500">Structure</p>
                  <p className="text-4xl font-semibold text-gray-900">Framed</p>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 px-5 py-4">
                <p className="text-sm text-gray-500">Workflow</p>
                <p className="text-2xl font-semibold text-gray-900">Idea → Draft → Publish</p>
                <p className="text-sm text-gray-600 mt-2">Icon rail highlights stage badges in real time.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["AI Assist", "Apply Template", "Invite Reviewer"].map((chip) => (
                  <button
                    key={chip}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-500"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Sprint metrics</p>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-4">
                {sprintCards.map((card) => (
                  <div key={card.label} className="rounded-3xl border border-gray-200 px-4 py-3">
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-3xl font-semibold text-gray-900">{card.value}</p>
                    <p className={`text-sm ${card.color}`}>{card.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Timeline</p>
                  <h3 className="text-2xl font-semibold text-gray-900">Today</h3>
                </div>
                <button className="text-sm text-gray-700 underline">View calendar</button>
              </div>
              <div className="space-y-3">
                {timeline.map((slot) => (
                  <div key={slot.title} className="rounded-3xl border border-gray-200 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{slot.time}</p>
                    <p className="text-lg font-medium text-gray-900">{slot.title}</p>
                    <p className="text-sm text-gray-600">{slot.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Collaboration</p>
                  <h3 className="text-2xl font-semibold text-gray-900">Live people</h3>
                </div>
                <button className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-500">
                  Invite
                </button>
              </div>
              <div className="space-y-4">
                {collaborators.map((collab) => (
                  <div key={collab.name} className="flex items-center justify-between rounded-3xl border border-gray-200 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{collab.name}</p>
                      <p className="text-sm text-gray-600">{collab.task}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.35em] text-gray-500">{collab.status}</span>
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


