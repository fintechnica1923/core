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
      <div className="py-10 sm:py-16">
        <Navigation />
        <main>
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
