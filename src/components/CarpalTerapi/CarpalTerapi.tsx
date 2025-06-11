"use client"

import styles from "./CarpalTerapi.module.css"
import { CarpalTerapiGallery } from "./CarpalTerapiGallery"
import { CarpalSurgeryGallery } from "./CarpalSurgeryGallery"

const DEFAULT_IMAGES = [
  {
    src: "/images/сarpalTerapi/carpale34.jpg",
    alt: "Лікування синдрому зап'ястного каналу",
    width: 600,
    height: 400,
    title: "Консервативне лікування",
  },
  {
    src: "/images/сarpalTerapi/carpale37.jpg",
    alt: "Шина для зап'ястя",
    width: 600,
    height: 400,
    title: "Шина для зап'ястя",
  },
  {
    src: "/images/сarpalTerapi/carpale43.jpg",
    alt: "Ергономічне робоче місце",
    width: 600,
    height: 400,
    title: "Ергономічне робоче місце",
  },
  {
    src: "/images/сarpalTerapi/carpale40.jpg",
    alt: "Ергономічне робоче місце",
    width: 600,
    height: 400,
    title: "Ергономічне робоче місце",
  },
]

const SURGERY_IMAGES = [
  {
    src: "/images/сarpalTerapi/carpal2.jpg",
    alt: "Хірургічне лікування карпального тунелю",
    width: 600,
    height: 400,
    title: "Хірургічне лікування",
  },
  {
    src: "/images/сarpalTerapi/carpal3.jpg",
    alt: "Відкрита операція",
    width: 600,
    height: 400,
    title: "Відкрита операція",
  },
  {
    src: "/images/сarpalTerapi/carpal4.jpg",
    alt: "Ендоскопічна хірургія",
    width: 600,
    height: 400,
    title: "Ендоскопічна хірургія",
  },
  {
    src: "/images/сarpalTerapi/carp16.jpg",
    alt: "Ендоскопічна хірургія",
    width: 600,
    height: 400,
    title: "Ендоскопічна хірургія",
  },
  {
    src: "/images/сarpalTerapi/carpale22.jpg",
    alt: "Ендоскопічна хірургія",
    width: 600,
    height: 400,
    title: "Ендоскопічна хірургія",
  },
  {
    src: "/images/сarpalTerapi/carpale45.jpg",
    alt: "Ендоскопічна хірургія",
    width: 600,
    height: 400,
    title: "Ендоскопічна хірургія",
  },
]

export function CarpalTerapi() {
  // Видаляємо параметр backgroundColor
  return (
    <section className={styles.carpalSection}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Лікування синдрому зап`ястного каналу</h1>

        {/* Перший сегмент - Консервативне лікування */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>✅ Лікування</h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <p className={styles.text}>Ваш лікар може порадити наступне:</p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Носіння шини на зап`ястя вночі</strong> протягом
                  кількох тижнів. Якщо не дає результату — шину можна носити і вдень.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Уникайте сну з зігнутими запястками.</strong>
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Компреси</strong> — чергуйте теплі та холодні на
                  уражену ділянку для зменшення болю та запалення.
                </li>
              </ul>
              <h3 className={styles.subTitle}>✅ Зміни на робочому місці для зменшення навантаження на зап`ястя:</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Використовуйте ергономічні пристрої:</strong>{" "}
                  спеціальні клавіатури, мишки, м`які килимки, полиці для клавіатури.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span>{" "}
                  <strong>Попросіть когось оцінити вашу позу під час роботи</strong> — наприклад, клавіатура повинна
                  бути досить низько, щоб зап`ястя залишалися рівними.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span>{" "}
                  <strong>За потреби лікар може порекомендувати ерготерапевта.</strong>
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span>{" "}
                  <strong>Змініть або обмежте домашні та спортивні активності,</strong> що подразнюють зап`ястя —
                  особливо ті, що передбачають використання вібраційних інструментів.
                </li>
              </ul>
              <h3 className={styles.subTitle}>✅ Медикаментозне лікування:</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>НПЗП</strong> (нестероїдні протизапальні препарати) —
                  такі як ібупрофен або напроксен, для зменшення болю та набряку.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Ін`єкції кортикостероїдів</strong> — можуть вводитись
                  у зону карпального каналу для тимчасового полегшення симптомів.
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <CarpalTerapiGallery images={DEFAULT_IMAGES} />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Другий сегмент - Хірургічне лікування */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>✅ Хірургічне лікування</h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                Якщо нехірургічні методи не дають бажаного ефекту, лікар може рекомендувати операцію з вивільнення
                карпального тунелю. Її проводять під місцевим або загальним наркозом.
              </p>
              <h3 className={styles.subTitle}>✅ Існує два основні методи:</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Відкрита операція</strong>
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Ендоскопічна хірургія</strong>
                </li>
              </ul>
              <p className={styles.text}>
                Обидва методи мають подібні результати, але відрізняються технікою виконання. Ваш хірург пояснить, який
                варіант найкраще підходить саме вам.
              </p>
              <h3 className={styles.subTitle}>✅ Відкрите вивільнення карпального тунелю</h3>
              <p className={styles.text}>Під час відкритої операції хірург:</p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Робить невеликий розріз</strong> на долоні.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span>{" "}
                  <strong>Отримує доступ до поперечної карпальної зв`язки</strong> (даху тунелю).
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Розсікає зв`язку,</strong> що збільшує простір
                  усередині тунелю та зменшує тиск на серединний нерв.
                </li>
              </ul>
              <p className={styles.text}>
                Після операції зв`язка може зростись, але тиск у каналі вже не повертається до попереднього рівня, що
                забезпечує довготривале полегшення симптомів.
              </p>
              <h3 className={styles.subTitle}>✅ Ендоскопічне вивільнення карпального тунелю</h3>
              <p className={styles.text}>Під час цієї менш інвазивної процедури:</p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Хірург робить 1–2 маленькі розрізи.</strong>
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Вводить ендоскоп</strong> — крихітну камеру, що
                  дозволяє бачити структури зап`ястя зсередини.
                </li>
                <li>
                  <span className={styles.emoji}>🔹</span>{" "}
                  <strong>Через ендоскопічні інструменти розсікає поперечну зв`язку,</strong> як і при відкритій
                  операції.
                </li>
              </ul>
              <p className={styles.text}>✅ Цей метод часто дозволяє:</p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔹</span> <strong>Скоротити час відновлення</strong>
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <CarpalSurgeryGallery images={SURGERY_IMAGES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarpalTerapi
