import type { ReactNode } from "react"
import FloatingAgentsArchiveNav from "@/components/archive/FloatingAgentsArchiveNav"

export default function AgentsArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <FloatingAgentsArchiveNav />
      {children}
    </div>
  )
}


