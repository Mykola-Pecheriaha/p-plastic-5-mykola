import BigBord from "@/components/BigBord/BigBord"
import Doctor from "@/components/Doctor/Doctor"
import SideBySideGallery from "@/components/SideBySideGallery/SideBySideGallery"
import BigBordFace from "@/components/BigBordFace/BigBordFace"
import BigBordBody from "@/components/BigBordBody/BigBordBody"
import BigClinic from "@/components/BigClinic/BigClinic"
import Testimonials from "@/components/Testimonials/Testimonials"
import ConsultationCTA from "@/components/ConsultationCTA/ConsultationCTA"

export default function Home() {
  return (
    <div>
      <BigBord backgroundImage="/images/bigbort/BigBort5.jpg" />
      <Doctor />
      <SideBySideGallery />
      <BigBordFace />
      <BigBordBody />
      <BigClinic />
      <Testimonials />
      <ConsultationCTA />
    </div>
  )
}
