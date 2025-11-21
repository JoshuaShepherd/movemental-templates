"use client"

import { useMemo, useState } from "react"

const speakers = [
  { name: "Dr. Lina Ortega", role: "Missional Historian", topic: "Recovering Forgotten Movements" },
  { name: "Malik Price", role: "Creative Director", topic: "Design Systems for Ecclesial Stories" },
  { name: "Pastor Rina Lee", role: "Community Architect", topic: "Intergenerational Kinship Labs" },
]

const calendarWeeks = [
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ["", "1", "2", "3", "4", "5", "6"],
  ["7", "8", "9", "10", "11", "12", "13"],
  ["14", "15", "16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25", "26", "27"],
  ["28", "29", "30", "31", "", "", ""],
]

const appointments = [
  { label: "Curator Office Hours", slots: ["Mon 3p", "Thu 9a"] },
  { label: "Heritage Walkthrough", slots: ["Wed 11a", "Fri 1p"] },
]

export default function AboutHeritageSymposium() {
  const [month] = useState("April 2025")
  const highlightDays = useMemo(() => ["4", "10", "18", "26"], [])

  return (
    <div className="min-h-screen bg-[#fefefe] text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-600">About the Symposium</p>
            <h1 className="text-5xl font-semibold leading-tight">Heritage &amp; Future Symposium</h1>
            <p className="text-gray-700">
              We gather historians, theologians, and designers to explore the lineage of movemental innovation. This page introduces our
              story, key voices, and a living calendar of salons and private sessions.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white shadow-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Featured Speakers</h2>
            <ul className="space-y-3">
              {speakers.map((speaker) => (
                <li key={speaker.name} className="p-3 rounded-2xl bg-amber-50">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-600">{speaker.role}</p>
                  <p className="font-semibold">{speaker.name}</p>
                  <p className="text-sm text-gray-600">{speaker.topic}</p>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Symposium Calendar</h3>
              <span className="text-sm text-gray-500">{month}</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {calendarWeeks.map((week, rowIdx) =>
                week.map((day, colIdx) => (
                  <div
                    key={`${rowIdx}-${colIdx}-${day}`}
                    className={`py-3 rounded-xl ${
                      highlightDays.includes(day)
                        ? "bg-amber-500 text-white font-semibold"
                        : "bg-amber-50 text-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-5">
            <h3 className="text-2xl font-semibold">Book a Session</h3>
            {appointments.map((slot) => (
              <div key={slot.label} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{slot.label}</p>
                  <p className="text-gray-800 font-medium">{slot.slots.join(" · ")}</p>
                </div>
                <button className="px-4 py-2 text-sm rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition">
                  Request
                </button>
              </div>
            ))}
            <button className="w-full py-3 rounded-full bg-amber-500 text-white font-semibold">View all heritage events</button>
          </div>
        </section>
      </main>
    </div>
  )
}

