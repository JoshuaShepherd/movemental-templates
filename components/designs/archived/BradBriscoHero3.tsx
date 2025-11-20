"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const chapters = [
  {
    id: "chapter-01",
    title: "Primer — Why grayscale matters",
    summary: "Brad introduces the leader to monochrome cognition: no distractions, only clarity.",
    duration: "08 min",
  },
  {
    id: "chapter-02",
    title: "Whiteboard essays",
    summary: "Tile-based longform essays with inline sketches rendered as SVG strokes.",
    duration: "14 min",
  },
  {
    id: "chapter-03",
    title: "Residency cadence",
    summary: "Weekly rhythm template, downloadable as a printable grid for on-site coaching.",
    duration: "11 min",
  },
  {
    id: "chapter-04",
    title: "Deployment gallery",
    summary: "Grayscale gallery of launch stories—portraits blurred, data pinned.",
    duration: "09 min",
  },
]

const timeline = [
  { label: "Week 01", focus: "Mapping core tensions", output: "Brad-scribed whiteboard PDF" },
  { label: "Week 02", focus: "Experiment design", output: "Dual-track plan with leader notes" },
  { label: "Week 03", focus: "Field deployment", output: "Action cards + photo brief" },
  { label: "Week 04", focus: "Signal review", output: "Network-ready update block" },
]

const testimonials = [
  {
    quote: "“The grayscale reader feels like sitting beside Brad while he narrates the board. Nothing competes with the content.”",
    author: "Movement Leaders Collective",
  },
  {
    quote: "“Our teams export the chapters as zines, mark them up, and walk into experiments within hours.”",
    author: "Send Network cohort",
  },
]

const controls = [
  { label: "Typography", detail: "Serif body, mono annotations, adjustable line height" },
  { label: "Contrast", detail: "Three presets, all WCAG AA+ verified" },
  { label: "Capture", detail: "Instant PDF + SVG overlays for reuse on real whiteboards" },
]

export default function BradBriscoHero3() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id)

  return (
    <div className="min-h-screen bg-[#f4f4f2] dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-semibold border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="relative border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-700 dark:text-gray-300 mb-4">Brad Brisco · Longform home</p>
          <h1 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">Analog reader for movement strategists</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            This hero takes Brad’s content-first minimalism and extends it into an entire home page—think grayscale magazine, whiteboard
            overlays, and timelines that feel like they were scribed during a lab day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button className="h-auto rounded-full px-8 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Launch reader</Button>
            <Button
              variant="outline"
              className="h-auto rounded-full px-8 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
            >
              Download monochrome kit
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#0b0b0b] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-[30px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/60 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Chapters</p>
            <div className="space-y-4">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(chapter.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all ${
                    activeChapter === chapter.id
                      ? "border-gray-900 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                      : "border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{chapter.title}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{chapter.duration}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{chapter.summary}</p>
                </button>
              ))}
            </div>
          </div>
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[30px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 flex flex-col gap-8"
          >
            <div className="rounded-2xl border border-dashed border-gray-400 dark:border-gray-700 p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-3">Active chapter canvas</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {chapters.find((chapter) => chapter.id === activeChapter)?.title}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-4">
                Readers scroll through generous whitespace, with Brad’s grayscale headshot floating behind the prose so the words remain central.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-2">Reader controls</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {controls.map((control) => (
                  <div key={control.label} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-950/70">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{control.label}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{control.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#efefeb] dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Timeline</p>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Residency rhythm rendered as a reader</h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              The home page becomes a guided journey—each week aligned with Brad’s scribbles, every deliverable shareable as a grayscale artifact.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {timeline.map((week) => (
              <div key={week.label} className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">{week.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{week.focus}</p>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <p className="uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">Output</p>
                  <p className="text-lg text-gray-900 dark:text-gray-100">{week.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#050505] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 overflow-hidden">
            <Image
              src="/brad/brad-brisco-2.jpeg"
              alt="Brad Brisco monochrome"
              width={640}
              height={820}
              className="object-cover grayscale"
            />
          </div>
          <div className="space-y-6">
            {testimonials.map((testimony) => (
              <div key={testimony.author} className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
                <p className="text-lg text-gray-900 dark:text-gray-100">{testimony.quote}</p>
                <p className="text-sm uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mt-4">{testimony.author}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-dashed border-gray-400 dark:border-gray-700 p-6 text-sm text-gray-700 dark:text-gray-300">
              Headshots stay diffused while the work shines. Even testimonials respect the grayscale brief Brad issued.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f5] dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 py-16 rounded-[36px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300 mb-4">Final cue</p>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Three grayscale ideas, ready for Brad</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              This third concept frames the entire homepage as a longform reader—perfect for content-first leaders who want clean,
              black-and-white storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="h-auto rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Review archive</Button>
              <Button
                variant="outline"
                className="h-auto rounded-full px-6 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
              >
                Send to Brad
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-[30px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Archive placement</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-3">Brad Brisco · Grayscale Reader Home</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">Type: Editorial & Narrative · Score: 96 · Movement: Monochrome Story.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


