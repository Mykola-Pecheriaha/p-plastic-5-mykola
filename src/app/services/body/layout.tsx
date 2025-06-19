import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Пластична хірургія тіла",
    default: "Пластична хірургія тіла",
  },
}

export default function BodyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
