import { activities } from "../static/constant";
import { SectionHeading } from "./shared";

const activityIcons = import.meta.glob('../assets/icons/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function ActivitiesSection() {
  return (
    <section id="activities" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#04511d] px-5 py-14 text-white shadow-[0_22px_45px_rgba(4,81,29,0.2)] sm:px-8">
        <div className="relative">
          <div className="absolute -right-32 -top-32 h-56 w-56 rounded-full bg-white/6" />
          <div className="absolute -bottom-32 -left-32 h-56 w-56 rounded-full bg-white/6" />
          <div className="relative">
            <SectionHeading
              textColor="white"
              align="center"
              title="Adventure Awaits"
              description="From river thrills to forest stillness, there is something here for every kind of weekend."
            />
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {activities.map((activity) => (
                <div
                  key={activity.label}
                  className="rounded-[1.35rem] border border-white/8 bg-white/10 p-6 text-center backdrop-blur-sm transition hover:bg-white/16"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center">
                    <img
                      src={activityIcons[`../assets/icons/${activity.img}.png`]}
                      alt={activity.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold">{activity.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}