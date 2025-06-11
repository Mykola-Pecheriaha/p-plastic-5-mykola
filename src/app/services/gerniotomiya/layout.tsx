import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Герніотомія - Пластична хірургія",
  description:
    "Професійна герніотомія. Сучасні методи лікування гриж. Досвідчені хірурги, індивідуальний підхід до кожного пацієнта.",
  keywords: "герніотомія, лікування гриж, пластична хірургія, хірургічне лікування",
  openGraph: {
    title: "Герніотомія - Пластична хірургія",
    description: "Професійна герніотомія. Сучасні методи лікування гриж.",
    type: "website",
  },
}

export default function GerniotomiyaLayout({ children }: { children: React.ReactNode }) {
  return <div className="gerniotomiya-layout">{children}</div>
}
