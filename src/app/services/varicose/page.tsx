import type React from "react"
import { Varicose } from "@/components/Varicose/Varicose"
import { VaricoseBaner } from "@/components/VaricoseBaner/VaricoseBaner"
import TreatmentResults from "@/components/TreatmentResults/TreatmentResults"
import ConsultationCTA from "@/components/ConsultationCTA/ConsultationCTA"

const VaricosePage: React.FC = () => {
  return (
    <div>
      <VaricoseBaner />
      <Varicose />
      <TreatmentResults />
      <ConsultationCTA />
    </div>
  )
}

export default VaricosePage
