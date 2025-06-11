"use client"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import styles from "./TestsGallery.module.css"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface TestsGalleryProps {
  images?: GalleryImage[]
}

const DEFAULT_IMAGES: GalleryImage[] = [
  {
    src: "/images/carpale-details/carpale30.jpg",
    alt: "Тест Тінеля",
    width: 600,
    height: 400,
    title: "Тест Тінеля",
  },
  {
    src: "/images/carpale-details/carpale31.jpg",
    alt: "Тест Фалена",
    width: 600,
    height: 400,
    title: "Тест Фалена",
  },
  {
    src: "/images/carpale-details/carpale32.jpg",
    alt: "ЕМГ та тест нервової провідності",
    width: 600,
    height: 400,
    title: "ЕМГ та тест нервової провідності",
  },
  {
    src: "/images/carpale-details/carpale33.jpg",
    alt: "ЕМГ та тест нервової провідності",
    width: 600,
    height: 400,
    title: "ЕМГ та тест нервової провідності",
  },
]

export function TestsGallery({ images }: TestsGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  const galleryImages = useMemo(() => images || DEFAULT_IMAGES, [images])

  useEffect(() => {
    setImagesLoaded(new Array(galleryImages.length).fill(false))
    setCurrentIndex(0)
  }, [galleryImages.length])

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
    setCurrentIndex(prevIndex => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
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

  if (!galleryImages || galleryImages.length === 0) {
    return <div className={styles.noImages}>Зображення недоступні</div>
  }

  const currentImage = galleryImages[currentIndex]

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
            {galleryImages.map((_, index) => (
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
                {galleryImages.map((image, index) => (
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
              {galleryImages.map((_, index) => (
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

export default TestsGallery
