import { Author } from './avatar.model'

export type Post = {
  id: number
  cover: string
  title: string
  slug: string
  body: string
  markdown: string
  author: Author
}
