import type { Metadata } from "next"
import Breast from "@/components/Breast/Breast"

export const metadata: Metadata = {
  title: "Пластична хірургія грудей | Професійні послуги",
  description:
    "Професійні послуги пластичної хірургії грудей: збільшення, підтяжка, корекція, заміна імплантів. Досвідчені хірурги, сучасні технології.",
  keywords: "пластична хірургія грудей, збільшення грудей, підтяжка грудей, імплантати, гінекомастія, мамопластика",
}

export default function BreastPage() {
  return (
    <main>
      <Breast />
    </main>
  )
}
