"use client"

import type React from "react"
import Image from "next/image"
import { useThemeColors } from ".husky/use-theme-colors"
import styles from "./CarpalSyndrome.module.css"
import { CarpalGallery } from "./CarpalGallery"

interface CarpalSyndromeProps {
  className?: string
}

export const CarpalSyndrome: React.FC<CarpalSyndromeProps> = ({ className = "" }) => {
  const colors = useThemeColors()

  return (
    <section className={`${styles.carpalSection} ${className}`} style={{ backgroundColor: colors.primary }}>
      <div className={styles.container}>
        {/* Перша секція: текст зліва, зображення справа */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.mainTitle} style={{ color: colors.text }}>
              Карпальний синдром.
            </h2>
            <p className={styles.subtitle} style={{ color: colors.accent }}>
              Розпізнання і фахове лікування
            </p>
            <ul className={styles.benefitsList}>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                Зникнення болі в кисті
              </li>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                Зникнення відчуття заніміння в кінчиках пальців
              </li>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                Набуття сили в м`язах кисті
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/carpal/carpale17-removebg-preview.png"
                alt="Карпальний синдром"
                width={500}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        {/* Друга секція: повний текст на всю ширину */}
        <div className={styles.fullWidthSection}>
          <p className={styles.descriptionText} style={{ color: colors.text }}>
            Попри його багато назв (cиндро́м запя́стного кана́лу, синдром друкарки, хвороба офісних працівників…) є тим
            захворюванням яке виникає в людей, чия професія повязана з одноманітними рухами запястя та незручним
            положенням рук при виконанні роботи.
          </p>
          <p className={styles.descriptionText} style={{ color: colors.text }}>
            Суть захворювання зводиться до того, що в процесі цих рухів кисті поступово виникає потовщення і ущільнення
            оболонок сухожилків згиначів, які проходять з передпліччя на кисть через вузький канал на запястку. Цей
            канал називається карпальним, є досить обмежений і в звязку з тим що він утворений з трьох сторін кістками
            запястка. А з однієї сторони досить щільною карпальною звязкою, яка не в змозі розтягуватися. Тому місця в
            цьому каналі досить обмежено і через ці потовщення оболонок сухожилок приводить до здавлення нерва
            (серединного) який також там проходить.
          </p>
        </div>

        {/* Третя секція: текст зліва, галерея справа */}
        <div className={styles.gallerySection}>
          <div className={styles.leftColumn}>
            <h3 className={styles.sectionTitle} style={{ color: colors.text }}>
              Анатомія карпального каналу
            </h3>
            <p className={styles.anatomyText} style={{ color: colors.text }}>
              Карпальний канал - це вузький прохід на долонній стороні зап`ястя, через який проходять серединний нерв і
              сухожилля згиначів пальців. Стінки каналу утворені кістками зап`ястя і поперечною карпальною зв`язкою.
            </p>
            <p className={styles.anatomyText} style={{ color: colors.text }}>
              При карпальному синдромі відбувається здавлення серединного нерва, що призводить до болю, оніміння та
              слабкості в руці і пальцях.
            </p>
            <h3 className={styles.sectionTitle} style={{ color: colors.text }}>
              Функція серединного нерву
            </h3>
            <ul className={styles.anatomyList}>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                відчувати перші чотири пальці
              </li>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                відповідає за координацію руху кисті, дрібну моторику кисті
              </li>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                звуження і розширення кровоносних судин від дії зовнішніх подразників
              </li>
              <li style={{ color: colors.text }}>
                <span style={{ color: colors.accent }}>•</span>
                регулює роботу потових залоз долоні
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <CarpalGallery />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarpalSyndrome
