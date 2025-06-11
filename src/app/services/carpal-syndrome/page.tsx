import type React from "react"
import { CarpalSyndrome } from "@/components/CarpalSyndrome/CarpalSyndrome"
import { CarpalDetails } from "@/components/CarpalDetails/CarpalDetails"
import { CarpalTerapi } from "@/components/CarpalTerapi/CarpalTerapi"
import { CarpaltReabil } from "@/components/CarpaltReabil/CarpaltReabil"

const CarpalSyndromePage: React.FC = () => {
  return (
    <div className="w-full">
      <CarpalSyndrome />
      <CarpalDetails />
      <CarpalTerapi />
      <CarpaltReabil />
    </div>
  )
}

export default CarpalSyndromePage
