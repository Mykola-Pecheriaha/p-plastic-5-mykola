import type React from "react"
import Services from "@/components/Services/Services"

export const metadata = {
  title: "Послуги – Dr. Микола Печеряга | plastic-p.com",
  description:
    "Опис усіх медичних послуг, які надає пластичний хірург Микола Печеряга: консультації, підготовка, післяопераційний супровід.",
  keywords: "медичні послуги, консультації пластичний хірург, післяопераційний догляд, Микола Печеряга",
  openGraph: {
    title: "Послуги – Dr. Микола Печеряга",
    description:
      "Усі послуги, які надає пластичний хірург: до- та післяопераційний супровід, консультації, підготовка.",
    url: "https://www.plastic-p.com/services",
    type: "article",
    siteName: "Plastic P",
  },
}

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

export default ServicesPage
