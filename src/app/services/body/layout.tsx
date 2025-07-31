import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Збільшення грудей у Чернівцях – Пластичний хірург Микола Печеряга",
  description:
    "Збільшення грудей у Чернівцях від досвідченого пластичного хірурга Миколи Печеряги. Безпечні методики, консультації, фото до та після.",
  keywords:
    "збільшення грудей Чернівці, мамопластика, пластика грудей, вбдомінопластика, ліпосакція, видалення шийного горба, видалення гриж,  Печеряга Микола, пластичний хірург Чернівці",
  openGraph: {
    title: "Збільшення грудей, абдомінопластика – Микола Печеряга",
    description: "Пластика грудей у Чернівцях. Збільшення, підтяжка, імпланти. Безпечно та професійно.",
    url: "https://www.plastic-p.com/operations/breast-augmentation",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "article",
  },
}

export default function BodyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
