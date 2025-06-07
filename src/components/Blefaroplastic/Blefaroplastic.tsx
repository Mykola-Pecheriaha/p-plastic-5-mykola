"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./Blefaroplastic.module.css"

interface BlefaroplasticProps {
  backgroundColor?: string
}

const Blefaroplastic: React.FC<BlefaroplasticProps> = ({ backgroundColor = "#e8f5e8" }) => {
  const [imageSrc, setImageSrc] = useState("/images/blepharoplasty/blefaroplasty-removebg-preview.png")

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === "undefined") return

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: "HEAD" })
        if (!response.ok) {
          setImageSrc("/placeholder.svg?height=600&width=500")
        }
      } catch (error) {
        console.error("Помилка завантаження зображення:", error)
        setImageSrc("/placeholder.svg?height=600&width=500")
      }
    }

    checkImageExists()
  }, [imageSrc])

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Блефаропластика
              <br />
              <span className={styles.subtitle}>Корекція повік та омолодження погляду</span>
            </h1>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>👁️</span>
                Відкритий та молодий погляд
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>👁️</span>
                Видалення мішків під очима
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>👁️</span>
                Тривалий результат — до 10-15 років
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt="Блефаропластика - корекція повік та омолодження погляду"
              width={500}
              height={600}
              className={styles.mainImage}
              priority
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.description}>
            Блефаропластика — це хірургічна процедура корекції повік, яка дозволяє усунути вікові зміни навколо очей та
            повернути молодий, відкритий погляд. Операція ефективно вирішує проблеми опущених повік, мішків під очима та
            зморшок.
          </p>
          <p className={styles.description}>
            Під час процедури видаляються надлишки шкіри та жирової тканини, що робить погляд більш виразним та молодим.
            Сучасні методики дозволяють досягти природного результату з мінімальними слідами втручання.
          </p>
          <p className={styles.description}>
            Блефаропластика особливо популярна серед пацієнтів після 35 років, коли з`являються перші ознаки старіння
            навколо очей. Результат операції зберігається протягом багатьох років.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blefaroplastic
