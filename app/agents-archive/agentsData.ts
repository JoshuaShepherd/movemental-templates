export type ArchivedAgent = {
  id: string
  name: string
  style: string
  content: string
  date: string
  year: number
  score: number
  type: string
  movement: string
  tags: string[]
  order: number
}

export const agentTypeOrder = [
  "Voice & Presence",
  "Ops & Systems",
  "Research & Advisory",
  "Formation & Coaching",
]

export const archivedAgents: ArchivedAgent[] = [
  {
    id: "agent-field-scout",
    name: "Field Scout • Neighborhood Intelligence",
    style: "Geo-aware signal gatherer with anomaly triage and incident journaling",
    content: "Missional situational awareness",
    date: "2025",
    year: 2025,
    score: 97,
    type: "Ops & Systems",
    movement: "Field Recon Console",
    tags: ["Geospatial", "Incident log", "Realtime feed"],
    order: 1,
  },
  {
    id: "agent-liturgist",
    name: "Voice Liturgist • Resonant Presence",
    style: "Realtime voice companion that scripts liturgies, harmonizes tone, and tracks sentiment",
    content: "Voice + ritual facilitation",
    date: "2025",
    year: 2025,
    score: 95,
    type: "Voice & Presence",
    movement: "Realtime Voice Orchestrator",
    tags: ["WebRTC", "Tone coach", "Presence"],
    order: 2,
  },
  {
    id: "agent-canonist",
    name: "Canonist • Movement Research Desk",
    style: "Scholarly agent that cross-references archives, citations, and decision memos",
    content: "Research + governance briefings",
    date: "2025",
    year: 2025,
    score: 96,
    type: "Research & Advisory",
    movement: "Scholarly Intelligence",
    tags: ["Archive", "Citations", "Briefings"],
    order: 3,
  },
]

export const archivedAgentMap = Object.fromEntries(archivedAgents.map((agent) => [agent.id, agent]))


