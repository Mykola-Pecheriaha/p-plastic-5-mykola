import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Пластична хірургія грудей",
    default: "Пластична хірургія грудей",
  },
  description: "Професійні послуги пластичної хірургії грудей",
}

export default function BreastLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
