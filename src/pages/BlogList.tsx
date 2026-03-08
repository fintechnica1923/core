import { useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Volume2 } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useSpeech } from "@/hooks/use-speech"
import YouTubeEmbed from "@/components/YouTubeEmbed"
import AudioWaveform from "@/components/AudioWaveform"

const posts = getAllPosts()

export default function BlogList() {
  const [search, setSearch] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [showAllTags, setShowAllTags] = useState(false)
  const { speakingSlug, speak } = useSpeech()

  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort()

  const filtered = posts.filter((post) => {
    const matchesSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesTag = !activeTag || post.tags.includes(activeTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">

      <h1 className="sr-only">Лента</h1>

      <label htmlFor="blog-search" className="sr-only">Поиск по публикациям</label>
      <Input
        id="blog-search"
        placeholder="Поиск…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 rounded-full border-border/60 bg-transparent px-6 py-3 text-base"
      />

      {allTags.length > 0 && (
        <div role="group" aria-label="Фильтр по тегам" className="mb-12 flex flex-wrap gap-2">
          <Badge
            render={<button type="button" />}
            variant={activeTag === null ? "default" : "secondary"}
            className="cursor-pointer rounded-full px-3 py-1 text-xs"
            aria-pressed={activeTag === null}
            onClick={() => setActiveTag(null)}
          >
            Все
          </Badge>
          {(showAllTags ? allTags : allTags.slice(0, 14)).map((tag) => (
            <Badge
              key={tag}
              render={<button type="button" />}
              variant={activeTag === tag ? "default" : "secondary"}
              className="cursor-pointer rounded-full px-3 py-1 text-xs"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              #{tag}
            </Badge>
          ))}
          {!showAllTags && allTags.length > 14 && (
            <Badge
              render={<button type="button" />}
              variant="secondary"
              className="cursor-pointer rounded-full px-3 py-1 text-xs"
              onClick={() => setShowAllTags(true)}
            >
              ещё
            </Badge>
          )}
        </div>
      )}

      <div className="space-y-16">
        {filtered.map((post) => (
          <article key={post.slug}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <h2 className="text-2xl font-medium leading-snug tracking-tight">
                {post.title}
              </h2>
              <Button
                variant="ghost"
                className="mt-1 h-auto shrink-0 px-2 py-1"
                onClick={() => speak(post.slug, post.title + ". " + post.content)}
                title={speakingSlug === post.slug ? "Стоп" : "Озвучить"}
              >
                {speakingSlug === post.slug ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Стоп
                    </span>
                    <AudioWaveform isPlaying={true} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Слушать
                    </span>
                    <Volume2 className="size-3.5" />
                  </div>
                )}
              </Button>
            </div>
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-muted-foreground text-xs uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <Separator className="mb-6" />
            <div className="prose prose-invert max-w-none overflow-hidden break-words prose-a:break-all prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground/60 prose-img:rounded-xl prose-pre:overflow-x-auto">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt, ...props }) => (
                    <img
                      src={src}
                      alt={alt ?? ""}
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
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground py-12 text-center text-lg" role="status">
            Ничего не найдено
          </p>
        )}
      </div>
    </div>
  )
}
