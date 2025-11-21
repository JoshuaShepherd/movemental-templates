"use client"

const summary = [
  { label: "Revenue (Q2)", value: "$1.8M", delta: "+9%" },
  { label: "Expenses", value: "$1.2M", delta: "+4%" },
  { label: "Cash on hand", value: "$620k", delta: "6.2 mo runway" },
]

const funds = [
  { name: "Residency Fund", balance: "$320k", status: "On track" },
  { name: "Digital Expansion", balance: "$180k", status: "Needs boost" },
  { name: "Scholarship Pool", balance: "$110k", status: "On track" },
]

const tasks = [
  { title: "Send donor Q2 recap", owner: "Lena" },
  { title: "Approve residency invoices", owner: "Noah" },
  { title: "Update cash forecast", owner: "Olivia" },
]

export default function DashboardFinanceStewardship() {
  return (
    <div className="min-h-screen bg-[#fdf9f2] text-amber-900">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-amber-500">Finance & Stewardship</p>
          <h1 className="text-4xl font-semibold">Stewardship Control Board</h1>
          <p className="text-amber-700">Hero dashboard for finance teams: summarizing revenue, funds, and actionable tasks.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {summary.map((item) => (
            <div key={item.label} className="p-6 rounded-3xl border border-amber-100 bg-white shadow-sm">
              <p className="text-sm text-amber-600">{item.label}</p>
              <p className="text-4xl font-semibold mt-2">{item.value}</p>
              <p className="text-sm text-amber-500">{item.delta}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-[32px] border border-amber-100 bg-white shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Designated funds</h2>
            <div className="space-y-4">
              {funds.map((fund) => (
                <div key={fund.name} className="p-4 rounded-2xl bg-amber-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-500">{fund.name}</p>
                    <p className="text-amber-800 font-semibold">{fund.balance}</p>
                  </div>
                  <span className="text-sm text-amber-600">{fund.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[32px] border border-amber-100 bg-white shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Action items</h2>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.title} className="p-4 rounded-2xl bg-white border border-amber-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-sm text-amber-600">Owner: {task.owner}</p>
                  </div>
                  <button className="px-4 py-2 text-sm rounded-full border border-amber-200 hover:bg-amber-500 hover:text-white transition">
                    Done
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

