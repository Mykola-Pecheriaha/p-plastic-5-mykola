import type React from "react"
import Ginecomastiya from "../../../components/Ginecomastiya/Ginecomastiya"
import GinecomastiyaIndications from "../../../components/GinecomastiyaIndications/GinecomastiyaIndications"
import GinecomastiyaPreparation from "../../../components/GinecomastiyaPreparation/GinecomastiyaPreparation"
import GinecomastiyaFAQ from "../../../components/GinecomastiyaFAQ/GinecomastiyaFAQ"

const GinecomastiyaPage: React.FC = () => {
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
    <main className="ginecomastiya-page">
      {/* Секція 1 - Світло-зелений фон */}
      <Ginecomastiya backgroundColor={currentTheme.primary} />

      {/* Секція 2 - Світло-блакитний фон */}
      <GinecomastiyaIndications backgroundColor={currentTheme.secondary} />

      {/* Секція 3 - Світло-зелений фон */}
      <GinecomastiyaPreparation backgroundColor={currentTheme.primary} />

      {/* Секція 4 - Світло-блакитний фон */}
      <GinecomastiyaFAQ backgroundColor={currentTheme.secondary} />
    </main>
  )
}

export default GinecomastiyaPage
