"use client"

const cohorts = [
  { name: "Residency 07", health: 92, stage: "Launch week", mentors: 8 },
  { name: "Residency 08", health: 78, stage: "Week 4", mentors: 6 },
  { name: "Residency 09", health: 64, stage: "Preview", mentors: 5 },
]

const feedback = [
  { author: "Mara", note: "Need more clip assets for week 3 story lab." },
  { author: "Theo", note: "All participants submitted praxis briefs." },
  { author: "Nia", note: "Two new churches ready to join mentoring queue." },
]

const checklist = ["Meals confirmed", "Housing assignments locked", "Streaming setup tested", "Prayer teams ready"]

export default function DashboardResidencyHealth() {
  return (
    <div className="min-h-screen bg-[#f4f6ff] text-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-indigo-500">Residency Ops</p>
            <h1 className="text-4xl font-semibold">Residency Health Monitor</h1>
            <p className="text-slate-600">One glance overview of cohort health, tasks, and qualitative feedback.</p>
          </div>
          <button className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold">Export report</button>
        </header>

        <section className="grid lg:grid-cols-3 gap-6">
          {cohorts.map((cohort) => (
            <div key={cohort.name} className="p-6 rounded-3xl border border-white bg-white shadow-sm">
              <div className="flex justify-between items-center">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">{cohort.name}</p>
                <span className="text-sm text-slate-500">{cohort.stage}</span>
              </div>
              <p className="text-4xl font-semibold mt-3">{cohort.health}%</p>
              <p className="text-sm text-slate-500">Mentors: {cohort.mentors}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: `${cohort.health}%` }} />
              </div>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-[32px] bg-white shadow-lg border border-slate-100 space-y-4">
            <h2 className="text-2xl font-semibold">Urgent checklist</h2>
            <div className="space-y-3">
              {checklist.map((item) => (
                <label key={item} className="flex items-center gap-3 text-slate-700">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300" /> {item}
                </label>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[32px] bg-white shadow-lg border border-slate-100 space-y-4">
            <h2 className="text-2xl font-semibold">Field feedback</h2>
            <div className="space-y-3">
              {feedback.map((item) => (
                <div key={item.author} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.author}</p>
                  <p className="text-slate-800">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

