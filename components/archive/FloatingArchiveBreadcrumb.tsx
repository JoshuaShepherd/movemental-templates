"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { archivedDesignMap } from "@/app/archive/designData"

export function FloatingArchiveBreadcrumb() {
  const pathname = usePathname()
  if (!pathname?.startsWith("/archive")) return null

  const segments = pathname.split("/").filter(Boolean)
  const viewingGallery = segments.length === 1
  const templateId = !viewingGallery ? segments[1] : null
  const design = templateId ? archivedDesignMap[templateId] : null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-[60] px-5 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur shadow-[0_20px_40px_-25px_rgba(15,23,42,0.8)] flex items-center gap-3 text-[11px] uppercase tracking-[0.35em]"
    >
      <Link
        href="/archive"
        className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-4 font-semibold"
      >
        Gallery
      </Link>
      {design && (
        <>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <span className="text-gray-600 dark:text-gray-300 max-w-[10rem] truncate">{design.name}</span>
        </>
      )}
    </motion.nav>
  )
}

