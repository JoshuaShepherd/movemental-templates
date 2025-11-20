"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Movement labs hosted", value: "124", detail: "Documented whiteboard sessions" },
  { label: "Cities activated", value: "42", detail: "North America + Europe" },
  { label: "Leaders coached", value: "310", detail: "Residency + field intensives" },
]

const pillars = [
  { title: "Content-first framing", detail: "Hero loads with copy + prompts before imagery. Portrait stays diffused." },
  { title: "Monochrome palette", detail: "Pure white canvas, charcoal typography, grayscale imagery that never pulls focus." },
  { title: "Immediate clarity", detail: "Stats, commitments, and first question all visible without scrolling." },
]

const commitments = [
  { title: "Whiteboard-first", note: "Sessions start with analog sketching; deliverables mirrored here as SVG overlays." },
  { title: "Greyscale portraits", note: "Faces stay subtle so the frameworks lead." },
  { title: "Light/Dark parity", note: "Contrast-verified tokens keep the design WCAG compliant in both modes." },
]

export default function BradBriscoHero4() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-semibold border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      <section className="relative border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(15,23,42,0.04) 1px, transparent 1px)", backgroundSize: "100% 56px" }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-4">Brad Brisco · Content-First Minimalism</p>
              <h1 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">Clarity board for monochrome thinkers</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Hero crafted to Brad’s exact preference: bright white background, grayscale imagery, and whiteboard-inspired copy blocks. Leaders arrive
                to quiet whitespace, a clear prompt, and the immediate invitation to sketch the next experiment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="h-auto rounded-full px-7 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Schedule a whiteboard</Button>
                <Button
                  variant="outline"
                  className="h-auto rounded-full px-7 py-3 text-sm border-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-100 hover:bg-gray-900/5"
                >
                  Download monochrome PDF
                </Button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400 mb-2">{stat.label}</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[32px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)]">
                <div className="rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <Image
                    src="/brad/brad-brisco-1.jpeg"
                    alt="Brad Brisco portrait"
                    width={640}
                    height={760}
                    className="object-cover grayscale"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400">Prompt of the week</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    “Sketch your next experiment in two strokes: tension + move.”
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Portrait intentionally desaturated so the prompt stays in focus. Hover interactions only adjust the border, never the image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300 mb-3">Minimalist principles</p>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-5">How the hero honors Brad’s brief</h2>
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-b-0 last:pb-0">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{pillar.title}</p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-8 space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-700 dark:text-gray-300">Commitments</p>
            {commitments.map((commitment) => (
              <div key={commitment.title} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">{commitment.title}</p>
                <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{commitment.note}</p>
              </div>
            ))}
            <Button className="h-auto rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black">Preview full build</Button>
          </div>
        </div>
      </section>
    </div>
  )
}


