"use client"
import type { FC } from "react"
import styles from "./ImplantReplacementProcedure.module.css"
import GalleryIndication from "./GalleryIndication"
import type { ImageType } from "./GalleryIndication"

interface ImplantReplacementProcedureProps {
  backgroundColor?: string
}

const ImplantReplacementProcedure: FC<ImplantReplacementProcedureProps> = ({
  backgroundColor = "#e8f5e8", // Світло-зелений за замовчуванням
}) => {
  // Масив зображень для галереї
  const galleryImages: ImageType[] = [
    {
      src: "/images/ImplantReplacementProcedure/Replacement.jpg",
      alt: "Етапи заміни імплантів",
      width: 500,
      height: 980,
      title: "Етапи операції",
    },
    {
      src: "/images/ImplantReplacementProcedure/Replacement2.jpg",
      alt: "Процедура реендопротезування",
      width: 600,
      height: 850,
      title: "Процедура заміни",
    },
    {
      src: "/images/ImplantReplacementProcedure/revision19.jpg",
      alt: "Результат операції",
      width: 600,
      height: 820,
      title: "Результат",
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
          <h2 className={styles.title}>Проведення операції: етапи реендопротезування</h2>

          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <p className={styles.introText}>
                <span className={styles.diamond}>🔹</span>
                Операція з реендопротезування молочних залоз проходить у кілька послідовних етапів і виконується з
                максимальним дотриманням безпеки та естетичних результатів.
              </p>

              <ol className={styles.procedureSteps}>
                <li>
                  <strong>Видалення попередніх імплантів.</strong>
                  <p>
                    Хірург здійснює розріз по вже наявному рубцю, що залишився після первинної операції, мінімізуючи
                    утворення нових слідів. Через цей доступ акуратно вилучають старі імпланти.
                  </p>
                </li>
                <li>
                  <strong>Капсулотомія (видалення капсули).</strong>
                  <p>
                    Утворена навколо імплантів фіброзна капсула видаляється повністю або частково — залежно від
                    клінічної ситуації. Це дозволяє зменшити ризик ускладнень і покращити форму грудей.
                  </p>
                </li>
                <li>
                  <strong>Встановлення нових імплантів.</strong>
                  <p>
                    Нові ендопротези, як правило, імплантуються в уже сформовану внутрішню кишеню. Це забезпечує
                    стабільну посадку та природній вигляд грудей.
                  </p>
                </li>
              </ol>

              <div className={styles.anesthesiaInfo}>
                <p>
                  Операція виконується під <strong>загальним наркозом</strong>, з використанням сучасного інгаляційного
                  препарату <strong>Севофлуран</strong>, який забезпечує м`яке та контрольоване занурення в сон, а також
                  комфортне пробудження.
                </p>
              </div>
            </div>

            <div className={styles.galleryContent}>
              <GalleryIndication images={galleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplantReplacementProcedure
