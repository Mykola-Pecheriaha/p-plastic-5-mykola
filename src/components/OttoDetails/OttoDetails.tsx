"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import styles from "./OttoDetails.module.css"
import OttoDetailsGallery, { type GalleryImage } from "./OttoDetailsGallery"

interface OttoDetailsProps {
  backgroundColor?: string
}

export const OttoDetails: React.FC<OttoDetailsProps> = ({ backgroundColor = "#f0f9ff" }) => {
  const initialRenderRef = useRef(true)
  const [isClient, setIsClient] = useState(false)

  // Масив зображень для першої галереї (показання)
  const indicationsImages: GalleryImage[] = [
    {
      src: "/images/ottodetails/ottoDetails3.jpg",
      alt: "Показання до отопластики 1",
      width: 500,
      height: 700,
      title: "Корекція клаповухості - приклад 1",
    },
    {
      src: "/images/ottodetails/ottoDetails4.jpg",
      alt: "Показання до отопластики 2",
      width: 500,
      height: 500,
      title: "Корекція клаповухості - приклад 2",
    },
    {
      src: "/images/ottodetails/ottoDetails5.jpg",
      alt: "Показання до отопластики 3",
      width: 500,
      height: 500,
      title: "Результат отопластики - корекція деформації вуха",
    },
    {
      src: "/images/ottodetails/ottoDetails1.jpg",
      alt: "Показання до отопластики 4",
      width: 500,
      height: 500,
      title: "Результат отопластики - корекці дольки вуха",
    },
    {
      src: "/images/ottodetails/ottoDetails2.jpg",
      alt: "Показання до отопластики 5",
      width: 700,
      height: 500,
      title: "Результат отопластики - корекція розриву дольки вуха",
    },
  ]

  // Масив зображень для другої галереї (протипоказання)
  const contraindicationsImages: GalleryImage[] = [
    {
      src: "/images/ottodetails/abdomino125-24.jpg",
      alt: "Протипоказання до отопластики",
      width: 500,
      height: 500,
      title: "Консультація перед отопластикою",
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
        <h2 className={styles.title}>Показати до пластики вух</h2>

        <div className={styles.fullWidthText}>
          <p>
            Отопластика — це не лише шлях до гармонійного зовнішнього вигляду, а й спосіб усунути фізіологічні або
            вроджені особливості, що можуть спричиняти дискомфорт.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.textContent}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.emoji}>🔹</span> Основні причини для звернення до хірурга:
            </h3>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.emoji}></span> Вроджена клаповухість (з одного або обох боків);
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Інші деформації вушної раковини, що мають вроджене походження;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Надмірне прилягання вушної раковини до голови, яке порушує
                симетрію обличчя;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Повторна корекція, якщо попередня операція не дала бажаного
                результату;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Корекція мочки вуха — наприклад, при її розриві або деформації.
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>{isClient && <OttoDetailsGallery images={indicationsImages} />}</div>
        </div>

        <h3 className={styles.subTitle}>🚫 Протипоки до отопластики</h3>

        <div className={styles.fullWidthText}>
          <p>Попри доволі легкий характер втручання, операція на вушних раковинах має певні обмеження.</p>
        </div>

        <div className={styles.section}>
          <div className={styles.textContent}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.emoji}></span> Операція не рекомендована, якщо:
            </h3>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.emoji}>🔹</span> Дитині ще не виповнилося 6 років;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Є тяжка форма цукрового діабету;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Спостерігаються порушення згортання крові;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Діагностовано онкологічне захворювання;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Є захворювання шкіри в зоні втручання;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Присутні гострі інфекційні або вірусні стани;
              </li>
              <li>
                <span className={styles.emoji}>🔹</span> Жінка перебуває у періоді вагітності чи лактації.
              </li>
            </ul>
            <div className={styles.note}>
              <p>
                <span className={styles.emoji}>🔹</span> Зверніть увагу: частина протипоказань є тимчасовими. Наприклад,
                після перенесеної інфекції операцію можна провести вже після повного відновлення.
              </p>
            </div>
          </div>
          <div className={styles.galleryContent}>
            {isClient && <OttoDetailsGallery images={contraindicationsImages} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OttoDetails
