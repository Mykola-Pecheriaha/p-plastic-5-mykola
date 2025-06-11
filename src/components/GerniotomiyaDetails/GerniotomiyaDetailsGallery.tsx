"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./GerniotomiyaDetailsGallery.module.css"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface GerniotomiyaDetailsGalleryProps {
  images?: GalleryImage[]
}

export function GerniotomiyaDetailsGallery({ images }: GerniotomiyaDetailsGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])

  // Безпечна перевірка зображень
  const safeImages = Array.isArray(images) ? images : []

  useEffect(() => {
    console.log("GerniotomiyaDetailsGallery - images:", images)

    // Безпечна перевірка зображень безпосередньо в useEffect
    const safeImagesInEffect = Array.isArray(images) ? images : []
    console.log("GerniotomiyaDetailsGallery - safeImagesInEffect:", safeImagesInEffect)

    if (safeImagesInEffect.length > 0) {
      setImagesLoaded(new Array(safeImagesInEffect.length).fill(false))
      setCurrentIndex(0)
    } else {
      setImagesLoaded([])
      setCurrentIndex(0)
    }
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

  // Блокування скролу при відкритті повноекранного режиму
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [fullscreen])

  const nextImage = () => {
    if (safeImages.length > 0) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % safeImages.length)
    }
  }

  const prevImage = () => {
    if (safeImages.length > 0) {
      setCurrentIndex(prevIndex => (prevIndex - 1 + safeImages.length) % safeImages.length)
    }
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
    if (index >= 0 && index < safeImages.length) {
      setCurrentIndex(index)
    }
  }

  const handleImageLoad = (index: number) => {
    if (index >= 0 && index < imagesLoaded.length) {
      const newImagesLoaded = [...imagesLoaded]
      newImagesLoaded[index] = true
      setImagesLoaded(newImagesLoaded)
    }
  }

  // Перевірка на наявність зображень
  if (safeImages.length === 0) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.noImages}>
          <p>Зображення недоступні</p>
          <p style={{ fontSize: "0.8em", color: "#666" }}>Debug: images = {JSON.stringify(images)}</p>
        </div>
      </div>
    )
  }

  const currentImage = safeImages[currentIndex]

  // Перевірка на наявність поточного зображення
  if (!currentImage) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.noImages}>
          <p>Поточне зображення недоступне</p>
          <p style={{ fontSize: "0.8em", color: "#666" }}>
            Debug: currentIndex = {currentIndex}, safeImages.length = {safeImages.length}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <button className={styles.navButton} onClick={prevImage} aria-label="Попереднє зображення">
          &#10094;
        </button>
        <div className={styles.imageContainer}>
          {!imagesLoaded[currentIndex] && <div className={styles.imageLoader}>Завантаження...</div>}
          <Image
            src={currentImage.src || "/placeholder.svg?height=600&width=800&query=gerniotomiya details"}
            alt={currentImage.alt || "Зображення галереї"}
            width={currentImage.width || 800}
            height={currentImage.height || 600}
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
      {fullscreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
          }}
          onClick={closeFullscreen}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "120px",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* КНОПКА ЗАКРИТТЯ */}
            <button
              onClick={closeFullscreen}
              aria-label="Закрити"
              style={{
                position: "absolute",
                top: "-80px",
                right: "20px",
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#000",
                border: "3px solid rgba(255, 255, 255, 1)",
                borderRadius: "50%",
                fontSize: "32px",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 9999999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              }}
            >
              ×
            </button>

            {/* КНОПКА МІНІАТЮР */}
            <button
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
              style={{
                position: "absolute",
                top: "-80px",
                right: "90px",
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#000",
                border: "3px solid rgba(255, 255, 255, 1)",
                borderRadius: "50%",
                fontSize: "32px",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 9999999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              }}
            >
              ⋮
            </button>

            <button
              onClick={prevImage}
              aria-label="Попереднє зображення"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 20px",
                zIndex: 10001,
              }}
            >
              &#10094;
            </button>

            <div
              style={{
                position: "relative",
                width: "80%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={currentImage.src || "/placeholder.svg?height=600&width=800&query=gerniotomiya details"}
                alt={currentImage.alt || "Зображення галереї"}
                width={currentImage.width || 800}
                height={currentImage.height || 600}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  {currentImage.title}
                </div>
              )}
            </div>

            <button
              onClick={nextImage}
              aria-label="Наступне зображення"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 20px",
                zIndex: 10001,
              }}
            >
              &#10095;
            </button>

            {showThumbnails && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-100px",
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  overflowX: "auto",
                  zIndex: 10000,
                }}
              >
                {safeImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100px",
                      height: "75px",
                      border: index === currentIndex ? "2px solid white" : "2px solid transparent",
                      borderRadius: "4px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg?height=75&width=100&query=gerniotomiya thumbnail"}
                      alt={image.alt || "Мініатюра"}
                      width={100}
                      height={75}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                zIndex: 10000,
              }}
            >
              {safeImages.map((_, index) => (
                <span
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    margin: "0 3px",
                  }}
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

export default GerniotomiyaDetailsGallery
