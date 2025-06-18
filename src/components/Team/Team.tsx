"use client"
import styles from "./Team.module.css"
import { TeamGallery } from "./TeamGallery"
import Image from "next/image"
import Link from "next/link"

interface DoctorInfo {
  id: number
  name: string
  position: string
  experience: string
  category?: string
  scientificTitle?: string
  specializations: string[]
  phones?: string[]
  emails?: string[]
  socialMedia?: {
    facebook?: string
    telegram?: string
    messenger?: string
    youtube?: string
    instagram?: string
  }
  other?: string
  imageUrl: string
  imagePosition?: string
}

interface TeamProps {
  className?: string
}

const doctorsData: DoctorInfo[] = [
  {
    id: 1,
    name: "Печеряга Микола Миколайович",
    position: "Хірург загальної, пластичної та малоінвазивної хірургії",
    experience: "Стаж роботи: 30 років",
    category: "Вища категорія",
    specializations: [
      "Загальна хірургія",
      "Пластична хірургія",
      "Естетична хірургія",
      "Лапароскопічна хірургія",
      "Флебологія",
      "Проктологія",
    ],
    phones: ["+380 (67) 328-73-22", "+380 (50) 757-54-11"],
    emails: ["Pecheryag@gmail.com", "pecheryag1968@gmail.com"],
    socialMedia: {
      telegram: "https://t.me/PecheriahaMykola",
      instagram: "https://www.instagram.com/nikolaipecheriaga",
      messenger: "https://m.me/nikolai.pecheriaga",
      youtube: "https://www.youtube.com/@nikolaipecheriaga",
      facebook: "https://www.facebook.com/profile.php?id=100003098763675",
    },
    other: "Регулярно проходить стажування за кордоном",
    imageUrl: "/images/team/Mykola.jpg",
    imagePosition: "center top",
  },
  {
    id: 6,
    name: "Андрушкова Юлія Анатолієвна",
    position: "Хірург загальний, Онкохірургія, Мамологія, паластична хірургія, онкодерматологія",
    experience: "Стаж роботи: 7 років",
    category: "Категорія",

    specializations: [
      "Загальна хірургія",
      "Малоінвазивна хірургія",
      "Онкологічна хірургія",
      "Пластична хірургія",
      "Мамологія",
      "Онкодерматологія",
    ],
    phones: ["+380 (50) 456-78-90"],
    emails: ["melnyk.natalia@hospital.ua"],
    socialMedia: {
      facebook: "https://facebook.com/dr.melnyk",
      youtube: "https://youtube.com/c/DrMelnyk",
      instagram: "https://instagram.com/dr.melnyk",
    },
    imageUrl: "/images/team/andrushkova.JPG",
  },
]

export function Team({ className }: TeamProps) {
  // Зображення для галереї команди
  const galleryImages = [
    {
      src: "/images/team/Sertificat1.jpg",
      alt: "Лікар за роботою",
      width: 800,
      height: 600,
      title: "Професійна діяльність",
    },
    {
      src: "/images/team/Sertificat2.jpg",
      alt: "Консультація пацієнта",
      width: 800,
      height: 600,
      title: "Консультація пацієнтів",
    },
    {
      src: "/images/team/Sertificat3.jpg",
      alt: "Хірургічна операція",
      width: 800,
      height: 600,
      title: "Хірургічні втручання",
    },
    {
      src: "/images/team/Sertificat4.jpg",
      alt: "Медична конференція",
      width: 800,
      height: 600,
      title: "Участь у конференціях",
    },
    {
      src: "/images/team/Sertificat5.jpg",
      alt: "Медичне навчання",
      width: 800,
      height: 600,
      title: "Підвищення кваліфікації",
    },
    {
      src: "/images/team/Sertificat6.jpg",
      alt: "Портрет лікаря",
      width: 800,
      height: 600,
      title: "Печеряга Микола Миколайович",
    },
  ]

  return (
    <section className={`${styles.teamSection} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Наша команда</h1>

        {/* Список лікарів */}
        <div className={styles.doctorsList}>
          {doctorsData.map(doctor => (
            <div key={doctor.id} className={styles.doctorCard}>
              {/* Фото лікаря */}
              <div className={styles.doctorImageContainer}>
                <Image
                  src={doctor.imageUrl || "/placeholder.svg"}
                  alt={`Фото ${doctor.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.doctorImage}
                  style={{
                    objectFit: "cover",
                    objectPosition: doctor.imagePosition || "center",
                  }}
                  priority={doctor.id <= 2}
                />
              </div>

              {/* Інформація про лікаря */}
              <div className={styles.doctorInfo}>
                <h3 className={styles.doctorName}>{doctor.name}</h3>
                <p className={styles.doctorPosition}>{doctor.position}</p>
                <p className={styles.doctorExperience}>{doctor.experience}</p>

                {doctor.scientificTitle && <p className={styles.doctorScientificTitle}>{doctor.scientificTitle}</p>}

                {doctor.category && <p className={styles.doctorCategory}>{doctor.category}</p>}

                {/* Спеціалізації */}
                <div className={styles.doctorSpecializations}>
                  <p className={styles.specializationsTitle}>Напрямки хірургії:</p>
                  <ul className={styles.specializationsList}>
                    {doctor.specializations.map((spec, index) => (
                      <li key={index} className={styles.specializationItem}>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Телефони */}
                {doctor.phones && doctor.phones.length > 0 && (
                  <div className={styles.doctorPhones}>
                    <p className={styles.contactSectionTitle}>Телефони:</p>
                    <ul className={styles.contactList}>
                      {doctor.phones.map((phone, index) => (
                        <li key={index} className={styles.contactItem}>
                          <span className={styles.contactIcon}>📞</span>
                          <a href={`tel:${phone.replace(/\D/g, "")}`} className={styles.contactLink}>
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Email */}
                {doctor.emails && doctor.emails.length > 0 && (
                  <div className={styles.doctorEmails}>
                    <p className={styles.contactSectionTitle}>Email:</p>
                    <ul className={styles.contactList}>
                      {doctor.emails.map((email, index) => (
                        <li key={index} className={styles.contactItem}>
                          <span className={styles.contactIcon}>✉️</span>
                          <a href={`mailto:${email}`} className={styles.contactLink}>
                            {email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Соціальні мережі */}
                {doctor.socialMedia && (
                  <div className={styles.socialMedia}>
                    <p className={styles.contactSectionTitle}>Соціальні мережі:</p>
                    <div className={styles.socialIcons}>
                      {doctor.socialMedia.facebook && (
                        <Link
                          href={doctor.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Facebook"
                        >
                          <span className={styles.facebookIcon}>f</span>
                        </Link>
                      )}
                      {doctor.socialMedia.telegram && (
                        <Link
                          href={doctor.socialMedia.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Telegram"
                        >
                          <span className={styles.telegramIcon}>t</span>
                        </Link>
                      )}
                      {doctor.socialMedia.messenger && (
                        <Link
                          href={doctor.socialMedia.messenger}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Messenger"
                        >
                          <span className={styles.messengerIcon}>m</span>
                        </Link>
                      )}
                      {doctor.socialMedia.youtube && (
                        <Link
                          href={doctor.socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="YouTube"
                        >
                          <span className={styles.youtubeIcon}>y</span>
                        </Link>
                      )}
                      {doctor.socialMedia.instagram && (
                        <Link
                          href={doctor.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Instagram"
                        >
                          <span className={styles.instagramIcon}>i</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                {doctor.other && <p className={styles.doctorOther}>{doctor.other}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Галерея на всю ширину */}
        <div className={styles.galleryWrapper}>
          <TeamGallery images={galleryImages} />
        </div>
      </div>
    </section>
  )
}

export default Team
