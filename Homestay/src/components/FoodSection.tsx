import { meals } from "../static/constant";
import { SectionHeading } from "./shared";

export function FoodSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Homemade delicacies" title="Included Local Flavors" />
          <div className="mt-8 space-y-4">
            {meals.map((meal) => (
              <div key={meal.number} className="flex gap-5 rounded-[1.5rem] bg-[#efeacc] p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#123f1d] text-sm font-bold text-white">
                  {meal.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#18210d]">{meal.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#566148]">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjBWt0EtU9aQSV9LUcwlZN0-NWmeKGxgcNO69_-LAkiA2DvcyN5RrHk1oRk1CFM5CrjWtMe_3hZuvqnrtQwRfHUFxoZO3RGxYkindonDJ4EN0_rE39pNqiR9KhfUrVf7sp65Hd0PGAm5B0yKW0SrIM3XZiEy-q2IqblJUA-rQDqEnZWiInHLJYVWpDAfXD1Za0NUckr2VgQXF0ji6GudAR_ls4DaIab18wlmCJUlNwHTxQcqCdzgluKuLOyYIB0n6p_gvYJi0YLw"
            alt="Traditional local meal plated elegantly"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[0_24px_55px_rgba(28,54,24,0.18)]"
          />
          <div className="absolute bottom-5 left-5 max-w-xs rounded-[1.5rem] border border-white/50 bg-[#fffaf0]/88 p-5 shadow-xl backdrop-blur-md">
            <div className="mb-3 text-lg text-[#123f1d]">✦</div>
            <p className="font-display text-xl font-bold italic tracking-[-0.03em] text-[#18210d]">
              "The best homemade food I have had in years. Truly authentic."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}