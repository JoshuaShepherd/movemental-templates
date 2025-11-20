"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Design Choice: Custom LMS - Scholarly & Artistic
// Teaching mDNA (missional DNA) with excellent UX
// Simple surface, deep when needed
// Beautiful scholarly design

type LessonStatus = "locked" | "available" | "in-progress" | "completed"

interface Lesson {
  id: string
  title: string
  description: string
  duration: number
  status: LessonStatus
  content: string
  objectives: string[]
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  order: number
}

const modules: Module[] = [
  {
    id: "1",
    title: "Introduction to Missional DNA",
    description: "Foundational understanding of mDNA and its significance in ecclesial transformation",
    order: 1,
    lessons: [
      {
        id: "1-1",
        title: "What is Missional DNA?",
        description: "Exploring the fundamental concept of mDNA and its origins",
        duration: 15,
        status: "completed",
        content: `Missional DNA (mDNA) represents the fundamental genetic code of the church—the essential elements that make the church the church. Unlike organizational DNA, which can be changed, mDNA is the irreducible core that defines the church's identity and purpose.

The concept emerged from observing movements throughout history that have transformed culture. These movements—from the early church to the Celtic missional movement—all shared certain characteristics. These shared characteristics form what we call missional DNA.

mDNA consists of six essential elements:
1. Jesus is Lord
2. Disciple-making
3. Missional-incarnational impulse
4. Apostolic environment
5. Organic systems
6. Communitas

Each element is interdependent and essential. When all six are present and activated, the church functions as a transformative movement. When one or more are missing, the church experiences dysfunction and limitation.`,
        objectives: [
          "Understand the concept of missional DNA",
          "Identify the six elements of mDNA",
          "Recognize the difference between organizational DNA and missional DNA",
        ],
      },
      {
        id: "1-2",
        title: "The Historical Context",
        description: "How mDNA has appeared throughout church history",
        duration: 20,
        status: "completed",
        content: `Throughout history, whenever the church has functioned as a transformative movement, we see the six elements of mDNA present and active. The early church, the Celtic missional movement, the Moravians, and others all demonstrate these characteristics.

The early church, for example, had a clear understanding that Jesus is Lord—not just a theological concept, but a lived reality that shaped every aspect of their existence. They were committed to disciple-making as their primary activity. They had a missional-incarnational impulse that sent them into culture rather than withdrawing from it.

They created apostolic environments where pioneering and innovation were expected. They developed organic systems that emerged from relationships rather than imposed hierarchy. And they experienced communitas—the deep bond formed through shared mission and risk.

When we study these movements, we're not looking for models to copy, but for principles to understand. The specific expressions may differ, but the underlying DNA remains constant.`,
        objectives: [
          "Identify historical movements that demonstrate mDNA",
          "Understand how mDNA principles have been expressed differently across contexts",
          "Recognize the constant elements across diverse movements",
        ],
      },
      {
        id: "1-3",
        title: "Why mDNA Matters Today",
        description: "The relevance of mDNA for contemporary church contexts",
        duration: 18,
        status: "in-progress",
        content: `In a post-Christian culture, the church faces unprecedented challenges. The old models—built on attraction, programs, and centralized leadership—are showing their limitations. But this isn't a crisis; it's an opportunity to rediscover what we've forgotten.

mDNA matters because it helps us understand what makes the church the church. It's not about buildings, programs, or events. It's about the essential elements that, when present and activated, enable the church to function as a transformative movement.

When churches understand and activate their missional DNA, they begin to see transformation. They move from maintenance to mission, from programs to movement, from attractional to missional. This isn't about abandoning everything, but about rediscovering the core that makes everything else meaningful.

The six elements of mDNA provide a diagnostic tool. Churches can assess which elements are present, which are missing, and which need to be activated. This assessment leads to intentional development and transformation.`,
        objectives: [
          "Understand the relevance of mDNA for contemporary contexts",
          "Recognize how mDNA serves as a diagnostic tool",
          "See the connection between mDNA activation and church transformation",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "The Six Elements of mDNA",
    description: "Deep dive into each element of missional DNA",
    order: 2,
    lessons: [
      {
        id: "2-1",
        title: "Jesus is Lord",
        description: "The foundational element that shapes all others",
        duration: 22,
        status: "available",
        content: `"Jesus is Lord" is not just a theological statement—it's the foundational element of missional DNA. This element recognizes that Jesus Christ is the ultimate authority, the center of everything, and the source of all transformation.

When Jesus is truly Lord, it means:
- He shapes our identity and purpose
- He determines our priorities and values
- He guides our decisions and actions
- He is the measure of all things

This element is often assumed but not always activated. Many churches would say "Jesus is Lord," but their structures, programs, and priorities suggest otherwise. When Jesus is truly Lord, everything else aligns around that reality.

The early church understood this. They didn't just believe that Jesus was Lord—they lived as if it were true. This shaped how they gathered, how they made decisions, how they related to culture, and how they understood their mission.`,
        objectives: [
          "Understand what it means for Jesus to be Lord",
          "Recognize the difference between professing and activating this element",
          "See how this element shapes all other aspects of mDNA",
        ],
      },
      {
        id: "2-2",
        title: "Disciple-Making",
        description: "The primary activity of the church",
        duration: 25,
        status: "locked",
        content: `Disciple-making is not a program or an activity—it's the primary function of the church. Everything flows from making disciples who make disciples. This element recognizes that the church exists to form people into the image of Christ and send them into mission.

True disciple-making involves:
- Life-on-life relationship
- Intentional formation
- Multiplication, not just addition
- Integration of faith and life
- Sending into mission

When disciple-making is the primary activity, everything else serves that purpose. Programs, events, and structures all exist to support the formation and sending of disciples. When disciple-making is secondary, the church becomes maintenance-focused rather than mission-focused.

The early church understood this. They didn't have elaborate programs, but they were committed to making disciples. This commitment shaped their community, their leadership, and their mission.`,
        objectives: [
          "Understand disciple-making as the primary activity",
          "Recognize the characteristics of true disciple-making",
          "See how disciple-making shapes church structure and mission",
        ],
      },
      {
        id: "2-3",
        title: "Missional-Incarnational Impulse",
        description: "Sent into culture, not withdrawn from it",
        duration: 20,
        status: "locked",
        content: `The missional-incarnational impulse sends the church into culture rather than withdrawing from it. This element recognizes that mission is not something we do—it's who we are. And we engage culture by entering into it, not by standing apart from it.

This impulse involves:
- Going to where people are
- Engaging culture contextually
- Living as salt and light
- Being present in the world
- Transforming from within

The incarnational aspect means we enter into culture the way Jesus entered into humanity—fully present, fully engaged, but not compromised. We're in the world but not of it, present but distinct.

When this impulse is active, the church doesn't wait for people to come to it. It goes to where people are. It engages culture, not by condemning it, but by transforming it from within through presence and witness.`,
        objectives: [
          "Understand the missional-incarnational impulse",
          "Recognize the difference between attractional and missional approaches",
          "See how this impulse shapes church engagement with culture",
        ],
      },
      {
        id: "2-4",
        title: "Apostolic Environment",
        description: "Creating spaces for pioneering and innovation",
        duration: 18,
        status: "locked",
        content: `An apostolic environment is one where pioneering and innovation are not just allowed, but expected and celebrated. This element recognizes that the church needs apostolic leadership—people who pioneer new expressions, break new ground, and activate movement.

Key characteristics include:
- Permission-giving rather than permission-withholding
- Innovation and experimentation
- Risk-taking and pioneering
- Multiplication and movement
- Decentralized leadership

When an apostolic environment exists, people are empowered to create, pioneer, and innovate. They're not waiting for permission or a program. They're activating the gifts God has given them and creating new expressions of church and mission.

This doesn't mean chaos or lack of accountability. It means creating frameworks that guide rather than rules that constrain. It means supporting pioneers rather than controlling them.`,
        objectives: [
          "Understand what an apostolic environment is",
          "Recognize the characteristics of apostolic leadership",
          "See how to create environments that foster pioneering",
        ],
      },
      {
        id: "2-5",
        title: "Organic Systems",
        description: "Structures that emerge from relationships",
        duration: 20,
        status: "locked",
        content: `Organic systems are structures that emerge naturally from relationships and mission, rather than being imposed from above. This element recognizes that the best structures are those that grow naturally, like a living organism.

Characteristics of organic systems:
- Emerge from relationships
- Flexible and adaptable
- Decentralized
- Network-based rather than hierarchical
- Support movement rather than control it

When systems are organic, they serve the mission rather than the mission serving the systems. They're flexible enough to adapt to new contexts and opportunities. They're decentralized enough to allow for local innovation and expression.

This doesn't mean no structure. It means the right kind of structure—one that supports rather than constrains, that guides rather than controls, that enables rather than restricts.`,
        objectives: [
          "Understand organic systems",
          "Recognize the difference between organic and organizational systems",
          "See how to develop structures that support movement",
        ],
      },
      {
        id: "2-6",
        title: "Communitas",
        description: "The deep bond formed through shared mission",
        duration: 22,
        status: "locked",
        content: `Communitas is the deep bond that forms when people share a common mission and face challenges together. It's different from community—which can be comfortable and safe—in that it's forged in the fires of shared purpose and risk.

Key elements of communitas:
- Shared mission and purpose
- Facing challenges together
- Deep relational bonds
- Commitment beyond convenience
- Transformation through shared experience

When communitas exists, people are bound together by something deeper than proximity or similarity. They're united by a common purpose and the experience of facing challenges together. This creates bonds that outlast programs, events, or circumstances.

The early church experienced communitas. They faced persecution, cultural resistance, and the challenge of pioneering something new. This shared risk and purpose created a depth of relationship that programs and events can't replicate.`,
        objectives: [
          "Understand communitas and how it differs from community",
          "Recognize the conditions that create communitas",
          "See how shared mission creates deep relational bonds",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Activating mDNA",
    description: "Practical steps for activating missional DNA in your context",
    order: 3,
    lessons: [
      {
        id: "3-1",
        title: "Assessing Your mDNA",
        description: "How to diagnose which elements are present and which need activation",
        duration: 25,
        status: "locked",
        content: `The first step in activating mDNA is assessment. You need to understand which elements are present, which are missing, and which need to be activated. This assessment provides the foundation for intentional development.

Assessment involves:
- Evaluating each of the six elements
- Identifying strengths and gaps
- Understanding current state
- Setting priorities for development
- Creating a plan for activation

This isn't about finding fault or identifying problems. It's about understanding reality so you can move forward intentionally. Every church has all six elements present in some form. The question is whether they're recognized, released, and integrated.

The assessment process should involve the whole community, not just leadership. When people understand the elements and assess their presence, they begin to see opportunities for activation.`,
        objectives: [
          "Learn how to assess mDNA in your context",
          "Understand the assessment process",
          "Recognize the importance of community involvement in assessment",
        ],
      },
      {
        id: "3-2",
        title: "Developing an Activation Plan",
        description: "Creating a strategic plan for activating missional DNA",
        duration: 30,
        status: "locked",
        content: `Once you've assessed your mDNA, the next step is creating an activation plan. This plan should be strategic, intentional, and contextual. It should address the specific gaps and opportunities you've identified.

An effective activation plan includes:
- Clear priorities based on assessment
- Specific actions and initiatives
- Timeline and milestones
- Resource allocation
- Measurement and evaluation

The plan should be realistic and achievable. It's better to activate one element well than to try to activate all six at once. Start with the element that will have the greatest impact and build from there.

Remember that activation is a process, not an event. It takes time, intentionality, and commitment. But when done well, it leads to transformation that is both deep and sustainable.`,
        objectives: [
          "Learn how to create an activation plan",
          "Understand the elements of an effective plan",
          "Recognize the importance of prioritization and sequencing",
        ],
      },
    ],
  },
]

export default function AlanHirschHero() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(modules[0])
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(modules[0].lessons[0])
  const progress = {
    "1-1": 100,
    "1-2": 100,
    "1-3": 45,
  }

  const overallProgress = 28 // Calculate based on completed lessons

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.status !== "locked") {
      setSelectedLesson(lesson)
    }
  }

  const getStatusColor = (status: LessonStatus) => {
    switch (status) {
      case "completed": return "bg-green-500"
      case "in-progress": return "bg-blue-500"
      case "available": return "bg-gray-400"
      case "locked": return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black font-[var(--font-playfair)]">mDNA Learning Platform</h1>
              <p className="text-sm text-[#666]">Missional DNA Course</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm font-semibold text-[#1a1a1a]">{overallProgress}% Complete</div>
                <div className="w-32 h-2 bg-[#e0e0e0] rounded-full mt-1">
                  <div
                    className="h-full bg-[#1a1a1a] rounded-full transition-all"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
              <Button className="px-6 py-2 h-auto bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#2a2a2a] rounded-sm font-medium text-sm">
                My Progress
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Modules & Lessons */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Course Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#e0e0e0] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-[#1a1a1a]" />
                <div>
                  <h2 className="text-xl font-bold font-[var(--font-playfair)]">Course Overview</h2>
                  <p className="text-sm text-[#666]">Missional DNA (mDNA)</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#4a4a4a] mb-4">
                A comprehensive exploration of the six essential elements that form the genetic code of the church.
              </p>
              <div className="flex items-center justify-between text-xs text-[#666] pt-4 border-t border-[#e0e0e0]">
                <span>{modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
                <span>{modules.reduce((acc, m) => acc + m.lessons.reduce((sum, l) => sum + l.duration, 0), 0)} min</span>
              </div>
            </motion.div>

            {/* Modules List */}
            <div className="space-y-4">
              {modules.map((module, moduleIndex) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: moduleIndex * 0.1 }}
                  className="bg-white border border-[#e0e0e0]"
                >
                  <button
                    onClick={() => setSelectedModule(module)}
                    className={`w-full text-left p-5 border-b border-[#e0e0e0] transition-colors ${
                      selectedModule?.id === module.id ? "bg-[#f5f5f5]" : "hover:bg-[#fafafa]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-[#666]">Module {module.order}</span>
                          <div className="flex-1 h-px bg-[#e0e0e0]" />
                        </div>
                        <h3 className="font-bold text-[#1a1a1a]">{module.title}</h3>
                      </div>
                      <span className="text-xs text-[#666] ml-4">
                        {module.lessons.length} {module.lessons.length === 1 ? "lesson" : "lessons"}
                      </span>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed">{module.description}</p>
                  </button>

                  {/* Lessons in Module */}
                  <AnimatePresence>
                    {selectedModule?.id === module.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 space-y-2 bg-[#fafafa]">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonClick(lesson)}
                              disabled={lesson.status === "locked"}
                              className={`w-full text-left p-4 rounded border transition-all ${
                                selectedLesson?.id === lesson.id
                                  ? "border-[#1a1a1a] bg-white"
                                  : lesson.status === "locked"
                                  ? "border-[#e0e0e0] bg-[#f5f5f5] opacity-60 cursor-not-allowed"
                                  : "border-[#e0e0e0] bg-white hover:border-[#1a1a1a] hover:bg-[#fafafa]"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-3 h-3 rounded-full mt-1.5 ${getStatusColor(lesson.status)}`} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-semibold text-[#666]">
                                      Lesson {lessonIndex + 1}
                                    </span>
                                    <span className="text-xs text-[#666]">{lesson.duration} min</span>
                                  </div>
                                  <h4 className="font-semibold text-[#1a1a1a] mb-1">{lesson.title}</h4>
                                  <p className="text-xs text-[#666] line-clamp-2">{lesson.description}</p>
                                  {lesson.status === "in-progress" && progress[lesson.id as keyof typeof progress] && (
                                    <div className="mt-2">
                                      <div className="w-full h-1 bg-[#e0e0e0] rounded-full">
                                        <div
                                          className="h-full bg-blue-500 rounded-full transition-all"
                                          style={{ width: `${progress[lesson.id as keyof typeof progress]}%` }}
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8">
            {selectedLesson ? (
              <motion.div
                key={selectedLesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-[#e0e0e0]"
              >
                {/* Lesson Header */}
                <div className="border-b border-[#e0e0e0] p-8 bg-[#fafafa]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedLesson.status)}`} />
                    <span className="text-xs font-semibold text-[#666] uppercase tracking-wide">
                      {selectedLesson.status === "completed" ? "Completed" : 
                       selectedLesson.status === "in-progress" ? "In Progress" : 
                       selectedLesson.status === "available" ? "Available" : "Locked"}
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-4 font-[var(--font-playfair)]">
                    {selectedLesson.title}
                  </h2>
                  <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                    {selectedLesson.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-[#666]">
                    <span>⏱️ {selectedLesson.duration} minutes</span>
                    <span>📚 Module {selectedModule?.order}</span>
                  </div>
                </div>

                {/* Learning Objectives */}
                <div className="p-8 border-b border-[#e0e0e0] bg-[#fafafa]">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#666] mb-4">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {selectedLesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#4a4a4a]">
                        <span className="text-[#1a1a1a] mt-1">✓</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lesson Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="text-[#2a2a2a] leading-[1.8] space-y-6">
                      {selectedLesson.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-base leading-[1.8]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Actions */}
                  <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="px-6 py-2 h-auto border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f6] rounded-sm font-medium text-sm"
                    >
                      ← Previous Lesson
                    </Button>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="px-6 py-2 h-auto border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f6] rounded-sm font-medium text-sm"
                      >
                        Mark Complete
                      </Button>
                      <Button className="px-6 py-2 h-auto bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#2a2a2a] rounded-sm font-medium text-sm">
                        Next Lesson →
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white border border-[#e0e0e0] p-12 text-center">
                <p className="text-[#666]">Select a lesson to begin</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Navigation Back */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-5 py-2.5 text-sm bg-white border-2 border-[#1a1a1a] rounded-sm hover:bg-[#1a1a1a] hover:text-[#faf9f6] transition-colors text-[#1a1a1a] font-medium block"
        >
          ← Back to Game
        </Link>
      </div>
    </div>
  )
}
