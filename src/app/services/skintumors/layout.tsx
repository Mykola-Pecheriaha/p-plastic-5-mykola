import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Пухлини шкіри",
    default: "Пухлини шкіри - Діагностика та лікування",
  },
  description: "Професійна діагностика та лікування пухлин шкіри. Сучасні методи лікування новоутворень.",
}

export default function SkintumorsLayout({ children }: { children: React.ReactNode }) {
  return <div className="skintumors-layout">{children}</div>
}
