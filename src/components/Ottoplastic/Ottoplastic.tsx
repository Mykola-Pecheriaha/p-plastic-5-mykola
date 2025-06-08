"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./Ottoplastic.module.css"
import OttoplasticGallery, { type GalleryImage } from "./OttoplasticGallery"

interface OttoplasticProps {
  backgroundColor?: string
}

const Ottoplastic: React.FC<OttoplasticProps> = ({ backgroundColor = "#e8f5e8" }) => {
  const [imageSrc, setImageSrc] = useState("/images/ottoplastic/otto2-removebg-preview.png")

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === "undefined") return

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: "HEAD" })
        if (!response.ok) {
          setImageSrc("/placeholder.svg?height=400&width=500")
        }
      } catch (error) {
        console.error("Помилка завантаження зображення:", error)
        setImageSrc("/placeholder.svg?height=400&width=500")
      }
    }

    checkImageExists()
  }, [imageSrc])

  // Масив зображень для галереї з розмірами та назвами
  const galleryImages: GalleryImage[] = [
    {
      src: "/images/ottoplastic/otto6.jpg",
      alt: "До і після отопластики - приклад 1",
      width: 800,
      height: 700,
      title: "До і після отопластики - приклад 1",
    },
    {
      src: "/images/ottoplastic/otto5.jpg",
      alt: "До і після отопластики - приклад 2",
      width: 800,
      height: 1000,
      title: "До і після отопластики - приклад 2",
    },
    {
      src: "/images/ottoplastic/otto7.jpg",
      alt: "До і після отопластики - приклад 3",
      width: 800,
      height: 1000,
      title: "До і після отопластики - приклад 3",
    },
    {
      src: "/images/ottoplastic/otto3.jpg",
      alt: "До і після отопластики - приклад 4",
      width: 800,
      height: 1000,
      title: "До і після отопластики - приклад 4",
    },
  ]

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        {/* Верхня секція - дві колонки */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h1 className={styles.title}> Отопластика — корекція форми вушних раковин та дольки вух</h1>
            <div className={styles.advantages}>
              <p className={styles.advantagesTitle}>🔹 Основні переваги:</p>
              <ul className={styles.advantagesList}>
                <li>✔️ Бажана форма та розмір вушних раковин</li>
                <li>✔️ Виправлення асиметрії</li>
                <li>✔️ Без гематом і помітних рубців</li>
                <li>✔️ Корекція вродженої та набутої деформації дольки вуха</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt="Отопластика - корекція клаповухості"
                width={500}
                height={400}
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Середня секція - на всю ширину */}
        <div className={styles.middleSection}>
          <p className={styles.description}>
            Отопластика — це популярна пластична операція, що дозволяє ефективно скоригувати:
          </p>
          <ul className={styles.descriptionList}>
            <li>асиметрію вушних раковин</li>
            <li>клаповухість</li>
            <li>надмірну відстовбурченість вух</li>
            <li>порушення структури вушних раковин</li>
            <li>вроджену чи набуту деформацію дольки вух</li>
          </ul>
          <p className={styles.additionalInfo}>
            Операція виконується як для <strong>дорослих</strong>, так і для <strong>дітей</strong>, за медичними чи
            естетичними показаннями.
          </p>
        </div>

        {/* Нижня секція - дві колонки */}
        <div className={styles.bottomSection}>
          <div className={styles.leftColumn}>
            <div className={styles.results}>
              <p className={styles.resultsTitle}>🌟 Результат отопластики:</p>
              <ul className={styles.resultsList}>
                <li>усунення фізичних вад</li>
                <li>гармонізація рис обличчя</li>
                <li>підвищення впевненості в собі</li>
                <li>позбавлення психологічного дискомфорту</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <OttoplasticGallery images={galleryImages} />
          </div>
        </div>

        {/* Остання секція - на всю ширину */}
        <div className={styles.factSection}>
          <p className={styles.factTitle}>🔍 Цікаво знати:</p>
          <p className={styles.factText}>
            Клаповухість — є одна з найпоширеніших вушних деформацій. За статистикою, вона зустрічається у{" "}
            <strong>близько 5% людей</strong>. І хоча це не загрожує здоров`ю, така особливість часто стає{" "}
            <strong>причиною заниженої самооцінки</strong>, особливо в підлітковому віці.
          </p>
          <p className={styles.factText}>
            Порушення структури дольки вух — є набута чи вроджена деформація. На сьогоднішній день дуже частою
            деформацією дольки є <strong>носіння різних прикрас</strong>, що значно змінює (деформує) її. І хоча це не
            загрожує здоров`ю, при досягненні більш зрілого віку або зміні навколишнього соціуму{" "}
            <strong>є причиною зміни самооцінки</strong>. Також потрібно враховувати травми дольки кримінального
            характеру.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ottoplastic
