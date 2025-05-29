import type React from "react"
import Image from "next/image"
import styles from "./BreastAugmentation.module.css"

interface BreastAugmentationProps {
  backgroundColor?: string
  backgroundImage?: string
}

const BreastAugmentation: React.FC<BreastAugmentationProps> = ({ backgroundColor, backgroundImage }) => {
  // Створюємо стиль для секції
  const sectionStyle: React.CSSProperties = {}

  if (backgroundImage) {
    sectionStyle.backgroundImage = `url('${backgroundImage}')`
    sectionStyle.backgroundSize = "cover"
    sectionStyle.backgroundPosition = "center"
    sectionStyle.backgroundRepeat = "no-repeat"
  } else if (backgroundColor) {
    sectionStyle.backgroundColor = backgroundColor
  }

  return (
    <section className={styles.breastAugmentation} style={sectionStyle}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>Збільшення грудей - мамопластика</h1>
        </div>

        {/* Основний контент - дві рівні частини */}
        <div className={styles.content}>
          {/* Ліва частина - список переваг */}
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

          {/* Права частина - зображення */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/breast-augmento/cartca5-removebg-preview.png"
                alt="Результат збільшення грудей"
                width={500}
                height={600}
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Нижня частина - повний опис */}
        <div className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            <p className={styles.descriptionParagraph}>
              <strong>Збільшення грудей (мамопластика)</strong> — це сучасна хірургічна процедура, що дозволяє досягти
              бажаного об`єму та форми грудей за допомогою високоякісних імплантатів. Завдяки новітнім технологіям і
              матеріалам результат виглядає максимально природно та зберігається на довгі роки.
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
