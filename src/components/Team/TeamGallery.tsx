"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./TeamGallery.module.css"
import { ZoomIn, ZoomOut, Play, Pause, Maximize, Grid3X3, X, Plus } from "lucide-react"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface TeamGalleryProps {
  images: GalleryImage[]
}

export function TeamGallery({ images }: TeamGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isSlideshow, setIsSlideshow] = useState(false)
  const [isFullscreenMode, setIsFullscreenMode] = useState(false)
  const [showPlusButton, setShowPlusButton] = useState(false)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false))
    setCurrentIndex(0)
  }, [images])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) {
        setFullscreen(false)
        setZoomLevel(1)
        setIsSlideshow(false)
        setIsFullscreenMode(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fullscreen])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSlideshow && fullscreen) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
      }, 3000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isSlideshow, fullscreen, images.length])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (fullscreen && fullscreenRef.current?.contains(e.target as Node)) {
        e.preventDefault()
        e.stopPropagation()
        const delta = e.deltaY > 0 ? -0.3 : 0.3
        setZoomLevel(prev => {
          const newZoom = Math.max(0.5, Math.min(5, prev + delta))
          return newZoom
        })
      }
    }
    if (fullscreen && fullscreenRef.current) {
      const element = fullscreenRef.current
      element.addEventListener("wheel", handleWheel, { passive: false })
      return () => {
        element.removeEventListener("wheel", handleWheel)
      }
    }
  }, [fullscreen])

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    setZoomLevel(1)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
    setZoomLevel(1)
  }

  const openFullscreen = () => {
    setFullscreen(true)
    setZoomLevel(1)
  }

  const closeFullscreen = () => {
    setFullscreen(false)
    setZoomLevel(1)
    setIsSlideshow(false)
    setIsFullscreenMode(false)
  }

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails)
  }

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow)
  }

  const toggleFullscreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreenMode(true)
    } else {
      document.exitFullscreen()
      setIsFullscreenMode(false)
    }
  }

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 5))
  }

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5))
  }

  const selectImage = (index: number) => {
    setCurrentIndex(index)
    setZoomLevel(1)
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
        <div
          className={styles.imageContainer}
          onMouseEnter={() => setShowPlusButton(true)}
          onMouseLeave={() => setShowPlusButton(false)}
        >
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
          {showPlusButton && (
            <button className={styles.plusButton} onClick={openFullscreen} aria-label="Збільшити зображення">
              <Plus size={24} />
            </button>
          )}
        </div>
        <button className={styles.navButton} onClick={nextImage} aria-label="Наступне зображення">
          &#10095;
        </button>

        <div className={styles.bottomPanel}>
          <div className={styles.thumbnailsRow}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                onClick={() => selectImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={60}
                  height={80}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {fullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen} ref={fullscreenRef}>
          <div className={styles.fullscreenContent} onClick={e => e.stopPropagation()}>
            <div className={styles.imageCounter}>
              {currentIndex + 1}/{images.length} | Zoom: {Math.round(zoomLevel * 100)}%
            </div>
            <div className={styles.toolsPanel}>
              <button className={styles.toolButton} onClick={zoomOut} aria-label="Зменшити">
                <ZoomOut size={20} />
              </button>
              <button className={styles.toolButton} onClick={zoomIn} aria-label="Збільшити">
                <ZoomIn size={20} />
              </button>
              <button
                className={`${styles.toolButton} ${isSlideshow ? styles.active : ""}`}
                onClick={toggleSlideshow}
                aria-label={isSlideshow ? "Зупинити слайдшоу" : "Запустити слайдшоу"}
              >
                {isSlideshow ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                className={`${styles.toolButton} ${isFullscreenMode ? styles.active : ""}`}
                onClick={toggleFullscreenMode}
                aria-label="Повноекранний режим браузера"
              >
                <Maximize size={20} />
              </button>
              <button
                className={`${styles.toolButton} ${showThumbnails ? styles.active : ""}`}
                onClick={toggleThumbnails}
                aria-label="Показати/сховати мініатюри"
              >
                <Grid3X3 size={20} />
              </button>
              <button className={styles.toolButton} onClick={closeFullscreen} aria-label="Закрити">
                <X size={20} />
              </button>
            </div>
            <button className={styles.fullscreenNavButton} onClick={prevImage} aria-label="Попереднє зображення">
              &#10094;
            </button>
            <div className={styles.fullscreenImageContainer}>
              <div className={styles.zoomableImageWrapper}>
                <Image
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  width={currentImage.width}
                  height={currentImage.height}
                  className={styles.fullscreenImage}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: "center center",
                  }}
                  onLoad={() => handleImageLoad(currentIndex)}
                  onError={() => handleImageLoad(currentIndex)}
                />
              </div>
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
                    className={`${styles.fullscreenThumbnail} ${index === currentIndex ? styles.activeFullscreenThumbnail : ""}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className={styles.fullscreenThumbnailImage}
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

export default TeamGallery
