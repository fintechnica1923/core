import { Link, useLocation } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/components/Logo"

export default function Navigation() {
  const location = useLocation()
  const path = location.pathname

  const isCourse = path === "/" || path.startsWith("/course")
  const isBlog = path.startsWith("/blog")
  const isEssays = path.startsWith("/essays")
  const isMedia = path.startsWith("/media")
  const isHackathons = path.startsWith("/hackathons")
  return (
    <header className="mb-4">
      <div className="mx-auto max-w-[680px] px-4 sm:px-6 flex flex-col items-center gap-6">
      <Link to="/" className="hover:opacity-80 transition-opacity">
        <Logo className="h-6 w-auto text-foreground" />
      </Link>
      <nav aria-label="Основная навигация" className="flex items-center gap-1 rounded-full border bg-muted/50 p-1">
        <Link
          to="/"
          aria-current={isCourse ? "page" : undefined}
          className={cn(
            buttonVariants({ variant: isCourse ? "secondary" : "ghost", size: "lg" }),
            "rounded-full",
            isCourse && "shadow-sm",
            !isCourse && "text-muted-foreground hover:text-foreground"
          )}
        >
          Курс
        </Link>
        <Link
          to="/blog"
          aria-current={isBlog ? "page" : undefined}
          className={cn(
            buttonVariants({ variant: isBlog ? "secondary" : "ghost", size: "lg" }),
            "rounded-full",
            isBlog && "shadow-sm",
            !isBlog && "text-muted-foreground hover:text-foreground"
          )}
        >
          Лента
        </Link>
        <Link
          to="/essays"
          aria-current={isEssays ? "page" : undefined}
          className={cn(
            buttonVariants({ variant: isEssays ? "secondary" : "ghost", size: "lg" }),
            "rounded-full",
            isEssays && "shadow-sm",
            !isEssays && "text-muted-foreground hover:text-foreground"
          )}
        >
          Эссе
        </Link>
        <Link
          to="/media"
          aria-current={isMedia ? "page" : undefined}
          className={cn(
            buttonVariants({ variant: isMedia ? "secondary" : "ghost", size: "lg" }),
            "rounded-full",
            isMedia && "shadow-sm",
            !isMedia && "text-muted-foreground hover:text-foreground"
          )}
        >
          Медиа
        </Link>
        <Link
          to="/hackathons"
          aria-current={isHackathons ? "page" : undefined}
          className={cn(
            buttonVariants({ variant: isHackathons ? "secondary" : "ghost", size: "lg" }),
            "rounded-full",
            isHackathons && "shadow-sm",
            !isHackathons && "text-muted-foreground hover:text-foreground"
          )}
        >
          Хакатоны
        </Link>
      </nav>
      </div>
    </header>
  )
}
