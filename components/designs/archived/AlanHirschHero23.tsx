"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Emerging Leader
// Philosophy: Micro-Lesson Pathways with AI tutor and badge economy
// Experiment: Snackable LMS with adaptive recommendations + badge showcase

type Track = {
  id: string
  title: string
  focus: string
  progress: number
  minutes: number
  status: "active" | "planned"
}

const tracks: Track[] = [
  {
    id: "apostolic",
    title: "Apostolic Instinct",
    focus: "Rewire how you sense and send",
    progress: 78,
    minutes: 142,
    status: "active",
  },
  {
    id: "communitas",
    title: "Communitas Rituals",
    focus: "Design courage-building experiences",
    progress: 46,
    minutes: 118,
    status: "active",
  },
  {
    id: "ops",
    title: "Movement Ops Sprints",
    focus: "Operationalize multiplication",
    progress: 0,
    minutes: 90,
    status: "planned",
  },
]

type MicroLesson = {
  id: string
  title: string
  duration: string
  format: string
  track: string
  status: "queued" | "completed"
  summary: string
}

const microLessons: MicroLesson[] = [
  {
    id: "lesson-01",
    title: "Spotting apostolic edges",
    duration: "06:30",
    format: "Video",
    track: "apostolic",
    status: "queued",
    summary: "Alan breaks down how to hear what's missing inside your city using the apostolic genius map.",
  },
  {
    id: "lesson-02",
    title: "Field diagnostic ritual",
    duration: "04:50",
    format: "Audio",
    track: "apostolic",
    status: "completed",
    summary: "Guided invocation you can replay with a team to surface apostolic stirrings.",
  },
  {
    id: "lesson-03",
    title: "Communitas temperature check",
    duration: "05:40",
    format: "Interactive",
    track: "communitas",
    status: "queued",
    summary: "Swipe through prompts to spot if your team is drifting toward comfort.",
  },
  {
    id: "lesson-04",
    title: "Designing courage reps",
    duration: "07:10",
    format: "Video",
    track: "communitas",
    status: "queued",
    summary: "Micro-teach featuring Jo Saxton with rapid application examples.",
  },
  {
    id: "lesson-05",
    title: "Ops sprint template",
    duration: "03:20",
    format: "Canvas",
    track: "ops",
    status: "queued",
    summary: "Downloadable Notion template for weekly multiplication sprints.",
  },
]

type AIPrompt = {
  id: string
  question: string
  intent: string
  response: string
}

const aiPrompts: AIPrompt[] = [
  {
    id: "prompt-01",
    question: "What micro-lesson should I unlock next?",
    intent: "Recommendation",
    response:
      "Because your apostolic instinct score jumped last week, prioritize 'Designing courage reps' to push your communitas edge. I'll auto-enqueue it and set a reminder before Thursday's cohort call.",
  },
  {
    id: "prompt-02",
    question: "How do I recap today's cohort lab?",
    intent: "Summary",
    response:
      "Use the 3-layer recap: (1) Story spark, (2) Diagnostic insight, (3) One courageous action. I drafted a shareable thread for your community workspace—tap to copy.",
  },
  {
    id: "prompt-03",
    question: "Who else is experimenting with hybrid liturgies?",
    intent: "Connection",
    response:
      "There are 18 leaders testing hybrid liturgies this week. I highlighted two with similar city contexts and opened a thread so you can swap assets.",
  },
]

type Recommendation = {
  id: string
  label: string
  detail: string
  minutes: number
  confidence: number
}

const recommendations: Recommendation[] = [
  {
    id: "rec-01",
    label: "Micro coaching clip",
    detail: "Jo explains how to design brave spaces in under 4 minutes.",
    minutes: 4,
    confidence: 92,
  },
  {
    id: "rec-02",
    label: "Communitas lab ritual",
    detail: "Printable ritual card for courage reps before every cohort gather.",
    minutes: 7,
    confidence: 88,
  },
  {
    id: "rec-03",
    label: "Edge interview kit",
    detail: "Five-question script for spotting apostolic edges in your city.",
    minutes: 10,
    confidence: 85,
  },
]

const badges = [
  {
    id: "badge-01",
    title: "Edge Cartographer",
    detail: "Mapped three apostolic edges in one sprint",
    color: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: "badge-02",
    title: "Communitas Host",
    detail: "Led two courage rituals with full team",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "badge-03",
    title: "Ops Choreographer",
    detail: "Completed weekly multiplication sprint",
    color: "from-amber-500 via-orange-500 to-rose-500",
  },
]

export default function AlanHirschHero23() {
  const [activeTrackId, setActiveTrackId] = useState(tracks[0].id)
  const [selectedPromptId, setSelectedPromptId] = useState(aiPrompts[0].id)
  const [highlightLessonId, setHighlightLessonId] = useState(microLessons[0].id)

  const activeTrack = useMemo(() => tracks.find((track) => track.id === activeTrackId) ?? tracks[0], [activeTrackId])
  const filteredLessons = useMemo(
    () => microLessons.filter((lesson) => lesson.track === activeTrack.id),
    [activeTrack]
  )
  const selectedPrompt = useMemo(() => aiPrompts.find((prompt) => prompt.id === selectedPromptId) ?? aiPrompts[0], [selectedPromptId])
  const highlightedLesson = useMemo(() => microLessons.find((lesson) => lesson.id === highlightLessonId) ?? microLessons[0], [highlightLessonId])

  return (
    <div className="min-h-screen bg-[#f8f2ff] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5edff] via-[#f8f2ff] to-[#fdf8ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-[0.4em] uppercase text-gray-700 dark:text-gray-300 mb-6">Micro-Lesson Pathways · Movemental</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                Snackable Learning, Movemental Outcomes
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Choose a pathway, swipe through micro lessons, and let the Movemental AI tutor adapt next steps in real time. Every
                lesson lands inside your cohort ritual so learning instantly becomes communal practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 px-7 py-3 h-auto rounded-full text-sm font-semibold">
                  Continue pathway
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5 px-7 py-3 h-auto rounded-full text-sm"
                >
                  Build custom stack
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {tracks.map((track) => (
                  <div key={track.id} className="p-5 rounded-2xl bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">{track.title}</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{track.progress}%</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{track.minutes} min synced</p>
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
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">Highlighted micro lesson</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{highlightedLesson.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{highlightedLesson.summary}</p>
              <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                <span>{highlightedLesson.duration}</span>
                <span>•</span>
                <span>{highlightedLesson.format}</span>
                <span>•</span>
                <span>{highlightedLesson.track}</span>
              </div>
              <div className="mt-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: highlightedLesson.status === "completed" ? "100%" : "45%" }} />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {highlightedLesson.status === "completed" ? "Replay" : "Up next"} · swipe to move it higher in your queue
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracks + Lessons */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Pathways</h2>
              <span className="text-sm text-gray-700 dark:text-gray-300">Adaptive mode</span>
            </div>
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                  activeTrackId === track.id
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{track.title}</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{track.progress}%</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{track.focus}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-8 shadow-lg"
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{activeTrack.title}</p>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Snack queue</h3>
                  </div>
                  <Button variant="outline" className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100">
                    Shuffle lessons
                  </Button>
                </div>
                <div className="space-y-4">
                  {filteredLessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        highlightLessonId === lesson.id
                          ? "border-purple-500 bg-purple-50 dark:bg-purple-950"
                          : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                      }`}
                      onMouseEnter={() => setHighlightLessonId(lesson.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">{lesson.title}</h4>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{lesson.duration}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{lesson.summary}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">{lesson.format}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* AI Tutor + Recommendations */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-[#f2edff] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">AI Tutor</p>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Movemental assistant</h2>
              </div>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 text-sm">Open full chat</Button>
            </div>
            <div className="space-y-3 mb-6">
              {aiPrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => setSelectedPromptId(prompt.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border text-sm font-medium transition-all ${
                    selectedPromptId === prompt.id
                      ? "border-purple-500 bg-white"
                      : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500"
                  }`}
                >
                  {prompt.question}
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
              <p className="text-sm text-purple-600 dark:text-purple-300 uppercase tracking-wide mb-2">{selectedPrompt.intent}</p>
              <p className="text-lg text-gray-900 dark:text-gray-100">{selectedPrompt.response}</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Adaptive feed</p>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Recommended next</h2>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Updated 2 mins ago</span>
            </div>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{rec.label}</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{rec.minutes} min</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{rec.detail}</p>
                  <div className="h-1 rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-purple-500" style={{ width: `${rec.confidence}%` }} />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Confidence {rec.confidence}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Momentum badges</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Unlocked this week</h2>
            </div>
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
            >
              View full badge shelf
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-3xl p-6 text-white border border-white/30 shadow-xl bg-gradient-to-br ${badge.color}`}
              >
                <p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-3">Badge unlocked</p>
                <h3 className="text-2xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-sm text-white/90">{badge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
