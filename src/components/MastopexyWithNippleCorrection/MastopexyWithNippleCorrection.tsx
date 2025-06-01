"use client"
import type React from "react"
import Image from "next/image"
import styles from "./MastopexyWithNippleCorrection.module.css"

interface MastopexyWithNippleCorrectionProps {
  backgroundColor?: string
}

const MastopexyWithNippleCorrection: React.FC<MastopexyWithNippleCorrectionProps> = ({
  backgroundColor = "#e8f5e8", // Світло-зелений за замовчуванням
}) => {
  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Підтяжка грудей і корекція сосків та ареоли</h1>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <div className={styles.benefitsContainer}>
              <h2 className={styles.benefitsTitle}>
                <span className={styles.titleIcon}>✨</span>
                Переваги процедури
              </h2>
              <ul className={styles.benefitsList}>
                <li className={styles.benefitItem}>
                  <span className={styles.bulletPoint}>✓</span>
                  <span className={styles.benefitText}>Бажаний об`єм</span>
                </li>
                <li className={styles.benefitItem}>
                  <span className={styles.bulletPoint}>✓</span>
                  <span className={styles.benefitText}>Ідеальна форма</span>
                </li>
                <li className={styles.benefitItem}>
                  <span className={styles.bulletPoint}>✓</span>
                  <span className={styles.benefitText}>Реабілітація до 30 днів</span>
                </li>
                <li className={styles.benefitItem}>
                  <span className={styles.bulletPoint}>✓</span>
                  <span className={styles.benefitText}>Природний результат</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/mastopexy-with-nipple-correction/plastychna-khirurhiy2-removebg-preview.png"
                alt="Підтяжка грудей і корекція сосків та ареоли"
                width={600}
                height={450}
                className={styles.image}
                priority
                onError={e => {
                  e.currentTarget.src = "/placeholder.svg?height=450&width=600"
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              Красиві груди — синонім жіночності, впевненості та внутрішньої гармонії. З віком, після вагітності,
              грудного вигодовування або змін у вазі, форма молочної залози втрачає свою пружність, а сосок і ареола —
              чіткі естетичні пропорції.
            </p>
            <p className={styles.paragraph}>
              Підтяжка грудей (мастопексія) дозволяє повернути молочній залозі гармонійний контур і природну форму. У
              поєднанні з корекцією сосково-ареолярного комплексу можна досягти максимально збалансованого і
              привабливого результату. Операція не лише усуває ознаки опущення грудей, а й вдосконалює зовнішній вигляд
              сосків та ареоли — їх форму, розмір і симетрію.
            </p>
            <p className={styles.paragraph}>
              Сучасні хірургічні методики дозволяють проводити ці втручання безпечно, ефективно та з природним
              результатом, підкреслюючи красу кожної жінки.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MastopexyWithNippleCorrection
