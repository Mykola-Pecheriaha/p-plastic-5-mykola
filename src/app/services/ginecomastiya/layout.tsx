import SpecialistPage from "./page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ВИДАЛЕННЯ ГІНЕКОМАСТІЇ у Чернівцях – Пластичний хірург Микола Печеряга",
  description:
    "ВИДАЛЕННЯ ГІНЕКОМАСТІЇ у Чернівцях від досвідченого пластичного хірурга Миколи Печеряги. Безпечні методики, консультації, фото до та після.",
  keywords:
    "ВИДАЛЕННЯ ГІНЕКОМАСТІЇ Чернівці, мамопластика, пластика грудей, Печеряга Микола, пластичний хірург Чернівці",
  openGraph: {
    title: "ВИДАЛЕННЯ ГІНЕКОМАСТІЇ – Микола Печеряга",
    description: "Пластика грудей у Чернівцях. Збільшення, підтяжка, імпланти. Безпечно та професійно.",
    url: "https://www.plastic-p.com/operations/ginecomastiya",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "article",
  },
}

export default function Page() {
  return <SpecialistPage />
}
