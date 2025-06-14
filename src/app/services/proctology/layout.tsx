import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Проктологія - Сучасні методи лікування | Медичний центр",
  description:
    "Професійне лікування геморою, анальних тріщин, кіст куприка та параректальних нориць. Сучасні малоінвазивні методи.",
  keywords: "проктологія, геморой, анальні тріщини, кіста куприка, параректальні нориці, лікування",
  openGraph: {
    title: "Проктологія - Сучасні методи лікування",
    description: "Професійне лікування проктологічних захворювань сучасними методами",
    type: "website",
  },
}

export default function ProctologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="proctology-layout">
      <div className="w-full min-h-screen" style={{ backgroundColor: "#e8f5e8" }}>
        {children}
      </div>
    </div>
  )
}
