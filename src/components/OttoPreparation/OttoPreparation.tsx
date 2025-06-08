"use client"

import type React from "react"
import styles from "./OttoPreparation.module.css"
import OttoPreparationGallery, { type GalleryImage } from "./OttoPreparationGallery"

interface OttoPreparationProps {
  backgroundColor?: string
}

export const OttoPreparation: React.FC<OttoPreparationProps> = ({ backgroundColor = "#e8f5e8" }) => {
  // Масив зображень для першої галереї
  const preparationImages: GalleryImage[] = [
    {
      src: "/images/OttoPreparation/ottoPreparatio1.jpg",
      alt: "Консультація з пластичним хірургом",
      width: 600,
      height: 900,
      title: "Консультація з пластичним хірургом",
    },
    {
      src: "/images/OttoPreparation/ottoPreparatio2.jpg",
      alt: "Обговорення форми вушної раковини",
      width: 600,
      height: 900,
      title: "Обговорення форми вушної раковини",
    },
    {
      src: "/images/OttoPreparation/ottoPreparatio3.jpg",
      alt: "Підготовка до операції",
      width: 600,
      height: 900,
      title: "Підготовка до операції",
    },
  ]

  // Масив зображень для другої галереї
  const rehabilitationImages: GalleryImage[] = [
    {
      src: "/images/OttoPreparation/ottoPreparatio4.jpg",
      alt: "Реабілітація після отопластики",
      width: 700,
      height: 500,
      title: "Реабілітація після отопластики",
    },
    {
      src: "/images/OttoPreparation/ottoPreparatio6.jpg",
      alt: "Відновлення після операції",
      width: 700,
      height: 500,
      title: "Відновлення після операції",
    },
    {
      src: "/images/OttoPreparation/ottoPreparatio7.jpg",
      alt: "Результат після повного відновлення",
      width: 700,
      height: 500,
      title: "Результат після повного відновлення",
    },
    {
      src: "/images/OttoPreparation/ottoPreparatio8.jpg",
      alt: "Результат після повного відновлення",
      width: 700,
      height: 500,
      title: "Результат після повного відновлення",
    },
  ]

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок */}
        <h2 className={styles.title}>Пластика вух: консультація</h2>

        {/* Вступний текст */}
        <div className={styles.introText}>
          <p>
            Перший крок на шляху до естетики та впевненості —{" "}
            <strong>консультація з пластичним хірургом у Чернівцях</strong>. Фахівець приймає пацієнтів не лише з
            Чернівців, а й з інших міст України.
          </p>
          <p>
            На індивідуальній зустрічі пацієнт разом із хірургом обговорює{" "}
            <strong>побажання щодо форми вушної раковини</strong>, можливості корекції та очікуваний результат.
          </p>
        </div>

        {/* Перша секція: Підготовка до отопластики */}
        <div className={styles.section}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>🛡️ Підготовка до отопластики</h3>
            <p>
              Заради вашої зручності клініка працює за принципом <strong>«хірургії одного дня»</strong> — консультація,
              обстеження та сама операція проходять в один день!
            </p>
            <p className={styles.highlight}>🔸 Операція не вимагає складної підготовки.</p>
            <p>Перед втручанням бажано:</p>
            <ul className={styles.bulletList}>
              <li>припинити прийом гормональних і препаратів, що містять аспірин;</li>
              <li>обов`язково повідомити лікаря про всі вживані ліки;</li>
              <li>відмовитися від алкоголю і тютюну (або значно обмежити куріння).</li>
            </ul>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.galleryColumn}>
            <OttoPreparationGallery images={preparationImages} />
          </div>
        </div>

        {/* Друга секція: Реабілітація після отопластики */}
        <div className={styles.section}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>♻️ Реабілітація після отопластики</h3>
            <p className={styles.highlight}>🕒 Перші 3 дні після операції можуть супроводжуватися:</p>
            <ul className={styles.bulletList}>
              <li>набряками;</li>
              <li>онімінням;</li>
              <li>незначними синцями.</li>
            </ul>
            <p>
              Це — <strong>нормальні післяопераційні прояви</strong>, які швидко зникають завдяки знеболювальним засобам
              і відпочинку.
            </p>
            <p className={styles.highlight}>🩹 Для кращої стабілізації результату потрібно:</p>
            <ul className={styles.bulletList}>
              <li>носити фіксуючу пов`язку 14 днів безперервно;</li>
              <li>далі — ще 14 днів лише на ніч (можна замінити на щільну бандану);</li>
              <li>шви не знімаються — використовуються саморозсмоктувальні нитки.</li>
            </ul>
            <p className={styles.highlight}>👣 Повернення до повноцінного життя — майже одразу!</p>
            <p>
              Звичний режим, активність, миття голови — дозволено!
              <br />
              Обов`язковий лише контрольний огляд через 1 місяць.
            </p>
          </div>
          <div className={styles.galleryColumn}>
            <OttoPreparationGallery images={rehabilitationImages} />
          </div>
        </div>

        {/* Важливо знати */}
        <div className={styles.importantInfo}>
          <h3 className={styles.sectionTitle}>🔍 Важливо знати</h3>
          <ul className={styles.bulletList}>
            <li>Отопластика не впливає на слух;</li>
            <li>Процедура є безпечною для здоров`я і життя пацієнта</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OttoPreparation
