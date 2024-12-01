import React from 'react'
import Button from './Button'

interface MobileNavProps {
  className?: string
  navLinks: { label: string; href: string }[]
}

const MobileNav = ({ className, navLinks }: MobileNavProps) => {
  return (
    <div className={className}>
      <nav className='flex flex-col items-center gap-4 py-4'>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className=''>
            {link.label}
          </a>
        ))}
      </nav>
      <div className='flex flex-col items-center gap-4 py-4'>
        <Button variant='secondary'>Log In</Button>
        <Button variant='primary'>Sign Up</Button>
      </div>
    </div>
  )
}

export default MobileNav
