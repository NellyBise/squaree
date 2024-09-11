
import Image from "next/image"
import logo from "../../public/logo-squaree.png"

export default function Header(){
    return(
        <header className="mx-auto my-6 h-[75px] px-6 flex justify-between items-center rounded-2xl shadow-xl max-w-[1116px]">
            <p className="flex items-center"><Image className="dark:invert"
          src={logo}
          alt="Squaree logo"
          width={38}
          height={38} /> Squaree</p>
          <nav>
            <ul  className="flex">
                <li> Features</li>
                <li> Resources</li>
                <li> Company</li>
                <li> Contact</li>
                <li> Sales</li>
            </ul>
          </nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
        </header>
    )
}