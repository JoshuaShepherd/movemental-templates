"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Research Partner / Scholar
// Philosophy: Scholarly reader with typographic hero, chapter TOC sidebar, footnote hover cards, reading progress
// Experiment: Long-form reader that feels like an academic publication with contextual tools

type Chapter = {
  id: string
  title: string
  summary: string
  wordCount: number
}

const chapters: Chapter[] = [
  {
    id: "ch-01",
    title: "Preface: The Ecology of Movement",
    summary: "Alan introduces the thesis that movements behave more like forest ecologies than institutions.",
    wordCount: 2150,
  },
  {
    id: "ch-02",
    title: "Chapter 1: Apostolic Genius",
    summary: "Emergent properties of apostolic systems, with diagrams and citations.",
    wordCount: 5400,
  },
  {
    id: "ch-03",
    title: "Chapter 2: Communitas Kinetics",
    summary: "Field notes on liminal spaces and rite of passage design.",
    wordCount: 4300,
  },
  {
    id: "ch-04",
    title: "Chapter 3: Organic Systems",
    summary: "How decentralized governance mirrors natural systems.",
    wordCount: 3900,
  },
]

type Footnote = {
  id: string
  marker: string
  content: string
}

const footnotes: Footnote[] = [
  {
    id: "fn-01",
    marker: "1",
    content: "Alan Hirsch, The Forgotten Ways (Grand Rapids: Brazos, 2006), 48.",
  },
  {
    id: "fn-02",
    marker: "2",
    content: "See also Michael Frost, Exiles (Grand Rapids: Baker, 2006), 112-118.",
  },
]

const readerStats = [
  { label: "Word count", value: "32,400" },
  { label: "Reading time", value: "2h 45m" },
  { label: "Footnotes", value: "68" },
]

const typographyOptions = [
  { id: "serif", label: "Serif", stack: "" },
  { id: "sans", label: "Sans", stack: "font-sans" },
]

export default function AlanHirschHero28() {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0].id)
  const [typography, setTypography] = useState("serif")
  const progress = 28

  const activeChapter = useMemo(() => chapters.find((chapter) => chapter.id === activeChapterId) ?? chapters[0], [activeChapterId])

  return (
    <div className={`min-h-screen bg-[#f6f1e9] text-gray-900 ${typography === "serif" ? "font-serif" : "font-sans"}`}>
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero */}
      <section className="border-b border-gray-200 bg-[#fdfaf3]">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-600 mb-4">Long-form reader · Movemental Press</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">Apostolic Genius & The Ecology of Movements</h1>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl">
            A scholarly, richly annotated edition of Alan Hirsch’s most requested essays, designed for academic cohorts, movement
            strategists, and designers of new apostolic systems.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800">
              Continue reading
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 h-auto text-sm border-gray-900 text-gray-900 hover:bg-gray-900/5"
            >
              Download citation PDF
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {readerStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{stat.label}</p>
                <p className="text-3xl font-semibold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader layout */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3 space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Chapters</p>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border text-sm transition-all ${
                    activeChapterId === chapter.id
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 text-gray-800 hover:border-gray-400"
                  }`}
                >
                  <p className="font-semibold">{chapter.title}</p>
                  <p className="text-xs text-gray-500">{Math.round(chapter.wordCount / 250)} min read</p>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Typography</p>
            <div className="flex gap-3">
              {typographyOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTypography(option.id)}
                  className={`flex-1 rounded-2xl border px-4 py-2 text-sm font-semibold ${
                    typography === option.id ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-500"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Chapter</p>
                <h2 className="text-3xl font-semibold text-gray-900">{activeChapter.title}</h2>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Progress</p>
                <p className="text-xl font-semibold text-gray-900">{progress}%</p>
              </div>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full bg-gray-900" style={{ width: `${progress}%` }} />
            </div>
            <article className="prose prose-gray max-w-none mt-8 text-gray-800">
              <p>
                Movement ecologies mimic forest ecologies more than industrial machines. When we examine apostolic genius across
                history, we find decentralized networks with high relational trust, shared liturgies, and a bias toward the margins.
                <sup className="text-xs font-semibold text-gray-500">1</sup>
              </p>
              <p>
                In this edition, Alan Hirsch outlines the design patterns that allow movements to grow with integrity while resisting
                institutional drift. Each chapter includes field notes, diagrams, and prompts for research teams.
                <sup className="text-xs font-semibold text-gray-500">2</sup>
              </p>
            </article>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {footnotes.map((footnote) => (
              <div key={footnote.id} className="rounded-3xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Footnote {footnote.marker}</p>
                <p className="text-sm text-gray-700 mt-2">{footnote.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
