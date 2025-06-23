"use client"
import type React from "react"
import { useState } from "react"
import BreastAugmentation from "@/components/BreastAugmentation/BreastAugmentation"
import BreastProblemSection from "@/src/components/BreastProblemSection/ProblemSection"
import AugmentationConsultation from "@/components/AugmentationConsultation/AugmentationConsultation"
import BreastAugmentationPreparation from "@/components/BreastAugmentationPreparation/BreastAugmentationPreparation"
import BreastQuestion from "@/components/BreastQuestion/BreastQuestion"
import ContactForm from "@/components/ContactForm/ContactForm"

const SpecialistPage: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const openContactForm = () => setIsContactFormOpen(true)
  const closeContactForm = () => setIsContactFormOpen(false)

  return (
    <div>
      <BreastAugmentation />

      <BreastProblemSection />
      <AugmentationConsultation />
      <BreastAugmentationPreparation />
      <BreastQuestion onContactClick={openContactForm} />

      {/* Модальна форма контакту */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}

export default SpecialistPage
