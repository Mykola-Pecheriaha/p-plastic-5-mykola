import type { Metadata } from "next"
import Face from "@/components/Face/Face"

export const metadata: Metadata = {
  title: "Пластична хірургія обличчя | Клініка пластичної хірургії",
  description:
    "Професійні процедури пластичної хірургії обличчя: підтяжка обличчя та шиї, блефаропластика, пластика підборіддя, корекція вух. Досвідчені хірурги, сучасне обладнання.",
  keywords:
    "пластична хірургія обличчя, підтяжка обличчя, блефаропластика, пластика підборіддя, корекція вух, отопластика",
}

export default function FacePage() {
  return <Face />
}
