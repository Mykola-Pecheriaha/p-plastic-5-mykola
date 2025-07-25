import { AskDoctor } from "@/components/AskDoctor/AskDoctor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Запитати лікаря – Dr. Микола Печеряга | plastic-p.com",
  description:
    "Маєте питання про пластичну хірургію? Залиште своє запитання онлайн, і досвідчений пластичний хірург Микола Печеряга відповість вам безкоштовно.",
  keywords:
    "запитати лікаря, консультація лікаря, пластична хірургія, питання хірургу, онлайн консультація, Микола Печеряга",
  metadataBase: new URL("https://www.plastic-p.com"),
  openGraph: {
    title: "Онлайн-консультація з пластичним хірургом",
    description:
      "Залиште питання про операцію або процедуру. Dr. Микола Печеряга надає швидку й професійну відповідь онлайн.",
    url: "https://www.plastic-p.com/ask-doctor",
    siteName: "Plastic P",
    type: "website",
    locale: "uk_UA",
  },
}

export default function AskDoctorPage() {
  return <AskDoctor />
}
