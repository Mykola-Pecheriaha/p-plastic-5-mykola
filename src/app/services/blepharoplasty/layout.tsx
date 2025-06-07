import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Блефаропластика - Пластична хірургія",
  description:
    "Професійна блефаропластика. Детальна інформація про процедуру корекції повік, підготовку, реабілітацію та результати. Консультація досвідчених хірургів.",
  keywords: [
    "блефаропластика",
    "корекція повік",
    "пластична хірургія",
    "омолодження очей",
    "підтяжка повік",
    "косметична хірургія",
    "корекція мішків під очима",
    "хірургічне омолодження",
  ],
  openGraph: {
    title: "Блефаропластика - Професійна пластична хірургія",
    description: "Повернення молодості та краси з професійною блефаропластикою. Досвідчені хірурги, сучасні методики.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блефаропластика",
    description: "Професійна блефаропластика - повернення молодості та краси",
  },
}

export default function BlepharoplastyLayout({ children }: { children: React.ReactNode }) {
  return children
}
