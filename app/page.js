import Header from "./components/Header";
import Image from "next/image";

import carte1 from "../public/carte1.png"
import carte2 from "../public/carte2.png"
import carte3 from "../public/carte3.png"
import carte4 from "../public/carte4.png"
import carte5 from "../public/carte5.png"
import companies from "../public/companies.png"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header></Header>
      <section className="text-center mt-24">
        <h1 className="text-[78px] leading-tight mb-6">Predictable <br/>
        growth starts here</h1>
        <p className="text-sm mb-24">Squaree helps users to go from Zero to Hero with Pockets flow’s simple platform that helps <br/>creators like you sell their digital products online.</p>
{/* animation arrêtée avec - devant animate */}
        <div className="flex justify-center gap-12 -animate-refine-slide relative transition-all hover:animation-pause">
            <div className="relative hover:scale-105 duration-300"><Image src={carte1} alt="carte 1"/></div>
            <div className="relative"><Image className="relative top-20 hover:scale-105 duration-300" src={carte2} alt="carte 2"/></div>
            <div className="relative"><div className="relative -top-5"><Image className="mb-12 hover:scale-105 duration-300" src={carte3} alt="carte 3"/><Image className="hover:scale-105 duration-300" src={carte4} alt="carte 4"/></div></div>
            <div className="relative hover:scale-105 duration-300"><Image className="relative top-40 -left-20" src={carte5} alt="carte 5"/></div>
        </div> 
      </section>

      <section className="text-center mt-48">
        <p className="text-xl text-black/50 my-12 ">We have the fast paced growing companies with us</p>
        <Image className="mx-auto" src={companies} alt="companies"/>
      </section>

      <section className="text-center mt-48">
      <h2 className="text-5xl leading-tight mb-6">Turn  your growth in to Squaree</h2>
        <p className="text-xl text-black/50 my-12 ">We have the fast paced growing companies with us</p>
        <Image className="mx-auto" src={companies} alt="companies"/>
      </section>

    </main>
  )
}
