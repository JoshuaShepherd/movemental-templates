"use client"

import { useState } from "react"

const studios = ["Broadcast Hall", "Podcast Suite", "Analog Workshop", "Residency Loft"]
const timeSlots = ["8:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "6:00 PM"]

const calendar = [
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ["", "", "1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26"],
  ["27", "28", "29", "30", "31", "", ""],
]

export default function FormStudioBookingRequest() {
  const [selectedStudio, setSelectedStudio] = useState("Broadcast Hall")
  const [selectedDate, setSelectedDate] = useState("10")
  const [selectedTime, setSelectedTime] = useState("1:00 PM")

  return (
    <div className="min-h-screen bg-[#fefcf8] text-gray-900">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-amber-600">Studio Booking</p>
          <h1 className="text-4xl font-semibold">Reserve our studio for your next broadcast</h1>
          <p className="text-gray-600">
            This form mixes hero messaging with a calendar picker, radio cards, time slot pills, toggle switches, and text inputs—perfect for
            showcasing complex UI components.
          </p>
        </header>

        <section className="rounded-[32px] border border-amber-100 bg-white shadow-lg p-8 space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700">Your details</p>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-2xl border border-gray-200 px-4 py-3" placeholder="Full name" />
              <input className="rounded-2xl border border-gray-200 px-4 py-3" placeholder="Production company" />
              <input type="email" className="rounded-2xl border border-gray-200 px-4 py-3" placeholder="Email address" />
              <input className="rounded-2xl border border-gray-200 px-4 py-3" placeholder="Phone number" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700">Choose a studio</p>
            <div className="grid md:grid-cols-2 gap-3">
              {studios.map((studio) => (
                <label
                  key={studio}
                  className={`p-4 rounded-2xl border cursor-pointer ${
                    selectedStudio === studio ? "border-amber-500 bg-amber-50" : "border-gray-200"
                  }`}
                >
                  <input type="radio" className="mr-2 accent-amber-500" checked={selectedStudio === studio} onChange={() => setSelectedStudio(studio)} />
                  {studio}
                </label>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Select date</p>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {calendar.map((week, row) =>
                  week.map((day, col) => (
                    <button
                      key={`${row}-${col}-${day}`}
                      onClick={() => day && setSelectedDate(day)}
                      className={`py-3 rounded-xl border ${
                        selectedDate === day ? "border-amber-500 bg-amber-50" : "border-gray-200 text-gray-600"
                      }`}
                    >
                      {day}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700">Preferred time</p>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedTime === time ? "border-amber-500 bg-amber-50" : "border-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" className="accent-amber-500" />
                Need on-site engineer?
              </label>
              <textarea className="w-full rounded-2xl border border-gray-200 p-4 h-32" placeholder="Describe your production needs..." />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-600">Save for later</button>
            <button className="px-6 py-2 rounded-full bg-amber-500 text-white font-semibold">Request booking</button>
          </div>
        </section>
      </main>
    </div>
  )
}

