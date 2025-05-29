"use client"

import type React from "react"
import { useState } from "react"
import styles from "./ProblemSection.module.css"
import { ChevronDown, ChevronUp } from "lucide-react"
import SideByBreastGallery from "./SideByBreastGallery"
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider"

interface ProblemSectionProps {
  backgroundColor?: string
}

interface ProblemData {
  id: string
  title: string
  problem: string
  solution: string
  images?: { src: string; alt: string; width?: number; height?: number }[]
  useSlider?: boolean
  sliderData?: {
    beforeImage: string
    afterImage: string
    beforeAlt: string
    afterAlt: string
  }
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ backgroundColor }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const problemsData: ProblemData[] = [
    {
      id: "small-breasts",
      title: "Маленькі груди від природи",
      problem:
        "Маленькі груди можуть бути джерелом дискомфорту для багатьох жінок. Це може впливати на самооцінку та впевненість у собі. Крім того, деякі жінки відчувають труднощі при виборі одягу або купальників.",
      solution:
        'Збільшення грудей за допомогою імплантів може допомогти досягти бажаного розміру та форми. Сучасні методи дозволяють створити природний вигляд та відчуття. Ми підбираємо оптимальний розмір та форму імплантів, враховуючи індивідуальні особливості тіла та побажання пацієнтки. На сьогоднішній день спільнотою пластичних хірургів заборонено проводити збільшення грудей методом інєкції "різних" наповнювачів. Використовуються тільки імпланти з "оболонками"',

      useSlider: true,
      sliderData: {
        beforeImage: "/images/before-after/breast/small-breasts-before.jpg",
        afterImage: "/images/before-after/breast/small-breasts-after.jpg",
        beforeAlt: "Маленькі груди - до операції",
        afterAlt: "Збільшення грудей - результат",
      },
    },
    {
      id: "asymmetry",
      title: "Асиметричність форми",
      problem:
        "Асиметрія грудей - це поширена проблема, яка може бути помітною або незначною. Вона може виникнути через генетичні фактори, гормональні зміни або в результаті попередніх операцій. Асиметрія може викликати дискомфорт при носінні бюстгальтерів та одягу. Крайня форма асеметрії грудей, це синдром Поланда - різке зменшення однієї груді, або її відсутність.",
      solution:
        "Корекція асиметрії може включати збільшення меншої груді, зменшення більшої, або комбінацію обох підходів для досягнення симетрії. Ми використовуємо індивідуальний підхід, який може включати використання імплантів різного розміру, ліпофілінг або підтяжку грудей для досягнення оптимального результату.",

      useSlider: true,
      sliderData: {
        beforeImage: "/images/before-after/breast/asymmetry-before.jpg",
        afterImage: "/images/before-after/breast/asymmetry-after.jpg",
        beforeAlt: "Асиметрія грудей - до корекції",
        afterAlt: "Корекція асиметрії - результат",
      },
    },
    {
      id: "tubular",
      title: "Тубулярні груди (у формі конуса)",
      problem:
        "Тубулярні груди характеризуються вузькою основою та видовженою формою. Ця проблема виникає через недостатній розвиток тканин грудей під час статевого дозрівання. Тубулярні груди можуть бути джерелом значного психологічного дискомфорту.",
      solution:
        "Корекція тубулярних грудей зазвичай включає розширення основи груді та покращення її форми. Ми використовуємо комплексний підхід, який може включати розширення тканин, встановлення імплантів та, за необхідності, корекцію ареоли. Результатом є більш природна та пропорційна форма грудей.",
      useSlider: true,
      sliderData: {
        beforeImage: "/images/before-after/breast/tubular-breasts-before.jpg",
        afterImage: "/images/before-after/breast/tubular-breasts-after.jpg",
        beforeAlt: "Тубулярні груди - до корекції",
        afterAlt: "Корекція тубулярних грудей - результат",
      },
    },
    {
      id: "empty-sack",
      title: "Синдром «пустого мішка»",
      problem:
        "Цей стан часто виникає після вагітності, годування груддю або значної втрати ваги. Груди втрачають об'єм та пружність, шкіра стає надлишковою, а форма грудей змінюється. Це може призвести до втрати впевненості у собі та незадоволення своїм зовнішнім виглядом.",
      solution:
        "Підтяжка грудей (мастопексія) з або без імплантів може відновити об'єм та покращити форму грудей. Ми видаляємо надлишкову шкіру, піднімаємо тканини грудей та, за необхідності, встановлюємо імпланти для додаткового об'єму. Результатом є більш молодий та підтягнутий вигляд грудей.",
      useSlider: true,
      sliderData: {
        beforeImage: "/images/before-after/breast/empty-sack-before.jpg",
        afterImage: "/images/before-after/breast/empty-sack-after.jpg",
        beforeAlt: "Синдром пустого мішка - до лікування",
        afterAlt: "Мастопексія - результат",
      },
    },
    {
      id: "sagging",
      title: "Зменшення або обвисання грудей після годування чи вагітності, втрата ваги",
      problem:
        "Після вагітності, годування груддю або значної втрати ваги груди можуть втратити об'єм та пружність. Шкіра розтягується, а тканини грудей опускаються, що призводить до обвисання. Це може викликати не тільки естетичний дискомфорт, але й фізичні незручності.",
      solution:
        "Мастопексія (підтяжка грудей) з можливим збільшенням може відновити молодіжний вигляд грудей. Ми видаляємо надлишкову шкіру, піднімаємо та формуємо тканини грудей. За бажанням пацієнтки, можемо встановити імпланти для додаткового об'єму. Результатом є підтягнуті, пружні груди з покращеною формою та розташуванням.",
      useSlider: true,
      sliderData: {
        beforeImage: "/images/before-after/breast/sagging-breasts-before.jpg",
        afterImage: "/images/before-after/breast/sagging-breasts-after.jpg",
        beforeAlt: "Обвисання грудей після вагітності",
        afterAlt: "Підтяжка грудей - результат",
      },
    },
  ]

  // Створюємо стиль для секції
  const sectionStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {}

  return (
    <section className={styles.problemSection} style={sectionStyle}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <h2 className={styles.title}>Скарги на розміри і форми молочних залоз</h2>
        </div>

        {/* Акордеон */}
        <div className={styles.accordion}>
          {problemsData.map(problem => {
            const isExpanded = expandedSection === problem.id

            return (
              <div key={problem.id} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleSection(problem.id)}
                  aria-expanded={isExpanded}
                >
                  <h3 className={styles.accordionTitle}>{problem.title}</h3>
                  <div className={styles.accordionIcon}>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className={styles.accordionContent}>
                    <div className={styles.contentGrid}>
                      {/* Ліва частина - текст */}
                      <div className={styles.textSection}>
                        <div className={styles.problemBlock}>
                          <h4 className={styles.blockTitle}>Проблема:</h4>
                          <p className={styles.blockText}>{problem.problem}</p>
                        </div>

                        <div className={styles.solutionBlock}>
                          <h4 className={styles.blockTitle}>Вирішення:</h4>
                          <p className={styles.blockText}>{problem.solution}</p>
                        </div>
                      </div>

                      {/* Права частина - галерея або слайдер */}
                      <div className={styles.gallerySection}>
                        {problem.useSlider && problem.sliderData ? (
                          <BeforeAfterSlider
                            beforeImage={problem.sliderData.beforeImage}
                            afterImage={problem.sliderData.afterImage}
                            beforeAlt={problem.sliderData.beforeAlt}
                            afterAlt={problem.sliderData.afterAlt}
                            height={400}
                            width={600}
                          />
                        ) : (
                          problem.images && <SideByBreastGallery images={problem.images} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
