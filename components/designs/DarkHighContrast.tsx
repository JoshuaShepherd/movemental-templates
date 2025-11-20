"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
  content: Content
}

export function DarkHighContrast({ content }: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero - True black with high contrast */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight"
          >
            {content.hero}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/50"
            >
              {content.cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white/10"
            >
              {content.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features - High contrast sections */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="border border-white/10 p-8 rounded-lg hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with glow */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Ready to Begin?
          </h2>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/50"
          >
            {content.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}

