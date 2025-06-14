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
      <div className="w-full" style={{ backgroundColor: "#e8f5e8" }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8" style={{ color: "#2d3748" }}>
            Проктологія
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{ color: "#2d3748" }}>
            Сучасні методи діагностики та лікування проктологічних захворювань
          </p>
        </div>
      </div>
      <Proctology />
      <HemorrhoiSymptom />
      <AnalFissure />
      <CoccyxCyst />
      <PararectalFistulas />
    </div>
  )
}

export default ProctologyPage
