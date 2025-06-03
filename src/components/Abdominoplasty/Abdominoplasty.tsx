import type React from "react"
import Image from "next/image"
import styles from "./Abdominoplasty.module.css"

interface AbdominoplastyProps {
  backgroundColor?: string
}

const Abdominoplasty: React.FC<AbdominoplastyProps> = ({ backgroundColor = "#e8f5e8" }) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Абдомінопластика пластика живота</h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>🔷</span> Повернути плоский живіт як до пологів
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>🔷</span> Усунути обвислу шкіру живота
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>🔷</span> Відновити струнку фігуру
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/abdominoplasty/abdominoplastic-removebg-preview.png"
              alt="Абдомінопластика"
              width={500}
              height={400}
              className={styles.mainImage}
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.description}>
            Пластика живота (абдомінопластика) – затребувана пластична операція, яка дозволяє отримати ідеально рівний
            животик і гарну талію після пологів та різкого схуднення. Це стає можливим за рахунок позбавлення від
            надлишків шкіри та підшкірного жиру (так званий «фартух»). Абдомінопластика повертає фігурі стрункість і
            пропорційність, гармонійні контури.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Abdominoplasty
