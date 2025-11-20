import { notFound } from "next/navigation"
import DesignImplementation from "@/components/DesignImplementation"
import { designStyles, contentPrompts } from "@/lib/designData"

interface PageProps {
  params: Promise<{ style: string }>
  searchParams: Promise<{ content?: string }>
}

export default async function DesignPage(props: PageProps) {
  const params = await props.params
  const searchParams = await props.searchParams
  
  const style = designStyles.find((s) => s.id === params.style)
  const contentId = searchParams.content || "creator-platform"
  const content = contentPrompts.find((c) => c.id === contentId)

  if (!style || !content) {
    notFound()
  }

  return <DesignImplementation style={style} content={content} />
}

