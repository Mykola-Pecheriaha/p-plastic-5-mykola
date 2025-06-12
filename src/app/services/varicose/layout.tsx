import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Лікування варикозного розширення вен | Пластична хірургія",
  description:
    "Професійне лікування варикозного розширення вен. Сучасні методи діагностики та лікування. Консультація досвідчених фахівців.",
  keywords: "варикоз, варикозне розширення вен, лікування варикозу, флебологія, судинна хірургія",
  openGraph: {
    title: "Лікування варикозного розширення вен",
    description: "Професійне лікування варикозного розширення вен. Сучасні методи діагностики та лікування.",
    type: "website",
  },
}

export default function VaricoseLayout({ children }: { children: React.ReactNode }) {
  return <div className="varicose-layout">{children}</div>
}
