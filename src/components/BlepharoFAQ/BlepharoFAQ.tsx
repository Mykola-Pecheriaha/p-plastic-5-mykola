"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import styles from "./BlepharoFAQ.module.css"
import BlepharoFAQGallery, { type GalleryImage } from "./BlepharoFAQGallery"

interface BlepharoFAQProps {
  backgroundColor?: string
}

interface FAQItem {
  id: number
  question: string
  answer: React.ReactNode
  images: GalleryImage[]
}

export default function BlepharoFAQ({ backgroundColor = "#f0f9ff" }: BlepharoFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Дані для FAQ з галереями
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Час проведення операції?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.textContent}>
            <p>Тривалість блефаропластики залежить від обсягу втручання та індивідуальних особливостей пацієнта.</p>
            <p className={styles.highlight}> 🔷 Орієнтовна тривалість процедур:</p>
            <ul>
              <li>Верхні повіки – приблизно 30 хвилин</li>
              <li>Нижні повіки – близько 40 хвилин</li>
              <li>Транскон`юнктивальна пластика – лише 15 хвилин</li>
            </ul>
            <p className={styles.highlight}>
              🔷 Якщо виконується кругова блефаропластика (комплексне втручання на верхніх і нижніх повіках), процедура
              триває 1–1,5 години.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio28.jpg",
          alt: "Блефаропластика верхніх повік",
          width: 500,
          height: 400,
          title: "Блефаропластика верхніх повік",
        },
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio31.jpg",
          alt: "Блефаропластика нижніх повік",
          width: 500,
          height: 400,
          title: "Блефаропластика нижніх повік",
        },
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio30.jpg",
          alt: "Кругова блефаропластика",
          width: 500,
          height: 400,
          title: "Кругова блефаропластика",
        },
      ],
    },
    {
      id: 2,
      question: "🧊 Реабілітація та відновлення після підтяжки повік",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.textContent}>
            <p className={styles.highlight}>
              ✅ Одразу після операції на очі накладаються охолоджені гелеві подушечки, що допомагають зменшити
              набряклість.
            </p>
            <p className={styles.highlight}>
              🔷 У клініці пацієнт перебуває під наглядом медичного персоналу приблизно 1 годину, після чого вирушає
              додому з усіма необхідними рекомендаціями.
            </p>
            <p className={styles.highlight}>🔷 Після блефаропластики можуть виникати:</p>
            <ul>
              <li>почервоніння очей</li>
              <li>печіння</li>
              <li>свербіж</li>
              <li>підвищена сльозогінність</li>
            </ul>
            <p className={styles.highlight}>🔷 Для полегшення симптомів призначаються протизапальні очні краплі.</p>
            <p className={styles.highlight}>🚫 Обмеження у відновлювальний період:</p>
            <ul>
              <li>тимчасова відмова від фізичних навантажень</li>
              <li>уникнення сонця та засмаги на відкритому повітрі</li>
              <li>виключення саун, лазень та тренувань на 2 тижні</li>
            </ul>
            <p className={styles.highlight}>🔷 Період відновлення:</p>
            <ul>
              <li>Післяопераційне відновлення триває 10–14 днів</li>
              <li>До звичного ритму роботи можна повернутися через 14 днів</li>
              <li>Кінцевий результат буде помітним через 1 місяць</li>
              <li>Ефект – довгостроковий та стабільний</li>
            </ul>
            <p className={styles.highlight}>🔷 Транскон`юнктивальна блефаропластика забезпечує:</p>
            <ul>
              <li>відновлення за 3 дні</li>
              <li>відсутність синців і набряків</li>
            </ul>
            <p className={styles.highlight}>
              🔷 Повторна корекція, за потреби, можлива не раніше ніж через 10–15 років, залежно від індивідуальних
              особливостей.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio26.jpg",
          alt: "Відновлення після блефаропластики",
          width: 500,
          height: 300,
          title: "Відновлення після блефаропластики",
        },
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio32.jpg",
          alt: "Догляд після операції",
          width: 500,
          height: 300,
          title: "Догляд після операції",
        },
        {
          src: "/images/blepharoFAQ/blepharoplastyPreparatio33.jpg",
          alt: "Результати блефаропластики",
          width: 500,
          height: 300,
          title: "Результати блефаропластики",
        },
      ],
    },
  ]

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className={styles.blepharoFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}> Поширені запитання</h2>
        <div className={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <div key={item.id} className={styles.accordionItem}>
              <button
                className={`${styles.accordionButton} ${expandedIndex === index ? styles.active : ""}`}
                onClick={() => toggleItem(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.accordionIcon}>
                  {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              {expandedIndex === index && (
                <div className={styles.accordionContent}>
                  <div className={styles.expandedContent}>
                    <div className={styles.textSection}>{item.answer}</div>
                    <div className={styles.gallerySection}>
                      <BlepharoFAQGallery images={item.images} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>Зв&apos;язатися з нами</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
