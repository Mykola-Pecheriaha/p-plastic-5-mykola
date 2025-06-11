import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будемо додавати по черзі)
// import Blefaroplastic from "@/components/Blefaroplastic/Blefaroplastic"
// import BlepharoplastytDetails from "@/components/BlepharoplastytDetails/BlepharoplastytDetails"
// import BlepharoPreparation from "@/components/BlepharoPreparation/BlepharoPreparation"
// import BlepharoFAQ from "@/components/BlepharoFAQ/BlepharoFAQ"

export const metadata: Metadata = {
  title: "Пластика ніг - Пластична хірургія | Клініка доктора Миколи",
  description:
    "Професійна пластика ніг в Україні. Сучасні методи корекції повік. Консультація досвідченого пластичного хірурга.",
  keywords: "пластика ніг, корекція в ділянці колін, пластична хірургія, наращування гомілок",
  openGraph: {
    title: "Пластика ніг - Пластична хірургія",
    description: "Професійна пластика ніг з використанням сучасних технологій",
    type: "website",
  },
}

import UnderDevelopment from "@/components/UnderDevelopment/UnderDevelopment"

const LEdSurgeryPage: React.FC = () => {
  return (
    <main className="blepharoplasty-page">
      <UnderDevelopment
        title="Пластика ніг"
        description="Ми працюємо над створенням детальної інформації про Пластика ніг. Незабаром тут з'явиться повний опис процедури, фотогалерея результатів та відповіді на поширені запитання."
        backgroundColor="#e8f5e8"
        expectedDate="Лютий 2025"
        contactLink="/about-doctor/contacts"
      />
    </main>
  )
}

export default LEdSurgeryPage
