import Image from 'next/image'
import Logo from './logo.png'

export const Aside = () => {
  return (
    <aside className="bg-darkGray h-full w-44 flex flex-col self-stretch items-center rounded-lg py-10 px-4">
      <Image src={Logo} alt="Logo Code Connect" className="size-auto" />
    </aside>
  )
}
