import { SectionHeading, Stat } from "./shared";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#b8d56e]/30 blur-3xl" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBtpS7XOeygtCXbrie_QTsQ0yT_K9ulyObIJkM6MsTqd6plWqCj4jMGel3G3QJb-KYvYuJ3wAKR8A-TIe5U9vMzaeouSZh_REtUPuzBfDrrsw9pP8n5NUs0eZ2Vn7BgJw2ITxxSX2hs2-qt5NuoL4B_m6hqQ2TO_wfIjOl-42eV1Rv3cTezePnJy2VGHPNJ0GOyks_VblWe37MJE6atBZDWppYCpGAjjVVp_lE9s8R9LZCfyVnQb27QJN__NwF0VfowVr85F1ew"
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
