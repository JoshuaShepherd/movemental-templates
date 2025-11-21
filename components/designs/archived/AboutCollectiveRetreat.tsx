"use client"

const pillars = [
  { title: "Retreat Ethos", text: "Intimate cohorts with guided contemplative practice and cohort storytelling." },
  { title: "Facilities", text: "Hybrid campus with studio pods, woodland trails, and live streaming rooms." },
  { title: "Support Team", text: "Concierge staff coordinating travel, meal plans, and pastoral care." },
]

const retreatSchedule = [
  { day: "Fri", time: "6:00 PM", title: "Arrival & Fireside Welcome" },
  { day: "Sat", time: "9:00 AM", title: "Formation Workshops" },
  { day: "Sat", time: "5:00 PM", title: "Community Dinner" },
  { day: "Sun", time: "10:00 AM", title: "Sending Liturgy" },
]

const bookingCalendar = [
  { month: "May", slots: ["10-12", "17-19", "24-26"] },
  { month: "Jun", slots: ["07-09", "21-23"] },
  { month: "Jul", slots: ["12-14"] },
]

export default function AboutCollectiveRetreat() {
  return (
    <div className="min-h-screen bg-[#f6fbff] text-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-sky-500">About the Retreat</p>
          <h1 className="text-5xl font-semibold">Movement Collective Retreat</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            A coastal retreat for movement founders and teams. We combine hero-level storytelling, personal formation, and a robust event /
            scheduling component so every guest knows exactly how to engage.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-5 rounded-3xl bg-white border border-sky-100 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{pillar.title}</p>
              <p className="text-slate-700 mt-2">{pillar.text}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-sky-100 bg-white p-6 space-y-4 shadow-sm">
            <h2 className="text-2xl font-semibold">Weekend Flow</h2>
            {retreatSchedule.map((session) => (
              <div key={`${session.day}-${session.time}`} className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="text-center w-20">
                  <p className="text-xl font-semibold">{session.day}</p>
                  <p className="text-xs text-slate-500">{session.time}</p>
                </div>
                <p className="flex-1 font-medium text-slate-800">{session.title}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white p-6 space-y-4 shadow-sm">
            <h2 className="text-2xl font-semibold">Reserve a weekend</h2>
            <div className="space-y-4">
              {bookingCalendar.map((entry) => (
                <div key={entry.month} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{entry.month}</p>
                    <p className="text-slate-800 font-medium">{entry.slots.join(" • ")}</p>
                  </div>
                  <button className="px-4 py-2 text-sm rounded-full border border-slate-900 hover:bg-slate-900 hover:text-white transition">
                    Hold
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-full bg-sky-500 text-white font-semibold">See detailed calendar</button>
          </div>
        </section>
      </main>
    </div>
  )
}

