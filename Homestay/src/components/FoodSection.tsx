import { meals } from "../static/constant";
import { SectionHeading } from "./shared";
import localFoodImg from '../assets/images/localFood.png';

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
            src={localFoodImg}
            alt="Traditional local meal plated elegantly"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[0_24px_55px_rgba(28,54,24,0.18)]"
          />
          <div className="absolute top-3 lg:border-3  left-3 max-w-[78%] h-fit rounded-[1.25rem] border border-white/50 bg-[#fffaf0]/84 p-4 shadow-xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:max-w-xs sm:rounded-[1.5rem] sm:p-5">
            <div className="mb-2 hidden text-base text-[#123f1d] sm:mb-3 sm:block sm:text-lg">*</div>
            <p className="font-display text-lg font-bold italic tracking-[-0.03em] text-[#18210d] sm:text-xl">
              "The best homemade food I have had in years. Truly authentic."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
