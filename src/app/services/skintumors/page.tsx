import type React from "react"
import { Skintumors } from "@/components/Skintumors/Skintumors"
import { SkintumorsDetails } from "@/components/SkintumorsDetails/SkintumorsDetails"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Пухлини шкіри - Діагностика та лікування",
  description:
    "Детальна інформація про пухлини шкіри: симптоми, причини, методи лікування. Професійна медична допомога.",
  keywords: "пухлини шкіри, новоутворення шкіри, лікування пухлин, діагностика пухлин шкіри, дерматологія",
}

const SkintumorsPage: React.FC = () => {
  return (
    <div>
      <Skintumors backgroundColor="#e8f5e8" />
      <SkintumorsDetails backgroundColor="#f0f9ff" />
    </div>
  )
}

export default SkintumorsPage
