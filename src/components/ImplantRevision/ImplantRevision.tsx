"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./ImplantRevision.module.css"

interface ImplantRevisionProps {
  backgroundColor?: string
  // Видалено textColor з інтерфейсу
}

const ImplantRevision: React.FC<ImplantRevisionProps> = ({
  backgroundColor = "#e8f5e8", // Використовуємо primary колір за замовчуванням
  // Видалено textColor = "dark" з деструктуризації
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Функція для перевірки доступності зображення
  const checkImageAvailability = async (src: string): Promise<boolean> => {
    return new Promise(resolve => {
      const img = window.Image ? new window.Image() : document.createElement("img")
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = src
    })
  }

  // Перевірка доступності зображення при монтуванні компонента
  useEffect(() => {
    const checkImage = async () => {
      const isAvailable = await checkImageAvailability("/images/implantRevision/3breast-removebg-preview.png")
      setImageLoaded(isAvailable)
    }
    checkImage()
  }, [])

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Заміна або видалення грудних імплантів</h2>

          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <ul className={styles.benefitsList}>
                <li>Бажаний об`єм</li>
                <li>Ідеальна форма</li>
                <li>Реабілітація до 30 днів</li>
              </ul>
            </div>

            <div className={styles.imageColumn}>
              {imageLoaded ? (
                <Image
                  src="/images/implantRevision/3breast-removebg-preview.png"
                  alt="Заміна грудних імплантів"
                  width={400}
                  height={300}
                  className={styles.image}
                  priority
                />
              ) : (
                <div className={styles.placeholderImage}>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Заміна+імплантів"
                    alt="Плейсхолдер"
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={styles.fullWidthSection}>
            <p className={styles.paragraph}>
              Заміна або видалення грудних імплантів — це хірургічна процедура, яка виконується у випадках ускладнень,
              змін у бажаннях пацієнтки або зношення імплантів з часом.
            </p>
            <p className={styles.paragraph}>
              Імпланти можуть бути видалені або замінені на нові для поліпшення естетичного результату, усунення
              асиметрії, капсулярної контрактури або за бажанням жінки повернутися до природної форми грудей.
            </p>
            <p className={styles.paragraph}>
              Процедура виконується з дотриманням усіх стандартів безпеки і часто супроводжується корекцією форми грудей
              для досягнення гармонійного результату.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplantRevision
