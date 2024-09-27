'use client'

import companies from '../src/companies.png'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Companies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      variants={variants}
      ref={ref}
      className="text-center mt-48"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-dmsans text-black/50 my-12 ">
        We have the fast paced growing companies with us
      </p>
      <Image className="mx-auto" src={companies} alt="companies" />
    </motion.section>
  )
}
