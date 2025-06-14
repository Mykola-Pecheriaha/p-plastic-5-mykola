"use client"
import styles from "./Proctology.module.css"
import { ProctologyGallery } from "./ProctologyGallery"
import Image from "next/image"

interface ProctologyProps {
  backgroundColor?: string
}

export function Proctology({ backgroundColor = "#e8f5e8" }: ProctologyProps) {
  return (
    <div className={styles.pageWrapper} style={{ backgroundColor }}>
      <section className={styles.proctologySection}>
        <div className={styles.container}>
          {/* Верхня частина - дві колонки */}
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <h2 className={styles.mainTitle}>Проктологія</h2>
              <p className={styles.subtitle}>Діагностика і фахове лікування</p>
              <ul className={styles.benefitsList}>
                <li>Безболісно</li>
                <li>Делікатно</li>
                <li>Конфіденційно</li>
                <li>Професійно</li>
                <li>Без страху та сорому</li>
                <li>Сучасні методи</li>
                <li>Швидко та ефективно</li>
                <li>Дбайливо до кожного пацієнта</li>
              </ul>
            </div>
            <div className={styles.imageColumn}>
              <Image
                src="/images/proctology/proctology-removebg-preview.png"
                alt="Проктологія"
                width={600}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>

          {/* Середня частина - повна ширина */}
          <div className={styles.fullWidthSection}>
            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                Сучасне, адекватне та доступне лікування гострих та хронічних захворювань прямої кишки.
              </p>
            </div>
            <p className={styles.text}>
              Проктологічні захворювання завжди відносились до категорії делікатних захворювань але сьогодні це група
              одних з найпоширеніших захворювань. У більшості випадків пацієнти зволікають зі зверненням до спеціаліста,
              відкладають візит до проктолога, тим самим погіршуючи ситуацію
            </p>
            <p className={styles.text}>
              Своєчасне звернення до проктолога має вирішальне значення для запобігання серйозним ускладненням та
              забезпечення ефективного лікування. Багато проктологічних захворювань протікають безсимптомно або
              викликають мінімальний дискомфорт на ранніх стадіях, що змушує пацієнтів зволікати зі зверненням до
              лікаря. Однак рання діагностика може запобігти необхідності хірургічного втручання та тяжким наслідкам.
            </p>
          </div>

          {/* Нижня частина - дві колонки */}
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <h3 className={styles.subTitle}>Які хвороби лікує проктолог</h3>
              <ul className={styles.diseasesList}>
                <li>гострий та хронічний геморой</li>
                <li>гостра та хронічна тріщина анального каналу</li>
                <li>поліпи та аденоми прямої кишки та анального каналу</li>
                <li>гострі кондиломи, папіломи та інші новоутворення</li>
                <li>епітеліальний куприковий хід та кіста</li>
                <li>свищі прямої кишки (або хронічні парапроктити)</li>
              </ul>
              <h3 className={styles.subTitle}>При яких симптомах варто звертатися до проктолога?</h3>
              <ul className={styles.diseasesList}>
                <li>Болі та дискомфорт в області анального отвору.</li>
                <li>Кровотеча під час чи після дефекації.</li>
                <li>Свербіж або печіння в анальній області.</li>
                <li>Поява випинань, вузлів чи ущільнень в анальному каналі.</li>
                <li>Порушення нормального процесу дефекації — хронічні запори або діарея.</li>
                <li>Наявність слизу в калі.</li>
                <li>Біль у животі чи в нижній частині спини.</li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <ProctologyGallery />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Proctology
