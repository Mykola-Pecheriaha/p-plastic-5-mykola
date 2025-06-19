"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./Body.module.css"

interface BodyService {
  id: number
  title: string
  image: string
  link: string
}

interface BodyProps {
  className?: string
}

const bodyServices: BodyService[] = [
  {
    id: 1,
    title: "Абдомінопластика",
    image: "/images/plastic-list/abdominoplastic.jpg",
    link: "/services/abdominoplasty",
  },
  {
    id: 2,
    title: "Ліпосакція",
    image: "/images/plastic-list/liposuction6.jpg",
    link: "/services/liposuction",
  },
  {
    id: 3,
    title: "Пластика ніг",
    image: "/images/plastic-list/plastic-lift22.jpg",
    link: "/services/leg-surgery",
  },
  {
    id: 4,
    title: "Видалення шийного горба",
    image: "/images/plastic-list/plastic-lift17.jpg",
    link: "/services/liposuction",
  },
  {
    id: 5,
    title: "Збільшення сідниць",
    image: "/images/plastic-list/plastic-lift22.jpg",
    link: "/services/buttock-augmentation",
  },
]

export function Body({ className }: BodyProps) {
  return (
    <section className={`${styles.bodySection} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Пластична хірургія тіла</h1>

        <div className={styles.servicesGrid}>
          {bodyServices.map(service => (
            <Link key={service.id} href={service.link} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                  priority={service.id <= 3}
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

export default Body
