import type { ReactNode } from "react"
import FloatingArchiveNav from "@/components/archive/FloatingArchiveNav"

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <FloatingArchiveNav />
      {children}
    </div>
  )
}

