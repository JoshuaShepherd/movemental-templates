"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Field teams coached", value: "218", detail: "North America + EU" },
  { label: "Whiteboard sprints", value: "412", detail: "Documented prompts" },
  { label: "Residency cohorts", value: "18", detail: "Average 24 leaders" },
]

const whiteboardPrompts = [
  {
    title: "Apostolic imagination",
    detail: "Sketch the near-future parish that needs your next experiment.",
  },
  {
    title: "Systems audit",
    detail: "Map bottlenecks using Brad’s 4-lane diagnostic grid.",
  },
  {
    title: "Comm unity pulse",
    detail: "Chart relational energy on a grayscale sentiment spectrum.",
  },
]

const focusBeams = [
  { title: "Residency Lab", description: "Weekly live whiteboard session w/ grayscale annotations pushed to members." },
  { title: "Field Notes", description: "Real-time mural of experiments, frictions, and what was iterated this week." },
  { title: "Leader Signals", description: "Quiet channel surfacing leaders ready for deployment or coaching." },
]

const labAgenda = [
  { time: "08:30", title: "Whiteboard download", description: "Brad frames the eco-system tension before anyone speaks." },
  { time: "09:00", title: "Movement modeling", description: "Teams sketch a monochrome diagnostic and upload snapshots." },
  { time: "10:15", title: "Field comms", description: "Push distilled napkin diagrams to every cohort with action cards." },
]

export default function BradBriscoHero1() {
  return (
    <div className="min-h-screen bg-[#f6f6f3] dark:bg-[#050505] text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-semibold border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #ffffff, transparent 40%)" }} />
          <div
            className="absolute inset-12 rounded-[40px] border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/60"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "100% 48px" }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Brad Brisco · Field Praxis Console</p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Whiteboard-first leadership lab in grayscale clarity
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                Brad’s preferred palette—black, white, and disciplined grays—translates into a hero environment where every stroke
                is intentional. Leaders land on this console, see the monochrome portrait fade behind strategy, and immediately dive
                into the next experiment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="h-auto rounded-full px-7 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Book a whiteboard</Button>
                <Button
                  variant="outline"
                  className="h-auto rounded-full px-7 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
                >
                  Download field sheet
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 mb-2">{stat.label}</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[32px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 shadow-2xl">
                <div className="absolute inset-0 rounded-[32px] border border-white/30 dark:border-white/10 pointer-events-none" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">Studio portrait</p>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-3">Brad on glass</h3>
                    </div>
                    <div className="mt-4 relative h-64 overflow-hidden rounded-2xl">
                      <Image
                        src="/brad/brad-brisco-1.jpeg"
                        alt="Brad Brisco grayscale portrait"
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 space-y-4">
                    <div className="rounded-2xl border border-dashed border-gray-400 dark:border-gray-600 p-4 bg-gray-50 dark:bg-gray-950/50">
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mb-2">Whiteboard ethos</p>
                      <p className="text-lg text-gray-900 dark:text-gray-100">
                        “Every breakthrough was a sketch first.” Brad keeps the portrait blurred while the ink stays sharp.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-950/70">
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mb-2">Current iteration</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Residency sprint · Week 03</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">“Translate whiteboard to movement DNA”</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Whiteboard prompts</p>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What Brad asks first</h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Every prompt is built for clarity. Leaders respond in monochrome strokes, then Brad layers systems insight on top.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {whiteboardPrompts.map((prompt) => (
              <div key={prompt.title} className="rounded-3xl border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900/70">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{prompt.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{prompt.detail}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-gray-900/80 to-transparent" />
                <p className="text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400 mt-4">Marker · Black ink only</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800 bg-[#f0f0ed] dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300">Focus beams</p>
            {focusBeams.map((beam) => (
              <div key={beam.title} className="py-4 border-b border-gray-200/80 dark:border-gray-800/80 last:border-b-0">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-[0.3em] mb-2">{beam.title}</p>
                <p className="text-xl text-gray-900 dark:text-gray-100">{beam.description}</p>
              </div>
            ))}
            <Button className="h-auto rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Preview residency</Button>
          </div>
          <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Weekly lab agenda</p>
            <div className="space-y-6">
              {labAgenda.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-20">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.time}</p>
                    <div className="w-8 h-px bg-gray-400 dark:bg-gray-600 mt-2" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{item.title}</p>
                    <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-gray-400 dark:border-gray-700 p-5 text-sm text-gray-700 dark:text-gray-300">
              Deliverables ship as grayscale PDFs + SVG overlays so every leader can drag them onto their own boards without losing
              fidelity.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 p-10 flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <Image
                src="/brad/brad-brisco-2.jpeg"
                alt="Brad Brisco teaching"
                width={640}
                height={800}
                className="rounded-[28px] border border-gray-300 dark:border-gray-700 object-cover grayscale"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Founder note</p>
              <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">“Keep me in grayscale so the work stays front row.”</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Brad asked for portraits that fade into the background, monochrome interfaces, and whiteboard textures that feel
                like his real studio. This hero mirrors that preference and sets the tone for his Movemental home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="h-auto rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">See prototype deck</Button>
                <Button
                  variant="outline"
                  className="h-auto rounded-full px-6 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
                >
                  Share feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


