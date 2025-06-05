import type React from "react"
import type { Metadata } from "next"

// Правильний імпорт компонента (default export)
import Liposuction from "@/components/Liposuction/Liposuction"

// Імпорти інших компонентів (поки що закоментовані, будемо додавати по черзі)
import { LiposuctionDetails } from "@/components/LiposuctionDetails"
import { LiposuctionIndicatio } from "@/components/LiposuctionIndicatio"
import { LiposuctionPreparation } from "@/components/LiposuctionPreparation"
import { LiposuctionFAQ } from "@/components/LiposuctionFAQ"

export const metadata: Metadata = {
  title: "Ліпосакція - Пластична хірургія | Клініка доктора Миколи",
  description:
    "Професійна ліпосакція в Україні. Сучасні методи видалення жирових відкладень. Консультація досвідченого пластичного хірурга.",
  keywords: "ліпосакція, видалення жиру, пластична хірургія, контурна пластика тіла",
  openGraph: {
    title: "Ліпосакція - Пластична хірургія",
    description: "Професійна ліпосакція з використанням сучасних технологій",
    type: "website",
  },
}

const LiposuctionPage: React.FC = () => {
  return (
    <main className="liposuction-page">
      {/* Компоненти з зеленою кольоровою схемою */}
      <Liposuction backgroundColor="#e8f5e8" />

      {/* Інші компоненти будуть додаватися по черзі */}

      <LiposuctionDetails backgroundColor="#f0f9ff" />
      <LiposuctionIndicatio backgroundColor="#e8f5e8" />
      <LiposuctionPreparation backgroundColor="#f0f9ff" />
      <LiposuctionFAQ backgroundColor="#e8f5e8" />
    </main>
  )
}

export default LiposuctionPage
