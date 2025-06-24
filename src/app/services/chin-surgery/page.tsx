import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
// import Blefaroplastic from "@/components/Blefaroplastic/Blefaroplastic"
// import BlepharoplastytDetails from "@/components/BlepharoplastytDetails/BlepharoplastytDetails"
// import BlepharoPreparation from "@/components/BlepharoPreparation/BlepharoPreparation"
// import BlepharoFAQ from "@/components/BlepharoFAQ/BlepharoFAQ"

export const metadata: Metadata = {
  title: "Пластика підборіддя - Пластична хірургія | Клініка доктора Миколи",
  description:
    "Професійна пластика підборіддя в Україні. Сучасні методи корекції підборіддя. Консультація досвідченого пластичного хірурга.",
  keywords: "корекція підборіддя,  пластична хірургія, омолодження підборіддя",
  openGraph: {
    title: "Пластика підборіддя - Пластична хірургія",
    description: "Професійне  пластика підборіддя  з використанням сучасних технологій",
    type: "website",
  },
}

import UnderDevelopment from "@/components/UnderDevelopment/UnderDevelopment"

const ButtockAugmentationPage: React.FC = () => {
  return (
    <main className="blepharoplasty-page">
      <UnderDevelopment
        title="Пластика підборіддя"
        description="Ми працюємо над створенням детальної інформації про пластику підборіддя. Незабаром тут з'явиться повний опис процедури, фотогалерея результатів та відповіді на поширені запитання."
        backgroundColor="#e8f5e8"
        expectedDate="Жовтень 2025"
        contactLink="/ask-doctor"
      />
    </main>
  )
}

export default ButtockAugmentationPage
