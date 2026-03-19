import { AboutSection } from "./AboutSection"
import { ActivitiesSection } from "./ActivitiesSection"
import { CtaSection } from "./CtaSection"
import { FoodSection } from "./FoodSection"
import { GallerySection } from "./GallerySection"
import { HeroSection } from "./HeroSection"
import { LocationSection } from "./LocationSection"
import { RoomsSection } from "./RoomsSection"
import { TestimonialsSection } from "./TestimonialsSection"

const HomepageSections = () => {
  return (
          <main id="top">
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <FoodSection />
        <ActivitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <CtaSection />
      </main>
  )
}

export default HomepageSections