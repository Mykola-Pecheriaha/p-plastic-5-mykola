import BigBord from "@/components/BigBord/BigBord"
import Doctor from "@/components/Doctor/Doctor"
import SideBySideGallery from "@/components/SideBySideGallery/SideBySideGallery"
import BigBordFace from "@/components/BigBordFace/BigBordFace"
import BigBordBody from "@/components/BigBordBody/BigBordBody"
import BigClinic from "@/components/BigClinic/BigClinic"

export default function Home() {
  return (
    <div>
      <BigBord backgroundImage="/images/bigbort/BigBort3.jpg" />
      <Doctor />
      <SideBySideGallery />
      <BigBordFace />
      <BigBordBody />
      <BigClinic />
    </div>
  )
}
