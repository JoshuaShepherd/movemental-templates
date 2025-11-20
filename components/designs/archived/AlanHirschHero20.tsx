"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Long-Form Reader with Artfully Integrated AI
// Perfect digital book reading experience
// AI layer that enhances without interrupting
// Scholarly and artistic design

const bookContent = {
  title: "The Forgotten Ways",
  subtitle: "Reawakening the Missional Church",
  author: "Alan Hirsch",
  chapters: [
    {
      id: "1",
      title: "Introduction: The Apostolic Genius",
      content: `The church in the West finds itself at a critical juncture. The cultural landscape has shifted dramatically, and the old models of doing church—built on attraction, programs, and centralized leadership—are showing their limitations. But this isn't a crisis; it's an opportunity to rediscover something we've forgotten.

Throughout history, whenever the church has functioned as a transformative movement, we see certain characteristics consistently present. These characteristics form what I call "apostolic genius"—the inherent capacity of the church to pioneer new expressions of faith that transform culture.

Apostolic genius is not something we need to invent. It's something we need to remember. It's the DNA of the church—the essential elements that make the church the church. When these elements are present and activated, the church functions as a movement. When they're missing or dormant, the church becomes an institution.

The six elements of apostolic genius—what I call missional DNA or mDNA—are:

1. Jesus is Lord
2. Disciple-making
3. Missional-incarnational impulse
4. Apostolic environment
5. Organic systems
6. Communitas

Each element is interdependent and essential. They work together as a system. When all six are present and activated, the church has everything it needs to function as a transformative movement. When one or more are missing, the church experiences dysfunction and limitation.

The purpose of this book is to help churches rediscover and activate their apostolic genius. This isn't about abandoning everything and starting over. It's about remembering what we've forgotten and reactivating what's been dormant.`,
    },
    {
      id: "2",
      title: "Chapter 1: Jesus is Lord",
      content: `"Jesus is Lord" is not just a theological statement—it's the foundational element of apostolic genius. This element recognizes that Jesus Christ is the ultimate authority, the center of everything, and the source of all transformation.

When Jesus is truly Lord, it means:
- He shapes our identity and purpose
- He determines our priorities and values
- He guides our decisions and actions
- He is the measure of all things

This element is often assumed but not always activated. Many churches would say "Jesus is Lord," but their structures, programs, and priorities suggest otherwise. When Jesus is truly Lord, everything else aligns around that reality.

The early church understood this. They didn't just believe that Jesus was Lord—they lived as if it were true. This shaped how they gathered, how they made decisions, how they related to culture, and how they understood their mission.

In contemporary contexts, we need to ask: Is Jesus truly Lord, or is he just a concept we acknowledge? Does he shape our structures, or do our structures shape our understanding of him? Does he determine our priorities, or do we determine our priorities and then ask him to bless them?

When Jesus is truly Lord, the church becomes something different. It becomes a movement rather than an institution. It becomes transformative rather than maintenance-focused. It becomes missional rather than attractional.

This element cannot be activated through programs or events. It requires a fundamental reorientation of how we understand authority, identity, and purpose. It requires that we submit every aspect of church life to the lordship of Christ.`,
    },
    {
      id: "3",
      title: "Chapter 2: Disciple-Making",
      content: `Disciple-making is not a program or an activity—it's the primary function of the church. Everything flows from making disciples who make disciples. This element recognizes that the church exists to form people into the image of Christ and send them into mission.

True disciple-making involves:
- Life-on-life relationship
- Intentional formation
- Multiplication, not just addition
- Integration of faith and life
- Sending into mission

When disciple-making is the primary activity, everything else serves that purpose. Programs, events, and structures all exist to support the formation and sending of disciples. When disciple-making is secondary, the church becomes maintenance-focused rather than mission-focused.

The early church understood this. They didn't have elaborate programs, but they were committed to making disciples. This commitment shaped their community, their leadership, and their mission. They understood that disciple-making was not optional—it was essential.

In contemporary contexts, we often confuse disciple-making with other activities. We think that attending services, participating in programs, or serving in ministry is the same as being discipled. But true disciple-making requires intentional, relational, life-on-life investment.

Disciple-making also requires multiplication. It's not enough to make disciples—we need to make disciples who make disciples. This creates a movement rather than a program. It creates growth that is organic rather than organizational.

When disciple-making is the primary activity, the church becomes something different. It becomes a formation community rather than a program provider. It becomes a sending agency rather than a gathering place. It becomes a movement rather than an institution.`,
    },
  ],
}

export default function AlanHirschHero20() {
  const [selectedText, setSelectedText] = useState("")
  const [showAiInsight, setShowAiInsight] = useState(false)
  const [aiInsight, setAiInsight] = useState("")
  const [currentChapter, setCurrentChapter] = useState(0)
  const [fontSize, setFontSize] = useState(18)
  const lineHeight = 1.8
  const [readingProgress, setReadingProgress] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Hello! I'm your AI reading assistant. I can help you understand concepts, answer questions about the text, or provide deeper insights. What would you like to know?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection()
      if (selection && selection.toString().trim().length > 10) {
        const text = selection.toString().trim()
        setSelectedText(text)
        // Simulate AI insight generation
        setTimeout(() => {
          setAiInsight(`This passage discusses the foundational concept of ${text.substring(0, 30)}... This is a key theme in missional theology, emphasizing the importance of rediscovering apostolic patterns in contemporary church contexts.`)
          setShowAiInsight(true)
        }, 300)
      } else {
        setShowAiInsight(false)
        setSelectedText("")
      }
    }

    document.addEventListener("selectionchange", handleSelection)
    return () => document.removeEventListener("selectionchange", handleSelection)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = contentRef.current.scrollTop
        const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight
        const progress = (scrollTop / scrollHeight) * 100
        setReadingProgress(progress)
      }
    }

    const element = contentRef.current
    element?.addEventListener("scroll", handleScroll)
    return () => element?.removeEventListener("scroll", handleScroll)
  }, [currentChapter])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = inputMessage.trim()
    setInputMessage("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsTyping(true)

    // Simulate AI response (in production, this would call an AI API)
    setTimeout(() => {
      const responses = [
        `That's an excellent question about ${userMessage.substring(0, 30)}... In the context of missional DNA, this relates to the foundational elements we've been exploring. The key is understanding how these elements work together as a system rather than in isolation.`,
        `Great observation! This connects to the concept of apostolic genius we discussed. The idea is that the church has an inherent capacity to pioneer new expressions when all six elements of mDNA are present and activated.`,
        `You're touching on something important here. This relates to how the early church functioned as a movement rather than an institution. The difference lies in whether these elements are dormant or active in a given context.`,
        `That's a nuanced point. In missional theology, this connects to the difference between organizational DNA (which can be changed) and missional DNA (which is the irreducible core). Understanding this distinction is crucial for church transformation.`,
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-white/30" />
              <span className="text-sm tracking-[0.5em] uppercase text-white/60">
                Digital Reading Experience
              </span>
              <div className="h-px w-24 bg-white/30" />
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-[var(--font-playfair)]">
              {bookContent.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/80 mb-4 italic">
              {bookContent.subtitle}
            </p>
            <p className="text-lg text-white/60">
              by {bookContent.author}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Button className="px-8 py-4 h-auto bg-white text-[#1a1a1a] hover:bg-white/90 rounded-sm font-medium tracking-wide text-sm uppercase">
              Start Reading
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 h-auto border-2 border-white text-white hover:bg-white/10 rounded-sm font-medium tracking-wide text-sm uppercase"
            >
              Table of Contents
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reading Interface */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Reading Controls */}
          <div className="sticky top-0 z-30 bg-[#faf9f6] border-b border-[#e0e0e0] py-4 mb-8 -mx-6 px-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowTableOfContents(!showTableOfContents)}
                  className="px-4 py-2 bg-white border border-[#e0e0e0] hover:bg-[#f5f5f5] rounded-sm text-sm font-medium"
                >
                  📑 Contents
                </button>
                <select
                  value={currentChapter}
                  onChange={(e) => setCurrentChapter(Number(e.target.value))}
                  className="px-4 py-2 bg-white border border-[#e0e0e0] rounded-sm text-sm font-medium"
                >
                  {bookContent.chapters.map((chapter, index) => (
                    <option key={chapter.id} value={index}>
                      {chapter.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                    className="px-3 py-1 bg-white border border-[#e0e0e0] hover:bg-[#f5f5f5] rounded-sm text-sm"
                  >
                    A−
                  </button>
                  <span className="text-sm text-[#666] min-w-[3rem] text-center">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="px-3 py-1 bg-white border border-[#e0e0e0] hover:bg-[#f5f5f5] rounded-sm text-sm"
                  >
                    A+
                  </button>
                </div>
                <div className="w-32 h-2 bg-[#e0e0e0] rounded-full">
                  <div
                    className="h-full bg-[#1a1a1a] rounded-full transition-all"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents - Slide Out */}
          <AnimatePresence>
            {showTableOfContents && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mb-8 bg-white border border-[#e0e0e0] p-6"
              >
                <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {bookContent.chapters.map((chapter, index) => (
                    <li key={chapter.id}>
                      <button
                        onClick={() => {
                          setCurrentChapter(index)
                          setShowTableOfContents(false)
                        }}
                        className={`text-left w-full px-4 py-2 rounded hover:bg-[#f5f5f5] transition-colors ${
                          currentChapter === index ? "bg-[#f5f5f5] font-semibold" : ""
                        }`}
                      >
                        {chapter.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reader Content */}
          <div
            ref={contentRef}
            className="bg-white border border-[#e0e0e0] p-12 md:p-16 max-h-[calc(100vh-300px)] overflow-y-auto"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
            }}
          >
            <article className="max-w-2xl mx-auto prose prose-lg">
              <header className="mb-12 pb-8 border-b border-[#e0e0e0]">
                <h2 className="text-4xl md:text-5xl font-black mb-4 font-[var(--font-playfair)]">
                  {bookContent.chapters[currentChapter].title}
                </h2>
              </header>
              <div
                className="text-[#2a2a2a] leading-relaxed select-text"
                style={{ lineHeight: lineHeight }}
              >
                {bookContent.chapters[currentChapter].content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>

          {/* Chapter Navigation */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#e0e0e0]">
            <Button
              variant="outline"
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="px-6 py-2 h-auto border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f6] rounded-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous Chapter
            </Button>
            <span className="text-sm text-[#666]">
              Chapter {currentChapter + 1} of {bookContent.chapters.length}
            </span>
            <Button
              variant="outline"
              onClick={() => setCurrentChapter(Math.min(bookContent.chapters.length - 1, currentChapter + 1))}
              disabled={currentChapter === bookContent.chapters.length - 1}
              className="px-6 py-2 h-auto border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f6] rounded-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Chapter →
            </Button>
          </div>
        </div>
      </section>

      {/* AI Insight Panel - Artfully Integrated */}
      <AnimatePresence>
        {showAiInsight && selectedText && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl w-[calc(100%-3rem)]"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">AI Insight</h4>
                    <p className="text-xs text-[#666]">Selected text analysis</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowAiInsight(false)
                    setSelectedText("")
                  }}
                  className="text-[#666] hover:text-[#1a1a1a]"
                >
                  ✕
                </button>
              </div>
              <div className="bg-white/60 rounded-lg p-4 mb-3 border border-blue-200/50">
                <p className="text-sm text-[#4a4a4a] italic mb-2">
                  &ldquo;{selectedText.substring(0, 100)}&hellip;&rdquo;
                </p>
              </div>
              <p className="text-sm text-[#2a2a2a] leading-relaxed mb-4">
                {aiInsight}
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                  Learn More
                </button>
                <button className="px-4 py-2 bg-white border border-blue-200 text-[#1a1a1a] rounded-lg text-xs font-semibold hover:bg-blue-50 transition-all">
                  Save Note
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle AI Reading Assistant - Always Available */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:from-blue-600 hover:to-purple-600 transition-all relative"
          title="AI Reading Assistant"
        >
          🤖
          {!showChatbot && messages.length > 1 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
          )}
        </motion.button>
      </div>

      {/* Chatbot Modal - Functional */}
      <AnimatePresence>
        {showChatbot && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChatbot(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            {/* Chat Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#e0e0e0] overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Reading Assistant</h3>
                      <p className="text-xs text-white/80">Ask me anything about the text</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChatbot(false)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafafa]">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-white border border-[#e0e0e0] text-[#1a1a1a]"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-[#e0e0e0] rounded-2xl p-4">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-[#e0e0e0]">
                <div className="flex gap-2">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask a question about the text..."
                    rows={2}
                    className="flex-1 px-4 py-3 border border-[#e0e0e0] rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-[#666] mt-2 text-center">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border-2 border-[#1a1a1a] rounded-sm hover:bg-[#1a1a1a] hover:text-[#faf9f6] transition-colors text-[#1a1a1a] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
