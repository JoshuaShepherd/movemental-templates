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

export function ContentFirstMinimalism({ content }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Maximum white space, large typography */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center py-24 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-gray-900"
          >
            {content.hero}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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

      {/* Features Section - Spacious cards */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the tools to build, grow, and monetize your expertise
            </p>
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
                <Card className="h-full border-0 shadow-none bg-transparent">
                  <CardHeader className="pb-4">
                    <div className="text-4xl mb-6">✨</div>
                    <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal, focused */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who are building their audiences and monetizing their expertise.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            {content.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}

