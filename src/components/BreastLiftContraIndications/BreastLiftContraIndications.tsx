"use client"
import type React from "react"
import { useState, useEffect } from "react"
import styles from "./BreastLiftContraIndications.module.css"
import ContraIndicationsGallery from "./ContraIndicationsGallery"

// Винесіть ці масиви за межі компонента (перед визначенням компонента)
const GALLERY_IMAGES = [
  {
    src: "/images/breast-contraindications/blefaroContraindicatio1.jpg",
    alt: "Протипокази до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Протипокази",
  },
]

const FALLBACK_IMAGES = [
  {
    src: "/placeholder.svg?height=600&width=400&text=Протипоказання+1",
    alt: "Протипокази до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Протипокази",
  },
]

interface BreastLiftContraIndicationsProps {
  backgroundColor?: string
}

const BreastLiftContraIndications: React.FC<BreastLiftContraIndicationsProps> = ({
  backgroundColor = "#e8f5e8", // Світло-зелений за замовчуванням
}) => {
  // Дані для галереї з повною інформацією
  // const galleryImages = [
  //   {
  //     src: "/images/breast-contraindications/blefaroContraindicatio1.jpg",
  //     alt: "Протипокази до підтяжки грудей",
  //     width: 400,
  //     height: 600,
  //     title: "Протипокази",
  //   },
  // ]

  // // Запасні зображення
  // const fallbackImages = [
  //   {
  //     src: "/placeholder.svg?height=600&width=400&text=Протипоказання+1",
  //     alt: "Протипокази до підтяжки грудей",
  //     width: 400,
  //     height: 600,
  //     title: "Протипокази",
  //   },
  // ]

  const [images, setImages] = useState(GALLERY_IMAGES)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Перевірка доступності зображень при монтуванні компонента
  useEffect(() => {
    const checkImagesExist = async () => {
      try {
        const imagePromises = GALLERY_IMAGES.map(
          imageData =>
            new Promise(resolve => {
              const img = new window.Image()
              img.onload = () => resolve(true)
              img.onerror = () => resolve(false)
              img.src = imageData.src
            })
        )
        const results = await Promise.all(imagePromises)
        const allImagesExist = results.every(Boolean)
        if (!allImagesExist) {
          setImages(FALLBACK_IMAGES)
        }
        setImagesLoaded(true)
      } catch (error) {
        console.error("Помилка перевірки зображень:", error)
        setImages(FALLBACK_IMAGES)
        setImagesLoaded(true)
      }
    }
    checkImagesExist()
  }, []) // Тепер масив залежностей може бути порожнім

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Протипокази до операції підтяжки грудей і корекції сосків</h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <div className={styles.textBlock}>
              <div className={styles.introSection}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleIcon}>⚠️</span>
                  Основні протипокази
                </h3>
                <p className={styles.paragraph}>
                  Операція з підтяжки грудей має низку протипоказань, які необхідно враховувати перед прийняттям рішення
                  про хірургічне втручання:
                </p>
              </div>

              <ul className={styles.contraindicationsList}>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>вік пацієнтки до 18 років</span>
                </li>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>
                    хронічні захворювання (гіпертонія, цукровий діабет, захворювання крові)
                  </span>
                </li>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>гормональна дисфункція</span>
                </li>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>
                    пухлинні утворення (доброякісні та злоякісні новоутворення)
                  </span>
                </li>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>схильність до формування рубців</span>
                </li>
                <li className={styles.contraindicationItem}>
                  <span className={styles.warningIcon}>🚫</span>
                  <span className={styles.contraindicationText}>надлишкова маса тіла</span>
                </li>
              </ul>

              <div className={styles.additionalInfo}>
                <h4 className={styles.subTitle}>
                  <span className={styles.infoIcon}>ℹ️</span>
                  Тимчасові протипокази
                </h4>
                <p className={styles.paragraph}>
                  Також втручання варто відкласти при гострих респіраторних захворюваннях, що супроводжуються високою
                  температурою тіла. Планувати корекцію рекомендується не раніше ніж через 6 місяців після завершення
                  лактації. Груди повинні набути остаточної форми, щоб фахівець міг бачити всю картину та дати
                  відповідні рекомендації.
                </p>
                <p className={styles.paragraph}>
                  <strong>
                    Рішення про хірургічне втручання приймає спеціаліст на підставі результатів обстеження та аналізів.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.galleryColumn}>{imagesLoaded && <ContraIndicationsGallery images={images} />}</div>
        </div>
      </div>
    </section>
  )
}

export default BreastLiftContraIndications
