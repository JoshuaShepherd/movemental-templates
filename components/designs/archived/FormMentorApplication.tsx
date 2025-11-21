"use client"

import { useState } from "react"

const tracks = ["Movement Strategy", "Storycraft", "Product & Data", "Care & Formation"]
const interviewSlots = [
  { day: "Mon", time: "10:00 AM" },
  { day: "Wed", time: "1:00 PM" },
  { day: "Fri", time: "4:00 PM" },
]

export default function FormMentorApplication() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])
  const [slot, setSlot] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafc] to-[#e8eef5] text-slate-900">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Mentor Circle</p>
          <h1 className="text-4xl font-semibold">Apply to become a Movement Mentor</h1>
          <p className="text-slate-600 max-w-2xl">
            This multi-step form showcases hero-level form components: segmented controls, radio cards, file upload, ratings, and a scheduling
            selector for the interview.
          </p>
        </header>

        <section className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-slate-700">Full name</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Jordan Castillo" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="mentor@movemental.org" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">LinkedIn / Website</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" placeholder="https://..." />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Years of movement leadership</label>
              <input type="number" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2" min="1" max="40" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Preferred track</p>
            <div className="flex flex-wrap gap-3">
              {tracks.map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium ${
                    selectedTrack === track ? "bg-indigo-600 text-white border-indigo-600" : "border-slate-200 text-slate-600"
                  }`}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Share a 90-second intro video (optional)</p>
            <label className="flex items-center gap-3 border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-indigo-200">
              <span className="text-slate-500 text-sm">Drag & drop or click to upload .mp4 / .mov</span>
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Rate your mentor experience</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex flex-col items-center text-xs">
                  <input type="radio" name="rating" value={value} className="accent-indigo-600" />
                  <span className="mt-1 text-slate-600">{value}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-700">Choose an interview slot</p>
            <div className="grid md:grid-cols-3 gap-3">
              {interviewSlots.map((entry) => (
                <label key={entry.day} className={`p-4 rounded-2xl border cursor-pointer ${slot === entry.day ? "border-indigo-600 bg-indigo-50" : "border-slate-200"}`}>
                  <input type="radio" name="slot" value={entry.day} className="hidden" onChange={() => setSlot(entry.day)} />
                  <p className="text-sm font-semibold">{entry.day}</p>
                  <p className="text-slate-600">{entry.time}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 rounded-full border border-slate-300 text-slate-600">Save draft</button>
            <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold">Submit application</button>
          </div>
        </section>
      </main>
    </div>
  )
}

