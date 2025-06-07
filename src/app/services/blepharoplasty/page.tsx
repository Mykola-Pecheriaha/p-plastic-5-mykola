import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
import Blefaroplastic from "@/components/Blefaroplastic/Blefaroplastic"
import BlepharoplastytDetails from "@/components/BlepharoplastytDetails/BlepharoplastytDetails"
import BlepharoPreparation from "@/components/BlepharoPreparation/BlepharoPreparation"
import BlepharoFAQ from "@/components/BlepharoFAQ/BlepharoFAQ"

export const metadata: Metadata = {
  title: "Блефаропластика - Пластична хірургія | Клініка доктора Миколи",
  description:
    "Професійна блефаропластика в Україні. Сучасні методи корекції повік. Консультація досвідченого пластичного хірурга.",
  keywords: "блефаропластика, корекція повік, пластична хірургія, омолодження очей",
  openGraph: {
    title: "Блефаропластика - Пластична хірургія",
    description: "Професійна блефаропластика з використанням сучасних технологій",
    type: "website",
  },
}

const BlepharoplastyPage: React.FC = () => {
  return (
    <main className="blepharoplasty-page">
      {/* Компонент з правильною кольоровою схемою */}
      <Blefaroplastic backgroundColor="#e8f5e8" />

      {/* Інші компоненти будуть додаватися по черзі */}
      <BlepharoplastytDetails backgroundColor="#f0f9ff" />
      <BlepharoPreparation backgroundColor="#e8f5e8" />
      <BlepharoFAQ backgroundColor="#f0f9ff" />
    </main>
  )
}

export default BlepharoplastyPage
