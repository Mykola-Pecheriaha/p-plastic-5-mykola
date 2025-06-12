import type React from "react"
import { Varicose } from "@/components/Varicose/Varicose"
import { VaricoseBaner } from "@/components/VaricoseBaner/VaricoseBaner"
import TreatmentResults from "@/components/TreatmentResults/TreatmentResults"

const VaricosePage: React.FC = () => {
  return (
    <div>
      <VaricoseBaner />
      <Varicose />
      <TreatmentResults />
    </div>
  )
}

export default VaricosePage
