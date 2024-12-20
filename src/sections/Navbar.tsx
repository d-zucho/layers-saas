'use client'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'
import Button from '@/components/Button'
import Link from 'next/link'
import { useState } from 'react'
import Hamburger from '@/components/Hamburger'
import MobileNav from '@/components/MobileNav'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    console.log('clicked!')
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <section className={'p-2 px-4 lg:px-8 fixed w-full z-50'}>
        <div className={'container max-w-5xl'}>
          <div className='border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/50 backdrop-blur'>
            <div
              className='grid grid-cols-2 lg:grid-cols-3  p-2 px-4
                      md:px-2 items-center'
            >
              <div>
                <Image
                  src={logoImage}
                  alt={'Layers logo'}
                  className={'h-9 md:h-auto w-auto'}
                />
              </div>
              <div className={'hidden lg:flex justify-center items-center'}>
                <nav className={'flex gap-6 font-medium'}>
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className={'flex justify-end items-center gap-4'}>
                <Hamburger isOpen={isOpen} handleClick={handleClick} />
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='feather feather-menu md:hidden'
                >
                  <line x1='3' y1='12' x2='21' y2='12'></line>
                  <line x1='3' y1='6' x2='21' y2='6'></line>
                  <line x1='3' y1='18' x2='21' y2='18'></line>
                </svg> */}
                <Button variant={'secondary'} className={'hidden md:inline'}>
                  Log In
                </Button>
                <Button variant={'primary'} className={'hidden md:inline'}>
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='overflow-hidden'
                >
                  <MobileNav navLinks={navLinks} className='overflow-hidden' />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className='pb-[60px] md:pb-[90px] lg:pb-[120px]' />
    </>
  )
}
