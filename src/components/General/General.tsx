"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./General.module.css"

interface GeneralService {
  id: number
  title: string
  image: string
  link: string
}

const generalServices: GeneralService[] = [
  {
    id: 1,
    title: "Видалення доброякісних пухлин",
    image: "/images/plastic-list/resultbreast5.jpg",
    link: "/services/skintumors",
  },
  {
    id: 2,
    title: "Карпальний канал",
    image: "/images/plastic-list/carpalSyndrome2.jpg",
    link: "/services/carpal-syndrome",
  },
  {
    id: 3,
    title: "Видалення гриж",
    image: "/images/plastic-list/gerniya.jpg",
    link: "/services/gerniotomiya",
  },
  {
    id: 4,
    title: "Лікування варикозу",
    image: "/images/plastic-list/varicos.jpg",
    link: "/services/varicose",
  },
  {
    id: 5,
    title: "Проктологія",
    image: "/images/plastic-list/proctology.jpg",
    link: "/services/proctology",
  },
]

export default function General() {
  return (
    <section className={styles.generalSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Загальна хірургія</h2>
        <div className={styles.servicesGrid}>
          {generalServices.map(service => (
            <Link key={service.id} href={service.link} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
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
