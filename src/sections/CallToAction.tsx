'use client'
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useRef<AnimationPlaybackControls>()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: '-50%' },
      { duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }
    )

    // animation.current.speed = 0.5
  }, [])

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5
      } else {
        animation.current.speed = 1
      }
    }
  }, [isHovered])
  return (
    <section className='py-24 relative'>
      <div className='overflow-x-clip p-4 flex'>
        <motion.div
          ref={scope}
          className='flex flex-none gap-16 text-7xl md:text-8xl font-medium pr-16 relative group'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className='flex items-center gap-16 group-hover:cursor-pointer'
            >
              <span className='text-lime-400 text-7xl'>&#10038;</span>
              <span className='group-hover:text-lime-400 transition duration-300'>
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
