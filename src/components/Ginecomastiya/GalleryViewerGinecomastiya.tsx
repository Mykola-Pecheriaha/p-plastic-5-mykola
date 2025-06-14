"use client"
import type React from "react"
import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import styles from "./GalleryViewerGinecomastiya.module.css"

interface BeforeAfterImage {
  before: {
    src: string
    alt: string
  }
  after: {
    src: string
    alt: string
  }
}

interface GalleryViewerGinecomastiyaProps {
  images: BeforeAfterImage[]
  initialIndex?: number
}

const GalleryViewerGinecomastiya: React.FC<GalleryViewerGinecomastiyaProps> = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  if (!isClient || images.length === 0) {
    return <div className={styles.loading}>Завантаження...</div>
  }

  const currentImage = images[currentIndex]

  return (
    <div className={styles.galleryWrapper}>
      <div className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ""}`}>
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton} aria-label="Закрити повноекранний режим">
            ✕
          </button>
        )}

        <div className={styles.mainContent}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>

          <div className={styles.imagesContainer}>
            <div className={styles.sideBySideWrapper}>
              {/* Зображення "До" */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentImage.before.src || "/placeholder.svg?height=500&width=400&query=До"}
                    alt={currentImage.before.alt}
                    width={400}
                    height={500}
                    className={styles.galleryImage}
                    priority={true}
                  />
                  <div className={styles.imageLabel}>До</div>
                </div>
              </div>

              {/* Зображення "Після" */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentImage.after.src || "/placeholder.svg?height=500&width=400&query=Після"}
                    alt={currentImage.after.alt}
                    width={400}
                    height={500}
                    className={styles.galleryImage}
                    priority={true}
                  />
                  <div className={styles.imageLabel}>Після</div>
                </div>
              </div>
            </div>

            {!isFullscreen && <div className={styles.patientInfo}>Пацієнт №{currentIndex + 1}</div>}
          </div>

          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>

        {/* Індикатори та кнопка розгортання */}
        <div className={styles.controls}>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          {!isFullscreen && (
            <button onClick={toggleFullscreen} className={styles.fullscreenButton} aria-label="Повноекранний режим">
              ⛶
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryViewerGinecomastiya
