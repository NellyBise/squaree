'use client'

import ReviewCard from './ReviewCard'

import useMeasure from 'react-use-measure'
import {
  motion,
  controls,
  animate,
  easeIn,
  useMotionValue,
} from 'framer-motion'
import { useEffect, useState } from 'react'

import reviews from '../data/usersReview.json'

export default function Reviews() {
  let [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)

  const FAST_DURATION = 50
  const SLOW_DURATION = 1000000

  const [duration, setDuration] = useState(FAST_DURATION)
  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 20

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return controls.stop
  }, [xTranslation, width, duration, rerender, mustFinish])

  return (
    <section className="text-center mt-32 min-h-[900px]">
      <h2 className="text-5xl leading-tight mb-4">What Squaree users say</h2>
      <p className="text-lg mb-12 ">Here is how homely can help you</p>

      <motion.div
        className="absolute left-0 flex gap-10"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          {
            setMustFinish(true)
            setDuration(SLOW_DURATION)
          }
        }}
        onHoverEnd={() => {
          {
            setMustFinish(true)
            setDuration(FAST_DURATION)
          }
        }}
      >
        {[...reviews, ...reviews].map((review) => (
          <ReviewCard key={review.title} review={review} />
        ))}
      </motion.div>
      <motion.div
        className="absolute left-20 flex gap-10 mt-[300px]"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
        {[...reviews.slice(3), ...reviews, ...reviews.slice(0, 3)].map(
          (review, index) => (
            <ReviewCard key={`${review.title}-${index}`} review={review} />
          )
        )}
      </motion.div>
    </section>
  )
}
