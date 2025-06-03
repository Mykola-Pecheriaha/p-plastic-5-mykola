import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Абдомінопластика",
    default: "Абдомінопластика - Пластична хірургія",
  },
  description: "Професійна абдомінопластика та підтяжка живота",
}

export default function AbdominoplastyLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
