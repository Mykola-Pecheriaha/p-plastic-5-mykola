"use client"
import type React from "react"
import { useState } from "react"
import AbdominoPreparationGallery from "./AbdominoPreparationGallery"
import styles from "./AbdominoPreparation.module.css"

interface AbdominoPreparationProps {
  backgroundColor?: string
}

export const AbdominoPreparation: React.FC<AbdominoPreparationProps> = ({ backgroundColor = "#e8f5e8" }) => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  // Зображення для галереї
  const preparationImages = [
    {
      src: "/images/abdominoPreparation/abdominoPreparation3.jpg",
      alt: "Консультація перед абдомінопластикою",
      width: 600,
      height: 600,
      title: "Консультація перед абдомінопластикою",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation4.jpg",
      alt: "Передопераційне обстеження",
      width: 600,
      height: 600,
      title: "Передопераційне обстеження",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation5.jpg",
      alt: "Підготовка до операції",
      width: 500,
      height: 500,
      title: "Підготовка до операції",
    },

    {
      src: "/images/abdominoPreparation/preparation1.jpg",
      alt: "Підготовка до операції",
      width: 500,
      height: 500,
      title: "Підготовка до операції",
    },
  ]

  // Зображення для класичної абдомінопластики
  const classicImages = [
    {
      src: "/images/abdominoPreparation/abdominoPreparation11.jpg",
      alt: "Класична абдомінопластика - техніка",
      width: 500,
      height: 400,
      title: "Класична абдомінопластика - техніка",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation12.jpg",
      alt: "Результат класичної абдомінопластики",
      width: 500,
      height: 600,
      title: "Результат класичної абдомінопластики",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation13.jpg",
      alt: "Результат класичної абдомінопластики",
      width: 500,
      height: 600,
      title: "Результат класичної абдомінопластики",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation14.jpg",
      alt: "Результат класичної абдомінопластики",
      width: 800,
      height: 600,
      title: "Результат класичної абдомінопластики",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation15.jpg",
      alt: "Результат класичної абдомінопластики",
      width: 800,
      height: 600,
      title: "Результат класичної абдомінопластики",
    },
  ]

  // Зображення для вертикальної абдомінопластики
  const verticalImages = [
    {
      src: "/images/abdominoPreparation/abdominoPreparation19.jpg",
      alt: "Абдомінопластика з вертикальним розрізом",
      width: 800,
      height: 600,
      title: "Абдомінопластика з вертикальним розрізом",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation17.jpg",
      alt: "Результат вертикальної абдомінопластики",
      width: 800,
      height: 600,
      title: "Результат вертикальної абдомінопластики",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation16.jpg",
      alt: "Абдомінопластика з вертикальним розрізом",
      width: 800,
      height: 600,
      title: "Абдомінопластика з вертикальним розрізом",
    },
  ]

  // Зображення для мініабдомінопластики
  const miniImages = [
    {
      src: "/images/abdominoPreparation/abdominoPreparation22.jpg",
      alt: "Мініабдомінопластика - техніка",
      width: 800,
      height: 600,
      title: "Мініабдомінопластика - техніка",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation24.jpg",
      alt: "Результат мініабдомінопластики",
      width: 800,
      height: 600,
      title: "Результат мініабдомінопластики",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation15.jpg",
      alt: "Результат мініабдомінопластики",
      width: 800,
      height: 600,
      title: "Результат мініабдомінопластики",
    },
  ]

  // Зображення для абдомінопластики з ліпосакцією
  const lipoImages = [
    {
      src: "/images/abdominoPreparation/abdominoPreparation25.jpg",
      alt: "Абдомінопластика з ліпосакцією",
      width: 800,
      height: 600,
      title: "Абдомінопластика з ліпосакцією",
    },
    {
      src: "/images/abdominoPreparation/abdominoPreparation26.jpg",
      alt: "Результат абдомінопластики з ліпосакцією",
      width: 800,
      height: 600,
      title: "Результат абдомінопластики з ліпосакцією",
    },
  ]

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.contentWrapper}>
        {/* Заголовок */}
        <h2 className={styles.mainTitle}>Абдомінопластика: підготовка до операції</h2>

        {/* Вступний текст */}
        <div className={styles.fullWidthSection}>
          <p className={styles.introText}>
            🔹 Перший крок до плаского живота — це індивідуальна консультація з пластичним хірургом Миколою Печеряга у
            Чернівцях. Також можлива зручна відеоконсультація для іногородніх пацієнтів.
          </p>
        </div>

        {/* Основний контент: текст + галерея */}
        <div className={styles.mainContentSection}>
          <div className={styles.textColumn}>
            <div className={styles.consultationSection}>
              <h3 className={styles.sectionTitle}>
                <span className={styles.icon}></span>
              </h3>
              <h4 className={styles.subTitle}>📋 На консультації в клініці:</h4>
              <ul className={styles.bulletList}>
                <li>Обговорюються побажання пацієнта</li>
                <li>Уточнюються деталі та нюанси операції</li>
                <li>Призначається передопераційне обстеження, яке займає лише 1 день</li>
              </ul>
              <h4 className={styles.subTitle}>
                🧳 Для пацієнтів з інших міст пропонується максимально зручний формат:
              </h4>
              <p className={styles.highlightedText}>Консультація + обстеження + операція — в 1 візит!</p>
              <h4 className={styles.subTitle}>⏳ Передопераційна підготовка:</h4>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.redText}></span> За 10 днів — припинити прийом медикаментів, які розріджують
                  кров
                </li>
                <li>
                  <span className={styles.redText}></span> За 10 днів до операції — утриматися від куріння
                </li>
                <li>
                  <span className={styles.redText}></span> Після операції — не палити щонайменше 1–1,5 місяці
                </li>
                <li>
                  <span className={styles.redText}></span> За 2 дні до операції — обмежити калорійність їжі, пити більше
                  води
                </li>
                <li>
                  <span className={styles.redText}></span> У день операції — не можна їсти та пити
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <AbdominoPreparationGallery images={preparationImages} />
          </div>
        </div>

        {/* Нижній текст на всю ширину */}
        <div className={styles.fullWidthSection}>
          <p className={styles.importantNote}>
            🔔 Правильна підготовка — запорука швидкої реабілітації та чудового результату. Плануйте свою трансформацію
            відповідально!
          </p>
          <div className={styles.divider}></div>
          <h3 className={styles.typesTitle}> Види абдомінопластики</h3>
          <p className={styles.typesDescription}>
            Сучасна абдомінопластика має кілька варіантів, що підбираються індивідуально залежно від стану тканин та
            естетичних побажань пацієнта.
          </p>
          <div className={styles.divider}></div>
        </div>

        {/* Акордеон з видами абдомінопластики */}
        <div className={styles.accordionSection}>
          {/* Класична абдомінопластика */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleSection("classic")}
              role="button"
              aria-expanded={openSection === "classic"}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSection("classic")
                }
              }}
            >
              <h3 className={styles.accordionTitle}>🔹 Класична абдомінопластика</h3>
              <span className={`${styles.arrow} ${openSection === "classic" ? styles.arrowDown : ""}`}>&#9654;</span>
            </div>
            {openSection === "classic" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextColumn}>
                  <p className={styles.indicationTitle}>📍 Показання:</p>
                  <p className={styles.indicationText}>
                    Наявність вираженого «шкірно-жирового фартуха», діастазу, грижі.
                  </p>
                  <p className={styles.indicationTitle}>📍 Техніка:</p>
                  <ul className={styles.bulletList}>
                    <li>Горизонтальний розріз над пахвинною зоною</li>
                    <li>Додатковий розріз навколо пупка</li>
                    <li>Видалення надлишкових тканин</li>
                    <li>Вшивання м`язів</li>
                    <li>Формування нового пупкового кільця</li>
                  </ul>
                  <p className={styles.indicationTitle}>📍 Результат:</p>
                  <p className={styles.indicationText}>
                    Відновлення м`язового корсета, нова талія, покращення контурів тіла.
                  </p>
                </div>
                <div className={styles.accordionGalleryColumn}>
                  <AbdominoPreparationGallery images={classicImages} />
                </div>
              </div>
            )}
          </div>

          {/* Абдомінопластика з вертикальним розрізом */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleSection("vertical")}
              role="button"
              aria-expanded={openSection === "vertical"}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSection("vertical")
                }
              }}
            >
              <h3 className={styles.accordionTitle}>🔸 Абдомінопластика з вертикальним розрізом</h3>
              <span className={`${styles.arrow} ${openSection === "vertical" ? styles.arrowDown : ""}`}>&#9654;</span>
            </div>
            {openSection === "vertical" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextColumn}>
                  <p className={styles.indicationTitle}>📍 Особливість:</p>
                  <p className={styles.indicationText}>
                    Розріз проходить по середній лінії живота, а не над лобковою зоною.
                  </p>
                  <p className={styles.indicationTitle}>📍 Переваги:</p>
                  <ul className={styles.bulletList}>
                    <li>Менш травматичне втручання</li>
                    <li>Видалення тканин від боків до центру</li>
                    <li>Локальна корекція невеликих ділянок</li>
                  </ul>
                  <p className={styles.indicationTitle}>📍 Кому підходить:</p>
                  <p className={styles.indicationText}>
                    Пацієнтам із локалізованими надлишками тканин та збереженою еластичністю шкіри.
                  </p>
                </div>
                <div className={styles.accordionGalleryColumn}>
                  <AbdominoPreparationGallery images={verticalImages} />
                </div>
              </div>
            )}
          </div>

          {/* Мініабдомінопластика */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleSection("mini")}
              role="button"
              aria-expanded={openSection === "mini"}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSection("mini")
                }
              }}
            >
              <h3 className={styles.accordionTitle}>🟢 Мініабдомінопластика</h3>
              <span className={`${styles.arrow} ${openSection === "mini" ? styles.arrowDown : ""}`}>&#9654;</span>
            </div>
            {openSection === "mini" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextColumn}>
                  <p className={styles.indicationTitle}>📍 Показання:</p>
                  <p className={styles.indicationText}>
                    М`які дефекти нижнього живота без вираженого діастазу чи обвисання.
                  </p>
                  <p className={styles.indicationTitle}>📍 Техніка:</p>
                  <ul className={styles.bulletList}>
                    <li>Розріз у зоні бікіні</li>
                    <li>Відсікання надлишкової шкіри та жиру</li>
                    <li>Без переносу пупка</li>
                    <li>Без втручання в м`язи</li>
                  </ul>
                  <p className={styles.indicationTitle}>📍 Переваги:</p>
                  <p className={styles.indicationText}>
                    Малоінвазивність, короткий період реабілітації, мінімальні рубці.
                  </p>
                </div>
                <div className={styles.accordionGalleryColumn}>
                  <AbdominoPreparationGallery images={miniImages} />
                </div>
              </div>
            )}
          </div>

          {/* Абдомінопластика з ліпосакцією */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleSection("lipo")}
              role="button"
              aria-expanded={openSection === "lipo"}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleSection("lipo")
                }
              }}
            >
              <h3 className={styles.accordionTitle}>🧩 Абдомінопластика з ліпосакцією</h3>
              <span className={`${styles.arrow} ${openSection === "lipo" ? styles.arrowDown : ""}`}>&#9654;</span>
            </div>
            {openSection === "lipo" && (
              <div className={styles.accordionContent}>
                <div className={styles.accordionTextColumn}>
                  <p className={styles.indicationTitle}>📍 Суть методики:</p>
                  <p className={styles.indicationText}>
                    Поєднання пластики живота зі зменшенням жирових відкладень через ліпосакцію.
                  </p>
                  <p className={styles.indicationTitle}>📍 Техніка:</p>
                  <ul className={styles.bulletList}>
                    <li>Видалення шкірно-жирового фартуха</li>
                    <li>Ушивання м`язів</li>
                    <li>Ліпосакція фланків (боків) через мікропроколи</li>
                  </ul>
                  <p className={styles.indicationTitle}>📍 Переваги:</p>
                  <p className={styles.indicationText}>
                    Більш виражений естетичний результат завдяки комплексній роботі з формою тіла.
                  </p>
                </div>
                <div className={styles.accordionGalleryColumn}>
                  <AbdominoPreparationGallery images={lipoImages} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Заключний текст */}
        <div className={styles.fullWidthSection}>
          <p className={styles.conclusionText}>
            🧑‍⚕️ Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров`я пацієнта та клінічних
            досліджень.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AbdominoPreparation
