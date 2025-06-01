"use client"

import type React from "react"
import ImplantRevision from "../../../components/ImplantRevision/ImplantRevision"
import BreastImplantRevision from "../../../components/BreastImplantRevision/BreastImplantRevision"
import ImplantReplacementProcedure from "../../../components/ImplantReplacementProcedure/ImplantReplacementProcedure"
import ImplantBreastRecoveryReabilit from "../../../components/ImplantBreastRecoveryReabilit/ImplantBreastRecoveryReabilit"

const ImplantRevisionPage: React.FC = () => {
  // 🎨 Кольорова схема для світлої та темної теми
  const colorScheme = {
    light: {
      primary: "#e8f5e8", // Світло-зелений
      secondary: "#f0f9ff", // Світло-блакитний
      accent: "#52a40e", // Зелений акцент
      text: "#2d3748", // Темний текст
    },
    dark: {
      primary: "#e8f5e8", // Той самий світло-зелений фон
      secondary: "#f0f9ff", // Той самий світло-блакитний фон
      accent: "#52a40e", // Той самий зелений акцент
      text: "#2d3748", // Той самий темний текст (для читабельності)
    },
  }

  // Використовуємо світлу тему (можна змінити на dark при потребі)
  const currentTheme = colorScheme.light

  return (
    <div className="implant-revision-page">
      {/* Секція 1 - Світло-зелений фон */}
      <ImplantRevision backgroundColor={currentTheme.primary} />

      {/* Секція 2 - Світло-блакитний фон */}
      <BreastImplantRevision backgroundColor={currentTheme.secondary} />

      {/* Секція 3 - Світло-зелений фон */}
      <ImplantReplacementProcedure backgroundColor={currentTheme.primary} />

      {/* Секція 4 - Світло-блакитний фон */}
      <ImplantBreastRecoveryReabilit backgroundColor={currentTheme.secondary} />
    </div>
  )
}

export default ImplantRevisionPage
