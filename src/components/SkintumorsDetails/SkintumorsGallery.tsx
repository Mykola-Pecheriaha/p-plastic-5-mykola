"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./SkintumorsGallery.module.css"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

const defaultImages: GalleryImage[] = [
  {
    src: "/images/skintumors/skintumors2.jpg",
    alt: "Плоскоклітинна карценома",
    width: 800,
    height: 600,
    title: "Плоскоклітинна карценома",
  },
  {
    src: "/images/skintumors/skintumors3.jpg",
    alt: "Кератоакантома",
    width: 800,
    height: 600,
    title: "Кератоакантома",
  },
  {
    src: "/images/skintumors/skintumors4.jpg",
    alt: "Меланома",
    width: 800,
    height: 600,
    title: "Меланома",
  },
  {
    src: "/images/skintumors/skintumors1.jpg",
    alt: "Базальноклітинна карцинома",
    width: 800,
    height: 600,
    title: "Базальноклітинна карцинома",
  },
  {
    src: "/images/skintumors/dermatoskop.jpg",
    alt: "Дермоскопія",
    width: 800,
    height: 600,
    title: "Дермоскопія",
  },
  {
    src: "/images/skintumors/skintumors5.jpg",
    alt: "Ознаки переродження в злоякісне утворення",
    width: 800,
    height: 600,
    title: "Ознаки переродження в злоякісне утворення",
  },
]

interface SkintumorsGalleryProps {
  images?: GalleryImage[]
}

export function SkintumorsGallery({ images = defaultImages }: SkintumorsGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(images.length).fill(false))
    setCurrentIndex(0) // Скидаємо індекс при зміні зображень
  }, [images])

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
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
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

  // Перевіряємо наявність зображень
  if (!images || images.length === 0) {
    return <div className={styles.noImages}>Зображення недоступні</div>
  }

  const currentImage = images[currentIndex]

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
            src={currentImage.src || "/placeholder.svg?height=600&width=800&query=skin tumor"}
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
            {images.map((_, index) => (
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
                src={currentImage.src || "/placeholder.svg?height=600&width=800&query=skin tumor"}
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
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg?height=75&width=100&query=skin tumor thumbnail"}
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
              {images.map((_, index) => (
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

export default SkintumorsGallery
