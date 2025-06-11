"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import styles from "./CarpaltReabilGallery.module.css"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface CarpaltReabilGalleryProps {
  images?: GalleryImage[]
}

// Дефолтні зображення для галереї
const DEFAULT_IMAGES: GalleryImage[] = [
  {
    src: "/images/carpal-reabil/carpale48.jpg",
    alt: "Реабілітація після операції",
    width: 800,
    height: 600,
    title: "Відновлення після операції",
  },
  {
    src: "/images/carpal-reabil/carpale46.jpg",
    alt: "Вправи для руки",
    width: 800,
    height: 600,
    title: "Лікувальні вправи",
  },
  {
    src: "/images/carpal-reabil/carpale51.jpg",
    alt: "Шина для зап'ястя",
    width: 800,
    height: 600,
    title: "Підтримуюча шина",
  },
  {
    src: "/images/carpal-reabil/carpale41.jpg",
    alt: "Шина для зап'ястя",
    width: 800,
    height: 600,
    title: "Підтримуюча шина",
  },
]

export function CarpaltReabilGallery({ images }: CarpaltReabilGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  // Використовуємо useMemo для безпечної обробки зображень
  const safeImages = useMemo(() => {
    return Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES
  }, [images])

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(safeImages.length).fill(false))
    setCurrentIndex(0) // Скидаємо індекс при зміні зображень
  }, [safeImages])

  useEffect(() => {
    // Додаємо обробник клавіші Escape для закриття повноекранного режиму
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) {
        setFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fullscreen])

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % safeImages.length)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + safeImages.length) % safeImages.length)
  }

  const openFullscreen = () => {
    setFullscreen(true)
  }

  const closeFullscreen = () => {
    setFullscreen(false)
    setShowThumbnails(false)
  }

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails)
  }

  const selectImage = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded]
    newImagesLoaded[index] = true
    setImagesLoaded(newImagesLoaded)
  }

  const currentImage = safeImages[currentIndex]

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {/* Навігаційні кнопки поверх зображення */}
        <button className={styles.navButton} onClick={prevImage} aria-label="Попереднє зображення">
          &#10094;
        </button>
        <div className={styles.imageContainer}>
          {!imagesLoaded[currentIndex] && <div className={styles.imageLoader}>Завантаження...</div>}
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className={styles.image}
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>
        <button className={styles.navButton} onClick={nextImage} aria-label="Наступне зображення">
          &#10095;
        </button>
        {/* Нижня панель з індикаторами та кнопкою fullscreen */}
        <div className={styles.bottomPanel}>
          <div className={styles.indicators}>
            {safeImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button className={styles.fullscreenButton} onClick={openFullscreen} aria-label="Відкрити на повний екран">
            +
          </button>
        </div>
      </div>
      {/* Повноекранний режим */}
      {fullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeFullscreen} aria-label="Закрити">
              &times;
            </button>
            <button className={styles.thumbnailsButton} onClick={toggleThumbnails} aria-label="Показати мініатюри">
              &#8942;
            </button>
            <button className={styles.fullscreenNavButton} onClick={prevImage} aria-label="Попереднє зображення">
              &#10094;
            </button>
            <div className={styles.fullscreenImageContainer}>
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className={styles.fullscreenImage}
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && <div className={styles.imageTitle}>{currentImage.title}</div>}
            </div>
            <button className={styles.fullscreenNavButton} onClick={nextImage} aria-label="Наступне зображення">
              &#10095;
            </button>
            {showThumbnails && (
              <div className={styles.thumbnailsContainer}>
                {safeImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className={styles.thumbnailImage}
                      onLoad={() => {}}
                      onError={() => {}}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className={styles.fullscreenIndicators}>
              {safeImages.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.fullscreenIndicator} ${
                    index === currentIndex ? styles.activeFullscreenIndicator : ""
                  }`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarpaltReabilGallery
