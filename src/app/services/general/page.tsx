import type { Metadata } from "next"
import General from "@/components/General/General"

export const metadata: Metadata = {
  title: "Загальна хірургія  | Клініка  хірургії",
  description:
    "Професійні процедури загальної  хірургії : Видалення доброякісних пухлин, Карпальний канал, Видалення гриж, Лікування варикозу, Проктологія. Досвідчені хірурги, сучасне обладнання.",
  keywords:
    "Загальна хірургія , Видалення доброякісних пухлин, Карпальний канал, Видалення гриж, Лікування варикозу, Проктологія",
}

export default function GeneralPage() {
  return <General />
}
