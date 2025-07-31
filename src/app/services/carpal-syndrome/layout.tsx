import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Синдром зап'ястного каналу - Лікування та діагностика, Пластичний хірург Микола Печеряга",
  description: "Професійне лікування синдрому зап'ястного каналу. Сучасні методи діагностики, терапії та реабілітації.",
  keywords:
    "синдром зап'ястного каналу, карпальний тунель, лікування, діагностика, реабілітаціяПечеряга Микола, пластичний хірург Чернівці",
  openGraph: {
    title: "Синдром зап'ястного каналу - Лікування та діагностика – Микола Печеряга",
    description:
      "Професійне лікування синдрому зап'ястного каналу. Сучасні методи діагностики, терапії та реабілітації.",
    url: "https://www.plastic-p.com/operations/breast-augmentation",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "article",
  },
}

export default function CarpalSyndromeLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>
}
