import type { MouseEvent, ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  textColor?:string
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
  target?: string
  rel?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  textColor='black',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : ''}>
      {eyebrow ? (
        <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#607126]">{eyebrow}</span>
      ) : null}
      <h2
        className={`mt-4 font-display text-4xl font-extrabold tracking-[-0.05em] text-[${textColor}] sm:text-5xl ${
          isCenter ? '' : 'max-w-xl'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-7 ${isCenter ? 'text-[#d8efc8]' : 'text-[#677054]'}`}>{description}</p>
      ) : null}
    </div>
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  const variants = {
    primary: 'bg-[#123f1d] text-white hover:bg-[#0e3317]',
    secondary: 'border border-white/25 bg-white/14 text-white backdrop-blur-md hover:bg-white/22',
    light: 'border border-[#123f1d]/15 bg-white text-[#123f1d] hover:border-[#123f1d]/35',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`rounded-full px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold tracking-[-0.05em] text-[#123f1d]">{value}</div>
      <div className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#586347]">{label}</div>
    </div>
  )
}

export function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123f1d]/10 text-[#123f1d]">
        <PhoneIcon />
      </div>
      <div>
        <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7a8369]">{label}</div>
        <div className="mt-1 text-lg font-bold text-[#18210d]">{value}</div>
      </div>
    </div>
  )
}

export function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.3 19.3 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.8L7.1 10.5a16 16 0 0 0 6.4 6.4l1.9-1.9a2 2 0 0 1 1.8-.6l3.1.5A2 2 0 0 1 22 16.9Z" />
    </svg>
  )
}

export function MapPinIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Star({ filled, half }: { filled: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="m12 3.8 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z"
          fill="url(#half-star)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} aria-hidden="true">
      <path
        d="m12 3.8 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
