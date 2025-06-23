"use client"

import { useState } from "react"
import styles from "./LiposuctionFAQ.module.css"
import { LiposuctionFAQGallery } from "./LiposuctionFAQGallery"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
  images: {
    src: string
    alt: string
    width: number
    height: number
    title?: string
  }[]
}

interface LiposuctionFAQProps {
  backgroundColor?: string
}

export function LiposuctionFAQ({ backgroundColor }: LiposuctionFAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: "✔️ Які проблеми вирішує ліпосакція?",
      answer: `Багато пацієнтів вважають, що ліпосакція допоможе їм позбутися зайвої ваги.
Часто її сприймають як швидкий спосіб схуднення.
Однак важливо розуміти:
  Ліпосакція не замінює фізичні вправи та правильне харчування.
Найчастіше операцію проводять пацієнтам, які вже досягли своєї ідеальної ваги,
але не задоволені контуром тіла або мають локальні жирові відкладення в «проблемних» зонах-«депо».
✅ Головна мета ліпосакції:
  • створення ідеальних пропорцій,
  • естетична корекція фігури.
✅ Зони, де найчастіше виконується ліпосакція:
  • область живота,
  • боки,
  • задня та внутрішня поверхня стегон,
  • зона колін,
  • друге підборіддя.
✅ Кому підходить ліпосакція?
Операція виконується як для жінок, так і для чоловіків.
До речі, ліпосакція живота у чоловіків сьогодні надзвичайно затребувана.
❗ Важливо: перед проведенням процедури обов'язково потрібна попередня консультація,
щоб оцінити можливість і безпечність оперативного втручання.`,
      images: [
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ16.jpg",
          alt: "Локальні жирові відкладення",
          width: 800,
          height: 600,
          title: "Локальні жирові відкладення",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ17.jpg",
          alt: "Зони для ліпосакції",
          width: 600,
          height: 600,
          title: "Зони для ліпосакції",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ18.jpg",
          alt: "Результати ліпосакції",
          width: 800,
          height: 600,
          title: "Результати ліпосакції",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ19.jpg",
          alt: "Результати ліпосакції",
          width: 800,
          height: 600,
          title: "Результати ліпосакції",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ21.jpg",
          alt: "Результати ліпосакції",
          width: 800,
          height: 600,
          title: "Результати ліпосакції",
        },
      ],
    },
    {
      question: "✔️ Скільки триває операція і як поводитись в післяопераційному періоді",
      answer: `Тривалість від 30 хвилин до 1,5 години, залежно від обсягу. На очній консультації пластичний хірург зможе визначити потрібний час.

Як проходить ліпосакція
🔹 На шкірі виконуються невеликі надрізи.
🔹 Вводиться канюля, приєднана до спеціального вакуумного апарату.
🔹 Канюля рухається віялоподібно та поступально у підшкірному жировому шарі.
🔹 Завдяки створеному вакууму, жир видаляється через канюлю у спеціальну ємність.`,
      images: [
        {
          src: "/images/liposuctionFAQ/lipoPreparatio9.jpg",
          alt: "Процес ліпосакції",
          width: 800,
          height: 600,
          title: "Процес ліпосакції",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ9.jpg",
          alt: "Хірургічні інструменти",
          width: 800,
          height: 600,
          title: "Хірургічні інструменти",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ6.jpg",
          alt: "Тривалість процедури",
          width: 800,
          height: 600,
          title: "Тривалість процедури",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ7.jpg",
          alt: "Тривалість процедури",
          width: 800,
          height: 600,
          title: "Тривалість процедури",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ8.jpg",
          alt: "Тривалість процедури",
          width: 800,
          height: 600,
          title: "Тривалість процедури",
        },
      ],
    },
    {
      question: "✔️ Відновлення після ліпосакції?",
      answer: `Післяопераційний період
✔️ Після ліпосакції потрібно залишатися в палаті протягом 24–48 годин.
✔️ Період основної реабілітації триває близько 2 тижнів.
Можливі наслідки після операції:
– набряки, які можуть зберігатися кілька тижнів;
– легкий дискомфорт у зоні втручання.
✔️ Знеболення
— прийом лише призначених лікарем препаратів, якщо виникає дискомфорт чи біль.
✔️ Догляд за ранами
— щоденна зміна пов'язки після обробки теплою мильною водою;
— уникати спиртових розчинів і перекису водню.
Для кращого відновлення рекомендовано:
✔️ носити спеціальну компресійну білизну, що прискорює процес реабілітації;
✔️ білизна допомагає запобігти відвисанню шкіри та розвитку інших небажаних ефектів.
✔️ Одяг
— носити вільний та м'який одяг, щоб зменшити тиск на черевну зону.
✔️ Харчування
— пити багато рідини,
— включити у раціон клітковину (фрукти, овочі, цільнозернові),
— зменшити споживання жирної їжі, щоб уникнути закрепів.
✔️ Гігієна
— уникати душу перші 2 доби,
— не приймати ванну щонайменше 2 тижні.
✔️ Куріння
— уникати щонайменше 2 тижні — воно уповільнює загоєння.
✔️ Фізичне навантаження
— утриматися від спорту та важких справ протягом 6–8 тижнів,
✔️ Повернення до активності
У міру покращення стану лікар може рекомендувати:
  • короткі прогулянки, які поступово збільшують тривалість,
  • регулярні огляди, щоб коригувати реабілітацію згідно з динамікою одужання.
✔️ Шрами, як правило, зникають або стають майже непомітними впродовж року.
⚠️Важливо: точні рекомендації дає лікар-хірург індивідуально, враховуючи перебіг відновлення. Дотримання порад — запорука швидкого і комфортного одужання!`,
      images: [
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ11.jpg",
          alt: "Післяопераційний період",
          width: 800,
          height: 600,
          title: "Післяопераційний період",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ23.jpg",
          alt: "Компресійна білизна",
          width: 800,
          height: 600,
          title: "Компресійна білизна",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ24.jpg",
          alt: "Відновлення після ліпосакції",
          width: 800,
          height: 600,
          title: "Відновлення після ліпосакції",
        },
        {
          src: "/images/liposuctionFAQ/liposuctionFAQ25.jpg",
          alt: "Відновлення після ліпосакції",
          width: 800,
          height: 600,
          title: "Відновлення після ліпосакції",
        },
      ],
    },
  ]

  return (
    <div className={styles.container} style={backgroundColor ? { backgroundColor } : undefined}>
      <div className={styles.content}>
        <h2 className={styles.title}> Поширені запитання</h2>
        <div className={styles.introduction}>
          <p>
            Ліпосакція — це не просто хірургічна процедура, а естетичне вдосконалення тіла. Вона спрямована на делікатне
            моделювання фігури: усунення стійких жирових відкладень для досягнення бажаної форми та пропорцій. Процедура
            проводиться на різних зонах — живіт, стегна, боки, руки, підборіддя — щоб відкрити природну красу контурів.
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleItem(index)}>
                <h3>{item.question}</h3>
                <span className={styles.icon}>
                  {openItem === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </div>
              {openItem === index && (
                <div className={styles.faqAnswer}>
                  <div className={styles.answerText}>
                    {item.answer.split("\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={styles.answerGallery}>
                    <LiposuctionFAQGallery images={item.images} />
                  </div>
                </div>
              )}
            </div>
          ))}
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

export default LiposuctionFAQ
