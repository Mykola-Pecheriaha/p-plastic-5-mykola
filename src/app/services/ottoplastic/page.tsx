import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
import Ottoplastic from "../../../components/Ottoplastic/Ottoplastic"
import { OttoDetails } from "@/components/OttoDetails/OttoDetails"
import { OttoPreparation } from "@/components/OttoPreparation/OttoPreparation"
import OttoFAQ from "../../../components/OttoFAQ/OttoFAQ"

export const metadata: Metadata = {
  title: "Отопластика - Корекція клаповухості | Клініка пластичної хірургії",
  description:
    "Професійна отопластика в Україні. Сучасні методи корекції клаповухості. Консультація досвідченого пластичного хірурга.",
  keywords: "отопластика, корекція клаповухості, пластична хірургія, корекція вух",
  openGraph: {
    title: "Отопластика - Корекція клаповухості",
    description: "Професійна отопластика з використанням сучасних технологій",
    type: "website",
  },
}

const OttoplasticPage: React.FC = () => {
  return (
    <main className="ottoplastic-page">
      <Ottoplastic backgroundColor="#e8f5e8" />
      <OttoDetails backgroundColor="#f0f9ff" />
      <OttoPreparation backgroundColor="#e8f5e8" />
      <OttoFAQ backgroundColor="#f0f9ff" />
    </main>
  )
}

export default OttoplasticPage
