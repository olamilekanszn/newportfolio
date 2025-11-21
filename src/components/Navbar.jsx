import { useState } from 'react'
import { navigationLinks } from '../data/content'
import { HiDownload } from "react-icons/hi";

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-slate-300 transition hover:text-white"
  >
    {label}
  </a>
)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="https://drive.google.com/file/d/1NRDOtLueZR4oUjFojnxbt_JnoKdXAeT0/view?usp=drive_link"
          className="text-base font-semibold text-white tracking-tight sm:text-lg inline-flex items-center gap-2"
        >
          <span>Download CV</span>
          <HiDownload className="h-6 w-6" />
        </a>
        <nav className="hidden items-center gap-6 md:gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.id} href={`#${link.id}`} label={link.label} />
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white sm:h-10 sm:w-10"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:gap-4 sm:px-6">
            {navigationLinks.map((link) => (
              <NavLink key={link.id} href={`#${link.id}`} label={link.label} onClick={closeMenu} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

