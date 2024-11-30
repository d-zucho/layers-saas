'use client'
import { twJoin, twMerge } from 'tailwind-merge'

interface HamburgerProps {
  className?: string
  isOpen: boolean
  handleClick: () => void
}

const Hamburger = ({ className, isOpen, handleClick }: HamburgerProps) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={twJoin(
          'feather feather-menu md:hidden hover:cursor-pointer',
          className
        )}
        onClick={handleClick}
      >
        {/* line 1 */}
        <line
          x1='3'
          y1='6'
          x2='21'
          y2='6'
          className={twMerge(
            'origin-left transition',
            isOpen && 'rotate-45 -translate-y-1'
          )}
        ></line>
        <line
          x1='3'
          y1='12'
          x2='21'
          y2='12'
          className={twMerge('transition', isOpen && 'opacity-0')}
        ></line>
        {/* line 3 */}
        <line
          x1='3'
          y1='18'
          x2='21'
          y2='18'
          className={twMerge(
            'origin-left transition',
            isOpen && '-rotate-45 translate-y-1'
          )}
        ></line>
      </svg>
    </>
  )
}

export default Hamburger
