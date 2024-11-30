import logoImage from '@/assets/images/logo.svg'
import { a } from 'framer-motion/client'
import Image from 'next/image'

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
]

export default function Footer() {
  return (
    <footer className='py-16'>
      <div className='container flex flex-col md:flex-row md:justify-between justify-center items-center gap-6'>
        <div>
          <Image src={logoImage} alt='Layers logo' />
        </div>
        <div>
          <nav className='flex gap-6'>
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className='text-white/50 text-sm'>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
