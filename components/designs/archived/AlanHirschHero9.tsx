/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Narrative Storytelling with Magazine Layout
// Breaking the template - completely different content structure
// Magazine article/interview style with varied content types
// Story-driven, not feature-driven
// Mix of text, quotes, images, and interactive elements

export default function AlanHirschHero() {
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const storyMoments = [
    {
      year: "Early 2000s",
      title: "The Question That Changed Everything",
      content: "What if the church wasn't meant to be a building, but a movement? This question, born from years of ministry in Australia, would become the foundation for a global transformation in how we understand Christian community.",
      image: "/alan/alan-hirsch-1-2x-tablet.webp",
      quote: "The church exists for mission as fire exists for burning.",
    },
    {
      year: "2003",
      title: "A New Language Emerges",
      content: "Co-authoring 'The Shaping of Things to Come' with Michael Frost, Alan began articulating what many were feeling but couldn't name. The book introduced terms like 'missional' and 'apostolic' into mainstream church vocabulary, giving language to a movement that was already stirring.",
      image: "/alan/alan-hirsch-2-2x.webp",
      quote: "Innovation isn't about abandoning the past, but rediscovering what was always there.",
    },
    {
      year: "2006",
      title: "The Forgotten Ways",
      content: "In what would become his most influential work, Alan explored the 'apostolic genius' - the DNA of movements that have transformed cultures throughout history. The book didn't just describe a theory; it activated a generation of leaders to think differently about church.",
      image: "/alan/alan-hirsch-3-2x.webp",
      quote: "We don't need to invent new ways of being church. We need to remember the old ways we've forgotten.",
    },
  ]

  const conversations = [
    {
      question: "What does 'missional' actually mean?",
      answer: "It's not about adding mission to what we do. It's about recognizing that mission is the very nature of God, and therefore the very nature of the church. We don't have a mission - we are a mission.",
      context: "From a 2015 interview with Leadership Journal",
    },
    {
      question: "How do you see the church changing?",
      answer: "The shift is from attractional to missional, from centralized to decentralized, from program-driven to movement-driven. But this isn't new - it's a return to the apostolic pattern we see in the early church.",
      context: "From a 2018 conference keynote",
    },
    {
      question: "What gives you hope?",
      answer: "I see leaders everywhere rediscovering their apostolic imagination. They're not waiting for permission or a program. They're creating, pioneering, and activating the gifts God has given them. That's how movements start.",
      context: "From a 2020 podcast interview",
    },
  ]

  const principles = [
    {
      number: "01",
      principle: "Apostolic Environment",
      description: "Creating spaces where pioneering and innovation are not just allowed, but expected and celebrated.",
    },
    {
      number: "02",
      principle: "Disciple-Making Focus",
      description: "Everything flows from making disciples who make disciples - not programs, not events, not buildings.",
    },
    {
      number: "03",
      principle: "Organic Systems",
      description: "Structures that grow naturally from relationships and mission, not imposed from above.",
    },
    {
      number: "04",
      principle: "Communitas",
      description: "The deep bond that forms when people share a common mission and face challenges together.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      {/* Opening - Full Screen Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: imageY, opacity: textOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/alan/alan-headshot-4x5.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-sm tracking-[0.5em] uppercase text-[#888]">A Story of</span>
          </motion.div>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-tighter">
            <span className="block">Movement</span>
            <span className="block text-[#d4af37]">& Mission</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-[#ccc] max-w-2xl mx-auto leading-relaxed"
          >
            The journey of Alan Hirsch and the missional movement
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <span className="text-xs tracking-wider uppercase text-[#666] block mb-2">Scroll to begin</span>
            <div className="w-px h-12 bg-[#666] mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction - Magazine Style */}
      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#e8e8e0] mb-8 first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:font-black first-letter:text-[#d4af37]">
              In the early 2000s, a quiet revolution began. Not with protests or manifestos, but with questions. 
              Questions about what it means to be the church in a rapidly changing world. Questions that would 
              eventually reshape how thousands of communities understand their calling.
            </p>
            <p className="text-xl leading-relaxed text-[#ccc] mb-8">
              At the center of this movement stands Alan Hirsch—theologian, author, and catalyst. But more than 
              that, he's a storyteller who helped an entire generation find language for what they were already 
              experiencing: that the church isn't a place you go, but a people you become.
            </p>
            <div className="border-l-4 border-[#d4af37] pl-8 my-12">
              <p className="text-3xl font-light italic text-[#f5f5f0] mb-4">
                "The future of the church is not about better programs or bigger buildings. 
                It's about rediscovering who we were always meant to be."
              </p>
              <p className="text-sm text-[#888]">— Alan Hirsch</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Moments - Timeline Style */}
      {storyMoments.map((moment, index) => (
        <section key={index} className="relative py-32 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="mb-6">
                  <span className="text-sm tracking-[0.3em] uppercase text-[#d4af37]">{moment.year}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-[#f5f5f0]">
                  {moment.title}
                </h2>
                <p className="text-xl leading-relaxed text-[#ccc] mb-8">
                  {moment.content}
                </p>
                <div className="border-l-4 border-[#d4af37] pl-6 my-8">
                  <p className="text-2xl font-light italic text-[#e8e8e0]">
                    "{moment.quote}"
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#d4af37]/20 blur-2xl" />
                  <div className="relative rounded-lg overflow-hidden border border-[#333]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Conversations - Q&A Format */}
      <section className="relative py-32 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-[#888] mb-4 block">In Conversation</span>
            <h2 className="text-6xl md:text-7xl font-black text-[#f5f5f0]">Questions & Answers</h2>
          </motion.div>

          <div className="space-y-16">
            {conversations.map((conv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-[#333] pb-12 last:border-0"
              >
                <div className="mb-6">
                  <span className="text-sm text-[#d4af37] font-semibold">Q</span>
                  <h3 className="text-2xl font-bold text-[#f5f5f0] mt-2">{conv.question}</h3>
                </div>
                <div className="ml-8">
                  <span className="text-sm text-[#888] font-semibold">A</span>
                  <p className="text-xl leading-relaxed text-[#e8e8e0] mt-2 mb-4">{conv.answer}</p>
                  <p className="text-sm text-[#666] italic">{conv.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles - Numbered List */}
      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-[#888] mb-4 block">Core Framework</span>
            <h2 className="text-6xl md:text-7xl font-black text-[#f5f5f0]">Four Essential Elements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-black text-[#d4af37]/30 leading-none">{item.number}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl font-bold text-[#f5f5f0] mb-4">{item.principle}</h3>
                    <p className="text-lg leading-relaxed text-[#ccc]">{item.description}</p>
                  </div>
                </div>
                {index < principles.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA - Minimal */}
      <section className="relative py-32 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#f5f5f0]">
              The Story Continues
            </h2>
            <p className="text-xl leading-relaxed text-[#ccc] mb-12">
              This is not the end of the story, but a chapter in an ongoing movement. 
              The work continues in communities around the world, activated by apostolic imagination 
              and missional DNA.
            </p>
            <Button
              size="lg"
              className="text-base px-12 py-6 h-auto bg-[#d4af37] text-[#0a0a0a] hover:bg-[#b8941f] font-semibold rounded-none border-0"
            >
              Explore the Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-[#111] border border-[#333] rounded-none hover:border-[#d4af37] hover:bg-[#1a1a1a] transition-colors text-[#f5f5f0] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
