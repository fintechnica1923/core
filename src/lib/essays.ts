import rawPosts from "virtual:essay-posts"

export interface Essay {
  slug: string
  title: string
  content: string
  tags: string[]
  excerpt: string
}

function slugify(name: string): string {
  return encodeURIComponent(name)
}

function parseTags(content: string): { tags: string[]; cleanContent: string } {
  const tagRegex = /#(\w[\w-]*)/g
  const lines = content.trim().split("\n")
  const lastLine = lines[lines.length - 1] ?? ""
  const tags: string[] = []
  let match: RegExpExecArray | null
  while ((match = tagRegex.exec(lastLine)) !== null) {
    tags.push(match[1])
  }
  const cleanContent =
    tags.length > 0 ? lines.slice(0, -1).join("\n").trim() : content
  return { tags: [...new Set(tags)], cleanContent }
}

function extractExcerpt(content: string, maxLength = 160): string {
  const text = content
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/[#*_`~>-]/g, "")
    .replace(/\n+/g, " ")
    .trim()
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text
}

const essays: Essay[] = (rawPosts as { fileName: string; content: string }[])
  .map((raw) => {
    const { tags, cleanContent } = parseTags(raw.content)
    return {
      slug: slugify(raw.fileName),
      title: raw.fileName,
      content: cleanContent,
      tags,
      excerpt: extractExcerpt(cleanContent),
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

export function getAllEssays(): Essay[] {
  return essays
}

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug)
}
