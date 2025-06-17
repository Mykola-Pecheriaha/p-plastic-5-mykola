"use client"
import styles from "./Diplomcertificates.module.css"
import { DiplomcertificatesGallery } from "./DiplomcertificatesGallery"

interface DiplomcertificatesProps {
  className?: string
}

export function Diplomcertificates({ className }: DiplomcertificatesProps) {
  // Зображення для галереї дипломів та сертифікатів
  const galleryImages = [
    {
      src: "/images/sertificats/Sertificat1.jpg",
      alt: "Освіта лікаря",
      width: 800,
      height: 600,
      title: "Диплом з відзнакою",
    },
    {
      src: "/images/sertificats/Sertificat2.jpg",
      alt: "Кар'єра лікаря",
      width: 800,
      height: 600,
      title: "Професійна діяльність",
    },
    {
      src: "/images/sertificats/Sertificat3.jpg",
      alt: "Медичні курси",
      width: 800,
      height: 600,
      title: "Підвищення кваліфікації",
    },
    {
      src: "/images/sertificats/Sertificat4.jpg",
      alt: "Хірургічна практика",
      width: 800,
      height: 600,
      title: "Хірургічна практика",
    },
  ]
  return (
    <section className={`${styles.diplomcertificatesSection} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Дипломи та сертифікати</h1>

        <div className={styles.galleryWrapper}>
          <DiplomcertificatesGallery images={galleryImages} />
        </div>
      </div>
    </section>
  )
}

export default Diplomcertificates
