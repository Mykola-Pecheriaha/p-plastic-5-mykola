"use client"

import type React from "react"
import BeforeAfterSlider from "./BeforeAfterSlider"
import styles from "./TreatmentResults.module.css"

interface TreatmentResultsProps {
  className?: string
}

const TreatmentResults: React.FC<TreatmentResultsProps> = ({ className }) => {
  return (
    <div className={`${styles.pageWrapper} ${className || ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Результати лікування</h2>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Лікування варикозу</h3>
              <p className={styles.description}>
                Малоінвазивні методи лікування варикозу дозволяють досягти відмінних результатів без великих розрізів та
                тривалого періоду відновлення. Перетягніть повзунок, щоб побачити результати до і після процедури.
              </p>
              <BeforeAfterSlider
                beforeImage="/images/results/varicos3.jpg"
                afterImage="/images/results/varicos4.jpg"
                beforeAlt="Варикоз до лікування"
                afterAlt="Результат після лікування варикозу"
                height={550}
              />
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Додаткові результати лікування</h3>
              <p className={styles.description}>
                Сучасні методи лікування забезпечують швидке відновлення та мінімальний дискомфорт для пацієнтів.
                Результати видні вже через кілька тижнів після процедури.
              </p>
              <BeforeAfterSlider
                beforeImage="/images/results/varicos5.jpg"
                afterImage="/images/results/varicos6.jpg"
                beforeAlt="До процедури"
                afterAlt="Після процедури"
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TreatmentResults }
export default TreatmentResults
