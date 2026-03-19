import { heroBadges } from "../static/constant";
import { ButtonLink } from "./shared";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9NPO_MCvlsAPAwsnmqphfZE2sfFJUtGLlF1WtxQ7TpvxblCkHVJVOymFUq_X6RthJKEpLuZ76LcrNvl4wSrOkf8A4sLNOBzO8d0m4ArfCaChhn3VbSbYOoVVNiiMpA6D7PlIhjHZle7sAJLMtCKnzgdaqv1NRYjFm62DkPs-dEKiNQIeMakyKgM2tupA3HKN37bpLiVjvnbbak-O-NUDrrO4D3NwBgAZxKeU7-QM8eexFQvfT1HCd-j_DYqRJvUC0Uxf0KjCPmA"
        alt="Aerial river view through dense green forest"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,18,0.18)_0%,rgba(8,34,18,0.12)_38%,rgba(247,243,216,0.92)_88%,#f7f3d8_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,rgba(247,243,216,0.15),#f7f3d8_72%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {heroBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-[#f1f5d5]/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#17351a] shadow-sm"
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
          <ButtonLink href="#contact" variant="primary" className="px-7 py-4 shadow-[0_12px_30px_rgba(18,63,29,0.3)]">
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