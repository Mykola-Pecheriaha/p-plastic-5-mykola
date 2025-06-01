import type React from "react"
import MastopexyWithNippleCorrection from "../../../components/MastopexyWithNippleCorrection/MastopexyWithNippleCorrection"
import BreastLiftIndications from "../../../components/BreastLiftIndications/BreastLiftIndications"
import BreastLiftContraIndications from "../../../components/BreastLiftContraIndications/BreastLiftContraIndications"
import BreastLiftPreparation from "../../../components/BreastLiftPreparation/BreastLiftPreparation"
import MastopexyInfo from "../../../components/MastopexyInfo/MastopexyInfo"
import BreastLiftFAQ from "../../../components/BreastLiftFAQ/BreastLiftFAQ"

const MastopexyWithNippleCorrectionPage: React.FC = () => {
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
    <main className="mastopexy-with-nipple-correction-page">
      {/* Секція 1 - Світло-зелений фон */}
      <MastopexyWithNippleCorrection backgroundColor={currentTheme.primary} />

      {/* Секція 2 - Світло-блакитний фон */}
      <BreastLiftIndications backgroundColor={currentTheme.secondary} />

      {/* Секція 3 - Світло-зелений фон */}
      <BreastLiftContraIndications backgroundColor={currentTheme.primary} />

      {/* Секція 4 - Світло-блакитний фон */}
      <BreastLiftPreparation backgroundColor={currentTheme.secondary} />

      {/* Секція 5 - Світло-зелений фон */}
      <MastopexyInfo backgroundColor={currentTheme.primary} />

      {/* Секція 6 - Світло-блакитний фон */}
      <BreastLiftFAQ backgroundColor={currentTheme.secondary} />
    </main>
  )
}

export default MastopexyWithNippleCorrectionPage
