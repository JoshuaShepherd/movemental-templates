/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Design Choice: GSAP-Powered with Royal Academic Palette
// Updated palette uses regal violet primaries, luminous gold accents, and duotone shadows for a refined academic tone
// Extensive GSAP features: timelines, ScrollTrigger, pinning, scrubbing, stagger, parallax

export default function AlanHirschHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const movementsRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)
  const pinnedSectionRef = useRef<HTMLDivElement>(null)
  const horizontalScrollRef = useRef<HTMLDivElement>(null)
  const timelineSectionRef = useRef<HTMLDivElement>(null)
  const morphingSectionRef = useRef<HTMLDivElement>(null)
  const numbersSectionRef = useRef<HTMLDivElement>(null)
  const imageRevealRef = useRef<HTMLDivElement>(null)

  const movements = [
    {
      title: "The Forgotten Ways",
      subtitle: "Reawakening the Missional Church",
      description: "A groundbreaking work that reimagines church through apostolic imagination, organic community structures, and missional DNA. This book has shaped how thousands of churches understand their calling in the 21st century.",
      year: "2006",
      impact: "100K+ copies sold",
      category: "Missional Theology",
      highlight: "Translated into 15+ languages",
    },
    {
      title: "The Shaping of Things to Come",
      subtitle: "Innovation and Mission for the 21st Century",
      description: "Co-authored with Michael Frost, this seminal work explores how churches can innovate while remaining faithful to their mission. It's become essential reading for church leaders seeking transformation.",
      year: "2003",
      impact: "Award-winning",
      category: "Church Innovation",
      highlight: "Used in seminaries worldwide",
    },
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice",
      description: "A comprehensive exploration of apostolic ministry and its role in activating the fivefold ministry gifts. This work has revolutionized how churches understand leadership and gifting.",
      year: "2012",
      impact: "5Q Framework",
      category: "Apostolic Ministry",
      highlight: "Framework adopted globally",
    },
    {
      title: "Untamed",
      subtitle: "Reactivating a Missional Form of Discipleship",
      description: "Challenges the domesticated forms of Christianity and calls for a wild, untamed faith that transforms lives and communities. A powerful manifesto for authentic discipleship.",
      year: "2010",
      impact: "Movement catalyst",
      category: "Discipleship",
      highlight: "Inspired new movements",
    },
    {
      title: "5Q",
      subtitle: "Reactivating the Original Intelligence",
      description: "The fivefold ministry framework that helps churches discover their unique DNA and activate their full potential. This system has been implemented in thousands of churches worldwide.",
      year: "2016",
      impact: "Global framework",
      category: "Church Systems",
      highlight: "5,000+ churches using 5Q",
    },
    {
      title: "ReJesus",
      subtitle: "A Wild Messiah for a Missional Church",
      description: "Rediscovering the radical, untamed Jesus who challenges our comfortable Christianity. This book calls us back to the revolutionary nature of following Christ.",
      year: "2009",
      impact: "Paradigm shift",
      category: "Christology",
      highlight: "Changed how we see Jesus",
    },
  ]

  const insights = [
    {
      title: "Apostolic Imagination",
      description: "The creative capacity to pioneer new expressions of faith that transform culture and communities",
    },
    {
      title: "Missional DNA",
      description: "Embedding mission into every aspect of church life, not just programs or events",
    },
    {
      title: "Organic Community",
      description: "Fostering authentic relationships and decentralized leadership structures",
    },
    {
      title: "Movement Dynamics",
      description: "Understanding how movements form, grow, and transform culture at scale",
    },
  ]

  // Hero section - Complex GSAP Timeline with Labels
  useGSAP(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !descriptionRef.current || !buttonsRef.current || !imageRef.current) return

    const masterTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Hero image parallax with multiple layers
    gsap.to(imageRef.current, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing with 1s delay
      },
    })

    // Overlay parallax (moves slower)
    const overlay = imageRef.current.querySelector(".hero-overlay")
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    // Title animation with timeline labels
    masterTimeline
      .addLabel("start")
      .from(titleRef.current, {
        y: 120,
        opacity: 0,
        rotationX: -20,
        transformOrigin: "center bottom",
        duration: 1.4,
        ease: "power4.out",
      })
      .addLabel("titleComplete")
      // Subtitle with overlap
      .from(
        subtitleRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6" // Start 0.6s before previous ends
      )
      .addLabel("subtitleComplete")
      // Description
      .from(
        descriptionRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.5"
      )
      .addLabel("descriptionComplete")
      // Buttons with stagger
      .from(
        buttonsRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
          stagger: {
            amount: 0.4,
            from: "start",
            ease: "power2.inOut",
          },
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      )
      .addLabel("buttonsComplete")

    // Continuous subtle pulse on title
    gsap.to(titleRef.current, {
      y: -3,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Section titles reveal
    gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        rotation: -2,
        duration: 1.2,
        ease: "power3.out",
      })
    })
  }, { scope: heroRef })

  // Insights section - Advanced Stagger with Random
  useGSAP(() => {
    if (!insightsRef.current) return

    const insightCards = insightsRef.current.querySelectorAll(".insight-card")
    const cardTitles = insightsRef.current.querySelectorAll(".insight-title")
    const cardDescriptions = insightsRef.current.querySelectorAll(".insight-description")

    // Stagger cards with random timing
    gsap.from(insightCards, {
      scrollTrigger: {
        trigger: insightsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 0.7,
      opacity: 0,
      rotation: gsap.utils.random(-8, 8),
      y: 60,
      stagger: {
        amount: 1,
        from: "random",
        grid: "auto",
      },
      duration: 1,
      ease: "back.out(1.7)",
    })

    // Animate titles separately with delay
    gsap.from(cardTitles, {
      scrollTrigger: {
        trigger: insightsRef.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      delay: 0.3,
    })

    // Animate descriptions with different timing
    gsap.from(cardDescriptions, {
      scrollTrigger: {
        trigger: insightsRef.current,
        start: "top 80%",
      },
      y: 15,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.6,
    })

    // Hover animations for insight cards
    insightCards.forEach((card) => {
      const hoverTl = gsap.timeline({ paused: true })
      hoverTl
        .to(card, {
          y: -8,
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          card.querySelector(".insight-title"),
          {
            color: "#f0c36a", // Gold on hover
            duration: 0.3,
          },
          "<"
        )

      card.addEventListener("mouseenter", () => hoverTl.play())
      card.addEventListener("mouseleave", () => hoverTl.reverse())
    })
  }, { scope: insightsRef })

  // Movements section - Advanced ScrollTrigger with Pin
  useGSAP(() => {
    if (!movementsRef.current) return

    const cards = movementsRef.current.querySelectorAll(".movement-card")

    // Pin the section title during scroll
    const sectionTitle = movementsRef.current.querySelector(".section-title")
    if (sectionTitle) {
      ScrollTrigger.create({
        trigger: movementsRef.current,
        start: "top top",
        end: "+=2000",
        pin: sectionTitle,
        pinSpacing: false,
      })
    }

    // Animate cards with complex stagger
    cards.forEach((card) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Callback when card enters
            gsap.to(card, {
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
              duration: 0.5,
            })
          },
          onLeaveBack: () => {
            gsap.to(card, {
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              duration: 0.5,
            })
          },
        },
      })

      cardTl
        .from(card, {
          y: 100,
          opacity: 0,
          rotationX: -25,
          transformOrigin: "center bottom",
          duration: 1,
          ease: "power3.out",
        })
        .from(
          card.querySelector(".movement-title"),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          card.querySelectorAll(".movement-meta"),
          {
            x: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3"
        )

      // Advanced hover with timeline
      const hoverTl = gsap.timeline({ paused: true })
      hoverTl
        .to(card, {
          y: -20,
          scale: 1.03,
          rotationY: 3,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          card.querySelector(".movement-year"),
          {
            scale: 1.15,
            rotation: 5,
            duration: 0.3,
          },
          "<"
        )
        .to(
          card.querySelector(".movement-title"),
          {
            color: "#f0c36a",
            duration: 0.3,
          },
          "<"
        )

      card.addEventListener("mouseenter", () => hoverTl.play())
      card.addEventListener("mouseleave", () => hoverTl.reverse())
    })

  }, { scope: movementsRef })

  // Pinned section with scrubbed animation
  useGSAP(() => {
    if (!pinnedSectionRef.current) return

    const pinnedContent = pinnedSectionRef.current.querySelector(".pinned-content")
    const backgroundElements = pinnedSectionRef.current.querySelectorAll(".pinned-bg-element")

    // Pin the section
    ScrollTrigger.create({
      trigger: pinnedSectionRef.current,
      start: "top top",
      end: "+=1000",
      pin: true,
      pinSpacing: true,
    })

    // Animate background elements with scrub
    backgroundElements.forEach((element) => {
      gsap.to(element, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-50, 50),
        rotation: gsap.utils.random(-10, 10),
        opacity: gsap.utils.random(0.1, 0.3),
        ease: "none",
        scrollTrigger: {
          trigger: pinnedSectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      })
    })

    // Animate content during pin
    if (pinnedContent) {
      gsap.to(pinnedContent, {
        scale: 1.1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: pinnedSectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
        },
      })
    }
  }, { scope: pinnedSectionRef })

  // Button hover animations with GSAP timelines
  useEffect(() => {
    const buttons = document.querySelectorAll(".gsap-button")
    
    buttons.forEach((button) => {
      const hoverTl = gsap.timeline({ paused: true })
      hoverTl
        .to(button, {
          scale: 1.08,
          y: -4,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          button,
          {
            boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
            duration: 0.2,
          },
          "<"
        )

      button.addEventListener("mouseenter", () => hoverTl.play())
      button.addEventListener("mouseleave", () => hoverTl.reverse())
    })

    return () => {
      buttons.forEach((button) => {
        gsap.killTweensOf(button)
      })
    }
  }, [])

  // Scroll indicator with GSAP
  useGSAP(() => {
    const indicator = document.querySelector(".scroll-indicator")
    const indicatorContainer = document.querySelector(".scroll-indicator-container")
    
    if (!indicator || !indicatorContainer) return

    // Bounce animation
    gsap.to(indicator, {
      y: 14,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Fade out on scroll
    gsap.to(indicatorContainer, {
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  })

  // Impact section with complex animation
  useGSAP(() => {
    const impactCta = document.querySelector(".impact-cta")
    if (!impactCta) return

    const impactTl = gsap.timeline({
      scrollTrigger: {
        trigger: impactCta,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    impactTl
      .from(impactCta, {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .from(
        impactCta.querySelector("h2"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        impactCta.querySelector("p"),
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        impactCta.querySelector(".gsap-button"),
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      )
  })

  // Text reveal animation for descriptions
  useGSAP(() => {
    const descriptions = document.querySelectorAll(".reveal-text")
    
    descriptions.forEach((desc) => {
      gsap.from(desc, {
        scrollTrigger: {
          trigger: desc,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.out",
      })
    })
  })

  // Horizontal Scrolling Section
  useGSAP(() => {
    if (!horizontalScrollRef.current) return

    const wrapper = horizontalScrollRef.current.querySelector(".horizontal-scroll-wrapper")
    const container = horizontalScrollRef.current.querySelector(".horizontal-scroll-container")
    if (!container || !wrapper) return

    const containerWidth = container.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollDistance = containerWidth - viewportWidth

    const horizontalScroll = gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Animate items as they come into view
    const items = horizontalScrollRef.current.querySelectorAll(".horizontal-item")
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          containerAnimation: horizontalScroll,
          start: "left 80%",
          end: "left 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
    })
  }, { scope: horizontalScrollRef })

  // Split Text Animation
  useGSAP(() => {
    const splitTexts = document.querySelectorAll(".split-text")
    
    splitTexts.forEach((text) => {
      const textContent = text.textContent || ""
      text.innerHTML = textContent
        .split("")
        .map((char) => `<span class="split-char" style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")

      const chars = text.querySelectorAll(".split-char")
      
      gsap.from(chars, {
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "50% 50%",
        stagger: {
          amount: 0.8,
          from: "random",
        },
        duration: 0.6,
        ease: "power3.out",
      })
    })

    // Paragraph split animation
    const paragraphs = document.querySelectorAll(".split-text-paragraph")
    paragraphs.forEach((para) => {
      const words = para.textContent?.split(" ") || []
      para.innerHTML = words
        .map((word) => `<span class="split-word" style="display: inline-block; margin-right: 0.3em;">${word}</span>`)
        .join("")

      const wordSpans = para.querySelectorAll(".split-word")
      gsap.from(wordSpans, {
        scrollTrigger: {
          trigger: para,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      })
    })
  })

  // Interactive Timeline Section
  useGSAP(() => {
    if (!timelineSectionRef.current) return

    const items = timelineSectionRef.current.querySelectorAll(".timeline-item")
    const dots = timelineSectionRef.current.querySelectorAll(".timeline-dot")
    const lines = timelineSectionRef.current.querySelectorAll(".timeline-line")

    items.forEach((item, index) => {
      const timelineTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      timelineTl
        .from(item, {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          item.querySelector(".timeline-year"),
          {
            scale: 0,
            rotation: -180,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          item.querySelector(".timeline-title"),
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          item.querySelector(".timeline-desc"),
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.2"
        )

      // Animate dot
      gsap.from(dots[index], {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        scale: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      })

      // Animate line
      if (index < lines.length) {
        gsap.from(lines[index], {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
        })
      }
    })
  }, { scope: timelineSectionRef })

  // Morphing/Transform Section
  useGSAP(() => {
    if (!morphingSectionRef.current) return

    const cards = morphingSectionRef.current.querySelectorAll(".morph-card")

    cards.forEach((card, index) => {
      // Initial animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: index * 0.2,
      })

      // Morphing hover animation
      const morphTl = gsap.timeline({ paused: true })
      morphTl
        .to(card, {
          scale: 1.1,
          rotationY: 15,
          rotationX: 5,
          z: 50,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          card.querySelector(".morph-icon"),
          {
            rotation: 360,
            scale: 1.2,
            duration: 0.5,
          },
          "<"
        )
        .to(
          card.querySelector(".morph-title"),
          {
            color: "#f0c36a",
            y: -5,
            duration: 0.3,
          },
          "<"
        )

      card.addEventListener("mouseenter", () => morphTl.play())
      card.addEventListener("mouseleave", () => morphTl.reverse())
    })
  }, { scope: morphingSectionRef })

  // Number Counter Animation
  useGSAP(() => {
    if (!numbersSectionRef.current) return

    const stats = numbersSectionRef.current.querySelectorAll(".number-stat")

    stats.forEach((stat) => {
      const valueElement = stat.querySelector(".stat-value")
      const targetText = valueElement?.textContent || "0"
      const targetNumber = parseInt(targetText.replace(/,/g, "")) || 0

      gsap.to(
        { value: 0 },
        {
          value: targetNumber,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function () {
            if (valueElement) {
              const currentValue = Math.floor(this.targets()[0].value)
              valueElement.textContent = currentValue.toLocaleString()
            }
          },
        }
      )

      // Animate stat container
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      })
    })
  }, { scope: numbersSectionRef })

  // Image Reveal Section
  useGSAP(() => {
    if (!imageRevealRef.current) return

    const containers = imageRevealRef.current.querySelectorAll(".image-reveal-container")

    containers.forEach((container) => {
      const mask = container.querySelector(".image-reveal-mask")
      const image = container.querySelector(".image-reveal-image")
      const content = container.querySelector(".image-reveal-content")

      // Reveal animation
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      revealTl
        .from(mask, {
          clipPath: "inset(0 0 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
        })
        .from(
          image,
          {
            scale: 1.2,
            duration: 1.2,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          content,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )

      // Hover animation
      const hoverTl = gsap.timeline({ paused: true })
      hoverTl.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      })

      container.addEventListener("mouseenter", () => hoverTl.play())
      container.addEventListener("mouseleave", () => hoverTl.reverse())
    })
  }, { scope: imageRevealRef })

  return (
    <div className="min-h-screen bg-[#130b24] text-[#f7f3ff] relative overflow-hidden">
      {/* Hero Section with GSAP Animations */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image with Parallax */}
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          <Image
            src="/alan/alan-headshot-4x5.webp"
            alt="Alan Hirsch"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-[#130b24]/90 via-[#221135]/80 to-[#130b24]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130b24] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1
            ref={titleRef}
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-[#f7f3ff] tracking-tighter leading-none font-[var(--font-playfair)]"
          >
            Alan Hirsch
          </h1>
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl text-[#f0c36a] mb-6 font-light max-w-3xl mx-auto leading-tight"
          >
            Pioneer of Missional Movements
          </p>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-[#e3d4ff] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Thought leader, author, and catalyst for church transformation
            through apostolic imagination and organic community
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gsap-button text-lg px-10 py-7 h-auto bg-[#5b21b6] text-[#f7f3ff] hover:bg-[#43128b] shadow-2xl border-0 font-semibold"
            >
              Explore His Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gsap-button text-lg px-10 py-7 h-auto border-2 border-[#f0c36a]/60 text-[#f0c36a] hover:bg-[#f0c36a]/10 backdrop-blur-sm font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator with GSAP animation */}
        <div className="scroll-indicator-container absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#f0c36a]/80 text-sm font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-[#f0c36a]/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-[#130b24]/50">
              <div className="scroll-indicator w-1.5 h-1.5 bg-[#f0c36a] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section with GSAP Stagger */}
      <section ref={insightsRef} className="relative py-32 px-6 bg-gradient-to-b from-[#130b24] to-[#221135]">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl font-black mb-6 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Core Insights
          </h2>
          <p className="text-xl md:text-2xl text-[#e3d4ff] max-w-3xl mx-auto leading-relaxed text-center mb-20">
            Foundational concepts that shape missional thinking and practice
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="insight-card h-full border-2 border-[#432659] hover:border-[#f0c36a] transition-colors duration-300 cursor-pointer bg-[#2a1538] shadow-xl hover:shadow-2xl hover:shadow-[#f0c36a]/20 overflow-hidden"
              >
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="insight-title !text-xl !mb-4 !text-[#f7f3ff] !font-bold">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="insight-description !text-base !text-[#e3d4ff] !leading-relaxed !font-normal">
                    {insight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Movements Section with GSAP Pin and Scroll Triggers */}
      <section ref={movementsRef} className="relative py-32 px-6 bg-[#221135]">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl font-black mb-6 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Key Works
          </h2>
          <p className="text-xl md:text-2xl text-[#e3d4ff] max-w-3xl mx-auto leading-relaxed text-center mb-20">
            Seminal books that have shaped missional thinking worldwide
          </p>

          <div className="movements-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <Card
                key={index}
                className="movement-card h-full border-2 border-[#432659] hover:border-[#f0c36a] transition-colors duration-300 cursor-pointer bg-[#130b24] shadow-xl hover:shadow-2xl hover:shadow-[#f0c36a]/30 overflow-hidden"
              >
                <CardHeader className="pb-4 pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="movement-title !text-2xl !mb-2 !text-[#f7f3ff] !font-bold leading-tight">
                        {movement.title}
                      </CardTitle>
                      <p className="text-sm font-semibold text-[#f0c36a] mb-3">
                        {movement.subtitle}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="movement-year inline-block px-3 py-1 bg-[#5b21b6] text-[#f7f3ff] text-sm font-bold rounded-full shadow-lg">
                        {movement.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="movement-meta text-xs font-medium !text-[#d2c4ff] uppercase tracking-wider">
                      {movement.category}
                    </span>
                    <span className="movement-meta !text-[#8c7abf]">•</span>
                    <span className="movement-meta text-xs font-medium text-[#f0c36a]">
                      {movement.impact}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="movement-meta text-xs font-medium !text-[#f0c36a] italic">
                      {movement.highlight}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="reveal-text !text-base !text-[#e3d4ff] !leading-relaxed !font-normal">
                    {movement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pinned Section with Scrubbed Animation */}
      <section ref={pinnedSectionRef} className="relative py-32 px-6 bg-[#130b24]">
        <div className="pinned-bg-element absolute top-20 right-20 w-96 h-96 bg-[#5b21b6] rounded-full opacity-20 blur-3xl" />
        <div className="pinned-bg-element absolute bottom-20 left-20 w-96 h-96 bg-[#2b1140] rounded-full opacity-20 blur-3xl" />
        <div className="pinned-bg-element absolute top-1/2 left-1/3 w-96 h-96 bg-[#3c1b4e] rounded-full opacity-15 blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="pinned-content opacity-0 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#f7f3ff] tracking-tight font-[var(--font-playfair)]">
              Academic Excellence
            </h2>
            <p className="text-xl md:text-2xl text-[#e3d4ff] mb-12 max-w-2xl mx-auto leading-relaxed">
              Alan Hirsch's scholarly work bridges theory and practice, creating frameworks
              that have been adopted by theological institutions and church movements globally.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section with GSAP Timeline */}
      <section className="relative py-32 px-6 bg-[#221135]">
        <div className="max-w-4xl mx-auto">
          <div className="impact-cta border-2 border-[#f0c36a]/30 rounded-3xl p-12 md:p-16 bg-gradient-to-br from-[#130b24] to-[#221135] text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#f7f3ff] tracking-tight font-[var(--font-playfair)]">
              Shaping the Future
            </h2>
            <p className="text-xl md:text-2xl text-[#e3d4ff] mb-12 max-w-2xl mx-auto leading-relaxed">
              Alan Hirsch's work has influenced thousands of churches and leaders worldwide,
              activating apostolic imagination and missional DNA in communities across the globe.
            </p>
            <Button
              size="lg"
              className="gsap-button text-lg px-10 py-7 h-auto bg-[#5b21b6] text-[#f7f3ff] hover:bg-[#43128b] shadow-2xl border-0 font-semibold"
            >
              Explore the Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Section */}
      <section ref={horizontalScrollRef} className="relative py-32 px-6 bg-[#130b24] overflow-hidden">
        <div className="horizontal-scroll-wrapper w-full">
          <div className="horizontal-scroll-container flex gap-8 w-max">
            {[
              { title: "Global Impact", stat: "5,000+", desc: "Churches using 5Q framework" },
              { title: "Publications", stat: "15+", desc: "Translated languages" },
              { title: "Influence", stat: "100K+", desc: "Books sold worldwide" },
              { title: "Recognition", stat: "Award", desc: "Winning author" },
              { title: "Education", stat: "Global", desc: "Seminaries & institutions" },
              { title: "Movement", stat: "Worldwide", desc: "Missional communities" },
            ].map((item, index) => (
              <div key={index} className="horizontal-item min-w-[300px] bg-[#2a1538] border-2 border-[#432659] rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#f0c36a] mb-2">{item.title}</h3>
                <div className="text-5xl font-black text-[#f7f3ff] mb-2">{item.stat}</div>
                <p className="text-[#e3d4ff]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Text Animation Section */}
      <section className="relative py-32 px-6 bg-[#221135]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            <span className="split-text inline-block">Theological Innovation</span>
          </h2>
          <p className="split-text-paragraph text-xl md:text-2xl text-[#e3d4ff] max-w-3xl mx-auto leading-relaxed text-center">
            Through decades of research and practice, Alan Hirsch has developed frameworks that transform how we understand church, mission, and community.
          </p>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section ref={timelineSectionRef} className="relative py-32 px-6 bg-[#130b24]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Academic Journey
          </h2>
          <div className="timeline-container relative">
            {[
              { year: "2003", title: "The Shaping of Things to Come", desc: "Co-authored groundbreaking work on church innovation" },
              { year: "2006", title: "The Forgotten Ways", desc: "Reawakening missional church through apostolic imagination" },
              { year: "2009", title: "ReJesus", desc: "Rediscovering the radical, untamed Messiah" },
              { year: "2010", title: "Untamed", desc: "Reactivating missional discipleship" },
              { year: "2012", title: "The Permanent Revolution", desc: "Apostolic imagination and practice" },
              { year: "2016", title: "5Q Framework", desc: "Reactivating the original intelligence" },
            ].map((milestone, index) => (
              <div key={index} className="timeline-item mb-16 relative pl-16">
                <div className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-[#f0c36a] rounded-full border-4 border-[#130b24]" />
                <div className="timeline-line absolute left-2 top-6 w-0.5 h-full bg-[#432659]" />
                <div className="timeline-year text-3xl font-black text-[#f0c36a] mb-2">{milestone.year}</div>
                <h3 className="timeline-title text-2xl font-bold text-[#f7f3ff] mb-2">{milestone.title}</h3>
                <p className="timeline-desc text-[#e3d4ff]">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morphing/Transform Section */}
      <section ref={morphingSectionRef} className="relative py-32 px-6 bg-[#221135] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Transformative Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📚", title: "Apostolic", desc: "Pioneering new expressions" },
              { icon: "🌍", title: "Missional", desc: "Embedded in every aspect" },
              { icon: "🌱", title: "Organic", desc: "Authentic relationships" },
            ].map((concept, index) => (
              <div key={index} className="morph-card bg-[#130b24] border-2 border-[#432659] rounded-lg p-8 text-center cursor-pointer">
                <div className="morph-icon text-6xl mb-4">{concept.icon}</div>
                <h3 className="morph-title text-2xl font-bold text-[#f7f3ff] mb-2">{concept.title}</h3>
                <p className="morph-desc text-[#e3d4ff]">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Number Counter Animation Section */}
      <section ref={numbersSectionRef} className="relative py-32 px-6 bg-[#130b24]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Impact by Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 100000, suffix: "+", label: "Books Sold", prefix: "" },
              { number: 15, suffix: "+", label: "Languages", prefix: "" },
              { number: 5000, suffix: "+", label: "Churches", prefix: "" },
              { number: 20, suffix: "+", label: "Years", prefix: "" },
            ].map((stat, index) => (
              <div key={index} className="number-stat text-center">
                <div className="stat-number text-6xl font-black text-[#f0c36a] mb-2">
                  <span className="stat-prefix">{stat.prefix}</span>
                  <span className="stat-value">0</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label text-[#e3d4ff] text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Reveal Section */}
      <section ref={imageRevealRef} className="relative py-32 px-6 bg-[#221135]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-[#f7f3ff] tracking-tight text-center font-[var(--font-playfair)]">
            Visual Legacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: "/alan/alan-candid-1.webp", title: "Teaching", desc: "Engaging audiences worldwide" },
              { src: "/alan/alan-candid-2.webp", title: "Collaboration", desc: "Working with thought leaders" },
            ].map((image, index) => (
              <div key={index} className="image-reveal-container relative overflow-hidden rounded-lg">
                <div className="image-reveal-mask absolute inset-0 bg-[#130b24] z-10" />
                <Image
                  src={image.src}
                  alt={image.title}
                  width={600}
                  height={400}
                  className="image-reveal-image w-full h-full object-cover"
                />
                <div className="image-reveal-content absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#130b24] to-transparent z-20">
                  <h3 className="text-2xl font-bold text-[#f7f3ff] mb-2">{image.title}</h3>
                  <p className="text-[#e3d4ff]">{image.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="gsap-button px-5 py-2.5 text-sm bg-[#2a1538] border-2 border-[#432659] rounded-lg hover:border-[#f0c36a] hover:bg-[#432659] transition-colors text-[#f7f3ff] shadow-xl hover:shadow-2xl hover:shadow-[#f0c36a]/20 font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
