"use client"

const residencies = [
  { title: "Practitioner Residency", description: "Three-day immersive for founders building citywide movements." },
  { title: "Studio Apprenticeship", description: "Six-week track blending writing lab, theology, and media production." },
  { title: "Field Mentorship", description: "One-on-one guidance with Movemental strategists across continents." },
]

const events = [
  { day: "12", month: "Mar", title: "Launch Strategy Intensive", location: "Portland" },
  { day: "28", month: "Mar", title: "Story Lab Salon", location: "Remote" },
  { day: "09", month: "Apr", title: "Residency Showcase", location: "Chicago" },
]

const calendar = [
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ["", "", "1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26"],
  ["27", "28", "29", "30", "31", "", ""],
]

export default function AboutImmersiveResidency() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f5] to-[#f4f0ea] text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.5em] text-rose-500">About Us</p>
            <h1 className="text-5xl font-semibold leading-tight">Immersive Residency for Movement Architects</h1>
            <p className="text-gray-700">
              We host a rolling series of residencies that fuse theology, strategy, and creative delivery. Every cohort experiences a
              crafted hero moment, curated content track, and an event calendar that keeps the movement humming.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-3xl p-6 space-y-4 border border-rose-100">
            <h2 className="text-xl font-semibold">What to expect</h2>
            <ul className="space-y-3">
              {residencies.map((item) => (
                <li key={item.title} className="p-3 rounded-2xl bg-rose-50">
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-500">{item.title}</p>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Upcoming gatherings</h3>
            {events.map((event) => (
              <div key={`${event.title}-${event.day}`} className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold">{event.day}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{event.month}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
                <button className="px-4 py-2 text-sm rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition">
                  Reserve
                </button>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Residency calendar</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {calendar.map((week, i) =>
                week.map((day, j) => (
                  <div
                    key={`${i}-${j}-${day}`}
                    className={`py-3 rounded-xl ${
                      day === "12" || day === "28" || day === "09" ? "bg-rose-500 text-white font-semibold" : "bg-rose-50 text-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

