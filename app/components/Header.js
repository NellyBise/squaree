import Image from 'next/image'
import logo from '../../public/logo-squaree.png'
import arrow from '../src/arrow.png'

export default function Header() {
  return (
    <header className="mx-auto my-6 h-[75px] px-6 flex justify-between items-center rounded-2xl shadow-header max-w-[1116px]">
      <p className="flex items-center gap-2">
        <Image src={logo} alt="Squaree logo" width={38} height={38} />
        Squaree
      </p>
      <nav>
        <ul className="flex gap-8 ">
          <li className="flex gap-2 items-center hover:cursor-pointer">
            Features
            <Image src={arrow} alt="arrow" width={9} height={9} />
          </li>
          <li className="flex gap-2 items-center hover:cursor-pointer">
            {' '}
            Resources
            <Image src={arrow} alt="arrow" width={9} height={9} />
          </li>
          <li className="flex gap-2 items-center hover:cursor-pointer">
            {' '}
            Company
            <Image src={arrow} alt="arrow" width={9} height={9} />
          </li>
          <li className="flex gap-2 items-center hover:cursor-pointer">
            {' '}
            Contact
            <Image src={arrow} alt="arrow" width={9} height={9} />
          </li>
          <li className="hover:cursor-pointer"> Sales</li>
        </ul>
      </nav>
      <svg
        className="hover:cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
        />
      </svg>
    </header>
  )
}
