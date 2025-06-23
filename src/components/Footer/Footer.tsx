import Link from "next/link"
import styles from "./Footer.module.css"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              <Heart className={styles.logoIcon} />
              <span>PlasticP</span>
            </Link>
            <p className={styles.description}>
              Професійна пластична хірургія з індивідуальним підходом до кожного пацієнта.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Навігація</h3>
            <nav className={styles.nav}>
              <Link href="/services" className={styles.navLink}>
                Послуги
              </Link>
              <Link href="/about" className={styles.navLink}>
                Про лікаря
              </Link>

              <Link href="/testimonials" className={styles.navLink}>
                Відгуки
              </Link>
              <Link href="/contacts" className={styles.navLink}>
                Контакти
              </Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Контакти</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Phone className={styles.icon} size={20} />
                <span>+380 (50) 757-54-11</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} size={20} />
                <span>Pecheryag@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} size={20} />
                <span>м. Чернівці, вул. Героїв Майдану, 226, поверх 4</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Соціальні мережі</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=100003098763675"
                className={styles.socialLink}
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Пластична хірургія. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
