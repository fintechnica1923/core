import { Routes, Route } from "react-router-dom"
import BlogList from "@/pages/BlogList"
import BlogPost from "@/pages/BlogPost"
import Course from "@/pages/Course"
import Consulting from "@/pages/Consulting"
import Essays from "@/pages/Essays"
import Media from "@/pages/Media"
import Hackathons from "@/pages/Hackathons"
import Navigation from "@/components/Navigation"

export default function App() {
  return (
    <div className="min-h-svh bg-background font-sans antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
      >
        Перейти к содержимому
      </a>
      <div className="py-10 sm:py-16">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/course" element={<Course />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/media" element={<Media />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
