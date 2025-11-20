"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export function Glassmorphism({ content }: Props) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-30" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20" />

      {/* Hero with glassmorphic card */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 md:p-16 shadow-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              {content.hero}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
              >
                {content.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20"
              >
                {content.ctaSecondary}
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features with glassmorphic cards */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-3 text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-white/80 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

