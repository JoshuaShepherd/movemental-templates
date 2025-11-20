"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Movement Strategist
// Philosophy: Scholarly LMS with cohort infrastructure
// Experiment: Cohort-Based Curriculum Hub with prerequisites, progress tracker, live session calendar

type ModuleStatus = "locked" | "in-progress" | "complete"

type Module = {
  id: string
  title: string
  description: string
  weekRange: string
  status: ModuleStatus
  prerequisites: string[]
  focus: string
  duration: string
  deliverable: string
  coach: string
  progress: number
}

const modules: Module[] = [
  {
    id: "module-01",
    title: "Movement DNA Foundations",
    description: "Map the six mDNA elements across your current network and surface gaps using the apostolic genius diagnostic.",
    weekRange: "Weeks 1-2",
    status: "complete",
    prerequisites: ["Pre-course diagnostic"],
    focus: "Apostolic Genius System",
    duration: "8 sessions",
    deliverable: "Movement DNA map",
    coach: "Alan Hirsch",
    progress: 100,
  },
  {
    id: "module-02",
    title: "Cohort Design Lab",
    description: "Design micro-cohorts with clear communitas rituals, pairings, and peer assessment loops.",
    weekRange: "Weeks 3-4",
    status: "in-progress",
    prerequisites: ["Movement DNA map"],
    focus: "Communitas & Formation",
    duration: "6 sessions",
    deliverable: "Cohort ritual kit",
    coach: "Jo Saxton",
    progress: 68,
  },
  {
    id: "module-03",
    title: "Adaptive Multiplication Systems",
    description: "Prototype multiplication flywheels with operating constraints, funding envelopes, and coaching cadences.",
    weekRange: "Weeks 5-6",
    status: "locked",
    prerequisites: ["Cohort rituals approved"],
    focus: "Multiplication Ops",
    duration: "7 sessions",
    deliverable: "Ops flywheel canvas",
    coach: "Emanuel Maga",
    progress: 0,
  },
  {
    id: "module-04",
    title: "Movement Intelligence Practicum",
    description: "Wire a live intelligence board with data rituals, cultural listening posts, and quarterly discernment labs.",
    weekRange: "Weeks 7-8",
    status: "locked",
    prerequisites: ["Ops flywheel canvas"],
    focus: "Intelligence Systems",
    duration: "5 sessions",
    deliverable: "Intelligence board",
    coach: "Tara Singh",
    progress: 0,
  },
]

type Cohort = {
  id: string
  title: string
  start: string
  timezone: string
  seats: string
  emphasis: string
  coach: string
  focus: string
}

const cohorts: Cohort[] = [
  {
    id: "spring-25",
    title: "Spring 2025 · Global Cohort",
    start: "March 3",
    timezone: "AMER · EMEA",
    seats: "24 / 32 seats",
    emphasis: "Hybrid labs + immersive field weeks",
    coach: "Alan Hirsch",
    focus: "Missional DNA activation",
  },
  {
    id: "summer-25",
    title: "Summer 2025 · Practitioners",
    start: "June 16",
    timezone: "APAC · EMEA",
    seats: "11 / 28 seats",
    emphasis: "High-accountability peer studios",
    coach: "Jo Saxton",
    focus: "Communitas design",
  },
  {
    id: "fall-25",
    title: "Fall 2025 · Movement Ops",
    start: "September 8",
    timezone: "AMER",
    seats: "Waitlist",
    emphasis: "Operational scaling + intelligence",
    coach: "Emanuel Maga",
    focus: "Ops flywheel",
  },
]

type Session = {
  time: string
  title: string
  facilitator: string
  type: string
  format: string
}

type DaySchedule = {
  day: string
  theme: string
  sessions: Session[]
}

const liveSchedule: DaySchedule[] = [
  {
    day: "Tuesday",
    theme: "Activation Labs",
    sessions: [
      {
        time: "09:00 PT",
        title: "Cohort kickoff ritual",
        facilitator: "Alan Hirsch",
        type: "Lab",
        format: "Live + breakout",
      },
      {
        time: "11:30 PT",
        title: "Movement DNA whiteboard",
        facilitator: "Research Guild",
        type: "Studio",
        format: "FigJam + live Q&A",
      },
      {
        time: "14:00 PT",
        title: "Peer coaching triangles",
        facilitator: "Jo Saxton",
        type: "Practice",
        format: "Triads",
      },
    ],
  },
  {
    day: "Thursday",
    theme: "Strategy Practicums",
    sessions: [
      {
        time: "08:00 PT",
        title: "Adaptive ops sandbox",
        facilitator: "Emanuel Maga",
        type: "Studio",
        format: "Notion + live ops board",
      },
      {
        time: "10:30 PT",
        title: "Communitas field reports",
        facilitator: "Coach collective",
        type: "Forum",
        format: "Roundtable",
      },
      {
        time: "13:00 PT",
        title: "Quarterly discernment lab",
        facilitator: "Alan Hirsch",
        type: "Lab",
        format: "Prayerful planning",
      },
    ],
  },
  {
    day: "Saturday",
    theme: "Open Studios",
    sessions: [
      {
        time: "07:30 PT",
        title: "Office hours",
        facilitator: "Tara Singh",
        type: "Support",
        format: "Drop-in",
      },
      {
        time: "09:00 PT",
        title: "Communitas storytelling",
        facilitator: "Cohort hosts",
        type: "Story",
        format: "Live stream",
      },
    ],
  },
]

const progressMilestones = [
  { id: "diagnostic", label: "Diagnostic Uploaded", status: "complete" },
  { id: "map", label: "mDNA Map Approved", status: "complete" },
  { id: "cohort", label: "Cohort Ritual Kit", status: "in-progress" },
  { id: "ops", label: "Multiplication Flywheel", status: "locked" },
  { id: "intel", label: "Intelligence Board", status: "locked" },
]

const heroStats = [
  { label: "Leaders Activated", value: "1,240", note: "14 global cohorts" },
  { label: "Completion Rate", value: "92%", note: "Across last six rounds" },
  { label: "Cohort Seats", value: "32", note: "Per guided cohort" },
]

export default function AlanHirschHero22() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id)
  const [selectedCohortId, setSelectedCohortId] = useState(cohorts[0].id)
  const [selectedDay, setSelectedDay] = useState(liveSchedule[0].day)

  const activeModule = useMemo(() => modules.find((module) => module.id === activeModuleId) ?? modules[0], [activeModuleId])
  const selectedCohort = useMemo(() => cohorts.find((cohort) => cohort.id === selectedCohortId) ?? cohorts[0], [selectedCohortId])
  const sessionsForDay = useMemo(
    () => liveSchedule.find((block) => block.day === selectedDay) ?? liveSchedule[0],
    [selectedDay]
  )

  const completedMilestones = progressMilestones.filter((item) => item.status === "complete").length
  const progressPercent = Math.round((completedMilestones / progressMilestones.length) * 100)

  return (
    <div className="min-h-screen bg-[#f4f1ec] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-20">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-100 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f0] via-[#f2eee3] to-[#ede6d9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-[0.4em] uppercase text-gray-700 dark:text-gray-300 mb-6">Cohort-Based LMS · Movemental</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                Movement Architects Cohort Hub
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Build a global bench of apostolic leaders with prerequisite-aware modules, live strategy practicums, and a shared
                intelligence board. Every cohort travels together with rituals, peer feedback, and live session cadence you can
                trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-7 py-3 h-auto rounded-full text-sm font-semibold">
                  Reserve cohort seats
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5 px-7 py-3 h-auto rounded-full text-sm"
                >
                  Download syllabus
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">{stat.label}</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl backdrop-blur"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cohort Progress</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{progressPercent}% synced</h3>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white">Week 4</span>
              </div>
              <div className="space-y-4">
                {progressMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center text-sm font-semibold transition-colors ${
                        milestone.status === "complete"
                          ? "border-emerald-500 text-emerald-600"
                          : milestone.status === "in-progress"
                            ? "border-amber-400 text-amber-500"
                            : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {milestone.status === "complete" ? "✓" : milestone.status === "in-progress" ? "…" : ""}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{milestone.label}</p>
                      <p className="text-gray-900 dark:text-gray-100 font-medium">
                        {milestone.status === "complete"
                          ? "Verified"
                          : milestone.status === "in-progress"
                            ? "Submitting for review"
                            : "Unlocks after previous"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules + Details */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Guided Modules</h2>
              <span className="text-sm text-gray-700 dark:text-gray-300">Prerequisite-aware</span>
            </div>
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                  activeModuleId === module.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{module.weekRange}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      module.status === "complete"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : module.status === "in-progress"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                          : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {module.status.replace("-", " ")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{module.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{module.focus}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-8 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{activeModule.duration}</p>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{activeModule.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Guided by</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{activeModule.coach}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{activeModule.description}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Prerequisites</p>
                    <ul className="space-y-2">
                      {activeModule.prerequisites.map((req) => (
                        <li key={req} className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                          <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-100" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Deliverable</p>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{activeModule.deliverable}</p>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${activeModule.progress}%` }} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{activeModule.progress}% synced for this module</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Cohort Callouts */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-[#f8f5ef] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Cohort Placement</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Choose a guided cohort</h2>
            </div>
            <Button variant="outline" className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100">
              Talk to placement coach
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {cohorts.map((cohort) => (
              <button
                key={cohort.id}
                onClick={() => setSelectedCohortId(cohort.id)}
                className={`text-left rounded-3xl border-2 p-5 transition-all ${
                  selectedCohortId === cohort.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{cohort.start}</p>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-900 text-white">{cohort.timezone}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{cohort.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Coach {cohort.coach}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cohort.emphasis}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-3">{cohort.seats}</p>
              </button>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Selected cohort focus</p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{selectedCohort.title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{selectedCohort.focus}</p>
          </div>
        </div>
      </section>

      {/* Live Session Calendar */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Live Rhythm</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Session calendar</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {liveSchedule.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all ${
                    selectedDay === day.day
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{selectedDay}</p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{sessionsForDay.theme}</h3>
              </div>
              <Button className="bg-gray-900 text-white hover:bg-gray-800">Sync to calendar</Button>
            </div>
            <div className="space-y-4">
              {sessionsForDay.sessions.map((session) => (
                <div
                  key={`${session.time}-${session.title}`}
                  className="flex flex-wrap items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70"
                >
                  <div className="w-24">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{session.time}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{session.type}</p>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{session.title}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{session.format}</p>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{session.facilitator}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
