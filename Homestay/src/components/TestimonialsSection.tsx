import { testimonials } from "../static/constant";
import { SectionHeading, Star } from "./shared";

export function TestimonialsSection() {
  return (
    <section className="bg-[#efeacc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" title="Guest Stories" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_12px_30px_rgba(54,62,31,0.08)]"
            >
              <div className="mb-4 flex gap-1 text-[#123f1d]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`${testimonial.name}-${starIndex}`}
                    filled={index !== 1 || starIndex < 4}
                    half={index === 1 && starIndex === 4}
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-7 text-[#566148]">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dff5aa] text-sm font-bold text-[#123f1d]">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-[#18210d]">{testimonial.name}</h3>
                  <p className="text-xs text-[#667157]">{testimonial.stayed}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}