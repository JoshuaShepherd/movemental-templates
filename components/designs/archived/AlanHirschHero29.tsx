"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Narrative Storytelling Enthusiast
// Philosophy: Cinematic immersive story scroll with parallax hero, chapter scenes, audio commentary
// Experiment: Long-form narrative experience combining video hero, parallax sections, and embedded audio moments

type StoryBeat = {
  id: string
  title: string
  location: string
  summary: string
  media: string
}

const storyBeats: StoryBeat[] = [
  {
    id: "beat-01",
    title: "Johannesburg Rooftops",
    location: "Johannesburg",
    summary: "Alan recounts the catalytic evening when an underground community mapped their city by rooftop gardens.",
    media: "jozi",
  },
  {
    id: "beat-02",
    title: "Melbourne Tramlines",
    location: "Melbourne",
    summary: "The revelation that movements move at the speed of trust, discovered while shadowing tram conductors.",
    media: "melbourne",
  },
  {
    id: "beat-03",
    title: "São Paulo Night Markets",
    location: "São Paulo",
    summary: "Communitas rituals born in the middle of bustling markets, mixing scent, storytelling, and prayer.",
    media: "saopaulo",
  },
]

type AudioMoment = {
  id: string
  title: string
  duration: string
  description: string
}

const audioMoments: AudioMoment[] = [
  {
    id: "audio-01",
    title: "Communitas Invocation",
    duration: "04:12",
    description: "Alan guides a rite of passage for a new team launching in Lisbon.",
  },
  {
    id: "audio-02",
    title: "Diagram Walkthrough",
    duration: "03:08",
    description: "Narrated breakdown of the apostolic genius diagram drawn live at Praxis Summit.",
  },
]

const chapterMarkers = [
  { label: "Chapter 01", title: "The Edge of the City" },
  { label: "Chapter 02", title: "Communitas in Motion" },
  { label: "Chapter 03", title: "Organic Systems" },
]

export default function AlanHirschHero29() {
  const parallaxVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 60 },
      animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.2 } }),
    }),
    []
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white/10 border border-white/30 rounded-full backdrop-blur hover:bg-white/20 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Cinematic hero */}
      <section className="relative h-[90vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/public/hero/poster.webp"
        >
          <source src="/public/video/alan-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 pt-32">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">Immersive Story Scroll</p>
          <h1 className="text-6xl md:text-7xl font-semibold leading-tight mt-6">Alan Hirsch: Stories from the Movemental Frontier</h1>
          <p className="text-lg text-white/80 mt-6 max-w-3xl">
            Experience Alan’s most requested field stories with cinematic video, parallax imagery, and embedded commentary. Scroll to
            inhabit each moment.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-white text-black hover:bg-gray-200">
              Start immersive scroll
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 h-auto text-sm border-white/60 text-white hover:bg-white/10"
            >
              Listen to commentary
            </Button>
          </div>
        </div>
      </section>

      {/* Chapter markers */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {chapterMarkers.map((chapter, index) => (
            <motion.div
              key={chapter.label}
              custom={index}
              variants={parallaxVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/20 p-6 bg-white/5 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{chapter.label}</p>
              <h3 className="text-2xl font-semibold mt-3">{chapter.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story beats parallax */}
      <section className="space-y-20">
        {storyBeats.map((beat) => (
          <div key={beat.id} className="relative">
            <div className={`sticky top-24 h-[70vh] flex items-end bg-cover bg-center`} style={{ backgroundImage: `url(/public/story/${beat.media}.webp)` }}>
              <div className="w-full bg-gradient-to-t from-black via-black/70 to-transparent p-8">
                <p className="text-xs uppercase tracking-[0.6em] text-white/60">{beat.location}</p>
                <h2 className="text-4xl font-semibold mt-3">{beat.title}</h2>
                <p className="text-lg text-white/80 mt-4 max-w-3xl">{beat.summary}</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto px-6 py-10"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                “Movements emerge where the city edges meet courage. In {beat.location}, we watched the Spirit choreograph new forms of
                gathering long before we had language for it.”
              </p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Audio commentary */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Audio Commentary</p>
            <h2 className="text-3xl font-semibold">Listen to Alan narrate each scene</h2>
          </div>
          <Button className="rounded-full px-6 py-2 h-auto text-sm bg-white text-black hover:bg-gray-200">Play all</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {audioMoments.map((audio) => (
            <div key={audio.id} className="rounded-3xl border border-white/20 p-6 bg-white/5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{audio.duration}</p>
              <h3 className="text-2xl font-semibold mt-3">{audio.title}</h3>
              <p className="text-sm text-white/70 mt-2">{audio.description}</p>
              <div className="mt-4 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-white/70 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
