import { Team } from "@/components/Team/Team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Наша команда | Печеряга Микола Миколайович",
  description:
    "Познайомтеся з нашою командою професійних хірургів. Печеряга Микола Миколайович - досвідчений хірург з 30-річним стажем роботи.",
  keywords: "команда, хірург, Печеряга, пластична хірургія, загальна хірургія, досвід",
}

export default function TeamPage() {
  return <Team />
}
