"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const studioBoards = [
  {
    label: "Studio Board A",
    theme: "Curriculum flow",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketch-tablet.webp",
    note: "Layered arrows show how apostolic, prophetic, evangelist tracks intersect.",
  },
  {
    label: "Studio Board B",
    theme: "Residency journey",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-2-tablet.webp",
    note: "Gold dots mark milestone critiques, violet washes imply depth.",
  },
  {
    label: "Studio Board C",
    theme: "Movement atlas",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-1-tablet.webp",
    note: "Duotone overlays convert raw sketch energy into refined navigation cues.",
  },
]

const rituals = [
  {
    title: "Archive Overview",
    description: "Landing hero uses a full-width art scan with GSAP parallax and subtle typography overlays.",
  },
  {
    title: "Case Modules",
    description: "Each module receives a card with art thumbnails, curriculum metadata, and gold accent badges.",
  },
  {
    title: "Studio Signals",
    description: "Timeline bar animates softly (y ≤ 12px) to indicate current phase—no spins, just measured pulses.",
  },
]

export default function GSAPAcademicStudio() {
  return (
    <div className="min-h-screen bg-[#130b24] text-[#f7f3ff]">
      <header className="px-6 py-20 border-b border-[#432659]/60">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="space-y-4 flex-1">
            <p className="text-xs tracking-[0.35em] uppercase text-[#d2c4ff]">GSAP Academic • Studio Approach</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Violet Atelier for <span className="text-[#f0c36a]">Movemental Illustration</span>
            </h1>
            <p className="text-lg text-[#e3d4ff] max-w-2xl">
              Heavy art direction anchored by the marker drawings you shared—hero canvases, pinned studio boards, and modular cards all
              revolve around these scans. Palette: deep violet foundations, gold micro-accent, lilac typography.
            </p>
          </div>
          <div className="flex-1 bg-[#221135] border border-[#432659] rounded-2xl p-6 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-[#d2c4ff]">Implementation mantra</p>
            <p className="text-base text-[#e3d4ff]">
              “Feature the art first, then tuck the interface around it.” Use GSAP to breathe life into scroll steps, but keep motions
              understated—pauses, parallax, light easing.
            </p>
          </div>
        </div>
      </header>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="bg-[#221135] border border-[#432659] rounded-[32px] p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 right-0 w-72 h-72 bg-[#5b21b6]/30 blur-[120px]" />
              <div className="absolute bottom-0 left-10 w-56 h-56 bg-[#f0c36a]/20 blur-[120px]" />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d2c4ff]">Primary hero</p>
            <h2 className="text-4xl font-black text-[#f7f3ff] mt-4 mb-6">Immersive full-bleed canvas</h2>
            <p className="text-[#e3d4ff] leading-relaxed">
              Starting hero treatment: a massive canvas using `{"/images/art/art-marker-drawing-abstract-artistic-sketch-2x.webp"}` with a
              two-layer overlay (violet gradient + gold lined annotation). GSAP drives a parallax shift ≤ 25% and a soft opacity fade on
              scroll.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden border border-[#432659] shadow-[0_30px_80px_rgba(19,11,36,0.7)]">
              <Image
                src="/images/art/art-marker-drawing-abstract-artistic-sketch-mobile-2x.webp"
                alt="Hero canvas reference"
                width={1200}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {rituals.map((ritual) => (
              <div key={ritual.title} className="p-6 rounded-2xl border border-[#432659] bg-[#130b24]/80 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d2c4ff]">{ritual.title}</p>
                <p className="text-base text-[#e3d4ff] mt-2">{ritual.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-[#d2c4ff]">Studio boards</p>
              <h2 className="text-4xl font-black text-[#f7f3ff]">Pinned references from your art library</h2>
            </div>
            <button className="px-5 py-2.5 rounded-full border border-[#f0c36a] text-[#f0c36a] text-xs tracking-[0.4em] uppercase">
              Rotate weekly
            </button>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {studioBoards.map((board, index) => (
              <motion.article
                key={board.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-[#432659] bg-[#221135] overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <Image
                    src={board.image}
                    alt={board.theme}
                    width={640}
                    height={640}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#5b21b6]/70 text-[#f7f3ff] text-xs uppercase tracking-[0.3em] rounded-full">
                    {board.label}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-sm text-[#d2c4ff] uppercase tracking-[0.3em]">{board.theme}</p>
                  <p className="text-base text-[#e3d4ff]">{board.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-[#432659] bg-gradient-to-br from-[#221135] to-[#130b24] p-10 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-xs tracking-[0.35em] uppercase text-[#d2c4ff]">Deployment notes</p>
            <h3 className="text-3xl font-black text-[#f7f3ff]">Archive pages should read like a living studio</h3>
            <p className="text-[#e3d4ff]">
              Use the attached art assets as the hero anchor. In supporting sections, crop or zoom to create variation but retain the
              tangible marker texture. Reinforce the violet/gold palette across buttons, borders, and overlays. Keep GSAP animations
              smooth: translate, scale (≤1.02), and fade.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            {[
              "Apply palette tokens globally before touching page-level components.",
              "Every card gets an art thumbnail, even if repeated—consistency is the aesthetic.",
              "Balance textual hierarchy with plenty of negative space and measured letter spacing.",
            ].map((tip) => (
              <div key={tip} className="p-4 border border-[#f0c36a]/30 rounded-2xl text-[#f0c36a] text-sm leading-relaxed">
                {tip}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}


