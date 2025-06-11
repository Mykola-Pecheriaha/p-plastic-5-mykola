"use client"

import type React from "react"
import { useState } from "react"
import styles from "./FaqAccordion.module.css"

interface FaqItem {
  question: string
  answer: React.ReactNode
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className={styles.accordionTitle}>{item.question}</h3>
            <span className={styles.accordionIcon}>{activeIndex === index ? "−" : "+"}</span>
          </div>
          <div className={`${styles.accordionBody} ${activeIndex === index ? styles.open : ""}`}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}
