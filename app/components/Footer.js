import Image from 'next/image'
import logo from '../../public/logo-squaree.png'

export default function Footer() {
  return (
    <footer className="bg-zinc-50 w-full flex justify-center py-24 mt-20">
      <div className="max-w-[186px] flex flex-col gap-6">
        <p className="flex items-center gap-2 font-bold">
          <Image src={logo} alt="Squaree logo" width={38} height={38} />
          Squaree
        </p>
        <p className="text-sm">What matters is productivity with fun culture</p>
      </div>
      <ul className="flex flex-col gap-4 mx-[140px]">
        <li className="font-bold">About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Story</li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="font-bold">Company</li>
        <li>Product</li>
        <li>Press</li>
        <li>More</li>
      </ul>
      <div className="self-center bg-white border-[1px] h-max border-neutral-200 rounded-xl p-[26px] flex items-center gap-8 ml-[88px]">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold">Follow us on Twitter</p>
          <p className="text-sm text-zinc-400">notion.com</p>
        </div>
        <button className=" py-4 px-6 bg-amber-400 rounded-xl text-white  hover:shadow-def hover:shadow-amber-200 ease-in-out duration-500">
          Follow
        </button>
      </div>
    </footer>
  )
}
