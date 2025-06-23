"use client"
import type React from "react"
import { useState } from "react"
import styles from "./AbdominoFAQ.module.css"
import AbdominoFAQGallery from "./AbdominoFAQGallery"
import Link from "next/link"

interface AbdominoFAQProps {
  backgroundColor?: string
}

const AbdominoFAQ: React.FC<AbdominoFAQProps> = ({ backgroundColor = "#e8f5e8" }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  // Зображення для галереї першого питання
  const operationGalleryImages = [
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ1.jpg",
      alt: "Етапи абдомінопластики",
      width: 800,
      height: 600,
      title: "Етапи абдомінопластики",
    },
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ3.jpg",
      alt: "Хірургічний процес",
      width: 800,
      height: 600,
      title: "Хірургічний процес",
    },
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ4.jpg",
      alt: "Результати операції",
      width: 800,
      height: 600,
      title: "Результати операції",
    },
  ]

  // Зображення для галереї другого питання
  const rehabilitationGalleryImages = [
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ6.jpg",
      alt: "Реабілітація після абдомінопластики",
      width: 800,
      height: 600,
      title: "Реабілітація після абдомінопластики",
    },
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ8.jpg",
      alt: "Відновлення після операції",
      width: 800,
      height: 600,
      title: "Відновлення після операції",
    },
    {
      src: "/images/abdominoplastyFAQ/abdominoplastyFAQ5.jpg",
      alt: "Догляд за швами",
      width: 800,
      height: 600,
      title: "Догляд за швами",
    },
  ]

  return (
    <section className={styles.abdominoFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок */}
        <h2 className={styles.title}>
          <span className={styles.icon}></span> Поширені запитання про абдомінопластику
        </h2>

        {/* Вступний текст на всю ширину */}
        <div className={styles.introSection}>
          <p className={styles.introText}>
            Абдомінопластика — це хірургічна процедура, яка допомагає відновити плоский контур живота. Нижче ви знайдете
            відповіді на найпоширеніші запитання щодо цієї операції.
          </p>
        </div>

        {/* Секція FAQ з акордеоном */}
        <div className={styles.faqSection}>
          {/* Перше питання */}
          <div className={styles.questionContainer}>
            <div className={styles.questionHeader} onClick={() => toggleQuestion(0)}>
              <h3 className={styles.question}>
                <span className={styles.questionIcon}>✅</span> Як проходить сама операція
              </h3>
              <span className={`${styles.arrow} ${openQuestion === 0 ? styles.arrowUp : ""}`}>&#9660;</span>
            </div>
            {openQuestion === 0 && (
              <div className={styles.answerContainer}>
                <div className={styles.answerTextColumn}>
                  <div className={styles.answerContent}>
                    <h4 className={styles.answerTitle}>
                      <span className={styles.answerIcon}></span> Етапи операції: абдомінопластика
                    </h4>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>🔹</span> Анестезія:
                    </p>
                    <p className={styles.answerText}>
                      Операція проводиться під загальним наркозом. У клініці застосовується сучасний{" "}
                      <strong>інгаляційний наркоз на основі Севофлурану</strong> – це забезпечує м`яке входження у сон і
                      легке пробудження після операції.
                    </p>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>🔹</span> Тривалість втручання:
                    </p>
                    <p className={styles.answerText}>
                      В середньому <strong>1,5–2,5 години</strong>, залежно від індивідуальних особливостей пацієнта та
                      обсягу корекції.
                    </p>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✅</span> Хірургічний процес включає:
                    </p>
                    <ul className={styles.answerList}>
                      <li>Висічення надлишків шкіри, жиру, розтяжок, рубців під пупком</li>
                      <li>Природний ліфтінг тканин живота</li>
                      <li>Зшивання м`язів, усунення гриж та зміцнення м`язового корсету</li>
                      <li>Індивідуально підібрану методику – в залежності від ступеня вираженості дефекту</li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>🔹</span> Доступ:
                    </p>
                    <ul className={styles.answerList}>
                      <li>
                        Найчастіше — <strong>нижній горизонтальний розріз</strong> у шкірній складці над лобком
                      </li>
                      <li>
                        Можливий <strong>додатковий розріз</strong> навколо пупка
                      </li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>🔹</span> Робота з пупком:
                    </p>
                    <p className={styles.answerText}>Корекція виконується одним із двох способів:</p>
                    <ul className={styles.answerList}>
                      <li>Створення нового пупкового кільця</li>
                      <li>Перенесення існуючого при видаленні великої ділянки шкіри</li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>🔹</span> Ушивання рани:
                    </p>
                    <ul className={styles.answerList}>
                      <li>
                        Косметичні шви з ниток, що <strong>саморозсмоктуються</strong>
                      </li>
                      <li>Не потребують зняття та спеціального догляду</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.answerGalleryColumn}>
                  <AbdominoFAQGallery images={operationGalleryImages} />
                </div>
              </div>
            )}
          </div>

          {/* Друге питання */}
          <div className={styles.questionContainer}>
            <div className={styles.questionHeader} onClick={() => toggleQuestion(1)}>
              <h3 className={styles.question}>
                <span className={styles.questionIcon}>✅</span> Абдомінопластика: реабілітація після операції
              </h3>
              <span className={`${styles.arrow} ${openQuestion === 1 ? styles.arrowUp : ""}`}>&#9660;</span>
            </div>
            {openQuestion === 1 && (
              <div className={styles.answerContainer}>
                <div className={styles.answerTextColumn}>
                  <div className={styles.answerContent}>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✅</span> Госпіталізація:
                    </p>
                    <p className={styles.answerText}>
                      Після операції пацієнт залишається в клініці на <strong>1 добу</strong> під наглядом хірурга та
                      медичного персоналу. Призначаються знеболювальні та антибіотики.
                    </p>
                    <p className={styles.answerText}>
                      <strong> Наступного дня — виписка додому</strong> з індивідуальними рекомендаціями щодо подальшого
                      догляду.
                    </p>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✅</span> Перші дні після операції:
                    </p>
                    <ul className={styles.answerList}>
                      <li>
                        Можливі <strong>болі при рухах</strong>, набряки
                      </li>
                      <li>
                        Симптоми зменшуються і <strong>зникають через 2 тижні</strong>
                      </li>
                      <li>
                        Повна реабілітація — <strong>приблизно 1 місяць</strong>
                      </li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✅</span> Компресія та догляд:
                    </p>
                    <ul className={styles.answerList}>
                      <li>
                        Носіння бандажу та компресійної білизни: <strong>4–6 тижнів</strong>
                      </li>
                      <li>
                        Тимчасове зниження чутливості навколо пупка — відновлюється до <strong>2 місяців</strong>
                      </li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✨</span> Рубець після операції:
                    </p>
                    <ul className={styles.answerList}>
                      <li>Залежить від обраної методики</li>
                      <li>
                        Добре <strong>маскується білизною</strong>
                      </li>
                      <li>
                        Через <strong>2–6 місяців</strong> — виглядає як тонка «котяча подряпина»
                      </li>
                    </ul>
                    <p className={styles.answerSubtitle}>
                      <span className={styles.bulletPoint}>✨</span> Результат:
                    </p>
                    <p className={styles.answerText}>
                      Повну естетичну оцінку результату можна зробити <strong>через 2 місяці</strong> після операції.
                    </p>
                  </div>
                </div>
                <div className={styles.answerGalleryColumn}>
                  <AbdominoFAQGallery images={rehabilitationGalleryImages} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className={styles.contactButton}>Зв&apos;язатися з нами</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AbdominoFAQ
