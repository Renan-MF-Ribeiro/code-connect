import { Author } from '@models/avatar.model'
import Image from 'next/image'

export const Avatar = ({ author }: { author: Author }) => {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <Image
          src={author.avatar}
          alt={author.name}
          className="!relative rounded-full"
          width={32}
          height={32}
        />
      </li>
      <li className="flex flex-col">
        <a
          href={`/user/${author.username}`}
          className="text-sm font-semibold text-lightGray"
        >
          @{author.username}
        </a>
      </li>
    </ul>
  )
}
