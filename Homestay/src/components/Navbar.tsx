import type { MouseEvent } from 'react'
import { navLinks } from "../static/constant";
import { ButtonLink } from "./shared";

export function Navbar() {
  const scrollToCta = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const ctaSection = document.getElementById('cta-section')
    if (!ctaSection) return

    const navbarOffset = 110
    const targetY = ctaSection.getBoundingClientRect().top + window.scrollY - navbarOffset
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-[#f6f0d4]/85 px-5 py-3 shadow-[0_10px_35px_rgba(34,60,22,0.12)] backdrop-blur-xl">
        <a href="#top" className="font-display text-sm font-extrabold tracking-tight text-[#16331b] md:text-base">
          Jungle Homestay Gandalki
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-[#2d4720]/80 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-[#16331b]">
              {link}
            </a>
          ))}
        </div>
        <ButtonLink href="#cta-section" onClick={scrollToCta} variant="primary" className="px-4 py-2 text-xs md:px-5">
          Book Now
        </ButtonLink>
      </nav>
    </div>
  )
}
