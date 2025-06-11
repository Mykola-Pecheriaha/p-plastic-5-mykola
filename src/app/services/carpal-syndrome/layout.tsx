import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Синдром зап'ястного каналу - Лікування та діагностика",
  description: "Професійне лікування синдрому зап'ястного каналу. Сучасні методи діагностики, терапії та реабілітації.",
  keywords: "синдром зап'ястного каналу, карпальний тунель, лікування, діагностика, реабілітація",
}

export default function CarpalSyndromeLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>
}
