"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import GinecomastiyaPreparationGallery from "./GinecomastiyaPreparationGallery"
import styles from "./GinecomastiyaPreparation.module.css"
import { consultationImages, preparationBlocks, consultationSteps } from "../../data"

interface GinecomastiyaPreparationProps {
  backgroundColor?: string
}

const GinecomastiyaPreparation: React.FC<GinecomastiyaPreparationProps> = ({ backgroundColor = "#e8f5e8" }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setImagesLoaded(true)
  }, [])

  const colorStyles = {
    backgroundColor,
    color: "#2d3748",
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Гінекомастія у чоловіків: консультація</h2>
          <p className={styles.description}>
            Як позбутися гінекомастії? Перший етап – безкоштовна консультація в Чернівцях у досвідченого пластичного
            хірурга Миколи Печеряга. Індивідуальна консультація у хірурга включає:
          </p>

          {/* Консультаційна секція */}
          <div className={styles.consultationContent}>
            <div className={styles.steps}>
              {consultationSteps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <ArrowRight size={20} className={styles.arrow} />
                  <span className={styles.stepText}>{step}</span>
                </div>
              ))}
            </div>
            <div className={styles.gallery}>
              {imagesLoaded && <GinecomastiyaPreparationGallery images={consultationImages} />}
            </div>
          </div>

          <p className={styles.additionalInfo}>
            Спеціаліст визначає, що стало причиною виникнення патології та підбирає необхідний спосіб вирішення
            проблеми.
          </p>

          {/* Інформаційні блоки */}
          <div className={styles.infoBlocks}>
            {preparationBlocks.map((block, index) => (
              <div key={index} className={styles.infoBlock}>
                <div className={styles.blockContent}>
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                  <div className={styles.blockText}>
                    {block.description.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.blockGallery}>
                  {imagesLoaded && <GinecomastiyaPreparationGallery images={block.images} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GinecomastiyaPreparation
