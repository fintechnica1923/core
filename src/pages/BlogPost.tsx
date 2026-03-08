import { useParams, Link } from "react-router-dom"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostBySlug } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import YouTubeEmbed from "@/components/YouTubeEmbed"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-lg">Пост не найден</p>
        <Link to="/" className={cn(buttonVariants({ variant: "outline" }))}>← Назад</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">{post.title}</h1>

      {post.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>
      )}

      <Separator className="mb-8" />

      <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-a:underline">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt, ...props }) => (
              <img
                src={src}
                alt={alt ?? ""}
                className="my-4 max-w-full rounded-lg"
                loading="lazy"
                {...props}
              />
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
      </article>
    </div>
  )
}
