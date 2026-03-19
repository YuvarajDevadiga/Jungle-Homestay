import { galleryImages } from "../static/constant";
import { SectionHeading } from "./shared";

export function GallerySection() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" title="Captured Moments" />
        <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {galleryImages.map((item) => (
            <div key={item.title} className={`${item.className} group relative overflow-hidden rounded-[1.35rem]`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}