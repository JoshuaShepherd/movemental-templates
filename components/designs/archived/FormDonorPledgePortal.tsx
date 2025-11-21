"use client"

import { useState } from "react"

const pledgeLevels = [50, 150, 300, 500]
const focuses = ["Scholarships", "Digital Missions", "Residencies", "Infrastructure"]

export default function FormDonorPledgePortal() {
  const [amount, setAmount] = useState(150)
  const [frequency, setFrequency] = useState("Monthly")
  const [focus, setFocus] = useState<string[]>(["Scholarships"])

  const toggleFocus = (item: string) => {
    setFocus((prev) => (prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]))
  }

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-cyan-300">Philanthropy</p>
          <h1 className="text-5xl font-semibold">Donor Pledge Portal</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            A cinematic form that highlights slider inputs, button groups, checkboxes, and text areas—all anchored by a hero section and mini
            impact summary.
          </p>
        </header>

        <section className="rounded-[32px] bg-white/5 backdrop-blur border border-white/10 p-8 space-y-8 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {pledgeLevels.map((level) => (
              <button
                key={level}
                onClick={() => setAmount(level)}
                className={`rounded-2xl px-4 py-3 border text-lg font-semibold ${
                  amount === level ? "bg-white text-slate-900" : "border-white/20 text-white"
                }`}
              >
                ${level.toLocaleString()}
              </button>
            ))}
          </div>

          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-slate-400">Custom amount</label>
            <div className="flex items-center gap-4 mt-2">
              <input type="range" min={50} max={1000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="flex-1" />
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20">${amount}</div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Frequency</p>
            <div className="flex flex-wrap gap-3">
              {["One-time", "Monthly", "Quarterly", "Annually"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFrequency(option)}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    frequency === option ? "bg-cyan-400 text-slate-900 border-cyan-400" : "border-white/30 text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus areas</p>
            <div className="grid md:grid-cols-2 gap-3">
              {focuses.map((item) => (
                <label
                  key={item}
                  className={`p-4 rounded-2xl border cursor-pointer ${
                    focus.includes(item) ? "border-cyan-400 bg-cyan-400/10" : "border-white/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mr-2 accent-cyan-400"
                    checked={focus.includes(item)}
                    onChange={() => toggleFocus(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Public recognition preference</label>
              <select className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-3">
                <option>Use my name</option>
                <option>Anonymous</option>
                <option>In honor of someone</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-300">Upload letter of intent (PDF)</label>
              <input type="file" className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-3" />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-300">Message to the team</label>
            <textarea className="mt-2 w-full rounded-2xl bg-white/10 border border-white/20 p-4" rows={4} placeholder="Share your story, intentions, or questions..." />
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 rounded-full border border-white/30">Download summary</button>
            <button className="px-6 py-2 rounded-full bg-cyan-400 text-slate-900 font-semibold">Confirm pledge</button>
          </div>
        </section>
      </main>
    </div>
  )
}

