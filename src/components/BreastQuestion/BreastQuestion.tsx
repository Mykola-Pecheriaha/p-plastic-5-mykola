"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import styles from "./BreastQuestion.module.css"

interface BreastQuestionProps {
  backgroundColor?: string
  onContactClick?: () => void
}

interface Question {
  id: string
  title: string
  content: string | React.ReactNode
  image: string
}

const questions: Question[] = [
  {
    id: "preparation",
    title: "Збільшення грудей: підготовка до операції",
    content: `За два тижні до хірургічного втручання рекомендовано відмовитись від куріння та прийому лікарських препаратів. Обов'язково повідомте спеціаліста, якщо ви регулярно приймаєте будь-які ліки!
    
Варто враховувати, що вагітність і годування можуть вплинути на форму залози, після чого є ймовірність необхідності додаткової корекції. Тому втручання ефективніше через півроку після закінчення грудного годування.
    
Результати обстеження та проведені аналізи мають показати, що пацієнтка здорова та готова до операції.`,
    image: "/images/breast-question/preparation1.jpg",
  },
  {
    id: "duration",
    title: "Скільки триває операція зі збільшення грудей",
    content: `Збільшення молочних залоз триває від 1,5 до 2 годин. Час залежить від обсягу хірургічного втручання та індивідуальних особливостей пацієнтки. 
    
Задача хірурга є в тому, щоб створити простір під молочною залозою в запланованих шарах тканей (підмолочною залозою, під фасцією або під м'язом) для установки імплантів. Ретельне розшарування тканин з надійним гемостазом в різних пацієнтів буде потребувати різної кількості часу.
    
Для хірурга важливий результат, а не час операції. Дуже важливим чинником є досвід хірурга в проведенні цих операцій. Операція проводиться під загальною анестезією. В наших клініках ми практикуємо проводити операції на грудних залозах під епідуральною анестезією.`,
    image: "/images/breast-question/breastQuestion1.jpg",
  },
  {
    id: "indications",
    title: "Покази до проведення операції зі збільшення грудей",
    content: (
      <>
        <p>Покази можна умовно поділити на 2 види: естетичні та мидичні:</p>
        <h4>До медичних належать:</h4>
        <ul className={styles.contraindicationsList}>
          <li>Вроджені або набуті кистозні утворення молочних залоз ;</li>
          <li>виражена асиметрія залози, синдром Полланда тощо;</li>
          <li>Доброякісні пухлини молочних залоз;</li>
          <li>відновлення молочних залоз після радикальни операцій сприводу пухлин, або травм.;</li>
          <li>відновлення молочних залоз травм.;</li>
        </ul>
        <h4>До естетичних належать:</h4>

        <ul className={styles.contraindicationsList}>
          <li>недостатньо розвинута за обсягом молочна залоза (аплазія молочних залоз);</li>
          <li>виражена асиметрія залози, синдром Полланда тощо;</li>
          <li>постлактаційна інволюція молочних залоз (постлактаційний птоз);</li>
          <li>різке схуднення, що позначилося на формі грудей.</li>
        </ul>
      </>
    ),
    image: "/images/breast-question/breast-gipoplasiya1.jpg",
  },
  {
    id: "contraindications",
    title: "Протипокази до операції по збільшуванню молочних залоз",
    content: (
      <>
        <p>Операція збільшення грудей протипоказана у таких випадках:</p>
        <ul className={styles.contraindicationsList}>
          <li>вік до 18 років;</li>
          <li>при загостренні хронічних захворювань (у тому числі й ГРВІ);</li>
          <li>при патологічних порушеннях згортання крові;</li>
          <li>
            при підозрі на рак, навіть у вигляді спадкової історії (у цьому випадку необхідна консультація мамолога);
          </li>
          <li>
            при психічних захворюваннях, серцево-судинній недостатності та цукровому діабеті в некомпенсованій формі.
          </li>
        </ul>
      </>
    ),
    image: "/images/breast-question/blefaroContraindicatio1.jpg",
  },
  {
    id: "rehabilitation",
    title: "Реабілітація після збільшення грудей",
    content: (
      <>
        <p>
          Після операції пацієнтка перебуває у клініці 1 добу під наглядом пластичного хірурга та медичного персоналу.
          Наступного дня вона їде додому із рекомендаціями.
        </p>
        <p>
          Реабілітація після пластики триває 2-3 тижні. Відразу пацієнтка може мати відчуття, які можна порівняти з
          крепатурою від занять спортом. Також є деякі обмеження рухливості рук. Все це легко усувається знеболюючими.
        </p>
        <p>
          Період реабілітації потребує обов`язкового носіння компресійної білизни для зменшення ризику ускладнень та
          стабілізації результату операції зі збільшення грудей. Білизну треба носити 4-6 тижнів.
        </p>
        <p>
          На рахунок швів, то тут підхід індивідуальний. Частіше їх не треба знімати. Але часом для хорошої адаптації
          країв рани ми самий верхній шов накладаємо тонкою ниткою (як волосок), то її треба буде зняти на 7-8 день
          після операції.
        </p>
        <p>
          Після операції до звичайного ритму життя можна повернутись через 7-10 днів. Через 2 місяці можна повертатися
          до активних фізичних навантажень (спортзал, басейн).
        </p>
      </>
    ),
    image: "/images/breast-question/implant16.jpg",
  },
]

const BreastQuestion: React.FC<BreastQuestionProps> = ({ backgroundColor, onContactClick }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <section className={styles.breastQuestionSection} style={backgroundColor ? { backgroundColor } : {}}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <h2 className={styles.title}>Поширені запитання про збільшення грудей</h2>
        </div>

        {/* Акордеон */}
        <div className={styles.accordion}>
          {questions.map(question => {
            const isExpanded = expandedSection === question.id

            return (
              <div key={question.id} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleSection(question.id)}
                  aria-expanded={isExpanded}
                >
                  <h3 className={styles.accordionTitle}>{question.title}</h3>
                  <div className={styles.accordionIcon}>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className={styles.accordionContent}>
                    <div className={styles.contentGrid}>
                      {/* Ліва частина - текст */}
                      <div className={styles.textSection}>
                        <div className={styles.problemBlock}>
                          <h4 className={styles.blockTitle}>Питання:</h4>
                          <div className={styles.blockText}>
                            <p>{question.title}</p>
                          </div>
                        </div>

                        <div className={styles.solutionBlock}>
                          <h4 className={styles.blockTitle}>Відповідь:</h4>
                          <div className={styles.blockText}>
                            {typeof question.content === "string" ? (
                              <p className={styles.paragraph}>{question.content}</p>
                            ) : (
                              question.content
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Права частина - зображення */}
                      <div className={styles.gallerySection}>
                        <div className={styles.imageWrapper}>
                          <Image
                            src={question.image || "/placeholder.svg"}
                            alt={`Ілюстрація до ${question.title}`}
                            width={600}
                            height={400}
                            className={styles.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <button className={styles.contactButton} onClick={onContactClick}>
            Зв&apos;язатися з нами
          </button>
        </div>
      </div>
    </section>
  )
}

export default BreastQuestion
