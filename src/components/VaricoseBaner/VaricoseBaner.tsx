"use client"
import Image from "next/image"
import { useThemeColors } from ".husky/use-theme-colors"
import styles from "./VaricoseBaner.module.css"

export function VaricoseBaner() {
  const colors = useThemeColors()

  return (
    <div className={styles.banerContainer} style={{ backgroundColor: colors.secondary }}>
      <div className={styles.contentContainer}>
        {/* Заголовок вгорі по центру */}
        <h2 className={styles.mainTitle} style={{ color: colors.text, borderBottomColor: colors.accent }}>
          Варикозна хвороба
        </h2>

        {/* Верхня секція з двома колонками */}
        <div className={styles.topSection}>
          {/* Ліва колонка з текстом */}
          <div className={styles.leftContent}>
            <h3 className={styles.title} style={{ color: colors.text }}>
              Варикоз
            </h3>
            <p className={styles.subtitle} style={{ color: colors.accent }}>
              Розпізнання і фахове лікування
            </p>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem} style={{ color: colors.text }}>
                Зникає венозна сітка та вузли
              </li>
              <li className={styles.benefitItem} style={{ color: colors.text }}>
                Ноги — без болю, набряків і втоми
              </li>
              <li className={styles.benefitItem} style={{ color: colors.text }}>
                Відновлюється легкість та естетика
              </li>
            </ul>
          </div>

          {/* Права колонка із зображенням */}
          <div className={styles.rightContent}>
            <Image
              src="/images/varicose/varicos-removebg-preview.png"
              alt="Варикозне розширення вен"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* Нижня секція на всю ширину */}
        <div className={styles.bottomSection}>
          <h3 className={styles.warningTitle} style={{ color: colors.text }}>
            Варикоз вен нижніх кінцівок — не просто косметичний дефект
          </h3>
          <p className={styles.warningText} style={{ color: colors.text }}>
            Це підступне захворювання, яке часто роками розвивається без явних симптомів. Але зволікання з лікуванням
            може мати серйозні наслідки:
          </p>
          <ul className={styles.complicationsList}>
            <li className={styles.complicationItem} style={{ color: colors.text }}>
              Тромбофлебіт
            </li>
            <li className={styles.complicationItem} style={{ color: colors.text }}>
              Трофічні виразки
            </li>
            <li className={styles.complicationItem} style={{ color: colors.text }}>
              Розрив варикозних вузлів
            </li>
            <li className={styles.dangerItem} style={{ color: colors.text }}>
              Найнебезпечніше — тромбоз глибоких вен, який може призвести до тромбоемболії легеневої артерії і навіть
              смерті
            </li>
          </ul>
          <p className={styles.callToAction} style={{ color: colors.accent }}>
            Варикоз потрібно лікувати!
          </p>
          <p className={styles.conclusion} style={{ color: colors.text }}>
            Чим раніше ви звернетеся — тим{" "}
            <span className={styles.highlight} style={{ color: colors.accent }}>
              легше, швидше й безпечніше
            </span>{" "}
            буде позбутися хвороби.
          </p>
        </div>
      </div>
    </div>
  )
}
