"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import styles from "./BeforeAfterSlider.module.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  width?: number
  height?: number
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "До процедури",
  afterAlt = "Після процедури",
  width = 600,
  height = 400,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const calculateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const offsetX = clientX - containerRect.left

    // Обмежуємо позицію повзунка в межах контейнера
    let newPosition = (offsetX / containerWidth) * 100
    newPosition = Math.max(0, Math.min(100, newPosition))

    setSliderPosition(newPosition)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      calculateSliderPosition(e.clientX)
    },
    [isDragging, calculateSliderPosition]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return
      calculateSliderPosition(e.touches[0].clientX)
    },
    [isDragging, calculateSliderPosition]
  )

  // Зміщення повзунка вліво на 10%
  const moveSliderLeft = () => {
    setSliderPosition(prev => Math.max(0, prev - 10))
  }

  // Зміщення повзунка вправо на 10%
  const moveSliderRight = () => {
    setSliderPosition(prev => Math.min(100, prev + 10))
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.sliderContainer} style={{ width, height }}>
        {/* Зображення "після" (задній шар) */}
        <div className={styles.imageContainer}>
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={afterAlt}
            width={width}
            height={height}
            className={styles.image}
            sizes={`${width}px`}
          />
        </div>

        {/* Зображення "до" (передній шар з обрізанням) */}
        <div className={styles.beforeImageContainer} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={beforeAlt}
            width={width}
            height={height}
            className={styles.image}
            sizes={`${width}px`}
          />
        </div>

        {/* Повзунок */}
        <div
          className={styles.sliderLine}
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className={styles.sliderHandle}>
            <ChevronLeft className={styles.chevronLeft} size={16} />
            <ChevronRight className={styles.chevronRight} size={16} />
          </div>
        </div>

        {/* Кнопки для керування з клавіатури та доступності */}
        <button
          className={`${styles.controlButton} ${styles.leftButton}`}
          onClick={moveSliderLeft}
          aria-label="Показати більше зображення 'до'"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`${styles.controlButton} ${styles.rightButton}`}
          onClick={moveSliderRight}
          aria-label="Показати більше зображення 'після'"
        >
          <ChevronRight size={20} />
        </button>

        {/* Підписи */}
        <div className={styles.labels}>
          <div className={styles.beforeLabel}>До</div>
          <div className={styles.afterLabel}>Після</div>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
