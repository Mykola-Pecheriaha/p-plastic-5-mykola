"use client"
import type React from "react"
import Image from "next/image"
import styles from "./Gerniotomiya.module.css"

interface GerniotomiyaProps {
  backgroundColor?: string
}

export const Gerniotomiya: React.FC<GerniotomiyaProps> = ({ backgroundColor = "#e8f5e8" }) => {
  // Зображення для компонента
  const image = {
    src: "/images/gerniotomiya/gerniya2.png",
    alt: "Грижа передньої черевної стінки",
    width: 600,
    height: 450,
  }

  return (
    <section className={styles.gerniotomiya} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Грижі</h1>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>🔹 Зникає випинання</li>
              <li className={styles.benefitsItem}>🔹 Усувається ризик защемлення</li>
              <li className={styles.benefitsItem}>🔹 Відновлюється естетика тіла</li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={image.src || "/placeholder.svg?height=450&width=600&query=hernia surgery"}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
              priority
            />
          </div>
        </div>
        <div className={styles.fullWidthContent}>
          <p className={styles.paragraph}>
            <strong>Грижі</strong> передньої черевної стінки – патологічні стани, які пов`язані з випинанням органів під
            шкіру через пупкове кільце, паховий канал та інші слабкі місця передньої черевної стінки.
          </p>
          <p className={styles.paragraph}>
            Також грижа може виникнути як ускладнення після оперативного втручання.Таким чином <strong>грижа</strong> -
            це поширене захворювання, яке у дорослої людини можна усунути тільки оперативним шляхом. Грижа ніколи не
            проходить самостійно і доставляє пацієнтові багато болісних відчуттів. Тому найкращий спосіб швидко
            повернутися до повноцінного життя і забути про болі в животі – лапароскопічна операція.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gerniotomiya
