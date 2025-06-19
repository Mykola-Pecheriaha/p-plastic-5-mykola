import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Загальна  хірургія",
    default: "Загаль хірургія ",
  },
  description: "Професійні процедури загальної  хірургії ",
}

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
