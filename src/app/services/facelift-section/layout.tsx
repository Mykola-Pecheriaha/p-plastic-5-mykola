import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Підтяжка обличчя (Facelift) - Пластична хірургія",
  description:
    "Професійна підтяжка обличчя. Детальна інформація про процедуру, підготовку, реабілітацію та результати. Консультація досвідчених хірургів.",
  keywords: [
    "підтяжка обличчя",
    "facelift",
    "пластична хірургія",
    "омолодження обличчя",
    "підтяжка шкіри",
    "косметична хірургія",
    "anti-aging",
    "хірургічне омолодження",
  ],

  openGraph: {
    title: "Підтяжка обличчя (Facelift)",
    description: "Професійна підтяжка обличчя - повернення молодості та краси",
    url: "https://www.plastic-p.com/operations/breast-augmentation",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "article",
  },
}

export default function FaceliftSectionLayout({ children }: { children: React.ReactNode }) {
  return children
}
