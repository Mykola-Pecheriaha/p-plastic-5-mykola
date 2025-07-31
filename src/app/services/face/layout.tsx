import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Омолодження лиця у Чернівцях – Пластичний хірург Микола Печеряга",
  description:
    "Підтяжка обличчя, блефаропластика, пластика вушних раковин, Збільшення грудей у Чернівцях від досвідченого пластичного хірурга Миколи Печеряги. Безпечні методики, консультації, фото до та після.",
  keywords:
    "Фейсліфтінг, блефаропластика, пластика вух, збільшення грудей Чернівці, мамопластика, пластика грудей, Печеряга Микола, пластичний хірург Чернівці",
  openGraph: {
    title: "Пластика обличчя, Збільшення грудей – Микола Печеряга",
    description:
      "Фейсліфтінг, блефаропластика, пластика вух,Пластика грудей у Чернівцях. Збільшення, підтяжка, імпланти. Безпечно та професійно.",
    url: "https://www.plastic-p.com/operations/breast-augmentation",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "article",
  },
}

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
