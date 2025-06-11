"use client"
import { useState } from "react"
import styles from "./GernioPreparation.module.css"
import { GernioPreparationGallery } from "./GernioPreparationGallery"

interface GernioPreparationProps {
  backgroundColor?: string
}

function GernioPreparation({ backgroundColor = "#e8f5e8" }: GernioPreparationProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  // Зображення для першої галереї
  const galleryImages = [
    {
      src: "/images/gernioPreparation/GernioPreparation1.jpg",
      alt: "Консультація з хірургом перед операцією",
      width: 800,
      height: 600,
      title: "Консультація з хірургом перед операцією",
    },
    {
      src: "/images/gernioPreparation/gernioPreparation7.jpg",
      alt: "Передопераційне обстеження",
      width: 800,
      height: 600,
      title: "Передопераційне обстеження",
    },

    {
      src: "/images/gernioPreparation/gernioPreparation6.jpg",
      alt: "Правильне харчування перед операцією",
      width: 800,
      height: 600,
      title: "Правильне харчування перед операцією",
    },
    {
      src: "/images/gernioPreparation/gernioPreparation5.jpg",
      alt: "Відмова від шкідливих звичок",
      width: 800,
      height: 600,
      title: "Відмова від шкідливих звичок",
    },
  ]

  // Зображення для галереї в акордеоні "Класичне грижесічення"
  const classicSurgeryImages = [
    {
      src: "/images/gernioPreparation/gernioPreparation10.jpg",
      alt: "Класичне грижесічення - процедура",
      width: 800,
      height: 600,
      title: "Класичне грижесічення - процедура",
    },
    {
      src: "/images/gernioPreparation/gernioPreparation11.jpg",
      alt: "Встановлення алотрансплантату",
      width: 800,
      height: 600,
      title: "Встановлення алотрансплантату",
    },
    {
      src: "/images/gernioPreparation/gernioPreparation12.jpg",
      alt: "Результат класичного грижесічення",
      width: 800,
      height: 600,
      title: "Результат класичного грижесічення",
    },
  ]

  // Зображення для галереї в акордеоні "Лапароскопічне грижесічення"
  const laparoscopicSurgeryImages = [
    {
      src: "/images/gernioPreparation/gernioPreparation14.jpg",
      alt: "Лапароскопічне грижесічення - обладнання",
      width: 800,
      height: 600,
      title: "Лапароскопічне грижесічення - обладнання",
    },
    {
      src: "/images/gernioPreparation/gernioPreparation13.jpg",
      alt: "Лапароскопічна процедура",
      width: 800,
      height: 600,
      title: "Лапароскопічна процедура",
    },
    {
      src: "/images/gernioPreparation/gerniyaDetalis25.jpg",
      alt: "Мінімальні розрізи при лапароскопії",
      width: 800,
      height: 600,
      title: "Мінімальні розрізи при лапароскопії",
    },
  ]

  return (
    <section className={styles.gernioPreparation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}> Герніотомія : підготовка до операції</h2>
        <p className={styles.introText}>
          🔹 Перший крок до вирішення проблеми оперативного лікування грижі — це індивідуальна консультація з хірургом
          ЦМКЛ у Чернівцях. Також можлива зручна відеоконсультація для іногородніх пацієнтів.
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.consultationSection}>
              <h3 className={styles.sectionIcon}></h3>
              <div className={styles.consultationDetails}>
                <p className={styles.consultationTitle}>На консультації в клініці:</p>
                <ul className={styles.consultationList}>
                  <li>
                    Обговорюються побажання пацієнта і пояснюємо за і протів різних сучасних оперативних методик
                    герніотомій
                  </li>
                  <li>Уточнюються деталі та нюанси вибраної методики операції</li>
                  <li>Призначається передопераційне обстеження.</li>
                </ul>
                <p className={styles.travelInfo}>Для пацієнтів з інших міст пропонується максимально зручний формат:</p>
                <p className={styles.travelFormat}>Консультація + обстеження + операція — в 1 візит!</p>
              </div>
              <div className={styles.preparationDetails}>
                <p className={styles.preparationTitle}>Передопераційна підготовка:</p>
                <ul className={styles.preparationList}>
                  <li>За 10 днів — припинити прийом медикаментів, які розріджують кров</li>
                  <li>За 10 днів до операції — утриматися від куріння</li>
                  <li>Після операції — не палити щонайменше 1–1,5 місяці</li>
                  <li>За 2 дні до операції — обмежити калорійність їжі, пити більше води</li>
                  <li>У день операції — не можна їсти та пити</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.galleryContainer}>
            <GernioPreparationGallery images={galleryImages} />
          </div>
        </div>

        <div className={styles.fullWidthSection}>
          <p className={styles.importantNote}>
            Правильна підготовка — запорука швидкої реабілітації та чудового результату.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.fullWidthSection}>
          <h3 className={styles.surgeryTypesTitle}>Види операцій</h3>
          <p className={styles.surgeryTypesDescription}>
            Сучасні операції при грижах мають кілька варіантів, що підбираються індивідуально залежно від вида грижі та
            стану хворого.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.accordionContainer}>
          {/* Класичне грижесічення */}
          <div className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleAccordion("classic")}
              aria-expanded={openAccordion === "classic"}
            >
              <span className={styles.accordionTitle}>🔹 Класичне грижесічення</span>
              <span
                className={`${styles.accordionArrow} ${openAccordion === "classic" ? styles.accordionArrowOpen : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === "classic" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextContent}>
                  <p className={styles.indicationTitle}>📍 Показання:</p>
                  <p>Наявність вираженого грижі, діастазу прямих м`язів живота</p>
                  <p className={styles.techniqueTitle}>📍 Техніка:</p>
                  <ul className={styles.techniqueList}>
                    <li>Виконується розріз над випинанням</li>
                    <li>Прицинзійно розділяються тканини в ділянці грижового мішка до грижових воріт.</li>
                    <li>
                      Розсічення грижового мішка і якщо він має вміст, оцінюються органи які там знаходяться (пасмо
                      чепця, кишкивник та інші)
                    </li>
                    <li>Вправляються органи в черевну порожнину</li>
                    <li>
                      Виконується вшивання алотрансплантату в ділянку грижових воріт для їх закривання і укріплення
                      тканин в цій ділянці.
                    </li>
                    <li>Накладення шви на рану. При потребі дренування.</li>
                  </ul>
                  <p className={styles.resultTitle}>📍 Результат:</p>
                  <p>Відновлення черевної стінки з укріпленням слабкого місця аллогенним трансплантатом.</p>
                </div>
                <div className={styles.accordionGallery}>
                  <GernioPreparationGallery images={classicSurgeryImages} />
                </div>
              </div>
            )}
          </div>

          {/* Лапароскопічне грижесічення */}
          <div className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleAccordion("laparoscopic")}
              aria-expanded={openAccordion === "laparoscopic"}
            >
              <span className={styles.accordionTitle}>🔸 Лапароскопічне грижесічення</span>
              <span
                className={`${styles.accordionArrow} ${openAccordion === "laparoscopic" ? styles.accordionArrowOpen : ""}`}
              >
                ▼
              </span>
            </button>
            {openAccordion === "laparoscopic" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextContent}>
                  <p className={styles.featureTitle}>📍 Особливість:</p>
                  <p>Виконується за допомогою лапароскопічних технологій.</p>
                  <p className={styles.advantagesTitle}>📍 Переваги:</p>
                  <ul className={styles.advantagesList}>
                    <li>дозволяє швидко усунути дефект</li>
                    <li>має короткий період відновлення</li>
                    <li>мінімізує післяопераційний біль</li>
                  </ul>
                  <p className={styles.techniqueTitle}>📍 Техніка:</p>
                  <ul className={styles.techniqueList}>
                    <li>Під загальним знеболенням накладається пневмоперетоніум.</li>
                    <li>Заводяться лапараскопічні інструменти.</li>
                    <li>З грижових воріт в черевну порожнину витягується грижовий мішок.</li>
                    <li>Під очеревиною грижові ворота закриваються алогенним трансплантатом.</li>
                    <li>
                      Алогенний трансплантант зі сторони черевної порожнини прикривається очеревеною так щоб небуло його
                      контакту з кишечником.
                    </li>
                    <li>
                      Виконується додаткова ревізія органів черевної порожнини і після цього інструменти забираються
                    </li>
                    <li>Шви на місця на отвори для портів.</li>
                  </ul>
                  <p className={styles.suitableForTitle}>📍 Кому підходить:</p>
                  <p>Молодим пацієнтам з гарним здоров`ям.</p>
                </div>
                <div className={styles.accordionGallery}>
                  <GernioPreparationGallery images={laparoscopicSurgeryImages} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.fullWidthSection}>
          <p className={styles.conclusionNote}>
            Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров`я пацієнта та клінічних
            досліджень.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GernioPreparation
