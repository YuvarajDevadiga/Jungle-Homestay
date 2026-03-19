import { rooms } from "../static/constant";
import { SectionHeading } from "./shared";

export function RoomsSection() {
  return (
    <section id="rooms" className="rounded-t-[2.5rem] bg-[#efeacc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Limited availability" title="Our Private Suites" />
          <p className="max-w-md text-sm font-medium text-[#677054]">
            Only 3 premium rooms designed for intimacy and peace.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="overflow-hidden rounded-[1.75rem] border border-[#d9d5bc] bg-[#fbf8e8] shadow-[0_14px_28px_rgba(54,62,31,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(54,62,31,0.12)]"
            >
              <div className="relative">
                <img src={room.image} alt={room.name} className="h-64 w-full object-cover" />
                <div className="absolute right-4 top-4 rounded-full bg-[#123f1d] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {room.tag}
                </div>
              </div>
              <div className="space-y-6 p-6">
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-[#151b0d]">{room.name}</h3>
                <ul className="space-y-3 text-sm text-[#556048]">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#88ad39]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-full bg-[#e8e4c9] px-5 py-3 text-sm font-bold text-[#26331b] transition hover:bg-[#123f1d] hover:text-white">
                  Check Availability
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}