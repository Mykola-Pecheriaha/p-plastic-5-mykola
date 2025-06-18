import { AskDoctor } from "@/components/AskDoctor/AskDoctor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Запитати лікаря - Професійна консультація",
  description:
    "Маєте питання про пластичну хірургію? Залиште своє запитання, і досвідчений лікар обов'язково відповість вам. Безкоштовна консультація онлайн.",
  keywords: "запитати лікаря, консультація лікаря, пластична хірургія, медична консультація, питання лікарю",
}

export default function AskDoctorPage() {
  return <AskDoctor />
}
