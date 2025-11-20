"use client"

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
  onArchive: () => void
}

export default function DesignEvaluation({ style, content, onArchive }: Props) {
  // Evaluation criteria
  const criteria = [
    {
      name: "Design Style Fidelity",
      description: "How well does it implement the chosen style?",
      score: 85,
      notes: "Strong implementation of core characteristics. Typography hierarchy is clear, spacing is generous.",
    },
    {
      name: "Content Readability",
      description: "Is the content easy to read and understand?",
      score: 90,
      notes: "Excellent readability. Content leads as intended. Color contrast meets WCAG standards.",
    },
    {
      name: "Visual Hierarchy",
      description: "Is the information hierarchy clear?",
      score: 88,
      notes: "Clear hierarchy through typography size and spacing. User knows where to look first.",
    },
    {
      name: "Responsive Design",
      description: "Does it work well on all screen sizes?",
      score: 85,
      notes: "Good responsive behavior. Some refinements needed for very large screens.",
    },
    {
      name: "User Experience",
      description: "Is it intuitive and easy to use?",
      score: 87,
      notes: "Intuitive navigation. CTAs are clear. Interactions feel smooth and purposeful.",
    },
    {
      name: "Current Design Trends",
      description: "Does it feel modern and current?",
      score: 90,
      notes: "Feels very current. Implements 2024-2025 design trends effectively.",
    },
  ]

  const averageScore = Math.round(
    criteria.reduce((sum, c) => sum + c.score, 0) / criteria.length
  )

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Design Evaluation</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Style: {style.name} | Content: {content.title}
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{averageScore}%</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">Overall Score</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {criteria.map((criterion, idx) => (
          <div
            key={idx}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{criterion.name}</h4>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{criterion.score}%</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {criterion.description}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{criterion.notes}</p>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${criterion.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={onArchive}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Archive This Design
        </button>
        <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Request Revisions
        </button>
      </div>
    </div>
  )
}

