'use client'
import graph from '../src/graph.png'
import Number from './Number'

import Image from 'next/image'
import { motion, useInView, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [displayCount, setDisplayCount] = useState(0)
  const springCount = useSpring(0, { bounce: 0, duration: 1000 })

  springCount.on('change', (value) => {
    setDisplayCount(Math.round(value))
  })

  useEffect(() => {
    isInView ? springCount.set(200) : ''
  }),
    [isInView, springCount]

  return (
    <motion.section
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="text-center mt-32"
    >
      <h2 className="text-5xl leading-tight mb-4">
        Turn your growth in to Squaree
      </h2>
      <p className="text-lg mb-12 ">
        The expectation that productivity should always lead to tangible results
        or accomplishments & <br />
        notion that certain types of work or activities are more valuable or
        productive than others.
      </p>
      <Image className="mx-auto" src={graph} alt="graphic" />
      <article className="flex justify-center">
        <div className="max-w-40 text-center">
          <Number count={200} />
          <p className="">Increase in new pipeline generated</p>
        </div>
        <div className="max-w-40 text-center mx-[118px]">
          <Number count={70} />
          <p className="">Increase in form workforce</p>
        </div>
        <div className="max-w-40 text-center">
          <Number count={40} />
          <p className="max-w-24 text-center">Decrease in cost per lead</p>
        </div>
      </article>
      <button className="group relative my-12 rounded-full py-2 px-6 bg-amber-400 text-white font-bold font-inter outline -outline-offset-1 hover:outline-offset-4 outline-amber-400 hover:shadow-def ease-in-out duration-500 hover:shadow-amber-200 hover:outline-amber-400/0 focus:outline-none">
        Explore our way
        <span className="moving-span inline-block transition-transform duration-200 transform group-hover:translate-x-2">
          &rarr;
        </span>
      </button>
    </motion.section>
  )
}
