"use client"
import Image from "next/image"
import styles from "./SkintumorsDetails.module.css"
import { SkintumorsGallery } from "./SkintumorsGallery"
import Link from "next/link"

interface SkintumorsDetailsProps {
  backgroundColor?: string
  className?: string
}

export function SkintumorsDetails({ backgroundColor = "#f0f9ff", className }: SkintumorsDetailsProps) {
  const tumorSections = [
    {
      id: "nevus",
      title: "НЕВУС",
      fullText: `це доброякісне новоуворення, яке виникає на шкірі у вигляді пігментної плями (родимки). Більшість невусів не становлять небезпеки, однак у певних випадках їх рекомендовано видаляти — зокрема, якщо вони:
• розташовані в місцях постійного тертя або травмування;
• мають ознаки потенційного переродження у злоякісну пухлину.

Невуси можуть бути вродженими або з'являтися протягом життя — у дитячому чи дорослому віці. Особливо схильні до появи множинних або атипових родимок люди зі світлою шкірою, яка погано засмагає та легко обгорає на сонці.

Атипові родимки — це новоутворення неправильної форми, неоднорідного кольору, які можуть супроводжуватися свербінням або печінням. Їх важливо ретельно спостерігати, адже саме вони мають вищий ризик переродження в меланому.

Наявність множинних невусів, а також обтяжений сімейний анамнез (випадки меланоми чи передракових захворювань шкіри серед родичів) потребують регулярного дерматологічного контролю.`,
      imageSrc: "/images/skintumors/dpkUlcer.jpg",
      imageAlt: "Невус (родимка)",
    },
    {
      id: "papilloma",
      title: "ПАПІЛОМА",
      fullText: `Папілома — це доброякісне новоутворення, що з'являється на шкірі або слизових оболонках. Основною причиною її виникнення є вірус папіломи людини (ВПЛ).

Ці утворення можуть значно відрізнятися за формою, розміром і кольором: від світло-бежевого до темно-коричневого. Їхня поверхня часто має вигляд дрібних наростів або виростів, що нагадують цвітну капусту або сосочкоподібні структури.

Хоча папіломи і бородавки можуть бути схожими, між ними є певні відмінності:
• Бородавки зазвичай з'являються на обличчі, пальцях рук, ліктях або підошвах.
• Папіломи частіше локалізуються на шиї, грудях, спині, у пахвових западинах, а також в інтимних зонах.

У разі активного розмноження вірусу, новоутворення можуть поширюватися на великі ділянки тіла. Саме тому при появі папілом рекомендується звернутися до дерматолога для своєчасної діагностики та, за потреби, видалення.`,
      imageSrc: "/images/skintumors/papiloma.jpg",
      imageAlt: "Папілома",
    },
    {
      id: "atheroma",
      title: "АТЕРОМА",
      fullText: `Атерома — це епітеліальна кіста, тобто доброякісне новоутворення, яке виникає внаслідок закупорки сальної залози. Найчастіше з'являється на ділянках шкіри з підвищеною кількістю сальних залоз: на обличчі, шиї, спині, за вухами, у волосистій частині голови.

Атерома має вигляд безболісного, м'якого на дотик ущільнення, схожого на підшкірний прищ або "кульку". Зазвичай не завдає фізичного дискомфорту, окрім естетичного. Проте у разі інфікування може виникати запалення, біль та нагноєння.

Часто атерому плутають із ліпомою (жировиком), але між ними є різниця. Атерома формується з вмістом сальної залози, тоді як ліпома — це скупчення жирової тканини.

Єдиний ефективний метод лікування — хірургічне видалення разом із капсулою. Без цього високий ризик повторного виникнення (рецидиву).`,
      imageSrc: "/images/skintumors/teroma.jpg",
      imageAlt: "Атерома",
    },
    {
      id: "hemangioma",
      title: "ГЕМАНГІОМА",
      fullText: `Гемангіома — це доброякісне пухлинне утворення, яке складається з кровоносних судин. Воно має вигляд яскраво-червоного плямистого наросту, який трохи виступає над поверхнею шкіри. При натисканні гемангіома блідне, але миттєво відновлює свій колір, форму та об'єм.

Це утворення може викликати локальні кровотечі, що сприяє її подальшому розростанню. Хоча гемангіоми зазвичай не є небезпечними, їх розвиток потребує медичного контролю, адже в окремих випадках вони можуть зростати або викликати ускладнення.`,
      imageSrc: "/images/skintumors/gemangioma.jpg",
      imageAlt: "Гемангіома",
    },
    {
      id: "lipoma",
      title: "ЛІПОМА",
      fullText: `Доброякісна жирова пухлина. Це новоутворення, яке формується з жирового прошарку, тому його друга назва – «жировик». Це часточка жирової тканини, яка легко рухається при дотику і зазвичай не викликає болю. Ліпоми можуть з'являтися де завгодно на тілі, але найчастіше вони з'являються на спині, тулубі, руках, плечах і шиї.`,
      imageSrc: "/images/skintumors/lipoma.jpg",
      imageAlt: "Ліпома",
    },
    {
      id: "fibroma",
      title: "ФІБРОМА",
      fullText: `Фіброма — це доброякісне новоутворення, яке формується з волокнистої сполучної тканини. Вона часто супроводжується розростанням інших тканин, таких як м'язова (фіброміома), судинна (ангіофіброма) або залозиста (фіброаденома).

Фіброма найчастіше діагностується в молодому віці, особливо у жінок. Вона може мати різний колір — від сірого до чорного, а її поверхня, як правило, гладка. Відрізняється повільним зростанням, що зазвичай не супроводжується болем чи дискомфортом.`,
      imageSrc: "/images/skintumors/fibroma.jpg",
      imageAlt: "Фіброма",
    },
  ]

  return (
    <div className={`${styles.container} ${className || ""}`} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        <h1 className={styles.mainTitle}>Пухлини шкіри</h1>

        {/* Секції з пухлинами - завжди розгорнуті */}
        {tumorSections.map(section => (
          <div key={section.id} className={styles.tumorSection}>
            <div className={styles.tumorContent}>
              <div className={styles.textColumn}>
                <h3 className={styles.tumorTitle}>
                  <span className={styles.titleIcon}>🔬</span>
                  {section.title}
                </h3>
                <div className={styles.textContent}>
                  <p className={styles.fullText}>{section.fullText}</p>
                </div>
              </div>
              <div className={styles.imageColumn}>
                <div className={styles.tumorImageContainer}>
                  <Image
                    src={section.imageSrc || "/placeholder.svg?height=300&width=400&query=skin tumor"}
                    alt={section.imageAlt}
                    width={400}
                    height={300}
                    className={styles.tumorImage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </div>
        ))}

        {/* Інформаційна секція з галереєю */}
        <div className={styles.infoSection}>
          <div className={styles.contentRow}>
            <div className={styles.textColumn}>
              <div className={styles.warningSection}>
                <h3 className={styles.warningTitle}>
                  <span className={styles.warningIcon}>⚠️</span>
                  Симптоми, які вимагають негайного звернення до лікаря:
                </h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔸</span>
                    швидке збільшення новоутворення
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔸</span>
                    випадіння волосся з його поверхні
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔸</span>
                    зміна кольору, кровоточивість, зміна консистенції
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔸</span>
                    зменшення, зміна форми або розмитий контур
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔸</span>
                    поява запалення, свербежу, тріщин
                  </li>
                </ul>
              </div>

              <div className={styles.preventionSection}>
                <h3 className={styles.preventionTitle}>
                  <span className={styles.preventionIcon}>✅</span>
                  Профілактичні рекомендації:
                </h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    Уникайте тривалого перебування на сонці
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    Своєчасно звертайтеся до лікаря
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    Регулярно проходьте діагностику за допомогою дерматоскопа
                  </li>
                </ul>
              </div>

              <div className={styles.dermatoscopySection}>
                <h3 className={styles.dermatoscopyTitle}>
                  <span className={styles.dermatoscopyIcon}>🧪</span>
                  Цифрова дерматоскопія
                </h3>
                <p className={styles.dermatoscopyText}>
                  Метод, що дає можливість детально розглянути новоутворення під великим збільшенням. Дає змогу оцінити:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    пігментацію
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    будову епідермісу
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    межу між дермою та епідермісом
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.listMarker}>🔹</span>
                    сосочковий шар
                  </li>
                </ul>
                <div className={styles.highlightBox}>
                  <p className={styles.highlight}>
                    <span className={styles.highlightIcon}></span>
                    Зображення виводиться на екран комп`ютера для точнішої діагностики.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.galleryColumn}>
              <SkintumorsGallery />
            </div>
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
    </div>
  )
}

export default SkintumorsDetails
