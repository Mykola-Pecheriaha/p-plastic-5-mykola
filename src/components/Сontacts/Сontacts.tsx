import styles from "./Сontacts.module.css"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.container}>
        <div className={styles.contactsWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} size={16} />
              <span>+380 (50) 757-54-11</span>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} size={16} />
              <span>Pecheryag@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={16} />
              <span>м. Чернівці, вул. Героїв Майдану, 226</span>
            </div>
            <div className={styles.contactItem}>
              <Clock className={styles.icon} size={16} />
              <span>Пн-Пт: 9:00-16:00</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=100003098763675"
              className={styles.socialLink}
              aria-label="Facebook"
              target="_blank"
            >
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" className={styles.socialLink} target="_blank" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
