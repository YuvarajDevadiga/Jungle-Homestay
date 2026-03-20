import { SectionHeading, Stat } from "./shared";
import homeImg from '../assets/images/plantation.jpeg'
export function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-[#f7f3d8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#b8d56e]/30 blur-3xl" />
          <img
            src={homeImg}
            alt="Wooden eco cottage in the forest"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_55px_rgba(28,54,24,0.18)]"
          />
        </div>

        <div>
          <SectionHeading eyebrow="The experience" title={<>Where Nature Becomes<br />Your Host.</>} />
          <div className="mt-8 space-y-5 text-base leading-8 text-[#505a40]">
            <p>
              Located in Hadavalli, Bhatkal, Jungle Homestay Gandalki is designed as a quiet retreat with direct
              access to forest air, river views, and slower mornings.
            </p>
            <p>
              Wake to birdsong, spend the afternoon on the water, and end the day with homemade local food served
              close to the fire.
            </p>
          </div>
          <div className="mt-10 grid max-w-sm grid-cols-2 gap-6">
            <Stat value="100%" label="Organic food" />
            <Stat value="8+" label="Water activities" />
          </div>
        </div>
      </div>
    </section>
  )
}
