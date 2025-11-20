"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export function MicroInteractions({ content }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with scroll animations */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900"
          >
            {content.hero}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                {content.cta}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                {content.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features with hover and scroll animations */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Powerful Features
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 hover:border-blue-500 transition-all cursor-pointer">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="text-4xl mb-4 inline-block"
                    >
                      ✨
                    </motion.div>
                    <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with motion */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            Ready to Start?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              {content.cta}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

