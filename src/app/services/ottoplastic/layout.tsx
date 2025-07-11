import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Отопластика - Корекція клаповухості | Пластична хірургія",
  description:
    "Професійна отопластика - корекція клаповухості. Детальна інформація про процедуру, підготовку, реабілітацію та результати. Консультація досвідчених хірургів.",
  keywords: [
    "отопластика",
    "корекція клаповухості",
    "пластична хірургія",
    "корекція вух",
    "пластика вух",
    "косметична хірургія",
    "хірургічна корекція вух",
    "естетична хірургія",
  ],
  openGraph: {
    title: "Отопластика - Корекція клаповухості | Професійна пластична хірургія",
    description:
      "Повернення впевненості з професійною отопластикою. Досвідчені хірурги, сучасні методики корекції клаповухості.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Отопластика - Корекція клаповухості",
    description: "Професійна отопластика - корекція клаповухості та естетична пластика вух",
  },
}

export default function OttoplasticLayout({ children }: { children: React.ReactNode }) {
  return children
}
