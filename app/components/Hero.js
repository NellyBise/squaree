import carte1 from '../src/carte1.png'
import carte2 from '../src/carte2.png'
import carte3 from '../src/carte3.png'
import carte4 from '../src/carte4.png'
import carte5 from '../src/carte5.png'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="text-center mt-24">
      <h1 className="text-[78px] leading-tight mb-6">
        Predictable <br />
        growth starts here
      </h1>
      <p className="text-sm mb-24">
        Squaree helps users to go from Zero to Hero with Pockets flow’s simple
        platform that helps <br />
        creators like you sell their digital products online.
      </p>

      <div className="flex justify-center pl-6 flex-nowrap gap-12 relative">
        <div className=" animate-scaleup delay-1000ms">
          <Image src={carte1} alt="carte 1" />
        </div>
        <div className="animate-scaleup">
          <Image className="relative top-20" src={carte2} alt="carte 2" />
        </div>
        <div className="">
          <div className="relative -top-5">
            <Image
              className="mb-12 animate-scaleup delay-4000ms"
              src={carte3}
              alt="carte 3"
            />
            <Image
              className="animate-scaleup delay-2000ms"
              src={carte4}
              alt="carte 4"
            />
          </div>
        </div>
        <div className="relative animate-scaleup delay-3000ms">
          <Image className="relative top-40 -ml-5" src={carte5} alt="carte 5" />
        </div>
      </div>
    </section>
  )
}
