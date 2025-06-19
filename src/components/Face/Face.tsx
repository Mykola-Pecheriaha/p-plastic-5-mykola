"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./Face.module.css"

interface FaceService {
  id: number
  title: string
  image: string
  link: string
  alt: string
}

interface FaceProps {
  className?: string
}

export function Face({ className }: FaceProps) {
  // Дані для карточок послуг обличчя
  const faceServices: FaceService[] = [
    {
      id: 1,
      title: "Підтяжка обличчя та шиї",
      image: "/images/plastic-list/plastic-lift19.jpg",
      link: "/services/facelift-section",
      alt: "Підтяжка обличчя та шиї",
    },
    {
      id: 2,
      title: "Блефаропластика",
      image: "/images/plastic-list/plastic-lift20.jpg",
      link: "/services/blepharoplasty",
      alt: "Блефаропластика - пластика повік",
    },
    {
      id: 3,
      title: "Пластика підборіддя",
      image: "/images/plastic-list/plastic-lift22.jpg",
      link: "/services/chin-surgery",
      alt: "Пластика підборіддя",
    },
    {
      id: 4,
      title: "Корекція вух",
      image: "/images/plastic-list/plastic-lift21.jpg",
      link: "/services/ottoplastic",
      alt: "Корекція вух - отопластика",
    },
  ]

  return (
    <section className={`${styles.faceSection} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Пластична хірургія обличчя</h1>
        <p className={styles.subtitle}>Професійні процедури для корекції та омолодження обличчя</p>

        <div className={styles.servicesGrid}>
          {faceServices.map(service => (
            <Link key={service.id} href={service.link} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                  priority={service.id <= 2}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Face
