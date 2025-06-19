import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Пластична хірургія обличчя",
    default: "Пластична хірургія обличчя",
  },
  description: "Професійні процедури  хірургії загальної ",
}

export default function FaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
