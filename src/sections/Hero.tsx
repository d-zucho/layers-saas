'use client'

import Button from '@/components/Button'
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import cursorYouImage from '@/assets/images/cursor-you.svg'
import Image from 'next/image'
import Pointer from '@/components/Pointer'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ])
  }, [])

  return (
    <section
      className={'py-24 overflow-x-clip'}
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className='container relative'>
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          ref={leftDesignScope}
          className={'absolute -left-32 top-16 hidden lg:block'}
          drag
          dragSnapToOrigin={true}
        >
          <Image
            src={designExample1Image}
            alt={'Design example 1'}
            draggable='false'
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className={'absolute left-56 top-96 hidden lg:block'}
        >
          <Pointer name={'Andrea'} />
        </motion.div>

        {/* right design */}
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightDesignScope}
          className={'absolute -right-64 -top-16 hidden lg:block'}
          drag
          dragSnapToOrigin={true}
        >
          <Image
            src={designExample2Image}
            alt={'Design example 2'}
            draggable='false'
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className={'absolute right-80 -top-4 hidden lg:block'}
        >
          <Pointer name={'Brian'} color={'red'} />
        </motion.div>
        {/* end right design */}
        <div className={'flex justify-center'}>
          <div
            className={
              'inline-flex py-1 px-3 bg-gradient-to-r' +
              ' from-purple-400 to-pink-400 rounded-full text-neutral-950' +
              ' font-semibold'
            }
          >
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1
          className={
            'text-6xl font-medium text-center mt-6 md:text-7xl' + ' lg:text-8xl'
          }
        >
          Impactful design, created effortlessly
        </h1>
        <p
          className={'text-center font-xl text-white/50 mt-8 max-w-2xl mx-auto'}
        >
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow
        </p>

        <form
          className={
            'flex justify-between border border-white/15' +
            ' rounded-full p-2' +
            ' mt-8 md:max-w-lg mx-auto overflow-clip'
          }
        >
          <input
            type='email'
            name='email'
            id='email'
            placeholder={'Enter your email'}
            className={
              'bg-transparent pl-4 focus:outline-none' + ' md:max-w-full w-full'
            }
          />

          <Button
            type='submit'
            size={'sm'}
            variant={'primary'}
            className={'whitespace-nowrap'}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  )
}
