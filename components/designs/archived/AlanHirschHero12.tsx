"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Calendar-Integrated Homepage
// Custom calendar component with multiple views (month, week, agenda)
// Traditional calendar best practices with visual flourishes
// Schedule integration as a key homepage feature

type CalendarView = "month" | "week" | "agenda"

interface CalendarEvent {
  id: string
  title: string
  date: Date
  time?: string
  location?: string
  type: "conference" | "workshop" | "book-signing" | "interview" | "residency"
  description?: string
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "5Q Framework Workshop",
    date: new Date(2024, 11, 15),
    time: "9:00 AM - 4:00 PM",
    location: "Portland, OR",
    type: "workshop",
    description: "Deep dive into the fivefold ministry framework",
  },
  {
    id: "2",
    title: "Missional Church Conference",
    date: new Date(2024, 11, 18),
    time: "10:00 AM",
    location: "Chicago, IL",
    type: "conference",
    description: "Keynote on apostolic imagination",
  },
  {
    id: "3",
    title: "Book Signing: The Forgotten Ways",
    date: new Date(2024, 11, 22),
    time: "2:00 PM - 4:00 PM",
    location: "Seattle, WA",
    type: "book-signing",
  },
  {
    id: "4",
    title: "Podcast Interview",
    date: new Date(2024, 11, 25),
    time: "11:00 AM",
    location: "Virtual",
    type: "interview",
    description: "Future Church Podcast",
  },
  {
    id: "5",
    title: "Residency Program",
    date: new Date(2024, 11, 28),
    time: "All Day",
    location: "Austin, TX",
    type: "residency",
    description: "Week-long intensive on missional leadership",
  },
  {
    id: "6",
    title: "APEST Training",
    date: new Date(2024, 11, 30),
    time: "9:00 AM - 5:00 PM",
    location: "Denver, CO",
    type: "workshop",
  },
]

const eventTypeColors = {
  conference: "bg-blue-500",
  workshop: "bg-purple-500",
  "book-signing": "bg-pink-500",
  interview: "bg-green-500",
  residency: "bg-orange-500",
}

const eventTypeLabels = {
  conference: "Conference",
  workshop: "Workshop",
  "book-signing": "Book Signing",
  interview: "Interview",
  residency: "Residency",
}

export default function AlanHirschHero() {
  const [view, setView] = useState<CalendarView>("month")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(new Date(year, month + (direction === "next" ? 1 : -1), 1))
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )
  }

  const getWeekDates = () => {
    const today = new Date()
    const currentDay = today.getDay()
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - currentDay)
    
    const weekDates = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      weekDates.push(date)
    }
    return weekDates
  }

  const upcomingEvents = events
    .filter((event) => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  const renderMonthView = () => {
    const days = []
    
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square p-2" />
      )
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayEvents = getEventsForDate(date)
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()

      days.push(
        <motion.div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`aspect-square p-2 cursor-pointer rounded-lg transition-all ${
            isToday
              ? "bg-blue-500/20 border-2 border-blue-500"
              : isSelected
              ? "bg-purple-500/20 border-2 border-purple-500"
              : "hover:bg-white/5 border-2 border-transparent"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`text-sm font-semibold mb-1 ${isToday ? "text-blue-400" : "text-white"}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`h-1.5 rounded-full ${eventTypeColors[event.type]} text-xs`}
                title={event.title}
              />
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-white/60">+{dayEvents.length - 2}</div>
            )}
          </div>
        </motion.div>
      )
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-white/60 py-2">
            {day}
          </div>
        ))}
        {days}
      </div>
    )
  }

  const renderWeekView = () => {
    const weekDates = getWeekDates()
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-7 gap-4">
          {weekDates.map((date, index) => {
            const dayEvents = getEventsForDate(date)
            const isToday = 
              date.getDate() === new Date().getDate() &&
              date.getMonth() === new Date().getMonth() &&
              date.getFullYear() === new Date().getFullYear()

            return (
              <div
                key={index}
                className={`rounded-lg p-4 border-2 ${
                  isToday
                    ? "bg-blue-500/20 border-blue-500"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="text-xs text-white/60 mb-1">{weekDays[index]}</div>
                <div className={`text-2xl font-bold mb-3 ${isToday ? "text-blue-400" : "text-white"}`}>
                  {date.getDate()}
                </div>
                <div className="space-y-2">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-2 rounded text-xs ${eventTypeColors[event.type]} text-white`}
                    >
                      <div className="font-semibold truncate">{event.title}</div>
                      {event.time && <div className="text-white/80">{event.time}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderAgendaView = () => {
    return (
      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className={`w-1 rounded-full ${eventTypeColors[event.type]}`} />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{eventTypeLabels[event.type]}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">
                    {monthNames[event.date.getMonth()]} {event.date.getDate()}
                  </div>
                  {event.time && <div className="text-xs text-white/60">{event.time}</div>}
                </div>
              </div>
              {event.location && (
                <p className="text-sm text-white/60">📍 {event.location}</p>
              )}
              {event.description && (
                <p className="text-sm text-white/70 mt-2">{event.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-purple-300 mb-4 block">
                Schedule & Availability
              </span>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Alan Hirsch
                </span>
              </h1>
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                Thought leader, author, and catalyst for missional movements.
                View upcoming events, workshops, and speaking engagements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="px-8 py-4 h-auto bg-purple-500 text-white hover:bg-purple-600 rounded-full font-semibold">
                  Request Speaking Engagement
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 h-auto border-2 border-purple-400 text-purple-200 hover:bg-purple-500/20 rounded-full font-semibold"
                >
                  View Publications
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-500/20 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20">
                <Image
                  src="/alan/alan-headshot-4x5.webp"
                  alt="Alan Hirsch"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="relative px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">Schedule</h2>
                <p className="text-purple-200">Upcoming events and engagements</p>
              </div>
              <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
                {(["month", "week", "agenda"] as CalendarView[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                      view === v
                        ? "bg-purple-500 text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Navigation */}
            {view === "month" && (
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  ← Prev
                </button>
                <h3 className="text-2xl font-bold">
                  {monthNames[month]} {year}
                </h3>
                <button
                  onClick={() => navigateMonth("next")}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </motion.div>

          {/* Calendar Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {view === "month" && renderMonthView()}
                {view === "week" && renderWeekView()}
                {view === "agenda" && renderAgendaView()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Event Type Legend */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {Object.entries(eventTypeLabels).map(([type, label]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${eventTypeColors[type as keyof typeof eventTypeColors]}`} />
                <span className="text-sm text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Date Details */}
      {selectedDate && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative px-6 py-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl border border-white/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold">
                  {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
                </h3>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
              {getEventsForDate(selectedDate).length > 0 ? (
                <div className="space-y-4">
                  {getEventsForDate(selectedDate).map((event) => (
                    <div
                      key={event.id}
                      className="bg-white/5 rounded-lg p-6 border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-2 h-full rounded-full ${eventTypeColors[event.type]}`} />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                          <div className="space-y-1 text-sm text-white/70">
                            {event.time && <p>🕐 {event.time}</p>}
                            {event.location && <p>📍 {event.location}</p>}
                            <p className="text-purple-300">{eventTypeLabels[event.type]}</p>
                          </div>
                          {event.description && (
                            <p className="mt-3 text-white/80">{event.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/60">No events scheduled for this date.</p>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Navigation Back */}
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
