"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Archived Design: Content-First Minimalism with Hero Image & Subtle Motion
// Archived Date: First attempt

export default function AlanHirschHero1() {
  const movements = [
    {
      title: "The Forgotten Ways",
      description: "Reawakening the missional church through apostolic imagination and organic community.",
      year: "2006",
    },
    {
      title: "The Shaping of Things to Come",
      description: "Innovation and mission for the 21st century church, co-authored with Michael Frost.",
      year: "2003",
    },
    {
      title: "The Permanent Revolution",
      description: "Apostolic imagination and practice for the 21st century church.",
      year: "2012",
    },
    {
      title: "Untamed",
      description: "Reactivating a missional form of discipleship that transforms lives and communities.",
      year: "2010",
    },
    {
      title: "5Q",
      description: "Reactivating the original intelligence and capacity of the body of Christ.",
      year: "2016",
    },
    {
      title: "ReJesus",
      description: "A wild messiah for a missional church, rediscovering the radical Jesus.",
      year: "2009",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/alan/alan-year-old-man-teaching-in-front-of-a-chaotic-whit-2x.webp"
            alt="Alan Hirsch teaching"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              Alan Hirsch
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Thought Leader, Author, and Pioneer of Missional Movements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 h-auto bg-white text-gray-900 hover:bg-gray-100"
                >
                  Explore Movements
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Movements & Works
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Groundbreaking contributions to missional theology and church practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 hover:border-blue-500 transition-all duration-300 cursor-pointer bg-white shadow-lg hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="!text-2xl !mb-2 !text-gray-900 dark:!text-gray-100 !font-semibold">
                        {movement.title}
                      </CardTitle>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap ml-4">
                        {movement.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="!text-lg !text-gray-900 dark:!text-gray-100 !leading-relaxed !font-normal">
                      {movement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Shaping the Future of Church
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Alan Hirsch is a thought leader, author, and pioneer in the missional church movement.
              His work focuses on activating the apostolic imagination and creating movements that
              transform communities and culture.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-4 py-2 text-sm bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg hover:bg-white transition-colors text-gray-900 shadow-lg"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}

