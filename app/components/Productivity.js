'use client'

import group1 from '../src/group 1.png'
import group2 from '../src/group 2.png'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Productivity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center gap-[100px] mt-32"
    >
      <div className="max-w-[580px] w-1/2">
        <h2 className="text-5xl leading-tight mb-4">
          Know your productivity by Squaree
        </h2>
        <p className="text-lg mb-12 w-4/5">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
      </div>
      <div className="max-w-[580px] h-[380px] w-1/2 flex justify-start">
        <Image className="max-h-[297px] " src={group1} alt="carte 1" />
        <Image
          className="relative -left-40 -bottom-60 max-h-[156px] "
          src={group2}
          alt="carte 2"
        />
      </div>
    </motion.section>
  )
}
