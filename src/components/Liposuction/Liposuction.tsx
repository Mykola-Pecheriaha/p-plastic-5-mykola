"use client"
import type React from "react"
import Image from "next/image"
import styles from "./Liposuction.module.css"

interface LiposuctionProps {
  backgroundColor?: string
}

const Liposuction: React.FC<LiposuctionProps> = ({ backgroundColor = "#e8f5e8" }) => {
  return (
    <section className={styles.liposuctionContainer} style={{ backgroundColor }}>
      <div className={styles.contentContainer}>
        {/* Верхня секція з двома колонками */}
        <div className={styles.topSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainHeading}>Ліпосакція — шлях до тіла мрії</h2>
            <ul className={styles.benefitsList}>
              <li>
                <span className={styles.bulletPoint}>🔹</span> Плоский живіт та шкіра без в`ялості
              </li>
              <li>
                <span className={styles.bulletPoint}>🔹</span> Спокусливий вигин сідниць
              </li>
              <li>
                <span className={styles.bulletPoint}>🔹</span> Зменшення об`ємів на 2–3 розміри
              </li>
              <li>
                <span className={styles.bulletPoint}>🔹</span> Індивідуальна корекція проблемних ділянок
              </li>
              <li>
                <span className={styles.bulletPoint}>🔹</span> Видалення шийного «вдовиного» горба
              </li>
            </ul>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/liposuction/liposuction1-removebg-preview.png"
                alt="Ліпосакція результати"
                width={500}
                height={400}
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Нижня секція з повним текстом */}
        <div className={styles.bottomSection}>
          <div className={styles.fullWidthText}>
            <h3 className={styles.subHeading}>
              <span className={styles.accentIcon}>✦</span> Ідеальні лінії тіла — реальність уже сьогодні
            </h3>
            <p className={styles.paragraph}>
              Підтягнутий живіт, витончена талія, стрункі стегна — усе це не мрія, а досяжна мета для кожної жінки.
              Завдяки сучасній пластичній хірургії ти можеш отримати бажані контури тіла без суворих дієт і виснажливих
              тренувань.
            </p>

            <h3 className={styles.subHeading}>
              <span className={styles.accentIcon}>✦</span> Ліпосакція — гармонія форми без зусиль
            </h3>
            <p className={styles.paragraph}>
              Це одна з найпопулярніших процедур у світі естетичної хірургії. Її переваги — мінімальна травматичність і
              максимальна ефективність. Ліпосакція дозволяє позбутись локальних жирових відкладень у «проблемних» зонах:
              живіт, талія, стегна, спина — там, де схуднути найважче.
            </p>

            <h3 className={styles.subHeading}>
              <span className={styles.accentIcon}>✦</span> Шийний горб — більше не проблема
            </h3>
            <p className={styles.paragraph}>
              Видалення шийного горба (відомого як «вдовиний» або «бізоновий») — це не просто естетична корекція, а ще й
              турбота про здоров`я. Це локальне скупчення жиру в області 7-го шийного хребця найчастіше з`являється в
              період менопаузи та спричинене гормональними змінами або спадковістю.
            </p>
            <p className={styles.paragraph}>
              Окрім візуального дискомфорту, «бугор» може впливати на самопочуття: головний біль, болі в шиї й спині,
              тиск, безсоння — лише частина можливих симптомів. Ліпосакція у цій зоні — ефективне рішення для
              відновлення не лише зовнішності, а й якості життя.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Liposuction
