"use client"

const tiers = [
  { name: "Catalyst Circle", members: 48, growth: "+12%", avgGift: "$12k" },
  { name: "Partner Guild", members: 210, growth: "+4%", avgGift: "$2.4k" },
  { name: "Spark Supporters", members: 1_820, growth: "+8%", avgGift: "$280" },
]

const pipeline = [
  { name: "Lead research", percent: 60 },
  { name: "Cultivation", percent: 45 },
  { name: "Ask delivered", percent: 30 },
  { name: "Stewardship", percent: 80 },
]

const calls = [
  { donor: "Hudson Family", action: "Send impact deck", owner: "Aria" },
  { donor: "Oak Foundation", action: "Confirm June visit", owner: "Luis" },
  { donor: "Eden Collective", action: "Share residency video", owner: "Priya" },
]

export default function DashboardDonorIntelligence() {
  return (
    <div className="min-h-screen bg-[#0f0f1c] text-gray-100">
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Development</p>
            <h1 className="text-4xl font-semibold">Donor Intelligence Console</h1>
            <p className="text-gray-400">
              Dashboard showing donor tiers, pipeline bars, and stewardship tasks—ideal for an about page turned control room.
            </p>
          </div>
          <button className="px-5 py-3 rounded-full bg-amber-400 text-gray-900 font-semibold">Download CSV</button>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{tier.name}</p>
              <p className="text-4xl font-semibold">{tier.members.toLocaleString()}</p>
              <p className="text-sm text-amber-300">{tier.growth}</p>
              <p className="text-sm text-gray-400">Avg. gift {tier.avgGift}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-[32px] bg-white/5 border border-white/10 space-y-4">
            <h2 className="text-2xl font-semibold">Pipeline health</h2>
            <div className="space-y-4">
              {pipeline.map((stage) => (
                <div key={stage.name}>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>{stage.name}</span>
                    <span>{stage.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 mt-2">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${stage.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 space-y-4">
            <h3 className="text-2xl font-semibold">Call sheet</h3>
            <div className="space-y-3">
              {calls.map((call) => (
                <div key={call.donor} className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{call.donor}</p>
                  <p className="text-white">{call.action}</p>
                  <p className="text-xs text-gray-400">Owner: {call.owner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

