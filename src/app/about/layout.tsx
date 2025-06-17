import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Про лікаря",
    default: "Про лікаря - Професійна інформація",
  },
  description: "Професійна інформація про лікаря: освіта, досвід, кар'єра та клініка.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className="about-layout">{children}</div>
}
