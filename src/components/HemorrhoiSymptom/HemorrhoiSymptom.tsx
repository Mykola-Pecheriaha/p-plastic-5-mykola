"use client"

import { useState } from "react"
import styles from "./HemorrhoiSymptom.module.css"
import { HemorrSymptomGallery, type GalleryImage } from "./HemorrSymptomGallery"
import { StagesGemorrGallery } from "./StagesGemorrGallery"
import { HemorrTreatmentGallery } from "./HemorrTreatmentGallery"

interface HemorrhoiSymptomProps {
  backgroundColor?: string
}

// Зображення для галереї симптомів
const symptomImages: GalleryImage[] = [
  {
    src: "/images/hemorrhoid/hemorroy.jpg",
    alt: "Симптоми геморою",
    width: 800,
    height: 600,
    title: "Основні симптоми геморою",
  },
  {
    src: "/images/hemorrhoid/hemorroy7.jpg",
    alt: "Фактори ризику геморою",
    width: 800,
    height: 600,
    title: "Фактори ризику розвитку геморою",
  },
]

// Зображення для галереї стадій
const stagesImages: GalleryImage[] = [
  {
    src: "/images/hemorrhoid/hemorroy8.jpg",
    alt: "Перша стадія геморою",
    width: 800,
    height: 600,
    title: "I стадія геморою",
  },
  {
    src: "/images/hemorrhoid/hemorroy9.jpg",
    alt: "Друга стадія геморою",
    width: 800,
    height: 600,
    title: "II стадія геморою",
  },
  {
    src: "/images/hemorrhoid/hemorroy10.jpg",
    alt: "Третя стадія геморою",
    width: 800,
    height: 600,
    title: "III стадія геморою",
  },
  {
    src: "/images/hemorrhoid/hemorroy11.jpg",
    alt: "Четверта стадія геморою",
    width: 800,
    height: 600,
    title: "IV стадія геморою",
  },
]

// Зображення для галереї лікування
const treatmentImages: GalleryImage[] = [
  {
    src: "/images/hemorrhoid/hemorroy18.jpg",
    alt: "Консервативне лікування геморою",
    width: 800,
    height: 600,
    title: "Консервативне лікування геморою",
  },
  {
    src: "/images/hemorrhoid/hemorroy14.jpg",
    alt: "Лазерна коагуляція",
    width: 800,
    height: 600,
    title: "Лазерна коагуляція",
  },
  {
    src: "/images/hemorrhoid/hemorroy15.jpg",
    alt: "Трансанальна гемороїдальна деартеріалізація",
    width: 800,
    height: 600,
    title: "Трансанальна гемороїдальна деартеріалізація",
  },
  {
    src: "/images/hemorrhoid/hemorroy17.jpg",
    alt: "Класична гемороїдектомія",
    width: 800,
    height: 600,
    title: "Класична гемороїдектомія",
  },
]

export function HemorrhoiSymptom({
  backgroundColor = "#f0f9ff", // Світло-блакитний фон за замовчуванням
}: HemorrhoiSymptomProps) {
  const [expandedSections, setExpandedSections] = useState({
    symptoms: false,
    stages: false,
    treatment: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Функція для обмеження тексту
  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text
    return text.slice(0, limit) + "..."
  }

  return (
    <section className={styles.hemorrhoidSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок */}
        <h2 className={styles.mainTitle}>Геморой</h2>

        {/* Вступний текст */}
        <div className={styles.introText}>
          <p className={styles.text}>
            Геморой— це захворювання, пов`язане з розширенням і запаленням гемороїдальних вузлів, що виникає через
            порушення кровообігу в ділянці прямої кишки та анального отвору.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🩸</span> Також однією з причин є порушення обмінних процесів на клітинному
            рівні, внаслідок чого відбуваються структурні зміни у тканинах м`язів та зв`язок.
          </p>
        </div>

        {/* Перша секція з галереєю */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>✅</span> Фактори, які підвищують ризик розвитку геморою:
              </h3>
              <div className={`${styles.collapsibleText} ${expandedSections.symptoms ? styles.expanded : ""}`}>
                {expandedSections.symptoms ? (
                  <>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>🔹</span> Часті закрепи
                      </li>
                      <li>
                        <span className={styles.emoji}>🔹</span> Надмірна вага
                      </li>
                      <li>
                        <span className={styles.emoji}>🔹</span> Фізично важка праця або часте підняття важких предметів
                      </li>
                      <li>
                        <span className={styles.emoji}>🔹</span> Вагітність та пологи
                      </li>
                      <li>
                        <span className={styles.emoji}>🔹</span> Захворювання органів малого таза
                      </li>
                      <li>
                        <span className={styles.emoji}>🔹</span> Сидячий спосіб життя та застій крові у венах таза
                      </li>
                    </ul>
                    <h3 className={styles.subTitle}>
                      <span className={styles.emoji}>✅</span> Симптоми геморою
                    </h3>
                    <p className={styles.text}>
                      На початкових стадіях геморой може протікати безсимптомно, що робить його особливо підступним. З
                      часом ознаки прогресують, і без належного лікування можуть призвести до серйозних ускладнень.
                    </p>
                    <h4 className={styles.subSubTitle}>
                      <span className={styles.emoji}>✅</span> Форми захворювання:
                    </h4>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>✅</span> Гострий геморой:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li>Сильний біль у ділянці анального отвору</li>
                      <li>Свербіж і печіння</li>
                      <li>Набряклість та ущільнення тканин</li>
                      <li>Кровотечі</li>
                      <li>Можливий тромбоз і навіть некроз тканин</li>
                    </ul>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>✅</span> Хронічний геморой:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li> 🔹 Випадання гемороїдальних вузлів</li>
                      <li> 🔹 Кров`янисті, слизові або гнійні виділення</li>
                      <li> 🔹 Сильний свербіж, печіння, інші неприємні відчуття</li>
                      <li> 🔹 Ущільнення в зоні ануса</li>
                    </ul>
                    <p className={styles.text}>Біль зазвичай слабший, але посилюється при ускладненнях.</p>
                  </>
                ) : (
                  <p className={styles.text}>
                    {truncateText(
                      "Часті закрепи, надмірна вага, фізично важка праця або часте підняття важких предметів, вагітність та пологи, захворювання органів малого таза, сидячий спосіб життя та застій крові у венах таза...",
                      100
                    )}
                  </p>
                )}
              </div>
              <button onClick={() => toggleSection("symptoms")} className={styles.expandButton}>
                {expandedSections.symptoms ? "Згорнути" : "Розгорнути"}
              </button>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <HemorrSymptomGallery images={symptomImages} />
          </div>
        </div>

        {/* Друга секція з галереєю */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>✅</span> Стадії розвитку геморою:
              </h3>
              <div className={`${styles.collapsibleText} ${expandedSections.stages ? styles.expanded : ""}`}>
                {expandedSections.stages ? (
                  <>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>1️⃣</span> I стадія:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li>Невелике збільшення вузлів</li>
                      <li>Легкий біль, що виникає періодично</li>
                    </ul>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>2️⃣</span> II стадія:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li>Помірна кровотеча</li>
                      <li>Випадання вузлів під час дефекації або фізичного напруження</li>
                    </ul>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>3️⃣</span> III стадія:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li>Вузли випадають навіть при легких навантаженнях</li>
                      <li>Потрібне ручне вправлення вузлів</li>
                    </ul>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>4️⃣</span> IV стадія:
                    </h5>
                    <ul className={styles.bulletList}>
                      <li>Постійне випадання вузлів, які не вправляються</li>
                      <li>Сильний біль і регулярні кровотечі</li>
                    </ul>
                    <p className={styles.alertText}>
                      <span className={styles.emoji}>🔔</span> Увага! Чим раніше звернутися за медичною допомогою, тим
                      простіше зупинити розвиток хвороби та уникнути ускладнень.
                    </p>
                  </>
                ) : (
                  <p className={styles.text}>
                    {truncateText(
                      "I стадія: невелике збільшення вузлів, легкий біль, що виникає періодично. II стадія: помірна кровотеча, випадання вузлів під час дефекації або фізичного напруження...",
                      100
                    )}
                  </p>
                )}
              </div>
              <button onClick={() => toggleSection("stages")} className={styles.expandButton}>
                {expandedSections.stages ? "Згорнути" : "Розгорнути"}
              </button>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <StagesGemorrGallery images={stagesImages} />
          </div>
        </div>

        {/* Заголовок лікування */}
        <div className={styles.treatmentHeader}>
          <h3 className={styles.subTitle}>Лікування геморою</h3>
          <p className={styles.text}>
            Геморой — делікатна, але досить поширена проблема, яка потребує індивідуального та професійного підходу. Для
            ефективної боротьби з гострими й хронічними формами захворювання ми застосовуємо як консервативну
            (медикаментозну), так і хірургічну терапію.
          </p>
        </div>

        {/* Третя секція з галереєю */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <div className={`${styles.collapsibleText} ${expandedSections.treatment ? styles.expanded : ""}`}>
                {expandedSections.treatment ? (
                  <>
                    <h4 className={styles.subSubTitle}>
                      <span className={styles.emoji}>✅</span> Консервативне лікування
                    </h4>
                    <p className={styles.text}>На ранніх стадіях хвороби медикаментозна терапія дозволяє:</p>
                    <ul className={styles.bulletList}>
                      <li>зменшити біль та дискомфорт</li>
                      <li>запобігти ускладненням</li>
                    </ul>
                    <p className={styles.text}>
                      Таке лікування також часто використовується до або після хірургічного втручання, забезпечуючи
                      м`який перехід і швидке відновлення.
                    </p>
                    <h4 className={styles.subSubTitle}>
                      <span className={styles.emoji}>✅</span> Хірургічне лікування
                    </h4>
                    <p className={styles.text}>
                      Коли консервативна терапія не дає результатів або захворювання прогресує, ми застосовуємо сучасні
                      хірургічні методики.
                    </p>
                    <p className={styles.text}>Наші переваги:</p>
                    <ul className={styles.checkList}>
                      <li>
                        <span className={styles.emoji}>✅</span> використання інноваційного обладнання
                      </li>
                      <li>
                        <span className={styles.emoji}>✅</span> досвідчені проктологи
                      </li>
                      <li>
                        <span className={styles.emoji}>✅</span> щадні, малоінвазивні методи
                      </li>
                      <li>
                        <span className={styles.emoji}>✅</span> швидке відновлення без ускладнень
                      </li>
                    </ul>
                    <p className={styles.text}>
                      Завдяки цьому ми пропонуємо найефективніші й найсучасніші методи лікування геморою, адаптовані до
                      індивідуальних потреб кожного пацієнта.
                    </p>
                    <h3 className={styles.subTitle}> ✅ Види хірургічного лікування геморою в нашій клініці</h3>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>🔹</span> Лазерна коагуляція
                    </h5>
                    <p className={styles.text}>
                      Малоінвазивний спосіб лікування за допомогою інфрачервоного променя, який видаляє збільшені
                      венозні вузли, не зачіпаючи здорові тканини.
                    </p>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>🔹</span> Трансанальна гемороїдальна деартеріалізація (ТГД)
                    </h5>
                    <p className={styles.text}>
                      Один із найперспективніших методів лікування геморою II–III стадії. Під час процедури
                      перев`язуються всі артерії, що живлять вузли. Протягом кількох місяців вузли зменшуються й
                      заміщуються сполучною тканиною.
                    </p>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>🔹</span> Біологічне зварювання тканин
                    </h5>
                    <p className={styles.text}>
                      Інноваційна методика, що виконується апаратом «Патономед». Тканини «зварюються» без швів і
                      некрозів, забезпечуючи швидке й комфортне загоєння.
                    </p>
                    <h5 className={styles.listTitle}>
                      <span className={styles.emoji}>🔹</span> Класична гемороїдектомія
                    </h5>
                    <p className={styles.text}>
                      Золотий стандарт при запущених випадках (IV стадія геморою, тромбоз). Це радикальна, але ефективна
                      методика, яка застосовується в складних клінічних випадках.
                    </p>
                  </>
                ) : (
                  <p className={styles.text}>
                    {truncateText(
                      "Консервативне лікування: На ранніх стадіях хвороби медикаментозна терапія дозволяє зменшити біль та дискомфорт, запобігти ускладненням...",
                      100
                    )}
                  </p>
                )}
              </div>
              <button onClick={() => toggleSection("treatment")} className={styles.expandButton}>
                {expandedSections.treatment ? "Згорнути" : "Розгорнути"}
              </button>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <HemorrTreatmentGallery images={treatmentImages} />
          </div>
        </div>

        {/* Заключна частина */}
        <div className={styles.conclusionSection}>
          <h3 className={styles.subTitle}>Індивідуальний підхід до кожного пацієнта</h3>
          <p className={styles.text}>
            Наші хірурги підбирають оптимальний метод лікування, виходячи зі стадії захворювання, симптомів і загального
            стану здоров`я. Ми пропонуємо декілька варіантів терапії з детальним поясненням переваг і ризиків кожного —
            щоб ви могли зробити усвідомлений вибір.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HemorrhoiSymptom
