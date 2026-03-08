import fs from "fs"
import path from "path"
import type { Plugin } from "vite"

export default function blogPlugin(blogDir: string, virtualModuleId = "virtual:blog-posts"): Plugin {
  const RESOLVED_ID = "\0" + virtualModuleId
  return {
    name: "vite-plugin-blog",
    resolveId(id) {
      if (id === virtualModuleId) return RESOLVED_ID
    },
    load(id) {
      if (id !== RESOLVED_ID) return
      const dir = path.resolve(blogDir)
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
      const posts = files.map((file) => {
        const content = fs.readFileSync(path.join(dir, file), "utf-8")
        return { fileName: file.replace(/\.md$/, ""), content }
      })
      return `export default ${JSON.stringify(posts)};`
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".md") && file.includes(path.resolve(blogDir))) {
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          return [mod]
        }
      }
    },
  }
}
