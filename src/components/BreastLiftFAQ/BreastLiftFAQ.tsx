"use client"
import type React from "react"
import { useState } from "react"
import styles from "./BreastLiftFAQ.module.css"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import BreastLiftFAQGallery from "./BreastLiftFAQGallery"

interface BreastLiftFAQProps {
  backgroundColor?: string
}

interface FAQItem {
  id: string
  title: string
  content: string
  images: Array<{
    src: string
    alt: string
    width: number
    height: number
    title: string
  }>
}

// Винесіть ці дані за межі компонента
const FAQ_ITEMS: FAQItem[] = [
  {
    id: "operation-duration",
    title: "🔹 Скільки триває операція з підтяжки грудей",
    content: `Підтяжка молочних залоз проводиться під загальною анестезією. У клініці застосовується якісний та безпечний інгаляційний наркоз на Севофлурані. Він забезпечує планомірне занурення у медикаментозний сон, а також легкий та комфортний вихід без галюцинацій.\n\nТривалість операції – від 1,5 до 3 годин (залежно від застосовуваної методики).`,
    images: [
      {
        src: "/images/BreastLiftFAQ/BreastLiftFAQ1.jpg",
        alt: "Тривалість операції з підтяжки грудей",
        width: 400,
        height: 600,
        title: "Операційна зала",
      },
    ],
  },
  {
    id: "rehabilitation",
    title: "🔹 Реабілітація після підтяжки грудей",
    content: `Після операції пацієнтка обов'язково перебуває у стаціонарі протягом доби. Потім із рекомендаціями від фахівця вона їде додому.\n\nДодатковий догляд за рубцями не вимагається. Також для прискорення загоєння рубців застосовується спеціальний медичний клей для шкіри. Ми отримуємо високі естетичні результати – через 1 місяць рубець виглядає, як через 6-8 місяців.\n\nСлід носити компресійну білизну, що фіксує положення грудей, 2-4 тижні.\n\nПеріод реабілітації триває 2-3 тижні. Рекомендується обмеження фізичного навантаження, відвідування саун, бань басейнів до 2-х місяців.`,
    images: [
      {
        src: "/images/BreastLiftFAQ/removalInfo9.jpg",
        alt: "Реабілітація після підтяжки грудей",
        width: 400,
        height: 600,
        title: "Період відновлення",
      },
    ],
  },
  {
    id: "correction-problems",
    title: "🔸 Які проблеми вирішує корекція сосків та корекція ареол",
    content: `Хірургічна корекція соска проводиться у таких випадках:\n\n• Гіпертрофія. Непропорційно великі соски виглядають неестетично і спричиняють дискомфорт.\n\n• Мегареоли (надто велика пігментована частина). У нормі діаметр ареоли становить 2,5-4 см. При перевищенні цього діаметра (більше 5 см) потрібна корекція за естетичними ознаками. Хірургічне зменшення ареоли є частиною операцій з підтяжки та зменшення грудей.\n\n• Асиметрія. Часте явище після вагітності та грудного вигодовування. Якщо асиметрія у розмірі правого та лівого сосково-ареолярного комплексу досягає 2-х разів, то жінка має показання для звернення до пластичного хірурга.`,
    images: [
      {
        src: "/images/BreastLiftFAQ/BreastLiftFAQ4.jpg",
        alt: "Корекція сосків та ареол",
        width: 400,
        height: 600,
        title: "Корекція сосків",
      },
    ],
  },
  {
    id: "areola-rehabilitation",
    title: "🔸 Реабілітація після корекції ареоли",
    content: `Якщо операція проводилася амбулаторно під місцевою анестезією, пацієнт може через 1,5 години залишити клініку. За умови використання загального наркозу пацієнт виписується наступної доби після втручання.\n\nПеріод реабілітації комфортний, пацієнтка не випадає із соціального життя. Рекомендується обмежити активне фізичне навантаження на 4-6 тижнів. Протягом цього терміну небажано відвідувати лазні, сауни, пляжі та басейни.\n\nРубці через місяць виглядають естетично, вони приймають колір шкіри і схожі на невелику «котячу подряпину».`,
    images: [
      {
        src: "/images/BreastLiftFAQ/BreastLiftFAQ7.jpg",
        alt: "Реабілітація після корекції ареоли",
        width: 400,
        height: 600,
        title: "Відновлення після корекції",
      },
    ],
  },
  {
    id: "operation-time",
    title: "🔸 Скільки триває операція",
    content: `Тривалість залежить від обсягу: найчастіше займається час від 30 хвилин до 1 години. На індивідуальній зустрічі хірург обговорює це питання.`,
    images: [
      {
        src: "/images/BreastLiftFAQ/BreastLiftFAQ8.jpg",
        alt: "Тривалість операції корекції",
        width: 400,
        height: 600,
        title: "Час операції",
      },
    ],
  },
]

const BreastLiftFAQ: React.FC<BreastLiftFAQProps> = ({ backgroundColor = "#f0f9ff" }) => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  // Стилі для контролю кольорів
  const colorStyles = {
    backgroundColor,
    color: "#2d3748", // Завжди темний текст для хорошої читабельності
  }

  return (
    <section className={styles.wrapper} style={colorStyles}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.titleIcon}>❓</span>
            Поширені запитання при підтяжці грудей і корекції ареоли та соска
          </h2>

          <div className={styles.faqContainer}>
            {FAQ_ITEMS.map(item => (
              <div key={item.id} className={styles.faqItem}>
                <button
                  className={styles.faqHeader}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <span className={styles.faqTitle}>{item.title}</span>
                  <ChevronDown
                    className={`${styles.icon} ${openItem === item.id ? styles.iconRotated : ""}`}
                    size={24}
                  />
                </button>
                {openItem === item.id && (
                  <div className={styles.faqContent}>
                    <div className={styles.textContent}>
                      {item.content.split("\n").map((paragraph, idx) => (
                        <p key={idx} className={styles.paragraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className={styles.galleryContainer}>
                      <BreastLiftFAQGallery images={item.images} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Заклик до дії */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaIcon}>💬</span>
              <div className={styles.ctaTextContainer}>
                <h3 className={styles.ctaTitle}>Потрібна консультація?</h3>
                <p className={styles.ctaText}>
                  Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію та підтримку на
                  всіх етапах лікування.
                </p>
                <Link href="/ask-doctor" className={styles.contactLink}>
                  <button className={styles.contactButton}>
                    <span className={styles.buttonText}>Зв`язатися з нами</span>
                    <span className={styles.buttonArrow}>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreastLiftFAQ
