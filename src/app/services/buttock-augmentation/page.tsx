import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
// import Blefaroplastic from "@/components/Blefaroplastic/Blefaroplastic"
// import BlepharoplastytDetails from "@/components/BlepharoplastytDetails/BlepharoplastytDetails"
// import BlepharoPreparation from "@/components/BlepharoPreparation/BlepharoPreparation"
// import BlepharoFAQ from "@/components/BlepharoFAQ/BlepharoFAQ"

export const metadata: Metadata = {
  title: "Збільшення сідниц - Пластична хірургія | Клініка доктора Миколи",
  description:
    "Професійне збільшення сідниць в Україні. Сучасні методи корекції сідниць. Консультація досвідченого пластичного хірурга.",
  keywords: "збільшення сідниць, корекція корекція, пластична хірургія, омолодження сідниць",
  openGraph: {
    title: "Збільшення сідниць - Пластична хірургія",
    description: "Професійне  збільшення сідниць  з використанням сучасних технологій",
    type: "website",
  },
}

import UnderDevelopment from "@/components/UnderDevelopment/UnderDevelopment"

const ButtockAugmentationPage: React.FC = () => {
  return (
    <main className="blepharoplasty-page">
      <UnderDevelopment
        title="Збільшення сідниць"
        description="Ми працюємо над створенням детальної інформації про збільшення сідниць. Незабаром тут з'явиться повний опис процедури, фотогалерея результатів та відповіді на поширені запитання."
        backgroundColor="#e8f5e8"
        expectedDate="Лютий 2025"
        contactLink="/about-doctor/contacts"
      />
    </main>
  )
}

export default ButtockAugmentationPage
