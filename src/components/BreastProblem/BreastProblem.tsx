"use client"

import type React from "react"
import { useState } from "react"
import styles from "./BreastProblem.module.css"
import BreastProblemGallery from "./BreastProblemGallery"

interface BreastProblemProps {
  backgroundColor?: string
}

interface ProblemSection {
  id: string
  title: string
  problem: string
  solution: string
  images: { src: string; alt: string; width?: number; height?: number }[]
}

const BreastProblem: React.FC<BreastProblemProps> = ({ backgroundColor }) => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    if (openSection === id) {
      setOpenSection(null)
    } else {
      setOpenSection(id)
    }
  }

  const problemSections: ProblemSection[] = [
    {
      id: "small-breasts",
      title: "Маленькі груди від природи",
      problem:
        "Маленькі груди можуть бути джерелом дискомфорту для багатьох жінок. Це може впливати на самооцінку та впевненість у собі. Крім того, деякі жінки відчувають труднощі при виборі одягу або купальників.",
      solution:
        'Збільшення грудей за допомогою імплантів може допомогти досягти бажаного розміру та форми. Сучасні методи дозволяють створити природний вигляд та відчуття. Ми підбираємо оптимальний розмір та форму імплантів, враховуючи індивідуальні особливості тіла та побажання пацієнтки. На сьогоднішній день спільнотою пластичних хірургів заборонено проводити збільшення грудей методом інєкції "різних" наповнювачів. Використовуються тільки імпланти з "оболочками"',
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&query=small breasts before surgery",
          alt: "Маленькі груди - проблема",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast augmentation result",
          alt: "Збільшення грудей - результат",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast implants comparison",
          alt: "Порівняння різних типів імплантів",
          width: 400,
          height: 300,
        },
      ],
    },
    {
      id: "asymmetry",
      title: "Асиметричність форми",
      problem:
        "Асиметрія грудей - це поширена проблема, яка може бути помітною або незначною. Вона може виникнути через генетичні фактори, гормональні зміни або в результаті попередніх операцій. Асиметрія може викликати дискомфорт при носінні бюстгальтерів та одягу. Крайня форма асеметрії грудей, це синдром Поланда - різке зменшення однієї груді, або її відсутність.",
      solution:
        "Корекція асиметрії може включати збільшення меншої груді, зменшення більшої, або комбінацію обох підходів для досягнення симетрії. Ми використовуємо індивідуальний підхід, який може включати використання імплантів різного розміру, ліпофілінг або підтяжку грудей для досягнення оптимального результату.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&query=breast asymmetry before",
          alt: "Асиметрія грудей - проблема",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast asymmetry correction result",
          alt: "Корекція асиметрії - результат",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=poland syndrome correction",
          alt: "Корекція синдрому Поланда",
          width: 400,
          height: 300,
        },
      ],
    },
    {
      id: "tubular",
      title: "Тубулярні груди (у формі конуса)",
      problem:
        "Тубулярні груди характеризуються вузькою основою та видовженою формою. Ця проблема виникає через недостатній розвиток тканин грудей під час статевого дозрівання. Тубулярні груди можуть бути джерелом значного психологічного дискомфорту.",
      solution:
        "Корекція тубулярних грудей зазвичай включає розширення основи груді та покращення її форми. Ми використовуємо комплексний підхід, який може включати розширення тканин, встановлення імплантів та, за необхідності, корекцію ареоли. Результатом є більш природна та пропорційна форма грудей.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&query=tubular breasts before",
          alt: "Тубулярні груди - проблема",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=tubular breast correction result",
          alt: "Корекція тубулярних грудей - результат",
          width: 400,
          height: 300,
        },
      ],
    },
    {
      id: "empty-sack",
      title: "Синдром «пустого мішка»",
      problem:
        "Цей стан часто виникає після вагітності, годування груддю або значної втрати ваги. Груди втрачають об'єм та пружність, шкіра стає надлишковою, а форма грудей змінюється. Це може призвести до втрати впевненості у собі та незадоволення своїм зовнішнім виглядом.",
      solution:
        "Підтяжка грудей (мастопексія) з або без імплантів може відновити об'єм та покращити форму грудей. Ми видаляємо надлишкову шкіру, піднімаємо тканини грудей та, за необхідності, встановлюємо імпланти для додаткового об'єму. Результатом є більш молодий та підтягнутий вигляд грудей.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&query=empty sack syndrome before",
          alt: "Синдром пустого мішка - проблема",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast lift result",
          alt: "Підтяжка грудей - результат",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=mastopexy with implants",
          alt: "Мастопексія з імплантами",
          width: 400,
          height: 300,
        },
      ],
    },
    {
      id: "sagging",
      title: "Зменшення або обвисання грудей після годування чи вагітності, втрата ваги",
      problem:
        "Після вагітності, годування груддю або значної втрати ваги груди можуть втратити об'єм та пружність. Шкіра розтягується, а тканини грудей опускаються, що призводить до обвисання. Це може викликати не тільки естетичний дискомфорт, але й фізичні незручності.",
      solution:
        "Мастопексія (підтяжка грудей) з можливим збільшенням може відновити молодіжний вигляд грудей. Ми видаляємо надлишкову шкіру, піднімаємо та формуємо тканини грудей. За бажанням пацієнтки, можемо встановити імпланти для додаткового об'єму. Результатом є підтягнуті, пружні груди з покращеною формою та розташуванням.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&query=sagging breasts after pregnancy",
          alt: "Обвисання грудей після вагітності - проблема",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast lift after pregnancy result",
          alt: "Підтяжка грудей після вагітності - результат",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=breast lift with augmentation",
          alt: "Підтяжка з збільшенням грудей",
          width: 400,
          height: 300,
        },
        {
          src: "/placeholder.svg?height=300&width=400&query=post pregnancy breast restoration",
          alt: "Відновлення грудей після вагітності",
          width: 400,
          height: 300,
        },
      ],
    },
  ]

  // Створюємо стиль для секції
  const sectionStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {}

  return (
    <div className={styles.wrapper} style={sectionStyle}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Скарги на розміри і форми молочних залоз</h2>

        <div className={styles.accordionContainer}>
          {problemSections.map(section => (
            <div key={section.id} className={styles.accordionItem}>
              <div className={styles.accordionHeader} onClick={() => toggleSection(section.id)}>
                <h3 className={styles.accordionTitle}>{section.title}</h3>
                <span className={`${styles.accordionArrow} ${openSection === section.id ? styles.arrowUp : ""}`}>
                  &#9662;
                </span>
              </div>

              {openSection === section.id && (
                <div className={styles.accordionContent}>
                  <div className={styles.textColumn}>
                    <div className={styles.problemSection}>
                      <h4 className={styles.sectionSubtitle}>Проблема:</h4>
                      <p className={styles.sectionText}>{section.problem}</p>
                    </div>

                    <div className={styles.solutionSection}>
                      <h4 className={styles.sectionSubtitle}>Вирішення:</h4>
                      <p className={styles.sectionText}>{section.solution}</p>
                    </div>
                  </div>

                  <div className={styles.galleryColumn}>
                    <BreastProblemGallery images={section.images} sectionId={section.id} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreastProblem
