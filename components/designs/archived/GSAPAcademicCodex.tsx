"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const codexChapters = [
  {
    title: "Codex Page 01",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketch--desktop.webp",
    excerpt: "Layered glyphs aligned with apostolic imagination, framed by gold marginalia.",
    annotations: ["Ink overlays", "Gold marginalia", "Duotone wash"],
  },
  {
    title: "Codex Page 02",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-2-desktop-desktop.webp",
    excerpt: "Missional pathways etched in violet lines with muted lavender grids.",
    annotations: ["Movement rails", "Curriculum map", "GSAP pin"],
  },
  {
    title: "Codex Page 03",
    image: "/images/art/art-marker-drawing-abstract-artistic-sketc-1-desktop-desktop.webp",
    excerpt: "Residency reflections in a gold-on-plum palette, ready for ScrollTrigger reveals.",
    annotations: ["Residency log", "Gold cues", "Scroll depth"],
  },
]

const referenceImages = [
  "/images/art/art-marker-drawing-abstract-artistic-sketch-mobile.webp",
  "/images/art/art-marker-drawing-abstract-artistic-sketc-2-mobile.webp",
  "/images/art/art-marker-drawing-abstract-artistic-sketc-1-mobile.webp",
]

export default function GSAPAcademicCodex() {
  return (
    <div className="min-h-screen bg-[#130b24] text-[#f7f3ff]">
      <section className="px-6 py-24 border-b border-[#432659]/70">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-5"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#d2c4ff]">GSAP Academic • Codex Approach</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Manuscript-Grade <span className="text-[#f0c36a]">Storytelling</span> with Violet Ink
            </h1>
            <p className="text-lg text-[#e3d4ff] leading-relaxed">
              Think of the archive as a digital codex: every spread pairs Movemental research with the marker drawings you provided. Full
              bleed art, columnar notes, and gold illuminated accents guide users through the story.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {["Hero codex", "Marginalia", "ScrollTreatise"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#432659] py-4 text-[#f0c36a] text-xs tracking-[0.35em] uppercase">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 rounded-[32px] border border-[#432659] bg-[#221135] p-8"
          >
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-[#d2c4ff]">Design directives</p>
              <ul className="space-y-3 text-[#e3d4ff]">
                <li>Use the provided art images as the dominant element on every major section.</li>
                <li>Gold accents highlight headings, pagination, and GSAP progress bars.</li>
                <li>Animations: column fades, parallax ≤ 20%, no spinning panels.</li>
              </ul>
            </div>
            <div className="mt-8 rounded-2xl border border-[#f0c36a]/30 bg-[#5b21b6]/10 p-4 text-sm text-[#f0c36a] tracking-[0.3em] uppercase">
              Palette tokens: `#130b24`, `#221135`, `#5b21b6`, `#f0c36a`, `#f7f3ff`, `#e3d4ff`, `#d2c4ff`.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          {referenceImages.map((image, idx) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-[28px] border border-[#432659] bg-[#221135] overflow-hidden"
            >
              <Image src={image} alt={`Marker reference ${idx + 1}`} width={640} height={640} className="w-full h-auto object-cover" />
              <div className="p-4 text-xs tracking-[0.35em] uppercase text-[#d2c4ff]">Reference {idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs tracking-[0.4em] uppercase text-[#d2c4ff]">Codex chapters</p>
            <h2 className="text-4xl font-black">Each archive entry reads like an illuminated spread</h2>
            <p className="text-[#e3d4ff] max-w-3xl mx-auto">
              Pair art + text, keep columns narrow, and let GSAP reveal details as readers scroll. Use subtle gold rules between columns,
              violet gradients for depth, and measured motion.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {codexChapters.map((chapter, index) => (
              <motion.article
                key={chapter.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="rounded-[32px] border border-[#432659] bg-[#130b24] overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <Image src={chapter.image} alt={chapter.title} width={720} height={720} className="object-cover w-full h-full" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#130b24] to-transparent text-[#f0c36a] text-xs tracking-[0.35em] uppercase">
                    {chapter.title}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[#e3d4ff]">{chapter.excerpt}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-[#d2c4ff] uppercase tracking-[0.4em]">
                    {chapter.annotations.map((annotation) => (
                      <span key={annotation} className="px-3 py-1 rounded-full border border-[#432659]">
                        {annotation}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-[36px] border border-[#432659] bg-[#221135] p-10 space-y-6">
          <p className="text-xs tracking-[0.4em] uppercase text-[#d2c4ff] text-center">Rollout checklist</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Update globals to the violet/gold tokens before touching page components.",
              "Ensure every GSAP Academic archive piece features the provided artwork prominently.",
              "Keep animations calm: fades, parallax, and progress bars—no spinning cards or aggressive scaling.",
              "Use gold for dividers, captions, and focus indicators to keep consistency across the site.",
            ].map((item) => (
              <div key={item} className="p-5 rounded-2xl border border-[#f0c36a]/30 bg-[#5b21b6]/10 text-[#f0c36a] text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


