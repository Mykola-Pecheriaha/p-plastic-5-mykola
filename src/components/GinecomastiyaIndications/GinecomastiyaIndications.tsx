"use client"
import type React from "react"
import styles from "./GinecomastiyaIndications.module.css"
import SimpleGallery from "./SimpleGallery"

interface Props {
  backgroundColor?: string
}

const GinecomastiyaIndications: React.FC<Props> = ({ backgroundColor = "#f0f9ff" }) => {
  // Виправлені шляхи до зображень
  const images1 = [
    {
      src: "/images/GinecomastiyaIndications/ginecomas8.jpg",
      alt: "Гінекомастія - приклад 1",
      width: 800,
      height: 600,
      title: "Хибна гінекомастія",
    },
    {
      src: "/images/GinecomastiyaIndications/ginecomas4.jpg",
      alt: "Гінекомастія - приклад 2",
      width: 800,
      height: 600,
      title: "Збільшення молочних залоз",
    },
  ]

  const images2 = [
    {
      src: "/images/GinecomastiyaIndications/ginecomas9.jpg",
      alt: "Показання до операції - приклад 1",
      width: 800,
      height: 600,
      title: "Асиметричне збільшення",
    },
    {
      src: "/images/GinecomastiyaIndications/ginecomas10.jpg",
      alt: "Показання до операції - приклад 2",
      width: 800,
      height: 600,
      title: "Ущільнення в тканинах",
    },
    {
      src: "/images/GinecomastiyaIndications/ginecomas11.jpg",
      alt: "Показання до операції - приклад 3",
      width: 800,
      height: 600,
      title: "Естетичний дискомфорт",
    },
  ]

  const images3 = [
    {
      src: "/images/GinecomastiyaIndications/ginecomas100.jpg",
      alt: "Протипоказання до операції",
      width: 800,
      height: 600,
      title: "Медичні протипоказання",
    },
  ]

  return (
    <div style={{ backgroundColor, padding: "60px 0" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Лікування гінекомастії: показання до операції</h2>

        {/* Секція 1 */}
        <div className={styles.section}>
          <div className={styles.textBlock}>
            <p>
              Гінекомастія — це стан, який характеризується збільшенням молочних залоз у чоловіків. Існують два основних
              типи цієї патології: <strong>істинна</strong> та <strong>хибна</strong> (псевдогінекомастія).
            </p>
            <div className={styles.point}>
              <span>🔹</span>
              <div>
                <strong>Істинна гінекомастія</strong> виникає внаслідок гормональних збоїв, що можуть бути спричинені
                захворюваннями або прийомом гормональних препаратів.
              </div>
            </div>
            <div className={styles.point}>
              <span>🔹</span>
              <div>
                <strong>Хибна гінекомастія</strong> є результатом надмірної ваги або ожиріння. У цьому випадку
                збільшення грудей зумовлене накопиченням жирової тканини.
              </div>
            </div>
          </div>
          <div className={styles.galleryBlock}>
            <SimpleGallery images={images1} />
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className={styles.fullText}>
          <p>
            Найчастіше патологія спостерігається з двох сторін, однак, у деяких випадках, може уражатися і одна сторона.
            Це не лише косметичний недолік, в окремих випадках один із симптомів серйозних порушень у роботі організму.
          </p>
        </div>

        <h3 className={styles.subtitle}>Операція гінекомастія у чоловіків показана у таких випадках:</h3>

        {/* Секція 2 */}
        <div className={styles.section}>
          <div className={styles.textBlock}>
            <p>Оперативне втручання при гінекомастії у чоловіків рекомендоване у таких випадках:</p>
            <ul className={styles.list}>
              <li>симетричне або асиметричне збільшення грудей, що виходить за межі норми;</li>
              <li>виділення із соска при натисканні;</li>
              <li>наявність ущільнень або відчутної твердості в тканинах;</li>
              <li>біль під час дотику чи пальпації;</li>
              <li>відчуття тяжкості, дискомфорту чи естетичне незадоволення виглядом грудей.</li>
            </ul>
          </div>
          <div className={styles.galleryBlock}>
            <SimpleGallery images={images2} />
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className={styles.fullText}>
          <p>
            Гінекомастія — не лише медична проблема, а й емоційна. Її ефективне хірургічне лікування дозволяє не просто
            усунути фізичний дефект, а й суттєво покращити якість життя.
          </p>
        </div>

        <h3 className={styles.subtitle}>Протипокази</h3>

        <div className={styles.fullText}>
          <p>
            Гінекомастія лікування хірургічним шляхом показане пацієнтам не завжди. Є низка протипоказань, яких
            рекомендовано дотримуватися:
          </p>
        </div>

        {/* Секція 3 */}
        <div className={styles.section}>
          <div className={styles.textBlock}>
            <p>
              <strong>Медичні протипоказання до проведення операції:</strong>
            </p>
            <ul className={styles.list}>
              <li>Серцева недостатність та інші серйозні захворювання серцево-судинної системи</li>
              <li>Хронічні патології печінки та нирок</li>
              <li>Цукровий діабет, надмірна вага або ожиріння високого ступеня</li>
              <li>Порушення згортання крові</li>
              <li>Онкологічні захворювання</li>
            </ul>
          </div>
          <div className={styles.galleryBlock}>
            <SimpleGallery images={images3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GinecomastiyaIndications
