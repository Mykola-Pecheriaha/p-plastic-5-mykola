"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./PararectalTerapyGallery.module.css"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface PararectalTerapyGalleryProps {
  images?: GalleryImage[]
}

// Зображення за замовчуванням для PararectalTerapyGallery
const defaultImages: GalleryImage[] = [
  {
    src: "/images/pararectal/pararecta20.jpg",
    alt: "Консервативне лікування параректальної нориці",
    width: 600,
    height: 400,
    title: "Консервативні методи лікування параректальної нориці",
  },
  {
    src: "/images/pararectal/pararecta18.jpg",
    alt: "Хірургічне лікування параректальної нориці",
    width: 600,
    height: 400,
    title: "Хірургічні методи лікування параректальної нориці",
  },
  {
    src: "/images/pararectal/pararecta22.jpg",
    alt: "Лазерне лікування параректальної нориці",
    width: 600,
    height: 400,
    title: "Лазерна терапія параректальної нориці",
  },
  {
    src: "/images/pararectal/pararectal9.jpg",
    alt: "Післяопераційний догляд",
    width: 600,
    height: 400,
    title: "Післяопераційний період та реабілітація",
  },
]

export function PararectalTerapyGallery({ images = defaultImages }: PararectalTerapyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false))
    setCurrentIndex(0)
  }, [images])

  useEffect(() => {
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

  if (!images || images.length === 0) {
    return <div className={styles.noImages}>Зображення недоступні</div>
  }

  const currentImage = images[currentIndex]

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
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
                {images.map((image, index) => (
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

export default PararectalTerapyGallery
