import type React from "react"
import Link from "next/link"
import styles from "./Services.module.css"
import Image from "next/image"
import { Heart, User, Activity, Stethoscope } from "lucide-react"
import ConsultationCTA from "@/components/ConsultationCTA/ConsultationCTA"

interface ServicesProps {
  backgroundColor?: string
}

const Services: React.FC<ServicesProps> = ({ backgroundColor }) => {
  const servicesData = [
    {
      id: "face",
      title: "Пластика обличчя",
      image: "/images/plastic-list/plastic-lift8.jpg",
      icon: User, // 👈 Іконка для наведення
      services: [
        { name: "Підтяжка обличчя та шиї", path: "/services/facelift-section" },
        { name: "Блефаропластика", path: "/services/blepharoplasty" },
        { name: "Пластика підборіддя", path: "/services/chin-surgery" },

        { name: "Корекція вух", path: "/services/ottoplastic" },
      ],
      link: "/services/face",
    },
    {
      id: "breast",
      title: "Пластика грудей",
      image: "/images/plastic-list/plastic-lift.jpg",
      icon: Heart, // 👈 Іконка для наведення
      services: [
        { name: "Збільшення грудей", path: "/services/breast-surgery" },
        { name: "Заміна або видалення імплантів", path: "/services/implant-removal-replacement" },
        { name: "Підтяжка грудей, корекція соска та ареоли ", path: "/services/mastopexy-with-nipple-correction" },

        { name: "Гінекомастія", path: "/services/ginecomastiya" },
      ],
      link: "/services/breast",
    },
    {
      id: "body",
      title: "Пластика тіла",
      image: "/images/plastic-list/bodiContur6.jpg",
      icon: Activity, // 👈 Іконка для наведення
      services: [
        { name: "Абдомінопластика", path: "/services/abdominoplasty" },
        { name: "Ліпосакція", path: "/services/liposuction" },
        { name: "Пластика ніг", path: "/services/led-surgery" },
        { name: "Видалення шийного горба", path: "/services/liposuction" },
        { name: "Збільшення сідниць", path: "/services/buttock-augmentation" },
      ],
      link: "/services/body",
    },
    {
      id: "general",
      title: "Загальна хірургія",
      image: "/images/plastic-list/general.jpg",
      icon: Stethoscope, // 👈 Іконка для наведення
      services: [
        { name: "Видалення пухлин", path: "/services/tumor-removal" },
        { name: "Карпальний канал", path: "/services/carpal-syndrome" },
        { name: "Видалення гриж", path: "/services/gerniotomiya" },
        { name: "Лікування варикозу", path: "/services/varicose" },
        { name: "Проктологія", path: "/services/proctology" },
      ],
      link: "/services/general",
    },
  ]

  // Створюємо стиль для секції
  const sectionStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {}

  return (
    <>
      <section className={styles.services} style={sectionStyle}>
        <div className={styles.container}>
          {/* Заголовок */}
          <div className={styles.header}>
            <h1 className={styles.title}>Хірургічні послуги</h1>
            <p className={styles.subtitle}>
              Професійні медичні послуги з використанням сучасних технологій та індивідуальним підходом до кожного
              пацієнта
            </p>
          </div>

          {/* Сітка послуг */}
          <div className={styles.grid}>
            {servicesData.map(service => {
              const IconComponent = service.icon // 👈 Отримуємо компонент іконки
              return (
                <div key={service.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.imageWrapper}>
                      {/* 👈 Зображення (показується в спокої) */}
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.title} зображення`}
                        width={80}
                        height={80}
                        className={styles.serviceImage}
                      />
                      {/* 👈 Іконка (показується при наведенні) */}
                      <IconComponent size={48} className={styles.serviceIcon} />
                    </div>
                    <Link href={service.link} className={styles.cardTitle}>
                      {service.title}
                    </Link>
                  </div>

                  <div className={styles.cardContent}>
                    <ul className={styles.servicesList}>
                      {service.services.map((item, index) => (
                        <li key={index} className={styles.serviceItem}>
                          <Link href={item.path} className={styles.serviceLink}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Додаткова інформація */}
          <div className={styles.additionalInfo}>
            <p className={styles.infoText}>
              Всі операції проводяться в сучасних медичних закладах з використанням найновіших технологій. Ми гарантуємо
              індивідуальний підхід та професійне післяопераційне спостереження.
            </p>
          </div>
        </div>
      </section>

      {/* Додаємо ConsultationCTA після секції послуг */}
      <ConsultationCTA />
    </>
  )
}

export default Services
