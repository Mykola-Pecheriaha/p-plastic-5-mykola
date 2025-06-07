"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import styles from "./BlepharoplastytDetails.module.css"
import BlepharoplastytDetailsGallery, { type GalleryImage } from "./BlepharoplastytDetailsGallery"

interface BlepharoplastytDetailsProps {
  backgroundColor?: string
}

const BlepharoplastytDetails: React.FC<BlepharoplastytDetailsProps> = ({ backgroundColor = "#f0f9ff" }) => {
  const initialRenderRef = useRef(true)
  const [isClient, setIsClient] = useState(false)

  // Масив зображень для першої галереї (показання)
  const indicationsImages: GalleryImage[] = [
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetails10.jpg",
      alt: "Показання до блефаропластики 1",
      width: 500,
      height: 700,
      title: "Показання до блефаропластики",
    },
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetailsі11.jpg",
      alt: "Показання до блефаропластики 2",
      width: 500,
      height: 700,
      title: "Показання до блефаропластики",
    },
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetailsі13.jpg",
      alt: "Показання до блефаропластики 3",
      width: 500,
      height: 700,
      title: "Показання до блефаропластики",
    },
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetailsі14.jpg",
      alt: "Показання до блефаропластики 4",
      width: 500,
      height: 700,
      title: "Показання до блефаропластики",
    },
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetailsі15.jpg",
      alt: "Показання до блефаропластики 5",
      width: 400,
      height: 700,
      title: "Показання до блефаропластики",
    },
  ]

  // Масив зображень для другої галереї (протипоказання)
  const contraindicationsImages: GalleryImage[] = [
    {
      src: "/images/blepharoplastytDetails/blepharoplastytDetailsі16.jpg",
      alt: "Протипоказання до блефаропластики",
      width: 400,
      height: 400,
      title: "Протипоказання до блефаропластики",
    },
  ]

  // Перевірка, чи код виконується на клієнті
  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true)
      initialRenderRef.current = false
    }
  }, [])

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Покази та протипокази до операції блефаропластики</h2>
        <p className={styles.introText}>
          Блефаропластика — популярна процедура, яка дозволяє повернути відкритий, свіжий та молодий погляд. Найчастіше
          її рекомендують пацієнтам середнього віку, коли шкіра повік втрачає пружність і з`являється птоз (надлишкове
          провисання шкіри), зморшки, «мішки» під очима.
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.emoji}>✅</span> Перші ознаки вікових змін:
            </h3>
            <ul className={styles.bulletList}>
              <li>дрібні або глибокі зморшки навколо очей;</li>
              <li>жирові грижі (випинання);</li>
              <li>набряки та «мішки» під очима;</li>
              <li>надлишок шкіри на верхніх і нижніх повіках;</li>
              <li>опущені куточки очей.</li>
            </ul>

            <div className={styles.note}>
              <span className={styles.noteIcon}>☝️</span> Блефаропластику також проводять у молодшому віці — при
              наявності анатомічних особливостей, які формують втому чи тяжкість погляду.
            </div>

            <h3 className={styles.sectionTitle}>
              <span className={styles.emoji}>✅</span> Основні показання до операції:
            </h3>
            <ul className={styles.bulletList}>
              <li>надлишок шкіри на верхніх повіках (птоз) або нижніх повіках («похмурий погляд»);</li>
              <li>жирові випинання (псевдогрижі) з надлишком шкіри;</li>
              <li>грижі під очима;</li>
              <li>зморшки навколо очей;</li>
              <li>анатомічне опущення нижніх куточків очей.</li>
            </ul>

            <div className={styles.highlight}>
              <h4 className={styles.highlightTitle}>
                <span className={styles.emoji}>✅</span> Результат, який змінює життя
              </h4>
              <p>
                Блефаропластика — одна з найефективніших омолоджувальних операцій. У випадках, коли шкіра вже втратила
                еластичність, жодна косметологічна процедура не дає такого результату.
              </p>
              <h5 className={styles.checklistTitle}>
                <span className={styles.emoji}>✅</span> Професійно виконана операція:
              </h5>
              <ul className={styles.checklist}>
                <li>освіжає погляд;</li>
                <li>омолоджує обличчя на роки вперед;</li>
                <li>дарує стійкий, естетично довготривалий ефект.</li>
              </ul>
            </div>
          </div>
          <div className={styles.galleryContent}>
            {isClient && <BlepharoplastytDetailsGallery images={indicationsImages} galleryId="indications-gallery" />}
          </div>
        </div>

        <h3 className={styles.subTitle}>Протипоказання до блефаропластики</h3>
        <p className={styles.introText}>
          Попри ефективність та популярність пластики повік, є ситуації, коли проведення операції не рекомендовано або
          повністю протипоказано.
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.emoji}>❗</span> Операція не проводиться у разі:
            </h3>
            <ul className={styles.bulletList}>
              <li>Хронічних захворювань серцево-судинної системи або інших важливих органів;</li>
              <li>Онкологічних захворювань будь-якого типу;</li>
              <li>Цукрового діабету у стадії декомпенсації;</li>
              <li>Гострих інфекційних процесів (грип, ГРВІ, тощо);</li>
              <li>Порушення згортання крові;</li>
              <li>Інфаркту або інсульту в анамнезі;</li>
              <li>Вагітності та періоду грудного вигодовування;</li>
              <li>Хронічної недостатності печінки або нирок.</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            {isClient && (
              <BlepharoplastytDetailsGallery images={contraindicationsImages} galleryId="contraindications-gallery" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlepharoplastytDetails
