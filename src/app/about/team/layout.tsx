import type { ReactNode } from "react"

interface TeamLayoutProps {
  children: ReactNode
}

export default function TeamLayout({ children }: TeamLayoutProps) {
  return <div className="team-layout">{children}</div>
}
