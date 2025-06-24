import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
// import Blefaroplastic from "@/components/Blefaroplastic/Blefaroplastic"
// import BlepharoplastytDetails from "@/components/BlepharoplastytDetails/BlepharoplastytDetails"
// import BlepharoPreparation from "@/components/BlepharoPreparation/BlepharoPreparation"
// import BlepharoFAQ from "@/components/BlepharoFAQ/BlepharoFAQ"

export const metadata: Metadata = {
  title: "Блог пластичного хірурга | Роботи пластичного хірургава - Миколи",
  description:
    "Професійна пластика  в Україні. Сучасні методи корекції в пластичні хірургії. Консультація досвідченого пластичного хірурга.",
  keywords: "Блог пластичного хірурга,  пластична хірургія, естетична та реконструктивна хірургія",
  openGraph: {
    title: "Блог - Пластична хірургія",
    description: "Професійне  пластика  з використанням сучасних технологій",
    type: "website",
  },
}

import UnderDevelopment from "@/components/UnderDevelopment/UnderDevelopment"

const ButtockAugmentationPage: React.FC = () => {
  return (
    <main className="blepharoplasty-page">
      <UnderDevelopment
        title="Блог"
        description="Блог присв'ячений проблемам пластичної та естетичної хірургії"
        backgroundColor="#e8f5e8"
        expectedDate="Жовтень 2025"
        contactLink="/ask-doctor"
      />
    </main>
  )
}

export default ButtockAugmentationPage
