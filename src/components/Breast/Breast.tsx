"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./Breast.module.css"

interface BreastService {
  id: number
  title: string
  image: string
  link: string
  alt: string
}

interface BreastProps {
  className?: string
}

const breastServices: BreastService[] = [
  {
    id: 1,
    title: "Збільшення грудей",
    image: "/images/plastic-list/cartca5.jpg",
    link: "/services/breast-surgery",
    alt: "Збільшення грудей - мамопластика",
  },
  {
    id: 2,
    title: "Заміна або видалення імплантів",
    image: "/images/plastic-list/3breast.jpg",
    link: "/services/implant-removal-replacement",
    alt: "Заміна або видалення імплантів грудей",
  },
  {
    id: 3,
    title: "Підтяжка грудей, корекція соска та ареоли",
    image: "/images/plastic-list/plastic-lift2.jpg",
    link: "/services/mastopexy-with-nipple-correction",
    alt: "Підтяжка грудей та корекція соска",
  },
  {
    id: 4,
    title: "Гінекомастія",
    image: "/images/plastic-list/ginecomas6.jpg",
    link: "/services/ginecomastiya",
    alt: "Лікування гінекомастії",
  },
]

export const Breast: React.FC<BreastProps> = ({ className }) => {
  return (
    <section className={`${styles.breastSection} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Пластична хірургія грудей</h1>
        <p className={styles.subtitle}>
          Професійні послуги пластичної хірургії грудей для досягнення ідеальної форми та розміру
        </p>

        <div className={styles.servicesGrid}>
          {breastServices.map(service => (
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

export default Breast
