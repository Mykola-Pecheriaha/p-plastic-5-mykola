"use client"
import type React from "react"
import { useState, useEffect } from "react"
import styles from "./TextBlock.module.css"

interface TextBlockProps {
  text: string
}

export const TextBlock: React.FC<TextBlockProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(false)
  const [truncatedText, setTruncatedText] = useState("")
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Визначаємо, чи потрібно обрізати текст
    if (text.length > 100) {
      setTruncatedText(text.substring(0, 300) + "...")
      setShowButton(true)
    } else {
      setTruncatedText(text)
      setShowButton(false)
    }
  }, [text])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  // Функція для збереження форматування тексту
  const formatText = (content: string) => {
    return content.split("\n").map((line, index) => (
      <p key={index} className={styles.paragraph}>
        {line}
      </p>
    ))
  }

  return (
    <div className={styles.textBlock}>
      <div className={styles.textContent}>{expanded ? formatText(text) : formatText(truncatedText)}</div>
      {showButton && (
        <button onClick={toggleExpanded} className={styles.toggleButton}>
          {expanded ? "Показати менше" : "Показати більше"}
        </button>
      )}
    </div>
  )
}

export default TextBlock
