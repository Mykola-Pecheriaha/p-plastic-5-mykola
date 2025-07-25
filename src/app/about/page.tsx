import type React from "react"
import type { Metadata } from "next"
import AboutBort from "@/components/AboutBort/AboutBort"
import Educationcareer from "@/components/Educationcareer/Educationcareer"
import { Diplomcertificates } from "@/components/Diplomcertificates/Diplomcertificates"
import { Clinic } from "@/components/Clinic/Clinic"
import ConsultationCTA from "@/components/ConsultationCTA/ConsultationCTA"

export const metadata: Metadata = {
  title: "Про лікаря – Dr. Микола Печеряга | plastic-p.com",
  description: "Детальна інформація про пластичного хірурга Миколу Печерягу: освіта, досвід, сертифікати, клініка.",
  keywords: "про лікаря, пластичний хірург, Микола Печеряга, освіта, кар'єра, сертифікати, клініка",
  metadataBase: new URL("https://www.plastic-p.com"),
  openGraph: {
    title: "Про лікаря – Dr. Микола Печеряга",
    description: "Дізнайтесь більше про хірурга: освіта, медична практика, досягнення та клініка, де він приймає.",
    url: "https://www.plastic-p.com/about",
    siteName: "Plastic P",
    type: "profile",
    locale: "uk_UA",
  },
}

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutBort backgroundColor="#e8f5e8" />
      <Educationcareer backgroundImage="/placeholder.svg?height=1080&width=1920" />
      <Diplomcertificates />
      <Clinic />
      <ConsultationCTA />
    </div>
  )
}

export default AboutPage
