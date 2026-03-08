import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getAllEssays } from "@/lib/essays"
import { Separator } from "@/components/ui/separator"
import YouTubeEmbed from "@/components/YouTubeEmbed"

const essays = getAllEssays()

export default function Essays() {
  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">
      <div className="space-y-16">
        {essays.map((essay) => (
          <article key={essay.slug}>
            <h2 className="mb-3 text-2xl font-medium leading-snug tracking-tight">
              {essay.title}
            </h2>
            <Separator className="mb-6" />
            <div className="prose prose-invert max-w-none overflow-hidden break-words prose-a:break-all prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground/60 prose-img:rounded-xl prose-pre:overflow-x-auto">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="!text-2xl !font-semibold">{children}</h2>
                  ),
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
                {essay.content}
              </Markdown>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
