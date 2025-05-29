"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./SideByBreastGallery.module.css"

interface GalleryImage {
  src: string
  alt: string
  width?: number
  height?: number
}

interface SideByBreastGalleryProps {
  images: GalleryImage[]
}

export function SideByBreastGallery({ images }: SideByBreastGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false))
  }, [images.length])

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
        {images.length > 1 && (
          <>
            <button className={styles.navButton} onClick={prevImage} aria-label="Попереднє зображення">
              &#10094;
            </button>
            <button
              className={`${styles.navButton} ${styles.navButtonNext}`}
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
          </>
        )}

        <div className={styles.imageContainer}>
          {!imagesLoaded[currentIndex] && <div className={styles.imageLoader}>Завантаження...</div>}
          <Image
            src={currentImage.src || "/placeholder.svg?height=400&width=600&query=breast surgery"}
            alt={currentImage.alt}
            width={currentImage.width || 600}
            height={currentImage.height || 400}
            className={styles.image}
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>

        <div className={styles.bottomPanel}>
          {images.length > 1 && (
            <div className={styles.indicators}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          )}
          <button className={styles.fullscreenButton} onClick={openFullscreen} aria-label="Відкрити на повний екран">
            ⛶
          </button>
        </div>
      </div>

      {fullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeFullscreen} aria-label="Закрити">
              &times;
            </button>

            {images.length > 1 && (
              <>
                <button className={styles.fullscreenNavButton} onClick={prevImage} aria-label="Попереднє зображення">
                  &#10094;
                </button>
                <button
                  className={`${styles.fullscreenNavButton} ${styles.fullscreenNavButtonNext}`}
                  onClick={nextImage}
                  aria-label="Наступне зображення"
                >
                  &#10095;
                </button>
              </>
            )}

            <div className={styles.fullscreenImageContainer}>
              <Image
                src={currentImage.src || "/placeholder.svg?height=600&width=800&query=breast surgery"}
                alt={currentImage.alt}
                width={currentImage.width || 800}
                height={currentImage.height || 600}
                className={styles.fullscreenImage}
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
            </div>

            {images.length > 1 && (
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
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SideByBreastGallery
