import { notFound } from "next/navigation"
import styles from "./archive.module.css"

interface PageProps {
  params: Promise<{ id: string }>
}

// This is a placeholder - in a real implementation, you'd fetch the archived design
// from a database or file system based on the id
const archivedDesigns: Record<string, { name: string; component: React.ComponentType }> = {}

export default async function ArchiveDesignPage(props: PageProps) {
  const params = await props.params
  const design = archivedDesigns[params.id]

  if (!design) {
    notFound()
  }

  // Archived designs use CSS modules for scoped styling
  // Each archived design maintains its own isolated styles
  return (
    <div className={styles.archiveContainer}>
      <div className={styles.archiveContent}>
        {/* Archived design would be rendered here */}
        <h1>Archived Design: {design.name}</h1>
        <p>This design maintains its own scoped styles via CSS Modules.</p>
        <p>The global styles from globals.css do not affect this design.</p>
      </div>
    </div>
  )
}

