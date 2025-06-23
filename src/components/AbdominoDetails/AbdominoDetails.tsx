"use client"
import type React from "react"
import styles from "./AbdominoDetails.module.css"
import AbdominoDetailsGallery from "./AbdominoDetailsGallery"

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

interface AbdominoDetailsProps {
  backgroundColor?: string
}

const AbdominoDetails: React.FC<AbdominoDetailsProps> = ({ backgroundColor = "#f0f9ff" }) => {
  // Зображення для першої галереї (показання)
  const indicationImages: GalleryImage[] = [
    {
      src: "/images/abdominoplastyDetalis/abdominoDetalis15.jpg",
      alt: "Абдомінопластика: показання",
      width: 700,
      height: 800,
      title: 'Відвислий шкірно-жировий "фартух"',
    },
    {
      src: "/images/abdominoplastyDetalis/abdominoDetalis1.jpg",
      alt: "Втрата еластичності м'язів живота",
      width: 800,
      height: 600,
      title: "Втрата еластичності м'язів живота",
    },
    {
      src: "/images/abdominoplastyDetalis/abdominoDetalis2.JPG",
      alt: "Післяопераційні рубці",
      width: 800,
      height: 600,
      title: "Неестетичний зовнішній вигляд через післяопераційні рубці",
    },
  ]

  // Зображення для другої галереї (протипоказання)
  const contraindicationImages: GalleryImage[] = [
    {
      src: "/images/abdominoplastyDetalis/contraindicatio1.jpg",
      alt: "Протипоказання: хронічні захворювання",
      width: 800,
      height: 600,
      title: "Хронічні захворювання як протипоказання",
    },
    {
      src: "/images/abdominoplastyDetalis/abdominoPreparation27.jpg",
      alt: "Протипоказання: порушення згортання крові",
      width: 800,
      height: 600,
      title: "Порушення згортання крові як протипоказання",
    },
    {
      src: "/images/abdominoplastyDetalis/abdominoPreparation28.jpg",
      alt: "Індивідуальний підхід до пацієнта",
      width: 800,
      height: 600,
      title: "Індивідуальний підхід до кожного пацієнта",
    },
  ]

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.title}>✨ Абдомінопластика: показання до операції</h2>

        {/* Перша секція: показання - 50/50 розподіл */}
        <div className={styles.section}>
          <div className={styles.textColumn}>
            <div className={styles.doctorIcon}>✅</div>
            <p className={styles.sectionText}>Абдомінопластика живота рекомендована у випадках:</p>
            <div className={styles.indicationsList}>
              <h3 className={styles.listTitle}>🔹 Основні показання:</h3>
              <ul className={styles.list}>
                <li>
                  <span className={styles.bulletPoint}>🔸</span> Відвислий шкірно-жировий «фартух», що виникає після:
                  <ul className={styles.subList}>
                    <li>різкої втрати ваги (понад 10 кг)</li>
                    <li>вікових або гормональних змін</li>
                    <li>вагітності та пологів</li>
                  </ul>
                </li>
                <li>
                  <span className={styles.bulletPoint}>🔸</span> Втрата еластичності м`язів живота:
                  <ul className={styles.subList}>
                    <li>птоз</li>
                    <li>в`ялість</li>
                    <li>діастаз (розходження прямих м`язів)</li>
                  </ul>
                </li>
                <li>
                  <span className={styles.bulletPoint}>🔸</span> Неестетичний зовнішній вигляд через:
                  <ul className={styles.subList}>
                    <li>післяопераційні втягнуті рубці (наприклад, після кесаревого розтину)</li>
                  </ul>
                </li>
                <li>
                  <span className={styles.bulletPoint}>🔸</span> Грижа білої лінії живота у поєднанні з розтягнутою
                  шкірою
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <AbdominoDetailsGallery images={indicationImages} />
          </div>
        </div>

        {/* Середні секції: додаткова інформація - повна ширина */}
        <div className={styles.fullWidthSection}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>✅ Після пологів</h3>
            <p className={styles.infoText}>
              Операція часто виконується після народження дітей, коли жінка вже не планує вагітність. Повторні пологи
              можуть вплинути на результати, тому доцільно робити операцію після остаточного формування сім`ї. Водночас
              усе індивідуально — важливу роль відіграють:
            </p>
            <ul className={styles.infoList}>
              <li>якість шкіри</li>
              <li>здатність до набору ваги</li>
              <li>особливості організму</li>
            </ul>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>✅ Комбіновані операції</h3>
            <p className={styles.infoText}>Абдомінопластику часто поєднують з:</p>
            <ul className={styles.infoList}>
              <li>збільшенням грудей</li>
              <li>підтяжкою грудей</li>
            </ul>
            <p className={styles.infoText}>
              Це особливо актуально для молодих мам, які хочуть відновити допологову форму, а також для жінок після
              значного схуднення.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>✅ Пластика живота у чоловіків</h3>
            <p className={styles.infoText}>
              Сучасна абдомінопластика затребувана і серед чоловіків, які прагнуть покращити контури тіла після
              інтенсивного схуднення або тренувань.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>✅ Важливий момент</h3>
            <p className={styles.infoText}>
              Операція виконується лише при стабільній вазі. Якщо пацієнт продовжить худнути після втручання, це може
              призвести до надлишку шкіри, що знову потребуватиме корекції.
            </p>
          </div>
        </div>

        {/* Заголовок протипоказань */}
        <h2 className={styles.contraindicationsTitle}> Протипоказання до абдомінопластики</h2>
        <p className={styles.contraindicationsIntro}>
          Абдомінопластика живота, як і будь-яке інше хірургічне втручання, має ряд медичних протипоказань, які
          необхідно враховувати перед плануванням операції.
        </p>

        {/* Друга секція: протипоказання - 50/50 розподіл */}
        <div className={styles.section}>
          <div className={styles.textColumn}>
            <div className={styles.contraindicationsList}>
              <h3 className={styles.listTitle}>✅ До основних протипоказань належать:</h3>
              <ul className={styles.list}>
                <li>
                  <span className={styles.bulletPoint}>❗</span> Хронічні захворювання:
                  <ul className={styles.subList}>
                    <li>цукровий діабет</li>
                    <li>ожиріння III–IV ступеня</li>
                    <li>серцево-легенева недостатність</li>
                    <li>захворювання щитовидної залози</li>
                  </ul>
                  <p className={styles.note}>
                    У таких випадках необхідно стабілізувати стан пацієнта або вилікувати супутнє захворювання перед
                    плануванням операції.
                  </p>
                </li>
                <li>
                  <span className={styles.bulletPoint}>❗</span> Порушення згортання крові
                  <p className={styles.note}>Це може ускладнити процес загоєння та підвищити ризик ускладнень.</p>
                </li>
                <li>
                  <span className={styles.bulletPoint}>❗</span> Серйозні психічні розлади
                  <p className={styles.note}>Операція потребує усвідомленого та стабільного психологічного стану.</p>
                </li>
              </ul>

              <div className={styles.individualApproach}>
                <h3 className={styles.approachTitle}>✅ Індивідуальний підхід</h3>
                <p className={styles.approachText}>
                  Остаточне рішення щодо можливості проведення абдомінопластики приймає лікар, враховуючи:
                </p>
                <ul className={styles.approachList}>
                  <li>загальний стан здоров`я</li>
                  <li>вік пацієнта</li>
                  <li>індивідуальні особливості організму</li>
                  <li>рівень мотивації та психоемоційний настрій</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <AbdominoDetailsGallery images={contraindicationImages} />
          </div>
        </div>

        {/* Заключна примітка */}
        <div className={styles.conclusion}>
          <p className={styles.conclusionText}>
            Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров`я пацієнта та клінічних
            досліджень.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AbdominoDetails
