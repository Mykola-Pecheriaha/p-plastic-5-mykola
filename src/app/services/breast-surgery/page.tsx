import type React from "react"
import BreastAugmentation from "@/components/BreastAugmentation/BreastAugmentation"
import BreastProblemSection from "@/src/components/BreastProblemSection/ProblemSection"

const SpecialistPage: React.FC = () => {
  return (
    <div>
      <BreastAugmentation backgroundImage="/images/breast-augmento/Brefst-fon.jpg" />
      <BreastProblemSection />
    </div>
  )
}

export default SpecialistPage
