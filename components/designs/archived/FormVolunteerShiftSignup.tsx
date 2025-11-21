"use client"

const teams = ["Hospitality", "Production", "Prayer", "Logistics"]
const shifts = [
  { date: "Apr 12", times: ["8-10 AM", "10-12 PM", "1-3 PM"] },
  { date: "Apr 13", times: ["9-11 AM", "12-2 PM", "4-6 PM"] },
  { date: "Apr 14", times: ["8-10 AM", "3-5 PM"] },
]

export default function FormVolunteerShiftSignup() {
  return (
    <div className="min-h-screen bg-[#f5fbf7] text-emerald-900">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-emerald-500">Volunteer Network</p>
          <h1 className="text-4xl font-semibold">Sign up for upcoming shifts</h1>
          <p className="text-emerald-700">
            A comprehensive form showcasing multi-select chips, availability tables, emergency contact fields, and preferences—ideal for an
            about page or onboarding portal.
          </p>
        </header>

        <section className="rounded-[32px] border border-emerald-100 bg-white shadow-lg p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="First name" />
            <input className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="Last name" />
            <input type="email" className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="Email address" />
            <input className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="Mobile number" />
            <input className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="Emergency contact" />
            <input className="rounded-2xl border border-emerald-100 px-4 py-3" placeholder="Allergies / notes" />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Preferred team</p>
            <div className="flex flex-wrap gap-3">
              {teams.map((team) => (
                <label key={team} className="flex items-center gap-2 border border-emerald-100 rounded-full px-3 py-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-emerald-600" /> {team}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Select shift</p>
            <div className="space-y-4">
              {shifts.map((shift) => (
                <div key={shift.date} className="p-4 border border-emerald-100 rounded-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">{shift.date}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {shift.times.map((time) => (
                      <label key={time} className="px-3 py-2 rounded-full border border-emerald-200 cursor-pointer text-sm">
                        <input type="radio" name="shift" className="mr-2 accent-emerald-600" /> {time}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">Shirt size</label>
            <select className="w-full rounded-2xl border border-emerald-100 px-4 py-3">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-emerald-600" /> I have completed the safety training
            </label>
            <button className="px-6 py-2 rounded-full bg-emerald-500 text-white font-semibold">Submit interest</button>
          </div>
        </section>
      </main>
    </div>
  )
}

