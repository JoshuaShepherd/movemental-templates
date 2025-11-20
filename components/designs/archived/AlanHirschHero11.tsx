"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Design Choice: Immersive 3D Exhibition (from design guide: "3D Design and Immersive Experiences")
// Blends serif/sans pairing, spotlight lighting, interactive field notes
// Breaks previous templates with gallery curation + research lab narrative

const galleryPieces = [
  {
    title: "Apostolic Imagination",
    description: "Immersive installation exploring missional DNA through light corridors.",
    year: "2006",
    image: "/alan/alan-hirsch-2-2x.webp",
    palette: "from-[#5C7CFA] to-[#9775FA]",
  },
  {
    title: "Movement Cartography",
    description: "Projected cartography of networks activated by 5Q frameworks.",
    year: "2016",
    image: "/alan/alan-hirsch-3-2x.webp",
    palette: "from-[#38D9A9] to-[#12B886]",
  },
  {
    title: "Untamed Dialogues",
    description: "Soundscape dome capturing conversations on wild discipleship.",
    year: "2010",
    image: "/alan/alan-candid-1.webp",
    palette: "from-[#FF922B] to-[#F76707]",
  },
]

const fieldNotes = [
  {
    label: "Field Note 01",
    heading: "Edge Communities",
    body: "Movement begins at the margins. Alan's research shows that edge communities incubate experimentation faster than center institutions.",
  },
  {
    label: "Field Note 02",
    heading: "APEST Mapping",
    body: "When teams intentionally map Apostolic, Prophetic, Evangelistic, Shepherding, and Teaching gifts, participation rises 37% within six months.",
  },
  {
    label: "Field Note 03",
    heading: "Communitas",
    body: "High-risk mission scenarios create communitas—deep bonds forged through shared purpose—that outlast programs or campaigns.",
  },
]

const labStats = [
  { label: "Networks Activated", value: "132", detail: "micro-communities in the past decade" },
  { label: "APEST Cohorts", value: "48", detail: "teams certified in 5Q" },
  { label: "Languages", value: "15", detail: "translations of the core works" },
  { label: "Residencies", value: "22", detail: "immersive learning environments" },
]

const soundboard = [
  {
    source: "Missional Think Tank",
    quote: "Alan Hirsch reintroduced the language of movements to a generation that had forgotten its roots.",
  },
  {
    source: "Urban Church Lab",
    quote: "5Q gave our teams a diagnostic we didn't know we needed—suddenly the blind spots were visible.",
  },
  {
    source: "Future Church Podcast",
    quote: "Every conversation with Alan feels like stepping into a workshop—tools everywhere, imagination on overdrive.",
  },
]

export default function AlanHirschHero() {
  const [activeNote, setActiveNote] = useState(fieldNotes[0])

  return (
    <div className="min-h-screen bg-[#05060a] text-[#f5f5f0]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-sm tracking-[0.5em] uppercase text-[#9da0ff]">Immersive Exhibition</span>
              <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight font-[var(--font-playfair)]">
                Alan Hirsch Studio Archive
              </h1>
              <p className="mt-6 text-xl text-[#d6d6e8] leading-relaxed">
                A spatial reading of missional theory—part research lab, part gallery—where writings, field work,
                and soundscapes converge.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button className="px-8 py-4 h-auto rounded-full bg-[#8c7bff] text-[#05060a] text-sm font-semibold tracking-wide hover:bg-[#7462ff]">
                  Reserve a Guided Walkthrough
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 h-auto rounded-full border border-[#8c7bff] text-[#f5f5f0] text-sm font-semibold tracking-wide hover:bg-white/5"
                >
                  View Research Catalogue
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#8c7bff]/20 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <Image
                src="/alan/alan-headshot-4x5.webp"
                alt="Alan Hirsch"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[#bdbffd]">Curator</p>
                  <p className="text-lg font-semibold">Alan Hirsch</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">Since 2003</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24 bg-[#080910]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-[#9da0ff]">Gallery</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 font-[var(--font-playfair)]">Immersive Pieces</h2>
            </div>
            <p className="text-sm text-[#c3c3d7] max-w-lg">
              Selected works displayed as spatial installations—each translating a publication into light, sound, and motion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryPieces.map((piece, index) => (
              <motion.div
                key={piece.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${piece.palette} rounded-[32px] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity`} />
                <div className="relative h-72 rounded-[32px] overflow-hidden border border-white/10">
                  <Image src={piece.image} alt={piece.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                    {piece.year}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg font-semibold">{piece.title}</p>
                    <p className="text-sm text-[#d6d6e8] mt-2">{piece.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Notes */}
      <section className="px-6 py-24 bg-[#05060a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-[#9da0ff]">Field Notes</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 font-[var(--font-playfair)]">Research Fragments</h2>
            <p className="mt-6 text-[#c3c3d7]">
              Excerpts from travel journals, residencies, and cohort debriefs. Select a note to reveal its annotation.
            </p>
            <div className="mt-10 space-y-4">
              {fieldNotes.map((note) => (
                <button
                  key={note.label}
                  onClick={() => setActiveNote(note)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-colors ${
                    activeNote.label === note.label
                      ? "border-[#8c7bff] bg-[#14152b]"
                      : "border-white/10 bg-transparent hover:border-[#8c7bff]/40"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#9da0ff]">{note.label}</p>
                  <p className="mt-2 text-lg font-semibold">{note.heading}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-white/10 p-10 bg-gradient-to-br from-[#0c0d1b] to-[#080910]">
              <p className="text-sm uppercase tracking-[0.4em] text-[#9da0ff]">Annotation</p>
              <h3 className="mt-6 text-3xl font-bold">{activeNote.heading}</h3>
              <p className="mt-6 text-xl text-[#d6d6e8] leading-relaxed">{activeNote.body}</p>
              <div className="mt-10 h-px bg-white/10" />
              <p className="mt-6 text-sm text-[#8b8ca5]">Excerpt archived in the Studio Ledger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Lab */}
      <section className="px-6 py-24 bg-[#080910]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-[#38d9a9]">Movement Lab</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 font-[var(--font-playfair)]">APEST Signals</h2>
            <p className="mt-6 text-[#c3c3d7]">
              The lab maps how Apostolic, Prophetic, Evangelistic, Shepherding, and Teaching gifts appear across global networks.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {labStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 p-6 bg-[#0b0c17]">
                  <p className="text-sm text-[#8b8ca5]">{stat.label}</p>
                  <p className="mt-4 text-3xl font-black text-[#38d9a9]">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#d6d6e8]">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-[#38d9a9]/10 blur-3xl" />
            <div className="relative rounded-[40px] border border-white/10 p-10 bg-gradient-to-br from-[#04050a] to-[#0b0c17]">
              <p className="text-sm uppercase tracking-[0.4em] text-[#38d9a9]">Signal Map</p>
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {"APEST".split("").map((char) => (
                  <div key={char} className="py-6 rounded-2xl border border-white/10 bg-white/5">
                    <p className="text-2xl font-black text-[#38d9a9]">{char}</p>
                    <p className="text-xs text-white/60 mt-2">Signal</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/70">
                <p>• Live cohorts track vitality via weekly pulse points.</p>
                <p>• Heatmaps reveal underrepresented gifts per region.</p>
                <p>• Data informs custom learning sprints.</p>
                <p>• Reports pair qualitative stories with metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soundboard */}
      <section className="px-6 py-24 bg-[#05060a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-[#9da0ff]">Soundboard</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 font-[var(--font-playfair)]">Voices in the Gallery</h2>
            </div>
            <Button className="px-6 py-3 h-auto rounded-full bg-white/10 text-sm hover:bg-white/20">Play Audio Loop</Button>
          </div>
          <div className="space-y-8">
            {soundboard.map((clip) => (
              <div key={clip.source} className="border border-white/10 rounded-3xl p-8 bg-[#0c0d1b]">
                <p className="text-xl italic text-[#d6d6e8]">“{clip.quote}”</p>
                <p className="mt-4 text-sm text-[#8b8ca5] uppercase tracking-[0.3em]">{clip.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors text-white font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
