"use client"

import { useState } from "react"
import {
  AlertTriangle,
  Archive,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  GraduationCap,
  Calendar,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Flag,
  FileText,
  Globe2,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Package,
  PlayCircle,
  Settings,
  Share2,
  ShoppingBag,
  Sparkles,
  Tag,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react"

type NavItem = { id: string; label: string; icon: typeof LayoutDashboard; badge?: string }
type NavSection = { title: string; items: NavItem[] }

const navSections: NavSection[] = [
  {
    title: "Command",
    items: [
      { id: "overview", label: "Command", icon: LayoutDashboard, badge: "LIVE" },
      { id: "missions", label: "Missions", icon: Flag },
      { id: "analytics", label: "Analytics", icon: LineChart },
      { id: "notifications", label: "Notifications", icon: Bell },
    ],
  },
  {
    title: "Field Work",
    items: [
      { id: "movements", label: "Movements", icon: Globe2 },
      { id: "residencies", label: "Residencies", icon: Package },
      { id: "communities", label: "Communities", icon: Users },
      { id: "organizations", label: "Organizations", icon: ClipboardCheck },
    ],
  },
  {
    title: "Learning",
    items: [
      { id: "courses", label: "Courses", icon: BookOpen },
      { id: "assessments", label: "Assessments", icon: ClipboardList },
      { id: "media", label: "Media", icon: PlayCircle },
    ],
  },
  {
    title: "Operations",
    items: [
      { id: "archive", label: "Archive", icon: Archive },
      { id: "commerce", label: "Commerce", icon: ShoppingBag },
      { id: "agents", label: "Agents", icon: Sparkles },
      { id: "workflows", label: "Workflows", icon: Share2 },
      { id: "settings", label: "Settings", icon: Settings },
    ],
  },
]

const heroCard = {
  mission: "Praxis Dispatch: Field Cohorts + Residency Cadence",
  summary:
    "Every command surface is synchronized with the live signal fabric—residencies, learning cohorts, commerce, AI, and workflows stay inside a single dashboard cadence.",
  metadata: "Scout Horizon Dispatch",
  primaryCta: "Share digest",
  secondaryCta: "New insight",
}

const statsRibbon = [
  { label: "Active programs", value: "12", delta: "+2.3% week", accent: "bg-[#111827]" },
  { label: "Live cohorts", value: "9", delta: "3 in launch prep", accent: "bg-[#7f91ff]" },
  { label: "AI threads", value: "48", delta: "6 escalations", accent: "bg-[#37a18b]" },
  { label: "Pending approvals", value: "5", delta: "Finance & content", accent: "bg-[#c18f4a]" },
]

const runwayTiles = [
  {
    label: "Financial Runway",
    value: "23.4 mo",
    detail: "Cash + pledges locked",
    accent: "border-[#c18f4a]",
  },
  {
    label: "Engagement Velocity",
    value: "82%",
    detail: "Weekly active participation",
    accent: "border-[#7f91ff]",
  },
  {
    label: "AI Throughput",
    value: "312 threads",
    detail: "Resolved in 24h by agents",
    accent: "border-[#37a18b]",
  },
  {
    label: "Content Ship Rate",
    value: "14 launches",
    detail: "Articles + briefings / week",
    accent: "border-[#111827]",
  },
]

const commitments = [
  {
    title: "Residency Track",
    metric: "12 active",
    caption: "All hosts confirmed for Q1",
    status: "On Track",
  },
  { title: "Cohort Studios", metric: "7 live", caption: "Next module drops Friday", status: "Attention" },
  { title: "Commerce Lane", metric: "$48k", caption: "Donations pending signatures", status: "Blocked" },
  { title: "Scholarship Calls", metric: "11", caption: "Complete by Thursday", status: "On Track" },
]

const timelineBuckets = [
  {
    label: "Morning",
    slots: [
      { title: "Scholarship call block", time: "08:30", owner: "Residencies" },
      { title: "Residency intake reviews", time: "10:00", owner: "Field Ops" },
    ],
  },
  {
    label: "Midday",
    slots: [
      { title: "Learning lab synthesis sprint", time: "12:00", owner: "Courses" },
      { title: "Movement signal brief", time: "13:30", owner: "Command" },
    ],
  },
  {
    label: "Afternoon",
    slots: [
      { title: "Finance runway sync", time: "15:00", owner: "Finance" },
      { title: "AI Studio pairing", time: "16:30", owner: "Agents" },
    ],
  },
]

const eventBuckets = [
  { label: "Field Interviews", count: 6, context: "This week", icon: BookOpen },
  { label: "Learning Labs", count: 4, context: "Scheduled", icon: GraduationCap },
  { label: "Finance Syncs", count: 2, context: "Requires prep", icon: Wallet },
  { label: "Community Circles", count: 5, context: "Hybrid", icon: Users },
]

const upcomingSchedule = [
  {
    title: "Residency host onboarding",
    time: "Today · 14:00",
    owner: "Field Ops",
    entity: "Residencies / Prairie Lab",
  },
  { title: "AI triage review", time: "Today · 16:00", owner: "Agents", entity: "Scout Horizon Studio" },
  { title: "Donor pledge audit", time: "Tomorrow · 09:00", owner: "Finance", entity: "Commerce Pulse" },
  { title: "Cohort learning circle", time: "Tomorrow · 11:30", owner: "Learning", entity: "Movement Architects" },
]

const aiThreads = [
  {
    tag: "Narrative",
    label: "Chronicle summary",
    detail: "AI highlights the quotes carrying the story arc—three clips ready for the Chronicle doc.",
    timestamp: "5m ago",
  },
  {
    tag: "Residencies",
    label: "Arrival rituals gap",
    detail: "Two hosts still lack arrival rituals. Recommend migrating Ritual Composer template.",
    timestamp: "18m ago",
  },
  {
    tag: "Signals",
    label: "Prairie Lab spike",
    detail: "Movement > Prairie Lab has a 72h spike. Surface in hero before the next digest.",
    timestamp: "1h ago",
  },
  {
    tag: "Finance",
    label: "Runway risk alert",
    detail: "Donation commitments at 94% confidence—flag for Commerce Pulse review.",
    timestamp: "2h ago",
  },
]

const notifications = [
  {
    severity: "Critical",
    title: "Integration drift detected",
    detail: "Residency CRM sync skipped two payloads. Re-run ingestion to avoid missing notes.",
  },
  {
    severity: "Warning",
    title: "Content approvals stacking",
    detail: "Five assessments await sign-off. Route to Assessments > Review queue.",
  },
  {
    severity: "Info",
    title: "New AI agent available",
    detail: "Atlas Summarizer now trained on the latest research set.",
  },
]

const contentPipeline = [
  { title: "CredAmp case study", stage: "Draft", owner: "Agents", due: "Feb 14" },
  { title: "Residency welcome kit", stage: "Review", owner: "Residencies", due: "Feb 16" },
  { title: "Movement manifesto zine", stage: "Publish", owner: "Media", due: "Feb 18" },
]

const commercePulse = {
  revenue: "$128k",
  change: "+14% MoM",
  donations: "$38k",
  orders: 214,
  sparkline: [42, 48, 43, 51, 57, 60, 54],
}

const communityHealth = {
  score: "92%",
  delta: "+6 pts",
  trend: [
    { label: "Mentors", value: 78 },
    { label: "Learners", value: 86 },
    { label: "Residents", value: 91 },
    { label: "Partners", value: 74 },
  ],
}

const assessmentActivity = [
  { name: "Movement DNA diagnostic", submissions: 42, status: "Needs scoring" },
  { name: "Residency readiness", submissions: 18, status: "Ready to review" },
  { name: "Learning lab reflections", submissions: 27, status: "Auto-scored" },
]

const filterScopes = ["Org-wide", "Movement Architects", "Residencies", "Learning"]
const dateRanges = ["This week", "Last 30 days", "Quarter to date"]

export default function DashboardScoutHorizonContent() {
  const [expanded, setExpanded] = useState(false)
  const [activeNav, setActiveNav] = useState("overview")
  const [scope, setScope] = useState(filterScopes[0])
  const [dateRange, setDateRange] = useState(dateRanges[0])

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-gray-900 dark:bg-[#050505] dark:text-gray-100">
      <div className="flex min-h-screen">
        <aside
          className={`flex h-screen flex-col border-r border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/70 ${
            expanded ? "w-72" : "w-20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-5 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-900 text-base font-semibold text-white dark:bg-white dark:text-gray-900">
                M
              </div>
              {expanded && (
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Movemental</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Scout Horizon</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              aria-label="Toggle navigation rail"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
            >
              <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
            {navSections.map((section) => (
              <div key={section.title}>
                {expanded && (
                  <p className="mb-3 px-3 text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">
                    {section.title}
                  </p>
                )}
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeNav === item.id
                    return (
                      <div key={item.id} className="group relative">
                        <button
                          onClick={() => setActiveNav(item.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                            isActive
                              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                              : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {expanded && (
                            <div className="flex w-full items-center justify-between">
                              <span className="font-semibold">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          )}
                        </button>
                        {!expanded && (
                          <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-2xl transition-opacity group-hover:opacity-100">
                            {item.label}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-8 px-6 py-10 lg:px-10">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-gray-200 bg-white px-6 py-5 shadow-[0_35px_120px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-950">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300">Command Utilities</p>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Global shell stays lit</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900">
                <Sparkles className="h-5 w-5" />
              </button>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-sm font-semibold text-white dark:bg-white dark:text-gray-900">
                AH
              </div>
            </div>
          </header>

          <section className="rounded-[36px] border border-gray-200 bg-white px-8 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-gray-700 dark:border-gray-800 dark:text-gray-300">
                  <Tag className="h-4 w-4" />
                  {heroCard.metadata}
                </p>
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">{heroCard.mission}</h2>
                <p className="max-w-3xl text-base text-gray-700 dark:text-gray-300">{heroCard.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900">
                  {heroCard.primaryCta}
                </button>
                <button className="rounded-full border border-transparent bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  {heroCard.secondaryCta}
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {filterScopes.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setScope(chip)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    scope === chip
                      ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900"
                      : "border-gray-300 text-gray-700 hover:border-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500"
                  }`}
                >
                  {chip}
                </button>
              ))}
              <div className="flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gray-700 dark:border-gray-700 dark:text-gray-300">
                <Calendar className="h-4 w-4" />
                <select
                  value={dateRange}
                  onChange={(event) => setDateRange(event.target.value)}
                  className="bg-transparent text-sm font-semibold text-gray-900 focus:outline-none dark:text-gray-100"
                >
                  {dateRanges.map((range) => (
                    <option key={range} value={range} className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-4">
            {statsRibbon.map((stat) => (
              <article
                key={stat.label}
                className="flex flex-col gap-2 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <div className={`h-1.5 w-10 rounded-full ${stat.accent}`} />
                <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">{stat.label}</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{stat.delta}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-4 xl:grid-cols-4">
            {runwayTiles.map((tile) => (
              <article
                key={tile.label}
                className={`rounded-3xl border ${tile.accent} bg-white p-6 shadow-sm dark:border-opacity-80 dark:bg-gray-950`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">{tile.label}</p>
                <p className="mt-4 text-4xl font-semibold text-gray-900 dark:text-gray-100">{tile.value}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{tile.detail}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Week cadence</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Commitments Grid</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {commitments.map((commitment) => (
                  <div
                    key={commitment.title}
                    className="rounded-3xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">{commitment.title}</p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          commitment.status === "On Track"
                            ? "bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300"
                            : commitment.status === "Attention"
                              ? "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {commitment.status}
                      </span>
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-100">{commitment.metric}</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{commitment.caption}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Timeline Grid</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Morning / Midday / Afternoon cadence
                    </p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {timelineBuckets.map((bucket) => (
                    <div key={bucket.label} className="rounded-2xl border border-dashed border-gray-300 p-4 dark:border-gray-700">
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">{bucket.label}</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                        {bucket.slots.map((slot) => (
                          <li key={slot.title} className="rounded-2xl bg-white/70 p-3 dark:bg-gray-900/60">
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{slot.title}</p>
                            <p className="text-xs uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">
                              {slot.time} · {slot.owner}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Schedule</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Event Buckets</h3>
                </div>
                <CalendarRange className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="space-y-4">
                {eventBuckets.map((bucket) => {
                  const Icon = bucket.icon
                  return (
                    <div
                      key={bucket.label}
                      className="flex items-center justify-between rounded-3xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{bucket.label}</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{bucket.context}</p>
                        </div>
                      </div>
                      <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{bucket.count}</span>
                    </div>
                  )
                })}
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Upcoming schedule</p>
                  <CalendarDays className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="mt-4 space-y-4">
                  {upcomingSchedule.map((event) => (
                    <div
                      key={event.title}
                      className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900"
                    >
                      <p className="text-sm uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">{event.time}</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{event.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {event.owner} · {event.entity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="space-y-4 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">AI threads</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Narrative insights</h3>
                </div>
                <Sparkles className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="space-y-3">
                {aiThreads.map((thread) => (
                  <div key={`${thread.label}-stack`} className="rounded-3xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">
                      <span>{thread.tag}</span>
                      <span>{thread.timestamp}</span>
                    </div>
                    <p className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">{thread.label}</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{thread.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="space-y-4 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Notification center</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Alerts + filters</h3>
                </div>
                <MessageSquare className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {["All", "Agents", "Content"].map((tab) => (
                  <button
                    key={tab}
                    className="rounded-3xl border border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-700 transition hover:border-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-400"
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.title}
                    className="flex gap-3 rounded-3xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="mt-1">
                      {notification.severity === "Critical" && <AlertTriangle className="h-5 w-5 text-red-500" />}
                      {notification.severity === "Warning" && <TrendingUp className="h-5 w-5 text-amber-500" />}
                      {notification.severity === "Info" && <InfoBadge />}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">{notification.severity}</p>
                      <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{notification.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{notification.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Narrative cadence</p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">AI Studio threads</h3>
              </div>
              <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900">
                Expand rail
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {aiThreads.map((thread) => (
                <article key={`${thread.label}-grid`} className="rounded-3xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">{thread.tag}</p>
                  <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">{thread.label}</p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{thread.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Content pipeline</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Inline table</h3>
                </div>
                <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase tracking-[0.35em] text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                    <tr>
                      <th className="px-4 py-3">Title</th>
                      <th className="px-4 py-3">Stage</th>
                      <th className="px-4 py-3">Owner</th>
                      <th className="px-4 py-3">Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentPipeline.map((item) => (
                      <tr key={item.title} className="border-t border-gray-100 text-gray-900 dark:border-gray-800 dark:text-gray-100">
                        <td className="px-4 py-4 font-semibold">{item.title}</td>
                        <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{item.stage}</td>
                        <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{item.owner}</td>
                        <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{item.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Commerce pulse</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{commercePulse.revenue}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{commercePulse.change}</p>
                    </div>
                    <Wallet className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    {commercePulse.sparkline.map((value, index) => (
                      <span
                        key={`${value}-${index}`}
                        className="flex-1 rounded-full bg-gray-200 dark:bg-gray-800"
                        style={{ height: `${value}px` }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">Donations: {commercePulse.donations}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Orders: {commercePulse.orders}</p>
                </div>

                <div className="rounded-3xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Community health</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{communityHealth.score}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{communityHealth.delta}</p>
                    </div>
                    <Users className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {communityHealth.trend.map((row) => (
                      <div key={row.label} className="space-y-1">
                        <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
                          <span>{row.label}</span>
                          <span>{row.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full rounded-full bg-gray-900 dark:bg-white" style={{ width: `${row.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Assessment activity</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Live submissions</h3>
                </div>
                <ClipboardList className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="space-y-4">
                {assessmentActivity.map((assessment) => (
                  <div
                    key={assessment.name}
                    className="rounded-3xl border border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{assessment.name}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {assessment.submissions} submissions · {assessment.status}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-700 dark:text-gray-300">Actions & utilities</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Bulk approvals ready</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900">
                    Share digest
                  </button>
                  <button className="rounded-full border border-transparent bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                    New insight
                  </button>
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

function InfoBadge() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-[10px] font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-300">
      i
    </div>
  )
}


