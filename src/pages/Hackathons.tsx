import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rawPosts from "virtual:hackathon-posts"
import YouTubeEmbed from "@/components/YouTubeEmbed"

function slugify(name: string) {
  return encodeURIComponent(name)
}

function extractExcerpt(content: string, maxLength = 160) {
  const text = content
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/[#*_`~>-]/g, "")
    .replace(/\n+/g, " ")
    .trim()
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text
}

const posts = (rawPosts as { fileName: string; content: string }[]).map((r) => ({
  slug: slugify(r.fileName),
  title: r.fileName,
  content: r.content,
  excerpt: extractExcerpt(r.content),
}))

export default function Hackathons() {
  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">
      <h2 className="mb-8 text-2xl font-medium leading-snug tracking-tight">
        Хакатоны
      </h2>
      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug}>
            <div className="prose prose-invert max-w-none overflow-hidden break-words prose-a:break-all prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground/60 prose-img:rounded-xl prose-pre:overflow-x-auto">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt, ...props }) => (
                    <img src={src} alt={alt ?? ""} loading="lazy" {...props} />
                  ),
                  a: ({ href, children, ...props }) => (
                    <YouTubeEmbed href={href} {...props}>
                      {children}
                    </YouTubeEmbed>
                  ),
                }}
              >
                {post.content}
              </Markdown>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
