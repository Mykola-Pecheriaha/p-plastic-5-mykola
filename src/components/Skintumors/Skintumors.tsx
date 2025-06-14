"use client"
import styles from "./Skintumors.module.css"
import Image from "next/image"

interface SkintumorsProps {
  backgroundColor?: string
  className?: string
}

export function Skintumors({ backgroundColor = "#e8f5e8", className }: SkintumorsProps) {
  return (
    <section className={`${styles.skintumorsSection} ${className || ""}`} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Перша секція: дві колонки */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainTitle}>Доброякісні пухлини м`ягких тканей тулуба та кінцівок</h2>
            <div className={styles.benefitsList}>
              <p className={styles.introText}>Доброякісні новоутворення характеризуються наступними особливостями:</p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.listMarker}>🔸</span>
                  новоутворення не проростає в сусідні тканини
                </li>
                <li>
                  <span className={styles.listMarker}>🔸</span>
                  клітинні елементи не поширюються за межі пухлини
                </li>
                <li>
                  <span className={styles.listMarker}>🔸</span>
                  формуються по принципу капсули
                </li>
                <li>
                  <span className={styles.listMarker}>🔸</span>
                  повільно зростає
                </li>
                <li>
                  <span className={styles.listMarker}>🔸</span>
                  збільшується рівномірно
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/skintumors/resultbreast5-removebg-preview.png"
                alt="Доброякісні пухлини м'ягких тканей"
                width={600}
                height={400}
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Друга секція: повна ширина */}
        <div className={styles.fullWidthSection}>
          <div className={styles.highlightBox}>
            <p className={styles.descriptionText}>
              <span className={styles.warningIcon}>⚠️</span>
              Доброякісні утворення не становлять загрози для життя, проте іноді під впливом негативних чинників можуть
              перероджуватись у злоякісні пухлини.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skintumors
