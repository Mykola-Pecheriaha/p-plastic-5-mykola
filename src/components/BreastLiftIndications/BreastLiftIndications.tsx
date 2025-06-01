"use client"
import type React from "react"
import { useState, useEffect } from "react"
import styles from "./BreastLiftIndications.module.css"
import BreastLiftGallery from "./BreastLiftGallery"

interface BreastLiftIndicationsProps {
  backgroundColor?: string
}

// Дані для галереї з повною інформацією
const galleryImages = [
  {
    src: "/images/breast-lift/removalInfo12.jpg",
    alt: "Показання до підтяжки грудей - птоз",
    width: 400,
    height: 600,
    title: "Птоз грудей",
  },
  {
    src: "/images/breast-lift/removalInfo30.jpg",
    alt: "Зміни після пологів та грудного вигодовування",
    width: 400,
    height: 600,
    title: "Після пологів",
  },
  {
    src: "/images/breast-lift/removalInfo35.jpg",
    alt: "Асиметрія молочних залоз",
    width: 400,
    height: 600,
    title: "Асиметрія",
  },
  {
    src: "/images/breast-lift/removalInfo46.jpg",
    alt: "Результат після різкого схуднення",
    width: 400,
    height: 600,
    title: "Після схуднення",
  },
]

// Запасні зображення
const fallbackImages = [
  {
    src: "/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+1",
    alt: "Показання до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Показання 1",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+2",
    alt: "Показання до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Показання 2",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+3",
    alt: "Показання до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Показання 3",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+4",
    alt: "Показання до підтяжки грудей",
    width: 400,
    height: 600,
    title: "Показання 4",
  },
]

const BreastLiftIndications: React.FC<BreastLiftIndicationsProps> = ({
  backgroundColor = "#f0f9ff", // Світло-блакитний за замовчуванням
}) => {
  const [images, setImages] = useState(galleryImages)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Перевірка доступності зображень при монтуванні компонента
  useEffect(() => {
    const checkImagesExist = async () => {
      try {
        const imagePromises = galleryImages.map(
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
          setImages(fallbackImages)
        }
        setImagesLoaded(true)
      } catch (error) {
        console.error("Помилка перевірки зображень:", error)
        setImages(fallbackImages)
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
        <h2 className={styles.mainTitle}>Показання до підтяжки грудей і корекції сосків</h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <div className={styles.textBlock}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>📋</span>
                Покази до підтяжки молочних залоз та корекції ареоли і соска
              </h3>

              <h4 className={styles.subTitle}>Основні показання до операції:</h4>

              <ul className={styles.indicationsList}>
                <li className={styles.indicationItem}>
                  <span className={styles.bulletPoint}>1</span>
                  <div className={styles.indicationContent}>
                    <strong>Птоз (опущення грудей).</strong> З віком тканини втрачають еластичність, шкіра в`яне, бюст
                    втрачає форму. Підтяжка ефективно вирішує цю вікову проблему, повертаючи пружність і естетику.
                  </div>
                </li>
                <li className={styles.indicationItem}>
                  <span className={styles.bulletPoint}>2</span>
                  <div className={styles.indicationContent}>
                    <strong>Зміни після пологів та грудного вигодовування.</strong> Залозиста тканина значно
                    збільшується, а після лактації — зменшується, залишаючи обвислу шкіру. Підтяжка допомагає молодим
                    мамам повернути форму грудей.
                  </div>
                </li>
                <li className={styles.indicationItem}>
                  <span className={styles.bulletPoint}>3</span>
                  <div className={styles.indicationContent}>
                    <strong>Асиметрія.</strong> Операція дозволяє вирівняти розмір та форму молочних залоз.
                  </div>
                </li>
                <li className={styles.indicationItem}>
                  <span className={styles.bulletPoint}>4</span>
                  <div className={styles.indicationContent}>
                    <strong>Різке схуднення.</strong> Коливання ваги змінюють об`єм грудей, а надлишок шкіри
                    залишається. Підтяжка повертає пружність і привабливість.
                  </div>
                </li>
                <li className={styles.indicationItem}>
                  <span className={styles.bulletPoint}>5</span>
                  <div className={styles.indicationContent}>
                    <strong>Косметичні недоліки сосків та ареоли.</strong> Корекція дозволяє покращити форму, розмір і
                    зовнішній вигляд.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryColumn}>{imagesLoaded && <BreastLiftGallery images={images} />}</div>
        </div>
      </div>
    </section>
  )
}

export default BreastLiftIndications
