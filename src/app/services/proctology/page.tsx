import type React from "react"
import { Proctology } from "@/components/Proctology/Proctology"
import { HemorrhoiSymptom } from "@/components/HemorrhoiSymptom/HemorrhoiSymptom"
import { AnalFissure } from "@/components/AnalFissure/AnalFissure"
import { CoccyxCyst } from "@/components/CoccyxCyst/CoccyxCyst"
import { PararectalFistulas } from "@/components/PararectalFistulas/PararectalFistulas"

const ProctologyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Компоненти будуть додані поступово */}
      <div className="w-full" style={{ backgroundColor: "#e8f5e8" }}></div>
      <Proctology />
      <HemorrhoiSymptom />
      <AnalFissure />
      <CoccyxCyst />
      <PararectalFistulas />
    </div>
  )
}

export default ProctologyPage
