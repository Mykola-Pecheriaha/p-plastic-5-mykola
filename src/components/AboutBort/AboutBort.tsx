"use client"
import Image from "next/image"
import styles from "./AboutBort.module.css"

interface AboutBortProps {
  backgroundColor?: string
  className?: string
}

export function AboutBort({ backgroundColor = "#e8f5e8", className }: AboutBortProps) {
  return (
    <section className={`${styles.aboutSection} ${className || ""}`} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Верхній сектор */}
        <div className={styles.upperSection}>
          <div className={styles.textColumn}>
            <h1 className={styles.mainTitle}>Про лікаря</h1>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                Вибір пластичного хірурга — це важливий крок на шляху до досягнення бажаного результату та покращення
                якості життя. Кожен пацієнт заслуговує на індивідуальний підхід, професіоналізм та увагу до деталей.
                Кожному пацієнту хочеться більше дізнатися про спеціаліста, якому він чи вона довіряє своє здоров`я,
                життя та красу. Я розумію це, тому хочу поділитися з вами історією мого шляху в пластичній хірургії.
              </p>
              <p className={styles.paragraph}>
                Моя кар`єра почалася з вступу на медичний факультет. Після закінчення навчання, я пройшов численні
                курси, стажування та міжнародні тренінги, щоб освоїти найсучасніші методики та технології.
              </p>
              <p className={styles.paragraph}>
                Моїм головним принципом є безпека пацієнтів та мінімальні ризики при максимальному естетичному
                результаті. Сьогодні я з гордістю можу сказати, що мої пацієнти отримують не тільки результат, що
                відповідає їхнім очікуванням, але й високий рівень догляду на кожному етапі лікування.
              </p>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/bigbort/about-bord1-removebg-preview.png"
                alt="Пластичний хірург"
                width={400}
                height={500}
                className={styles.doctorImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Нижній сектор */}
        <div className={styles.lowerSection}>
          <div className={styles.doctorInfo}>
            <div className={styles.doctorName}>
              <h2 className={styles.brandName}>PlastikP</h2>
              <h3 className={styles.firstName}>Mykola</h3>
              <h3 className={styles.lastName}>Pecheriaha</h3>
            </div>
          </div>
          <div className={styles.philosophyText}>
            <p className={styles.philosophyParagraph}>
              Щастя бути красивим – те, що може дозволити собі кожна людина. Моя робота — це не лише про техніку
              виконання операцій, але й про розуміння емоційних та психологічних аспектів, які супроводжують кожну
              трансформацію. Адже для мене пластична хірургія — це не просто зміна зовнішності, а допомога в досягненні
              внутрішнього балансу, підвищення впевненості та самопочуття.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBort
