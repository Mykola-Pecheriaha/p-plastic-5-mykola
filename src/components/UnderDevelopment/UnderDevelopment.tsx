import type React from "react"
import Link from "next/link"
import styles from "./UnderDevelopment.module.css"

interface UnderDevelopmentProps {
  title: string
  subtitle?: string
  description?: string
  backgroundColor?: string
  expectedDate?: string
  contactLink?: string
  services?: string[]
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({
  title,
  subtitle,
  description,
  backgroundColor = "#e8f5e8",
  expectedDate,
  contactLink = "/about-doctor/contacts",
  services,
}) => {
  return (
    <section className={styles.underDevelopment} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Іконка */}
          <div className={styles.icon}>🚧</div>

          {/* Заголовок */}
          <h1 className={styles.title}>{title}</h1>

          {/* Підзаголовок */}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {/* Повідомлення про розробку */}
          <div className={styles.message}>
            <h2 className={styles.developmentTitle}>Сторінка в розробці</h2>
            <p className={styles.description}>
              {description ||
                "Ми працюємо над створенням детальної інформації про цю послугу. Незабаром тут з'явиться повний опис процедури, фотогалерея та відповіді на поширені запитання."}
            </p>
          </div>

          {/* Список послуг */}
          {services && services.length > 0 && (
            <div className={styles.servicesSection}>
              <h3 className={styles.servicesTitle}>Що буде доступно на цій сторінці:</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Очікувана дата (опціонально) */}
          {expectedDate && (
            <div className={styles.expectedDate}>
              <p>
                Очікувана дата запуску: <strong>{expectedDate}</strong>
              </p>
            </div>
          )}

          {/* Кнопки дій */}
          <div className={styles.actions}>
            <Link href="/" className={styles.homeButton}>
              Повернутися на головну
            </Link>
            <Link href={contactLink} className={styles.contactButton}>
              Зв`язатися з нами
            </Link>
          </div>

          {/* Додаткова інформація */}
          <div className={styles.additionalInfo}>
            <p className={styles.infoText}>
              Якщо у вас є запитання про цю послугу, наші спеціалісти готові надати детальну консультацію по телефону
              або під час особистої зустрічі.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnderDevelopment
