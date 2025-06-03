"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import GalleryViewerGinecomastiya from "./GalleryViewerGinecomastiya"
import styles from "./Ginecomastiya.module.css"

interface GinecomastiyaProps {
  backgroundColor?: string
}

const Ginecomastiya: React.FC<GinecomastiyaProps> = ({
  backgroundColor = "#e8f5e8", // Світло-зелений за замовчуванням
}) => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  const benefits = ["Бажана фігура", "Швидка реабілітація", "Упевненість в собі"]

  const galleryImages = [
    {
      before: {
        src: "/images/gynecomastia/ginecomastiya7.jpg",
        alt: "Гінекомастія до операції - пацієнт 1",
      },
      after: {
        src: "/images/gynecomastia/ginecomastiya8.jpg",
        alt: "Гінекомастія після операції - пацієнт 1",
      },
    },
  ]

  // Перевірка доступності зображень
  useEffect(() => {
    const checkImageAvailability = (src: string) => {
      if (typeof window !== "undefined") {
        const img = new window.Image()
        img.onload = () => setImagesLoaded(prev => ({ ...prev, [src]: true }))
        img.onerror = () => setImagesLoaded(prev => ({ ...prev, [src]: false }))
        img.src = src
      }
    }

    // Перевірка головного зображення
    checkImageAvailability("/images/gynecomastia/ginecomas2-removebg-preview.png")

    // Перевірка зображень галереї
    galleryImages.forEach(imageSet => {
      checkImageAvailability(imageSet.before.src)
      checkImageAvailability(imageSet.after.src)
    })
  })

  // Функція для отримання безпечного шляху до зображення
  const getSafeImageSrc = (src: string) => {
    if (imagesLoaded[src] === false) {
      return `/placeholder.svg?height=400&width=500&query=Гінекомастія`
    }
    return src
  }

  // Створення безпечного масиву зображень для галереї
  const safeGalleryImages = galleryImages.map(imageSet => ({
    before: {
      ...imageSet.before,
      src: getSafeImageSrc(imageSet.before.src),
    },
    after: {
      ...imageSet.after,
      src: getSafeImageSrc(imageSet.after.src),
    },
  }))

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        {/* Заголовок по центру */}
        <h1 className={styles.mainTitle}>Гінекомастія</h1>

        {/* Секція з перевагами та зображенням */}
        <div className={styles.heroSection}>
          <div className={styles.benefitsColumn}>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <span className={styles.bulletPoint}>✓</span>
                  <span className={styles.benefitText}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src={getSafeImageSrc("/images/gynecomastia/ginecomas2-removebg-preview.png") || "/placeholder.svg"}
                alt="Гінекомастія - лікування"
                width={500}
                height={400}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Опис на всю ширину */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            Гінекомастія у чоловіків – аномальне збільшення грудних залоз доброякісного характеру. Порушення часто буває
            спричинене гормональним дисбалансом, а також може стати наслідком набору зайвої ваги. Чоловічі груди стають
            схожими на жіночі молочні залози. Патологія викликає масу комплексів та дискомфорт. Видалення гінекомастії
            передбачає пластичну операцію, яка повертає чоловічому торсу його природні контури.
          </p>
        </div>

        {/* Заголовок галереї по центру */}
        <h2 className={styles.galleryMainTitle}>Приклади робіт До-Після</h2>

        {/* Галерея */}
        <div className={styles.gallerySection}>
          <GalleryViewerGinecomastiya images={safeGalleryImages} />
        </div>
      </div>
    </section>
  )
}

export default Ginecomastiya
