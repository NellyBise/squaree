'use client'
import Card from './Card'
import data from '../data/apps.json'
const firstRow = [null, ...data.slice(0, 3), null]
const secondRow = [null, ...data.slice(3), null]

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Apps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      variants={variants}
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="flex justify-center gap-[100px] mt-32"
    >
      <div className="">
        <div className="flex gap-10 justify-center mb-10">
          {firstRow.map((item, index) => (
            <Card key={index} name={item?.name} image={item?.img} />
          ))}
        </div>
        <div className="flex gap-10 justify-center">
          {secondRow.map((item, index) => (
            <Card key={index + 6} name={item?.name} image={item?.img} />
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <h2 className="text-5xl leading-tight mb-4 w-4/5">
          Seamless integration with best apps
        </h2>
        <p className="text-lg mb-12">
          What ever you use, we integrate with the best of best
        </p>
      </div>
    </motion.section>
  )
}
