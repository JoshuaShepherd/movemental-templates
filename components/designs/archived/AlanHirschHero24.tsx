"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Practitioner Studio Lead
// Philosophy: Tactile LMS studio with workshop library + peer feedback lanes
// Experiment: Practitioner Studio LMS with assignment uploads, peer review, resource locker

type Workshop = {
  id: string
  title: string
  instructor: string
  focus: string
  status: "live" | "upcoming" | "replay"
  length: string
  cohortTag: string
  description: string
  tools: string[]
}

const workshops: Workshop[] = [
  {
    id: "ws-01",
    title: "Field Laboratory: Urban Apostolic Systems",
    instructor: "Alan Hirsch",
    focus: "Design decentralized operating systems",
    status: "live",
    length: "90 min",
    cohortTag: "Studio 07",
    description: "Map your city's apostolic signals, prioritize two experimental nodes, and choreograph a 30-day sprint.",
    tools: ["MIRO", "Notion", "Figma"],
  },
  {
    id: "ws-02",
    title: "Communitas Design Sprint",
    instructor: "Jo Saxton",
    focus: "Engineer courage rituals & peer agreements",
    status: "upcoming",
    length: "75 min",
    cohortTag: "Studio 07",
    description: "Structure liminal spaces, narrate brave questions, and craft the follow-up script for peer pods.",
    tools: ["FigJam", "Loom"],
  },
  {
    id: "ws-03",
    title: "Movement Ops Control Room",
    instructor: "Emanuel Maga",
    focus: "Activate intelligence dashboards weekly",
    status: "replay",
    length: "60 min",
    cohortTag: "Studio 06",
    description: "Wire your operations board with ritualized check-ins and real-time action flags.",
    tools: ["Airtable", "Retool"],
  },
]

type Assignment = {
  id: string
  title: string
  status: "uploading" | "submitted" | "feedback" | "due"
  due: string
  format: string
  reviewer: string
  progress: number
}

const assignments: Assignment[] = [
  {
    id: "assign-01",
    title: "Movement Field Report",
    status: "feedback",
    due: "Reviewed tonight",
    format: "PDF + Loom",
    reviewer: "Alan Hirsch",
    progress: 92,
  },
  {
    id: "assign-02",
    title: "Communitas Ritual Deck",
    status: "submitted",
    due: "Locked",
    format: "Figma",
    reviewer: "Peer pod",
    progress: 100,
  },
  {
    id: "assign-03",
    title: "Ops Sprint Playbook",
    status: "due",
    due: "Due in 2 days",
    format: "Notion",
    reviewer: "Ops coach",
    progress: 48,
  },
]

type FeedbackLane = {
  id: string
  title: string
  items: { id: string; owner: string; artifact: string; status: string }[]
}

const feedbackLanes: FeedbackLane[] = [
  {
    id: "awaiting",
    title: "Awaiting Review",
    items: [
      { id: "f-01", owner: "Rosa", artifact: "Communitas sprint video", status: "Due tonight" },
      { id: "f-02", owner: "Noah", artifact: "Edge interview clips", status: "In queue" },
    ],
  },
  {
    id: "in-progress",
    title: "Annotations Live",
    items: [
      { id: "f-03", owner: "Lena", artifact: "Ops ritual board", status: "3 notes" },
      { id: "f-04", owner: "Ezra", artifact: "Movement DNA map", status: "Color grading" },
    ],
  },
  {
    id: "published",
    title: "Published Feedback",
    items: [{ id: "f-05", owner: "Mira", artifact: "Hybrid liturgy kit", status: "Shared" }],
  },
]

const resources = [
  {
    id: "res-01",
    label: "Workshop replay",
    detail: "MP4 + summary",
    icon: "Video",
  },
  {
    id: "res-02",
    label: "Assignment rubric",
    detail: "Notion template",
    icon: "Guide",
  },
  {
    id: "res-03",
    label: "Field kit",
    detail: "Printable PDF",
    icon: "Toolkit",
  },
  {
    id: "res-04",
    label: "Peer pod notes",
    detail: "Transcript",
    icon: "Notes",
  },
]

const heroStats = [
  { label: "Workshops", value: "3 live", note: "per sprint" },
  { label: "Assignments", value: "12", note: "per practitioner" },
  { label: "Feedback loops", value: "4 lanes", note: "always on" },
]

export default function AlanHirschHero24() {
  const [activeWorkshopId, setActiveWorkshopId] = useState(workshops[0].id)
  const activeWorkshop = useMemo(() => workshops.find((ws) => ws.id === activeWorkshopId) ?? workshops[0], [activeWorkshopId])

  return (
    <div className="min-h-screen bg-[#f4f6f1] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ed] via-[#f6f9f1] to-[#eef3ea] dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-[0.4em] uppercase text-gray-700 dark:text-gray-300 mb-6">Practitioner Studio LMS · Movemental</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                Workshop Library, Peer Studio, Living Locker
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Every assignment is tethered to a live workshop, annotated feedback lane, and resourcing locker so practitioners ship
                movement work that actually lands in communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-7 py-3 h-auto rounded-full text-sm font-semibold">
                  Enter studio session
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5 px-7 py-3 h-auto rounded-full text-sm"
                >
                  Download toolkit
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
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Studio queue</p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-900 text-white">Studio 07</span>
              </div>
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <button
                    key={workshop.id}
                    onClick={() => setActiveWorkshopId(workshop.id)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                      activeWorkshopId === workshop.id
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{workshop.length}</p>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          workshop.status === "live"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                            : workshop.status === "upcoming"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                              : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {workshop.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{workshop.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{workshop.instructor}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop detail + tools */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkshop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{activeWorkshop.focus}</p>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{activeWorkshop.title}</h2>
                  </div>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">Open workshop room</Button>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{activeWorkshop.description}</p>
                <div className="flex flex-wrap gap-3">
                  {activeWorkshop.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">Live assignment status</p>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{assignment.title}</h3>
                      <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">{assignment.due}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {assignment.format} · reviewer {assignment.reviewer}
                    </p>
                    <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-800">
                      <div
                        className={`h-full ${assignment.progress === 100 ? "bg-emerald-500" : "bg-amber-500"}`}
                        style={{ width: `${assignment.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer feedback lanes */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-[#f5f7f3] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Peer studio</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Feedback lanes</h2>
            </div>
            <Button variant="outline" className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100">
              Record Loom feedback
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {feedbackLanes.map((lane) => (
              <div key={lane.id} className="rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{lane.title}</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{lane.items.length}</span>
                </div>
                <div className="space-y-3">
                  {lane.items.map((item) => (
                    <div key={item.id} className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.artifact}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.owner}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-2">{item.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource locker */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Resource locker</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Pull assets on demand</h2>
            </div>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Share locker</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900/70">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                  {resource.icon}
                </p>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{resource.label}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{resource.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
