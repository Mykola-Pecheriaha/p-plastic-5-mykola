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
    title: "Підтяжка обличчя (Facelift) - Професійна пластична хірургія",
    description: "Повернення молодості та краси з професійною підтяжкою обличчя. Досвідчені хірурги, сучасні методики.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Підтяжка обличчя (Facelift)",
    description: "Професійна підтяжка обличчя - повернення молодості та краси",
  },
}

export default function FaceliftSectionLayout({ children }: { children: React.ReactNode }) {
  return children
}
