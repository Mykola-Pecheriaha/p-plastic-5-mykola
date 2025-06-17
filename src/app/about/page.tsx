import type React from "react"
import type { Metadata } from "next"
import AboutBort from "@/components/AboutBort/AboutBort"
import Educationcareer from "@/components/Educationcareer/Educationcareer"
import { Diplomcertificates } from "@/components/Diplomcertificates/Diplomcertificates"
import { Clinic } from "@/components/Clinic/Clinic"
import ConsultationCTA from "@/components/ConsultationCTA/ConsultationCTA"

export const metadata: Metadata = {
  title: "Про лікаря - Професійна інформація",
  description: "Детальна інформація про лікаря: освіта, кар'єра, досвід роботи, клініка. Професійна медична допомога.",
  keywords: "про лікаря, освіта лікаря, медичний досвід, клініка, професійна допомога",
}

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Компоненти будуть додані поступово */}
      <AboutBort backgroundColor="#e8f5e8" />
      <Educationcareer backgroundImage="/placeholder.svg?height=1080&width=1920" />
      <Diplomcertificates />

      <Clinic />
      <ConsultationCTA />
    </div>
  )
}

export default AboutPage
