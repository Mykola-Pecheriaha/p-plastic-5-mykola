import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Запитати лікаря",
    default: "Запитати лікаря - Професійна консультація",
  },
  description: "Отримайте професійну консультацію від досвідченого пластичного хірурга онлайн.",
}

export default function AskDoctorLayout({ children }: { children: React.ReactNode }) {
  return <div className="ask-doctor-layout">{children}</div>
}
