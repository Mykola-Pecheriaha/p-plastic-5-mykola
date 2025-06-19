import type { Metadata } from "next"
import Body from "@/components/Body/Body"

export const metadata: Metadata = {
  title: "Пластична хірургія тіла | Клініка пластичної хірургії",
  description:
    "Професійні послуги пластичної хірургії тіла: абдомінопластика, ліпосакція, пластика ніг, видалення шийного горба, збільшення сідниць. Досвідчені хірурги та сучасне обладнання.",
  keywords:
    "пластична хірургія тіла, абдомінопластика, ліпосакція, пластика ніг, видалення шийного горба, збільшення сідниць",
  openGraph: {
    title: "Пластична хірургія тіла",
    description: "Професійні послуги пластичної хірургії тіла",
    type: "website",
  },
}

export default function BodyPage() {
  return <Body />
}
