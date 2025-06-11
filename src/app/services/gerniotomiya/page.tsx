import type React from "react"
import type { Metadata } from "next"
import { Gerniotomiya } from "@/components/Gerniotomiya/Gerniotomiya"
import GerniotomiyaDetails from "../../../components/GerniotomiyaDetails/GerniotomiyaDetails"
import GerniotomiyaIndicatio from "../../../components/GerniotomiyaIndicatio/GerniotomiyaIndicatio"
import GernioPreparation from "../../../components/GernioPreparation/GernioPreparation"
import GernioFAQ from "../../../components/GernioFAQ/GernioFAQ"

export const metadata: Metadata = {
  title: "Герніотомія - Лікування гриж | Пластична хірургія",
  description:
    "Професійна герніотомія в нашій клініці. Сучасні методи лікування пахових, пупкових та інших видів гриж. Досвідчені хірурги, мінімально інвазивні техніки.",
  keywords: "герніотомія, лікування гриж, пахова грижа, пупкова грижа, хірургічне лікування, лапароскопія",
}

const GerniotomiyaPage: React.FC = () => {
  return (
    <div>
      <Gerniotomiya backgroundColor="#e8f5e8" />
      <GerniotomiyaDetails backgroundColor="#f0f9ff" />
      <GerniotomiyaIndicatio backgroundColor="#e8f5e8" />
      <GernioPreparation backgroundColor="#f0f9ff" />
      <GernioFAQ backgroundColor="#e8f5e8" />
    </div>
  )
}

export default GerniotomiyaPage
