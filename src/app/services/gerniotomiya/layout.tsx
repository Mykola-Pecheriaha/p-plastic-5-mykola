import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Герніотомія - Пластична хірургія",
  description:
    "Професійна герніотомія. Сучасні методи лікування гриж. Досвідчені хірурги, індивідуальний підхід до кожного пацієнта.",
  keywords: "герніотомія, лікування гриж, пластична хірургія, хірургічне лікування",
  openGraph: {
    title: "Герніотомія - Пластична хірургія, ",
    description:
      "Професійна герніотомія. Сучасні методи лікування гриж, Пластика грудей у Чернівцях. Збільшення, підтяжка, імпланти. Безпечно та професійно.",
    url: "https://www.plastic-p.com/operations/breast-augmentation",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "website",
  },
}

export default function GerniotomiyaLayout({ children }: { children: React.ReactNode }) {
  return <div className="gerniotomiya-layout">{children}</div>
}
