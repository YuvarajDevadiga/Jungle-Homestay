import { useEffect, type MouseEvent } from 'react'
import { heroBadges } from "../static/constant";
import { ButtonLink } from "./shared";
import backgroundImg from '../assets/images/backgroundImage.jpg'

export function HeroSection() {
  useEffect(() => {
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.as = 'image'
    preloadLink.href = backgroundImg
    document.head.appendChild(preloadLink)

    const image = new Image()
    image.src = backgroundImg
    image.decode?.().catch(() => undefined)

    return () => {
      document.head.removeChild(preloadLink)
    }
  }, [])

  const scrollToCta = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const ctaSection = document.getElementById('cta-section')
    if (!ctaSection) return

    const navbarOffset = 110
    const targetY = ctaSection.getBoundingClientRect().top + window.scrollY - navbarOffset
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  return (
    <section className="relative isolate flex h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <img
        src={backgroundImg}
        alt="Aerial river view through dense green forest"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,18,0.24)_0%,rgba(8,34,18,0.12)_38%,rgba(8,34,18,0.08)_72%,rgba(8,34,18,0.18)_100%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {heroBadges.map((badge) => (
            <div
              key={badge.label}
               style={{ backgroundColor: badge.color }}
              className={`flex items-center gap-2 rounded-full border border-white/20  px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#17351a] shadow-sm`}
            >
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-none tracking-[-0.06em] text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-[5.6rem]">
          The Organic
          <br />
          <span className="text-[#dff5aa]">Sanctuary.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
          Experience the raw beauty of Gandalki, where the river meets the rainforest and quiet hospitality shapes the
          stay.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink
            href="#cta-section"
            onClick={scrollToCta}
            variant="primary"
            className="px-7 py-4 shadow-[0_12px_30px_rgba(18,63,29,0.3)]"
          >
            Book Your Stay
          </ButtonLink>
          <ButtonLink href="#activities" variant="secondary" className="px-7 py-4">
            Explore Activities
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
