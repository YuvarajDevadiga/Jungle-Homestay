import { ButtonLink, ContactRow, MapPinIcon, SectionHeading } from "./shared";
const mapImages = import.meta.glob('../assets/images/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const mapUrl = 'https://maps.google.com/?q=Gandalki,Hadavalli,Bhatkal,Karnataka'
export function LocationSection() {
  return (
    <section id="location" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-[#efeacc] p-8 shadow-[0_18px_40px_rgba(54,62,31,0.08)]">
          <SectionHeading title="Find Us" />
          <p className="mt-6 text-sm leading-7 text-[#566148]">
            Gandalki, Hadavalli, Bhatkal,
            <br />
            Uttara Kannada, Karnataka - 581320
          </p>

          <div className="mt-8 space-y-5">
            <ContactRow label="Phone Number" value="+91 87627 02417" />
            <ContactRow label="Alternative Number" value="+91 94827 59907" />
          </div>

          <div id="contact" className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="tel:+918762702417" variant="primary">
              Call Now
            </ButtonLink>
            <ButtonLink href={mapUrl} variant="light">
              Get Directions
            </ButtonLink>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#f1e1bf] shadow-[0_18px_40px_rgba(54,62,31,0.08)]">
          <img
            src={mapImages['../assets/images/uk_map.png']}
            alt="Map illustration for Bhatkal region"
            className="h-full max-h-[480px] min-h-[320px] w-full object-contain object-center"
          />
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Jungle Homestay Gandalki in Google Maps"
            className="absolute left-[50%] bottom-[10%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#123f1d] text-white shadow-[0_12px_30px_rgba(18,63,29,0.35)] transition hover:scale-105"
          >
            <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#123f1d]/30" />
            <span className="relative">
              <MapPinIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}