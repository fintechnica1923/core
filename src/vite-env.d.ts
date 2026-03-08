/// <reference types="vite/client" />

declare module "*.md" {
  const content: string
  export default content
}

declare module "virtual:blog-posts" {
  const posts: { fileName: string; content: string }[]
  export default posts
}

declare module "virtual:essay-posts" {
  const posts: { fileName: string; content: string }[]
  export default posts
}

declare module "virtual:media-posts" {
  const posts: { fileName: string; content: string }[]
  export default posts
}

declare module "virtual:hackathon-posts" {
  const posts: { fileName: string; content: string }[]
  export default posts
}
