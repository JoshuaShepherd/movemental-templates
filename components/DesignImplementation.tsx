"use client"

import { useState } from "react"
import DesignEvaluation from "./DesignEvaluation"
import { ContentFirstMinimalism } from "./designs/ContentFirstMinimalism"
import { BoldTypography } from "./designs/BoldTypography"
import { Glassmorphism } from "./designs/Glassmorphism"
import { DarkHighContrast } from "./designs/DarkHighContrast"
import { GradientMeshes } from "./designs/GradientMeshes"
import { MicroInteractions } from "./designs/MicroInteractions"
import Link from "next/link"

interface DesignStyle {
  id: string
  name: string
  description: string
  characteristics: string[]
}

interface Content {
  id: string
  title: string
  hero: string
  subtitle: string
  features: Array<{ title: string; description: string }>
  cta: string
  ctaSecondary: string
}

interface Props {
  style: DesignStyle
  content: Content
}

const designComponents: Record<string, React.ComponentType<{ content: Content }>> = {
  "content-first-minimalism": ContentFirstMinimalism,
  "bold-typography": BoldTypography,
  "glassmorphism": Glassmorphism,
  "dark-high-contrast": DarkHighContrast,
  "gradient-meshes": GradientMeshes,
  "micro-interactions": MicroInteractions,
}

export default function DesignImplementation({ style, content }: Props) {
  const [showEvaluation, setShowEvaluation] = useState(false)

  const DesignComponent = designComponents[style.id]

  if (!DesignComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Design not implemented yet</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Game
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">{style.name}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">{content.title}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowEvaluation(!showEvaluation)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showEvaluation ? "Hide" : "Show"} Evaluation
            </button>
            <Link
              href="/"
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Back
            </Link>
          </div>
        </div>
      </nav>

      {/* Evaluation Panel */}
      {showEvaluation && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <DesignEvaluation
              style={style}
              content={content}
              onArchive={() => {
                // Placeholder: integrate archive mutation
              }}
            />
          </div>
        </div>
      )}

      {/* Design Implementation */}
      <div className={showEvaluation ? "pt-32" : "pt-16"}>
        <DesignComponent content={content} />
      </div>
    </div>
  )
}

