import { ButtonLink } from "./shared";

export function CtaSection() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-[2.25rem] bg-[#0f5b92] px-6 py-14 text-center text-white shadow-[0_22px_50px_rgba(15,91,146,0.22)] sm:px-10">
        <span className="inline-flex rounded-full bg-[#ff6f61] px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em]">
          Limited availability
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
          Only 3 Rooms Exist.
          <br />
          Secure Your Sanctuary Today.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/918762702417"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0f5b92] transition hover:-translate-y-0.5"
          >
            WhatsApp Booking
          </a>
          <ButtonLink href="tel:+918762702417" variant="primary" className="px-7 py-3">
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}