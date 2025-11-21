"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryPieces = [
  {
    title: "Marker Study 01",
    subtitle: "Movement storyboard overlay",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketch-desktop.webp",
    caption: "Primary artwork anchors the hero with layered academic annotations.",
  },
  {
    title: "Marker Study 02",
    subtitle: "Annotated missional layers",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-2-desktop.webp",
    caption: "Gold ink callouts highlight apostolic, prophetic, evangelist emphasis.",
  },
  {
    title: "Marker Study 03",
    subtitle: "Studio contact sheet",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-1-desktop.webp",
    caption: "Violet duotone filters translate tactile ink into digital rhythm.",
  },
]

const segments = [
  {
    heading: "Scholarly Motion Lab",
    detail:
      "GSAP timelines choreograph subtle parallax and ink fades so the artwork feels alive without overwhelming the reading experience.",
  },
  {
    heading: "Curated Gallery Rail",
    detail:
      "Each card references a specific scan from the art set, framed with duotone mats and gold captions to mirror a museum label system.",
  },
  {
    heading: "Research Companion Panels",
    detail:
      "Supplementary panels translate strokes into missional metrics—think apostolic density heatmaps, formation layers, and praxis notes.",
  },
]

export default function GSAPAcademicGallery() {
  return (
    <div className="min-h-screen bg-[#130b24] text-[#f7f3ff]">
      <section className="relative overflow-hidden border-b border-[#432659]/60">
        <div className="absolute inset-0 bg-gradient-to-br from-[#130b24] via-[#221135] to-[#130b24] opacity-90" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] bg-[#5b21b6]/30 blur-[140px]" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] bg-[#f0c36a]/20 blur-[160px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:flex lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <p className="text-xs tracking-[0.3em] text-[#d2c4ff] uppercase">GSAP Academic • Gallery Approach</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-[#f7f3ff]">
              Inked Movements <span className="text-[#f0c36a]">Staged in Violet & Gold</span>
            </h1>
            <p className="text-lg md:text-xl text-[#e3d4ff] max-w-2xl leading-relaxed">
              A refined exhibition layout that lets the scanned marker drawings dominate the canvas. Gold annotations, lilac body copy,
              and gentle GSAP scroll choreography translate the artwork into a living research atlas.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Gallery Rail", "Timeline Notes", "Ink Overlays"].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full border border-[#f0c36a]/40 text-sm text-[#f0c36a] bg-[#5b21b6]/10 tracking-wide"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 mt-16 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#432659] shadow-[0_30px_80px_rgba(19,11,36,0.8)]">
              <Image
                src="/images/art/art-marker-drawing-abstract-artistic-sketch-2x.webp"
                alt="Marker art hero"
                width={900}
                height={900}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130b24]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[#d2c4ff]">Studio scan</p>
                  <p className="text-xl font-semibold text-[#f7f3ff]">Layered marker draft</p>
                </div>
                <span className="text-[#f0c36a] text-sm">Project: GSAP Academic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-3">
        {segments.map((segment) => (
          <motion.div
            key={segment.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#221135] border border-[#432659] rounded-2xl p-6 shadow-[0_20px_60px_rgba(19,11,36,0.4)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#d2c4ff] mb-2">{segment.heading}</p>
            <p className="text-base text-[#e3d4ff] leading-relaxed">{segment.detail}</p>
          </motion.div>
        ))}
      </section>

      <section className="px-6 py-24 bg-[#221135] border-y border-[#432659]/70">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#d2c4ff] uppercase">FEATURED WORKS</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#f7f3ff]">Annotated Gallery Rail</h2>
            </div>
            <p className="text-[#e3d4ff] max-w-xl">
              Each board pairs the scanned artwork with contextual data: missional readings, palette overlays, and GSAP motion cues that
              guide how the piece animates across the page.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {galleryPieces.map((piece, index) => (
              <motion.article
                key={piece.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-3xl border border-[#432659] bg-[#130b24] overflow-hidden flex flex-col shadow-[0_25px_80px_rgba(19,11,36,0.55)]"
              >
                <div className="relative">
                  <Image src={piece.image} alt={piece.title} width={720} height={720} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130b24]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#5b21b6]/40 text-[#f7f3ff] text-xs tracking-[0.3em] uppercase">
                    {piece.subtitle}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-[#f7f3ff]">{piece.title}</h3>
                  <p className="text-sm text-[#d2c4ff]">{piece.caption}</p>
                  <div className="pt-3 mt-auto border-t border-[#432659]/60 text-[#f0c36a] text-sm tracking-[0.25em]">
                    Hover reveals layered GSAP playhead
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-xs tracking-[0.3em] text-[#d2c4ff] uppercase">CURATION NOTES</p>
            <h2 className="text-4xl font-black text-[#f7f3ff]">From sketchbook to live archive</h2>
            <p className="text-lg text-[#e3d4ff] leading-relaxed">
              The Movemental Archive now treats every GSAP Academic experience like a curated exhibit. The violet duotone grounds each
              screen, the gold accent threads through captions and micro-interactions, and the artwork receives full-bleed attention
              across hero, cards, and scrollable rails.
            </p>
          </div>
          <div className="flex-1 bg-[#221135] border border-[#432659] rounded-3xl p-6 space-y-6">
            <div>
              <p className="text-sm text-[#d2c4ff] uppercase tracking-[0.3em]">TO-DO FOR IMPLEMENTERS</p>
              <ul className="mt-3 text-[#e3d4ff] space-y-2 list-disc list-inside">
                <li>Propagate violet/gold tokens across globals, cards, nav, and typography.</li>
                <li>Feature art scans in every hero or hero-adjacent section for GSAP archive entries.</li>
                <li>Cap GSAP rotations ≤ 4° and rely on depth, parallax, and opacity shifts for drama.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#f0c36a]/40 bg-[#5b21b6]/10 p-5 text-[#f0c36a] text-sm tracking-[0.2em] uppercase">
              Artwork source: `/public/images/art/*` — keep assets uncompressed and credit Movemental Studio.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


