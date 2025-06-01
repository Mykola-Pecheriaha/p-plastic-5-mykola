"use client"
import type React from "react"
import { useState, useEffect } from "react"
import styles from "./BreastLiftPreparation.module.css"
import PreparationGallery from "./PreparationGallery"

// Винесіть ці масиви за межі компонента
const GALLERY_IMAGES = [
  {
    src: "/images/breast-preparation/breast-preparation10.jpg",
    alt: "Підготовка до підтяжки грудей - обстеження",
    width: 400,
    height: 600,
    title: "Обстеження",
  },
  {
    src: "/images/breast-preparation/breast-preparation9.jpg",
    alt: "УЗД молочних залоз",
    width: 400,
    height: 600,
    title: "УЗД",
  },
  {
    src: "/images/breast-preparation/breast-preparation11.jpg",
    alt: "Консультація спеціалістів",
    width: 400,
    height: 600,
    title: "Консультація",
  },
  {
    src: "/images/breast-preparation/breast6.bmp",
    alt: "Аналізи та підготовка",
    width: 400,
    height: 600,
    title: "Аналізи",
  },
]

const FALLBACK_IMAGES = [
  {
    src: "/placeholder.svg?height=600&width=400&text=Підготовка+1",
    alt: "Підготовка до операції",
    width: 400,
    height: 600,
    title: "Підготовка 1",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підготовка+2",
    alt: "Підготовка до операції",
    width: 400,
    height: 600,
    title: "Підготовка 2",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підготовка+3",
    alt: "Підготовка до операції",
    width: 400,
    height: 600,
    title: "Підготовка 3",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підготовка+4",
    alt: "Підготовка до операції",
    width: 400,
    height: 600,
    title: "Підготовка 4",
  },
]

interface BreastLiftPreparationProps {
  backgroundColor?: string
}

const BreastLiftPreparation: React.FC<BreastLiftPreparationProps> = ({
  backgroundColor = "#f0f9ff", // Світло-блакитний за замовчуванням
}) => {
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
  }, [])

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Підготовка до операції підтяжки грудей та корекції сосків</h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <div className={styles.textBlock}>
              <div className={styles.introSection}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleIcon}>🔬</span>
                  Необхідні обстеження
                </h3>
                <p className={styles.paragraph}>
                  При підготовці до операції підтяжки грудей та корекції сосково-ареолярної ділянки потрібно провести
                  ряд обстежень пацієнтки для забезпечення безпеки та ефективності втручання.
                </p>
              </div>

              <h4 className={styles.subTitle}>
                <span className={styles.subIcon}>📋</span>
                До обстеження входить:
              </h4>

              <ul className={styles.examList}>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>УЗД молочних залоз</span>
                </li>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>Мамографія (за потреби)</span>
                </li>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>Огляд профільних спеціалістів</span>
                </li>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>Загальні та спеціальні аналізи</span>
                </li>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>ЕКГ</span>
                </li>
                <li className={styles.examItem}>
                  <span className={styles.bulletPoint}>🔹</span>
                  <span className={styles.examText}>Флюорографія (ФОГК)</span>
                </li>
              </ul>

              <div className={styles.additionalSection}>
                <p className={styles.paragraph}>У деяких випадках рекомендуються:</p>
                <p className={styles.paragraph}>УЗД молочних залоз та консультація мамолога.</p>
              </div>

              <div className={styles.noteBox}>
                <span className={styles.noteIcon}>📌</span>
                <div className={styles.noteContent}>
                  <h5 className={styles.noteTitle}>Для іногородніх пацієнтів</h5>
                  <p className={styles.noteText}>
                    Передбачена можливість поєднати консультацію, обстеження та здачу аналізів в один день, а також
                    провести операцію під час того ж візиту. Це значно економить час і є зручним варіантом для пацієнтів
                    з інших міст.
                  </p>
                </div>
              </div>

              <div className={styles.recommendationsSection}>
                <h4 className={styles.subTitle}>
                  <span className={styles.subIcon}>⚠️</span>
                  Рекомендації перед операцією
                </h4>
                <p className={styles.paragraph}>
                  Рекомендується відмовитися від куріння та вживання алкоголю за 2 тижні до операції, а також повідомити
                  фахівця про препарати, що регулярно приймаються. Особливу увагу слід звернути на прийом препаратів, що
                  впливають на згортання крові.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.galleryColumn}>{imagesLoaded && <PreparationGallery images={images} />}</div>
        </div>
      </div>
    </section>
  )
}

export default BreastLiftPreparation
