"use client"

import React from "react"
import Image from "next/image"
import styles from "./BreastAugmentation.module.css"

const BreastAugmentation = () => {
  return (
    <section className={styles.breastAugmentation} style={{ backgroundColor: "#ACF07EFF" }}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>Збільшення грудей - мамопластика</h1>
        </div>

        {/* Основний контент */}
        <div className={styles.content}>
          {/* Ліва частина */}
          <div className={styles.textSection}>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitBullet}>•</span>
                <span className={styles.benefitText}>Бажаний об`єм</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitBullet}>•</span>
                <span className={styles.benefitText}>Ідеальна форма</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitBullet}>•</span>
                <span className={styles.benefitText}>Довічний результат</span>
              </div>
            </div>
          </div>

          {/* Права частина */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/breast-augmento/cartca5-removebg-preview.png"
                alt="Імплантати"
                fill
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Опис */}
        <div className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            <p className={styles.descriptionParagraph}>
              Збільшення грудей (мамопластика) — це сучасна хірургічна процедура, що дозволяє досягти бажаного об`єму та
              форми грудей за допомогою високоякісних імплантатів. Завдяки новітнім технологіям і матеріалам результат
              виглядає максимально природно та зберігається на довгі роки.
            </p>
            <p className={styles.descriptionParagraph}>
              Ми застосовуємо індивідуальний підхід до кожної пацієнтки, враховуючи її анатомічні особливості, побажання
              та спосіб життя, щоб досягти найкращого естетичного результату. У своїй роботі використовуємо лише сучасні
              імплантати, які забезпечують природний вигляд і комфортні відчуття. Особливу увагу приділяємо безпеці
              пацієнтки та зведенню до мінімуму періоду відновлення.
            </p>
            <p className={styles.descriptionParagraph}>
              Перед операцією проводиться детальна консультація, під час якої хірург разом із пацієнткою підбирає
              оптимальний розмір, форму й тип імплантатів, а також обговорюються всі аспекти процедури та відновлення.
              Наша мета — не лише покращити зовнішність, а й підвищити впевненість у собі та якість життя кожної жінки.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreastAugmentation
