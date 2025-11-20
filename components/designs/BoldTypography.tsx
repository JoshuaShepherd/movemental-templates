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

export function BoldTypography({ content }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Bold typography as primary design element */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-gray-900 leading-none"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {content.hero}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl font-sans text-gray-600 mt-8 max-w-3xl leading-relaxed mb-12"
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              {content.cta}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              {content.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features - Typography-driven layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {feature.title}
                </h3>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-sans text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Start Today
          </h2>
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            {content.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}

