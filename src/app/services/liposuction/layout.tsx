import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Ліпосакція - Клініка доктора Миколи",
    default: "Ліпосакція - Пластична хірургія",
  },
  description: "Професійна ліпосакція та контурна пластика тіла в клініці доктора Миколи",
}

export default function LiposuctionLayout({ children }: { children: React.ReactNode }) {
  return <div className="liposuction-layout">{children}</div>
}
