import Image from 'next/image'
import { Post } from '@models/post.model'
import { Avatar } from '../Avatar'

export const CardPost = ({ post }: { post: Post }) => {
  return (
    <article className="bg-darkGray rounded-lg shadow-md w-[486px] ">
      <header className="flex relative items-center rounded-t-lg w-full h-[181px] mb-4 p-6 bg-mediumGray justify-center">
        <span className="relative flex items-center justify-center size-full">
          <Image
            src={post.cover}
            alt="Post Image"
            className="rounded-md mb-4 relative object-cover drop-shadow-custom-shadow"
            fill={true}
            loading="lazy"
            quality={100}
          />
        </span>
      </header>
      <section className="px-6 pb-6">
        <h2 className="text-2xl font-bold mb-4 text-lightGray">{post.title}</h2>
        <p className="text-lightGray mb-4">{post.body}</p>
      </section>
      <footer className="flex items-center justify-end p-4">
        <Avatar author={post.author} />
      </footer>
    </article>
  )
}
