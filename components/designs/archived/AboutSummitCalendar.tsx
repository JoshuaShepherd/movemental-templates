"use client"

const focusAreas = [
  { label: "Founder's Story", text: "Deep dive into our roots, mentors, and the moments that shaped our movement." },
  { label: "Team of Guides", text: "Meet the strategists, theologians, and product leads behind each cohort." },
  { label: "Impact Map", text: "See the cities and communities transformed through our summits." },
]

const sessions = [
  { date: "Apr 04", name: "Summit Welcome", time: "09:00 AM", stage: "Main Hall" },
  { date: "Apr 05", name: "Community Studio Tours", time: "11:30 AM", stage: "Breakouts" },
  { date: "Apr 06", name: "Future of Movemental Tech", time: "02:00 PM", stage: "Arena" },
]

const weeklySlots = [
  { day: "Mon", slot: "10a - 12p", label: "1:1 Coaching" },
  { day: "Wed", slot: "2p - 4p", label: "Open Office" },
  { day: "Fri", slot: "9a - 11a", label: "Summit Planning" },
]

export default function AboutSummitCalendar() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">About the Summit</p>
            <h1 className="text-5xl font-semibold leading-tight">Where vision meets calendar</h1>
            <p className="text-slate-300">
              We orchestrate annual summits, micro-retreats, and digital salons. This About page brings the story, team, and event timeline into
              one high-contrast hero.
            </p>
          </div>
          <div className="grid gap-4">
            {focusAreas.map((item) => (
              <div key={item.label} className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.label}</p>
                <p className="text-sm text-slate-200 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Featured Sessions</h2>
            {sessions.map((session) => (
              <div key={session.name} className="flex items-center gap-4 border-t border-white/10 pt-4">
                <div className="text-center w-20">
                  <p className="text-lg font-semibold">{session.date}</p>
                  <p className="text-xs text-slate-400">{session.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{session.name}</p>
                  <p className="text-sm text-slate-300">{session.stage}</p>
                </div>
                <button className="px-4 py-2 text-xs uppercase tracking-[0.3em] border border-white/30 rounded-full hover:bg-white/20">
                  RSVP
                </button>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Weekly availability</h2>
            <div className="space-y-3">
              {weeklySlots.map((slot) => (
                <div key={slot.day} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{slot.day}</p>
                    <p className="text-lg font-semibold text-white">{slot.slot}</p>
                  </div>
                  <span className="text-sm text-slate-200">{slot.label}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold">Schedule a call</button>
          </div>
        </section>
      </main>
    </div>
  )
}

