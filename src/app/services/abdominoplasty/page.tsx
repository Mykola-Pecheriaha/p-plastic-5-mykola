import type React from "react"
import type { Metadata } from "next"

// Імпорти компонентів (поки що закоментовані, будуть додані по черзі)
import { Abdominoplasty } from "../../../components/Abdominoplasty"
import { AbdominoDetails } from "../../../components/AbdominoDetails"
import { AbdominoPreparation } from "../../../components/AbdominoPreparation"
import { AbdominoFAQ } from "../../../components/AbdominoFAQ"

export const metadata: Metadata = {
  title: "Абдомінопластика - Пластична хірургія",
  description: "Професійна абдомінопластика. Сучасні методи підтяжки живота. Досвідчені хірурги, безпечні операції.",
  keywords: "абдомінопластика, підтяжка живота, пластична хірургія, хірург",
}

const AbdominoplastyPage: React.FC = () => {
  return (
    <div>
      {/* Тимчасовий контент для демонстрації кольорової схеми */}
      <div
        style={{
          backgroundColor: "#e8f5e8",
          padding: "60px 0",
          textAlign: "center" as const,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            color: "#2d3748",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "#52a40e",
            }}
          >
            Абдомінопластика
          </h1>
          <p style={{ fontSize: "1.2rem" }}>Компоненти будуть додані по черзі</p>
        </div>
      </div>

      {/* Компоненти будуть розкоментовані та додані по черзі */}
      <Abdominoplasty backgroundColor="#e8f5e8" />
      <AbdominoDetails backgroundColor="#f0f9ff" />
      <AbdominoPreparation backgroundColor="#e8f5e8" />
      <AbdominoFAQ backgroundColor="#f0f9ff" />
    </div>
  )
}

export default AbdominoplastyPage
