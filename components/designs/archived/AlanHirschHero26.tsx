"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Persona: Creative Producer / Fan Community
// Philosophy: Immersive spotlight storefront with cinematic hero, neon glassmorphism, layered cards
// Experiment: Author Spotlight Storefront featuring signed editions, event tickets, testimonial reels

type SpotlightSlide = {
  id: string
  label: string
  heading: string
  subheading: string
  summary: string
  accent: string
  badge: string
}

const heroSlides: SpotlightSlide[] = [
  {
    id: "slide-01",
    label: "Signed release · 250 copies",
    heading: "Alan Hirsch · Movement Almanac",
    subheading: "Hand-numbered with holographic dust jacket",
    summary: "Includes archival print, QR-linked micro documentary, and collector sleeve printed in Amsterdam.",
    accent: "from-purple-600 via-fuchsia-500 to-orange-400",
    badge: "Drop 07",
  },
  {
    id: "slide-02",
    label: "Live salon · March 12",
    heading: "Night at the Ecclesia Studio",
    subheading: "Immersive reading experience with ambient string set",
    summary: "Tickets include signed edition, risograph poster, and post-event fireside audio bundle.",
    accent: "from-slate-900 via-slate-800 to-indigo-600",
    badge: "Experience",
  },
  {
    id: "slide-03",
    label: "Collectors club",
    heading: "Movement Editions Vault",
    subheading: "Quarterly crate curated by Alan + Jo Saxton",
    summary: "Three volumes, artifact reproductions, and a private signal group with behind-the-scenes commentary.",
    accent: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "Subscription",
  },
]

type Edition = {
  id: string
  title: string
  binding: string
  price: number
  status: "available" | "waitlist" | "sold-out"
  perks: string[]
  accent: string
}

const editions: Edition[] = [
  {
    id: "edition-01",
    title: "Signed First Edition",
    binding: "Foil-stamped hardcover + vellum wrap",
    price: 120,
    status: "available",
    perks: ["Hand-numbered", "Luminous slipcase", "QR film"],
    accent: "from-purple-600 to-pink-500",
  },
  {
    id: "edition-02",
    title: "Field Notes Bundle",
    binding: "Softcover + annotations + audio",
    price: 78,
    status: "waitlist",
    perks: ["Audio commentary", "Fold-out diagrams", "Canvas pouch"],
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "edition-03",
    title: "Studio Proof Set",
    binding: "Unbound proofs + acrylic stand",
    price: 210,
    status: "sold-out",
    perks: ["Gallery print", "White-glove gloves", "Certificate"],
    accent: "from-slate-900 to-slate-700",
  },
]

type EventCard = {
  id: string
  title: string
  date: string
  format: string
  location: string
  description: string
}

const events: EventCard[] = [
  {
    id: "event-01",
    title: "Movemental On Stage · NYC",
    date: "Apr 24 · 7:30 PM",
    format: "Immersive reading + live score",
    location: "Bellwether Hall, Brooklyn",
    description: "Cinematic reading with custom analog projections and after-hours book signing.",
  },
  {
    id: "event-02",
    title: "Signed Salon · Melbourne",
    date: "May 11 · 6:00 PM",
    format: "Intimate salon + tasting",
    location: "The Ministry Hub, Fitzroy",
    description: "30-seat salon with tasting menu inspired by Hirsch field notes.",
  },
  {
    id: "event-03",
    title: "Virtual Premiere",
    date: "Jun 2 · 11:00 AM PST",
    format: "Livestream interview + Q&A",
    location: "Stream + Discord stage",
    description: "Global premiere with multi-cam production and collector giveaways.",
  },
]

type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: "quote-01",
    quote: "The signed edition feels like a museum artifact. Every detail—from the magnetic clasp to the scent of the ink—feels intentional.",
    name: "Isabel Moreno",
    role: "Creative Producer, Communitas Lab",
  },
  {
    id: "quote-02",
    quote: "Hirsch read an entire chapter live, then improvised a blessing over our movement. I will never forget the atmosphere in that room.",
    name: "Darius Cole",
    role: "Founder, Studio Koinonia",
  },
]

const perks = [
  { label: "Collector concierge", detail: "Text-based concierge for shipping + framing" },
  { label: "Artifact guarantee", detail: "If a parcel is damaged, we overnight a replacement" },
  { label: "Vault access", detail: "Private feed with studio polaroids + essays" },
]

export default function AlanHirschHero26() {
  const [activeSlideId, setActiveSlideId] = useState(heroSlides[0].id)
  const [highlightedEditionId, setHighlightedEditionId] = useState(editions[0].id)

  const activeSlide = useMemo(() => heroSlides.find((slide) => slide.id === activeSlideId) ?? heroSlides[0], [activeSlideId])
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-[#080712] to-black text-gray-100">
      <div className="fixed top-6 left-6 z-30">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-black/60 border border-white/20 rounded-full backdrop-blur hover:bg-white/10 transition-colors"
        >
          ← Back to Game
        </Link>
      </div>

      {/* Hero Spotlight */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-gray-300">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                Author Spotlight
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
                Alan Hirsch: Movement Editions, Live Salons, Collector Drops
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                A storefront built for fans, creative producers, and movement partners. Experience signed editions, immersive salons,
                and vault-only artifacts in one cinematic interface.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-white text-black hover:bg-gray-200">
                  Reserve signed edition
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 h-auto text-sm border-white/40 text-white hover:bg-white/10"
                >
                  View tour schedule
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gray-300 mb-4">
                <span>{activeSlide.badge}</span>
                <span>{activeSlide.label}</span>
              </div>
              <div className={`rounded-3xl p-8 text-white shadow-2xl bg-gradient-to-br ${activeSlide.accent}`}>
                <h2 className="text-2xl font-semibold">{activeSlide.heading}</h2>
                <p className="text-sm text-white/80 mt-2">{activeSlide.subheading}</p>
                <p className="text-sm text-white/80 mt-4 leading-relaxed">{activeSlide.summary}</p>
              </div>
              <div className="flex gap-2 mt-6">
                {heroSlides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideId(slide.id)}
                    className={`flex-1 text-left px-4 py-3 rounded-2xl border text-xs uppercase tracking-wide transition-all ${
                      activeSlideId === slide.id ? "border-white text-white" : "border-white/20 text-gray-300 hover:border-white/40"
                    }`}
                  >
                    {slide.badge}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glow Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Editions */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Signed editions</p>
            <h2 className="text-3xl font-semibold text-white">Choose your artifact</h2>
          </div>
          <Button className="rounded-full px-6 py-2 h-auto text-sm bg-white/10 text-white border border-white/30 hover:bg-white/20">
            Talk to concierge
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {editions.map((edition) => (
            <motion.button
              key={edition.id}
              onClick={() => setHighlightedEditionId(edition.id)}
              whileHover={{ y: -6 }}
              className={`text-left rounded-3xl border backdrop-blur-xl p-6 transition-all ${
                highlightedEditionId === edition.id
                  ? "border-white bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{edition.status}</p>
              <h3 className="text-2xl font-semibold text-white mt-3">{edition.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{edition.binding}</p>
              <p className="text-lg font-medium text-white mt-4">${edition.price}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {edition.perks.map((perk) => (
                  <span key={perk} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
                    {perk}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-3 gap-4">
          {perks.map((perk) => (
            <div key={perk.label}>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{perk.label}</p>
              <p className="text-sm text-gray-200 mt-2">{perk.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Tour schedule</p>
              <h2 className="text-3xl font-semibold text-white">Salon experiences + signings</h2>
            </div>
            <Button className="rounded-full px-6 py-2 h-auto text-sm bg-white text-black hover:bg-gray-200">
              Reserve tickets
            </Button>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{event.format}</p>
                <h3 className="text-2xl font-semibold text-white mt-3">{event.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{event.location}</p>
                <p className="text-sm text-gray-200 mt-2">{event.date}</p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <p className="text-lg text-white leading-relaxed">“{testimonial.quote}”</p>
              <p className="text-sm text-gray-300 mt-4">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
