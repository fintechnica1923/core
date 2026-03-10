import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getAllMedia } from "@/lib/media"
import YouTubeEmbed from "@/components/YouTubeEmbed"

const mediaPosts = getAllMedia()

export default function Media() {
  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">
      <div className="space-y-16">
        {mediaPosts.map((item) => (
          <article key={item.slug}>
            <div className="prose prose-invert max-w-none overflow-hidden break-words prose-a:break-all prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground/60 prose-img:rounded-xl prose-pre:overflow-x-auto">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="text-2xl font-medium leading-snug tracking-tight">{children}</h2>
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
                {item.content}
              </Markdown>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
