import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Послуги - Пластична хірургія",
  description: "Професійні послуги пластичної хірургії: пластика обличчя, грудей, тіла та загальна хірургія",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
