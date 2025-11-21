"use client"

const labStats = [
  { label: "Creators in residence", value: "48" },
  { label: "Cities connected", value: "22" },
  { label: "AI copilots", value: "6" },
]

const labEvents = [
  { title: "AI Studio Showcase", date: "May 5", time: "1:00 PM", type: "Hybrid" },
  { title: "Future Lab Office Hours", date: "May 8", time: "3:00 PM", type: "Virtual" },
  { title: "Prototype Night", date: "May 12", time: "7:00 PM", type: "In-person" },
]

const sprintCalendar = [
  { week: "Week 1", focus: "Research + Interviews", slots: ["Mon 10a", "Thu 4p"] },
  { week: "Week 2", focus: "Prototype Workshop", slots: ["Tue 1p", "Fri 9a"] },
  { week: "Week 3", focus: "Launch + Debrief", slots: ["Wed 11a"] },
]

export default function AboutFutureLab() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060a] to-[#101828] text-gray-100">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.6em] text-violet-400">About Future Lab</p>
            <h1 className="text-5xl font-semibold leading-tight text-white">Where prototypes meet the event calendar</h1>
            <p className="text-gray-300">
              Future Lab is our experimentation arm. We run hero-level prototypes, publish about pages, and sync everyone through an integrated
              event + scheduling component that visualizes AI sprints.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {labStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Lab Sessions</h2>
            {labEvents.map((event) => (
              <div key={event.title} className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{event.type}</p>
                  <p className="text-white font-medium">{event.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">{event.date}</p>
                  <p className="text-sm text-gray-400">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 space-y-4">
          <h3 className="text-2xl font-semibold">Sprint calendar &amp; scheduling</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {sprintCalendar.map((block) => (
              <div key={block.week} className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-300">{block.week}</p>
                <p className="font-semibold text-white">{block.focus}</p>
                <p className="text-sm text-gray-300">{block.slots.length ? block.slots.join(" • ") : "By request"}</p>
                <button className="mt-2 w-full px-3 py-2 text-xs uppercase tracking-[0.3em] rounded-full border border-white/40 hover:bg-white/20">
                  Schedule
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

