"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import styles from "./OttoFAQ.module.css"
import OttoFAQGallery, { type GalleryImage } from "./OttoFAQGallery"

interface OttoFAQProps {
  backgroundColor?: string
}

interface FAQItem {
  id: number
  question: string
  answer: React.ReactNode
  additionalInfo?: React.ReactNode
  images: GalleryImage[]
}

export default function OttoFAQ({ backgroundColor = "#f0f9ff" }: OttoFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Дані для FAQ з галереями
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Які проблеми вирішує пластика вух?",
      answer: (
        <div className={styles.answerContent}>
          <p>
            Отопластика — це естетична хірургічна процедура, спрямована на усунення вроджених або набутих дефектів
            вушних раковин.
          </p>
          <p>Вона дозволяє:</p>
          <ul className={styles.bulletList}>
            <li>🔹 виправити клаповухість;</li>
            <li>🔹 змінити форму мочки або відновити її цілісність;</li>
            <li>🔹 реконструювати природній рельєф вуха у випадках післятравматичних деформацій.</li>
          </ul>
          <h4 className={styles.subTitle}>З якого віку можна робити отопластику?</h4>
          <p>Операція доступна пацієнтам будь-якого віку, однак у дітей вона потребує особливого підходу.</p>
          <p>Рекомендований вік — від 6 років, адже:</p>
          <ul className={styles.bulletList}>
            <li>✔️ до цього моменту завершене формування вушної раковини;</li>
            <li>✔️ можна чітко оцінити ступінь клаповухості.</li>
          </ul>
          <div className={styles.importantNote}>
            <p className={styles.noteTitle}>🧠 Важливо:</p>
            <p>
              Дитина повинна усвідомлювати суть змін і прагнути покращити зовнішність. Лише тоді процес пройде спокійно,
              без психологічного стресу.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: "/images/ottoFAQ/ottoFAQ.jpg",
          alt: "Клаповухість до корекції",
          width: 500,
          height: 400,
          title: "Клаповухість до корекції",
        },
        {
          src: "/images/ottoFAQ/ottoFAQ1.jpg",
          alt: "Процес корекції вушної раковини",
          width: 500,
          height: 400,
          title: "Процес корекції вушної раковини",
        },
        {
          src: "/images/ottoFAQ/ottoFAQ3.jpg",
          alt: "Результат після отопластики",
          width: 500,
          height: 400,
          title: "Результат після отопластики",
        },
      ],
    },
    {
      id: 2,
      question: "Як проходить операція з отопластики (пластики вух)?",
      answer: (
        <div className={styles.answerContent}>
          <p>
            ✅ Найчастіше отопластика виконується під місцевою анестезією — амбулаторно, без потреби у госпіталізації.
            Уже через 1 годину після втручання пацієнт може їхати додому з індивідуальними рекомендаціями.
          </p>
          <p>
            За бажанням пацієнта можливе проведення операції під загальним наркозом. У клініці стандартно застосовується
            інгаляційний наркоз (відомий як «газовий»).
          </p>
          <h4 className={styles.subTitle}>Хід операції:</h4>
          <ul className={styles.bulletList}>
            <li>🔹 Пластичний хірург формує правильне положення хряща, при необхідності видаляючи його частину;</li>
            <li>
              🔹 Вушна раковина фіксується у новій позиції за допомогою внутрішніх швів та спеціального косметичного
              шва;
            </li>
            <li>
              🔹 Післяопераційний рубець — малопомітний, розташований позаду вуха, повністю прихований та з часом
              набуває кольору шкіри.
            </li>
          </ul>
          <p>
            📌 Операція проходить максимально делікатно, з естетичним результатом та мінімальними слідами втручання.
          </p>
        </div>
      ),
      images: [
        {
          src: "/images/ottoFAQ/ottoFAQ9.jpg",
          alt: "Підготовка до операції",
          width: 400,
          height: 300,
          title: "Підготовка до операції",
        },
        {
          src: "/images/ottoFAQ/ottoFAQ4.jpg",
          alt: "Процес хірургічного втручання",
          width: 400,
          height: 300,
          title: "Процес хірургічного втручання",
        },
        {
          src: "/images/ottoFAQ/ottoFAQ6.jpg",
          alt: "Накладання швів",
          width: 400,
          height: 300,
          title: "Накладання швів",
        },
      ],
    },
    {
      id: 3,
      question: "Скільки триває операція з пластики вух?",
      answer: (
        <div className={styles.answerContent}>
          <p>🔹 Завдяки використанню сучасних хірургічних методик, операція займає всього 30–40 хвилин.</p>
          <p>🔹 Тривалість може варіюватися в залежності від індивідуальних анатомічних особливостей пацієнта.</p>
        </div>
      ),
      images: [
        {
          src: "/images/ottoFAQ/ottoFAQ14.jpg",
          alt: "Операційна",
          width: 400,
          height: 300,
          title: "Операційна",
        },
      ],
    },
  ]

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className={styles.ottoFAQ} style={{ backgroundColor }}>
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
                      <OttoFAQGallery images={item.images} />
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
