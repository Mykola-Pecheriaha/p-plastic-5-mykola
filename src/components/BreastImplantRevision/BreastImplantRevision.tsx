"use client"
import type React from "react"
import styles from "./BreastImplantRevision.module.css"
import GalleryIndication from "./GalleryIndication"
import type { ImageType } from "./GalleryIndication"

interface BreastImplantRevisionProps {
  backgroundColor?: string
}

const BreastImplantRevision: React.FC<BreastImplantRevisionProps> = ({
  backgroundColor = "#f0f9ff", // Світло-блакитний за замовчуванням
}) => {
  // Зображення для естетичних показань
  const aestheticImages: ImageType[] = [
    {
      src: "/images/breastImplantRevision/revision.jpg",
      alt: "Естетичні показання до ревізії",
      width: 700,
      height: 600,
      title: "Естетичні показання",
    },
    {
      src: "/images/breastImplantRevision/revision2.jpg",
      alt: "Зміна розміру імплантів",
      width: 600,
      height: 600,
      title: "Зміна розміру",
    },
    {
      src: "/images/breastImplantRevision/revision14.jpg",
      alt: "Корекція форми грудей",
      width: 600,
      height: 600,
      title: "Корекція форми",
    },
  ]

  // Зображення для медичних показань
  const medicalImages: ImageType[] = [
    {
      src: "/images/breastImplantRevision/revision21.jpg",
      alt: "Медичні показання до ревізії",
      width: 600,
      height: 550,
      title: "Медичні показання",
    },
    {
      src: "/images/breastImplantRevision/revision15.jpg",
      alt: "Капсулярна контрактура",
      width: 550,
      height: 650,
      title: "Капсулярна контрактура",
    },
    {
      src: "/images/breastImplantRevision/revision16.jpg",
      alt: "Розрив імпланту",
      width: 550,
      height: 550,
      title: "Розрив імпланту",
    },
  ]

  // Зображення для протипоказань
  const contraindicationsImages: ImageType[] = [
    {
      src: "/images/breastImplantRevision/contraindicacio.jpg",
      alt: "Протипокази до операції",
      width: 600,
      height: 500,
      title: "Протипокази",
    },
  ]

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Покази до видалення чи заміні імплантів грудей</h2>

          <p className={styles.introduction}>
            Реендопротезування (повторна заміна грудних імплантів) виконується як із <strong>естетичних</strong>, так і
            з <strong>медичних причин</strong>.
          </p>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>За естетичними показами:</h3>
            <div className={styles.sectionContent}>
              <div className={styles.textColumn}>
                <ul className={styles.indicationsList}>
                  <li>
                    незадоволеність розміром, формою, контурами грудей. Наприклад, збільшивши груди на 1-2 розміри,
                    жінка хоче ще більшого розміру. Трапляються й протилежні ситуації, коли необхідна заміна грудних
                    імплантів на менші;
                  </li>
                  <li>неправильно підібрані імпланти при первинній мамопластиці;</li>
                  <li>видима асиметрія грудей;</li>
                  <li>
                    зміна форми грудей після різкого схуднення або різкого набору ваги, вагітності, грудного
                    вигодовування, а також внаслідок вікових змін.
                  </li>
                  <li>явне контурування ендопротезу на поверхні шкіри.</li>
                </ul>
              </div>
              <div className={styles.galleryColumn}>
                <GalleryIndication images={aestheticImages} />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Медичні покази:</h3>
            <div className={styles.sectionContent}>
              <div className={styles.textColumn}>
                <ul className={styles.indicationsList}>
                  <li>розрив, порушення цілісності силіконового ендопротезу;</li>
                  <li>
                    формування капсулярної контрактури. Поява фіброзної оболонки (капсули), яка стає щільною,
                    промацується та викликає хворобливі відчуття;
                  </li>
                  <li>деформація та асиметрія грудей внаслідок зміщення імпланту з утворенням сером;</li>
                  <li>
                    Будь які септичні захворювання молочної залози з поширенням на імплант, при неефективності
                    консервативної терапії. .
                  </li>
                </ul>
              </div>
              <div className={styles.galleryColumn}>
                <GalleryIndication images={medicalImages} />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Протипокази:</h3>
            <div className={styles.sectionContent}>
              <div className={styles.textColumn}>
                <p>
                  Операція із заміни імплантів по естетичним показам, як будь-яке хірургічне втручання, має низку певних
                  протипоказань. :
                </p>
                <ul className={styles.indicationsList}>
                  <li>
                    тяжкі хронічні захворювання серцево-судинної та легеневої систем, особливо на стадії загострення;
                  </li>
                  <li>вагітність, період грудного вигодовування;</li>
                  <li>порушення згортання крові.</li>
                </ul>
                <p>
                  У клініці перед реендопротезуванням молочних залоз пацієнтка проходить обстеження та здає аналізи. На
                  підставі отриманих результатів пластичний хірург приймає рішення про проведення операції.
                </p>
              </div>
              <div className={styles.galleryColumn}>
                <GalleryIndication images={contraindicationsImages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreastImplantRevision
