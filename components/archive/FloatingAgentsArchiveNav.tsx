"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { archivedAgents, agentTypeOrder } from "@/app/agents-archive/agentsData"

export default function FloatingAgentsArchiveNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const grouped = useMemo(() => {
    const sorted = [...archivedAgents].sort((a, b) => a.order - b.order)
    const bucket = new Map<string, typeof sorted>()
    agentTypeOrder.forEach((type) => bucket.set(type, []))
    sorted.forEach((agent) => {
      if (!bucket.has(agent.type)) bucket.set(agent.type, [])
      bucket.get(agent.type)!.push(agent)
    })
    return bucket
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-5 py-2 rounded-full border border-gray-900 dark:border-gray-200 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 text-[11px] font-semibold uppercase tracking-[0.35em] shadow-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
      >
        Agents • {archivedAgents.length}
      </button>
      {open && (
        <div className="w-[320px] max-h-[70vh] overflow-y-auto rounded-[24px] border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/90 backdrop-blur shadow-2xl p-4 space-y-4 text-sm">
          {Array.from(grouped.entries()).map(([type, agents]) => {
            if (!agents?.length) return null
            return (
              <div key={type} className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">{type}</p>
                <div className="flex flex-col gap-1">
                  {agents.map((agent) => {
                    const href = `/agents-archive#${agent.id}`
                    const active = pathname === "/agents-archive"
                    return (
                      <Link
                        key={agent.id}
                        href={href}
                        className={`px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-colors ${
                          active
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900/60"
                        }`}
                      >
                        {agent.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}


