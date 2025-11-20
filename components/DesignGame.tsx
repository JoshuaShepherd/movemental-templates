"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design styles from the guide
const designStyles = [
  {
    id: "content-first-minimalism",
    name: "Content-First Minimalism",
    description: "Maximum white space, clear typography hierarchy, minimal decoration",
    characteristics: ["Generous padding", "Large readable type", "Limited color palette", "Grid-based layouts"],
  },
  {
    id: "bold-typography",
    name: "Bold Typography with Contrast",
    description: "Large, expressive fonts as primary design element",
    characteristics: ["64px+ headings", "Serif/sans-serif mixing", "Typography-driven layouts"],
  },
  {
    id: "glassmorphism",
    name: "Subtle Glassmorphism",
    description: "Translucent elements with backdrop blur",
    characteristics: ["Semi-transparent backgrounds", "Backdrop blur", "Subtle borders", "Floating feel"],
  },
  {
    id: "dark-high-contrast",
    name: "Dark Mode with High Contrast",
    description: "Thoughtful dark themes with strong contrast",
    characteristics: ["True black backgrounds", "High contrast text", "Vibrant accents", "Glow effects"],
  },
  {
    id: "gradient-meshes",
    name: "Gradient Meshes",
    description: "Smooth gradients as backgrounds or accents",
    characteristics: ["Mesh gradients", "Subtle backgrounds", "Animated gradients", "Gradient text"],
  },
  {
    id: "micro-interactions",
    name: "Micro-Interactions & Motion",
    description: "Small animations that provide feedback",
    characteristics: ["Hover transitions", "Scroll animations", "Loading states", "Smooth effects"],
  },
]

// Sample content prompts
const contentPrompts = [
  {
    id: "creator-platform",
    title: "Creator Platform Landing Page",
    hero: "Empower Your Voice, Build Your Audience",
    subtitle: "The all-in-one platform for creators who want to monetize their expertise and grow meaningful communities.",
    features: [
      {
        title: "Course Creation",
        description: "Build comprehensive courses with video, text, and interactive content",
      },
      {
        title: "Community Building",
        description: "Foster engaged communities around your content and expertise",
      },
      {
        title: "Monetization Tools",
        description: "Multiple revenue streams from subscriptions to one-time purchases",
      },
    ],
    cta: "Start Creating Today",
    ctaSecondary: "See How It Works",
  },
  {
    id: "saas-product",
    title: "SaaS Product Launch",
    hero: "Work Smarter, Not Harder",
    subtitle: "AI-powered workflow automation that saves teams 20+ hours per week.",
    features: [
      {
        title: "Automation Engine",
        description: "Connect your tools and automate repetitive tasks effortlessly",
      },
      {
        title: "Smart Insights",
        description: "Get AI-powered recommendations to optimize your workflows",
      },
      {
        title: "Team Collaboration",
        description: "Built for teams that need to stay in sync across departments",
      },
    ],
    cta: "Start Free Trial",
    ctaSecondary: "Watch Demo",
  },
]

export default function DesignGame() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [isImplementing, setIsImplementing] = useState(false)

  const handleDesign = () => {
    if (selectedStyle && selectedContent) {
      setIsImplementing(true)
      // Navigate to implementation page
      setTimeout(() => {
        window.location.href = `/design/${selectedStyle}?content=${selectedContent}`
      }, 100)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Design Game
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Pick a design style and content. I&rsquo;ll implement it, evaluate it, and if you like it, we&rsquo;ll archive it with its
            own distinct style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Design Style Selection */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">1. Choose Design Style</h2>
            <div className="space-y-3">
              {designStyles.map((style) => (
                <motion.div
                  key={style.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setSelectedStyle(style.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedStyle === style.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">{style.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{style.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {style.characteristics.map((char, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Prompt Selection */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">2. Choose Content</h2>
            <div className="space-y-3">
              {contentPrompts.map((prompt) => (
                <motion.div
                  key={prompt.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setSelectedContent(prompt.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedContent === prompt.id
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-950"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">{prompt.title}</h3>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {prompt.hero}
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">{prompt.subtitle}</p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Button */}
        <div className="text-center">
          <Button
            onClick={handleDesign}
            disabled={!selectedStyle || !selectedContent || isImplementing}
            size="lg"
            className="text-lg px-8"
          >
            {isImplementing ? "Implementing..." : "Implement Design"}
          </Button>
        </div>

        {/* Latest Design & Archive Links */}
        <div className="mt-16 text-center space-y-4">
          <div>
            <Link
              href="/latest"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              View Latest Design →
            </Link>
          </div>
          <div>
            <Link
              href="/archive"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Archive →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

