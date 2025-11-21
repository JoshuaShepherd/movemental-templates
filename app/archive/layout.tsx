import type { ReactNode } from "react"
import { FloatingArchiveBreadcrumb } from "@/components/archive/FloatingArchiveBreadcrumb"

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <FloatingArchiveBreadcrumb />
      {children}
    </div>
  )
}

