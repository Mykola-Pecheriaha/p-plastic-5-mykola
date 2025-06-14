"use client"
import { useState } from "react"
import styles from "./CoccyxCyst.module.css"
import { CoccyxCystGallery } from "./CoccyxCystGallery"
import { TreatmentCoccyxCystGallery } from "./TreatmentCoccyxCystGallery"

interface CoccyxCystProps {
  className?: string
}

export function CoccyxCyst({ className }: CoccyxCystProps) {
  const [isExpandedCauses, setIsExpandedCauses] = useState(false)
  const [isExpandedTreatment, setIsExpandedTreatment] = useState(false)

  const toggleCausesExpand = () => {
    setIsExpandedCauses(!isExpandedCauses)
  }

  const toggleTreatmentExpand = () => {
    setIsExpandedTreatment(!isExpandedTreatment)
  }

  return (
    <div className={`${styles.pageWrapper} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Кіста куприка</h1>

        <section className={styles.introSection}>
          <p className={styles.introText}>
            Кіста куприка (пілонідальна кіста) — це вроджена патологія ембріонального розвитку, яка виглядає як вузький
            епітеліальний канал довжиною 2–3 см, розташований у міжсідничній складці. На поверхні шкіри видно декілька
            дрібних отворів, через які може виходити вміст кісти.
          </p>

          <div className={styles.infoBlock}>
            <h2 className={styles.subTitle}>
              <span className={styles.emoji}>✅</span> Як виникає запалення?
            </h2>
            <p className={styles.text}>Всередині цього каналу можуть накопичуватися:</p>
            <ul className={styles.bulletList}>
              <li>волосяні фолікули,</li>
              <li>секрет сальних та потових залоз,</li>
              <li>рідше — фрагменти зубів (при ембріональній аномалії).</li>
            </ul>
            <p className={styles.text}>
              Через застій цього вмісту створюються умови для розмноження бактерій, що призводить до нагноєння. Гній
              проникає в підшкірну жирову клітковину, утворюючи абсцес, який може самостійно прорватися, формуючи свищ.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.subTitle}>
              <span className={styles.emoji}>✅</span> Перебіг хвороби
            </h2>
            <p className={styles.text}>
              Захворювання має хвилеподібний характер — періоди ремісії змінюються загостреннями із запаленням, болем та
              виділеннями.
            </p>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.subTitle}>
              <span className={styles.emoji}>⚠️</span> Причини та фактори ризику
            </h2>
            <p className={styles.text}>
              {isExpandedCauses
                ? "До розвитку або загострення кісти куприка сприяють:"
                : "До розвитку або загострення кісти куприка сприяють:".substring(0, 100) + "..."}
            </p>

            {!isExpandedCauses && (
              <button className={styles.expandButton} onClick={toggleCausesExpand}>
                Розгорнути <span className={styles.chevron}>▼</span>
              </button>
            )}

            {isExpandedCauses && (
              <>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Недотримання гігієни
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Рясне оволосіння міжсідничної ділянки
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Часті мікротравми
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Переохолодження або перегрів
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Сидячий спосіб життя
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Ожиріння, гормональні збої
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Носіння тісної білизни
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔸</span> Вростання волосся у шкіру
                  </li>
                </ul>

                <h3 className={styles.subTitle}>
                  <span className={styles.emoji}>✅</span> Симптоми кісти куприка
                </h3>
                <p className={styles.text}>На ранніх стадіях пацієнт може відчувати:</p>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>🔹</span> біль під час сидіння;
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> наявність стороннього тіла в нижній частині спини;
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> припухлість або ущільнення в крижово-куприковій
                    ділянці.
                  </li>
                </ul>

                <p className={styles.text}>При активному запаленні з`являються такі ознаки:</p>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>🔹</span> Свербіж, почервоніння, дискомфорт у ділянці куприка
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> Біль у крижово-куприковій зоні, особливо при сидінні
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> Виділення гною з отвору в міжсідничній складці
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> Пальповане ущільнення чи припухлість у цій зоні
                  </li>
                  <li>
                    <span className={styles.listMarker}>🔹</span> Можливе підвищення температури та загальна слабкість
                  </li>
                </ul>

                <p className={styles.noteText}>
                  <span className={styles.noteMarker}>📍</span> У стані `спокою` кіста нагадує маленький отвір або
                  воронку на шкірі — на відстані до 10 см від ануса.
                </p>

                <button className={styles.expandButton} onClick={toggleCausesExpand}>
                  Згорнути <span className={styles.chevron}>▲</span>
                </button>
              </>
            )}
          </div>

          <div className={styles.galleryColumn}>
            <CoccyxCystGallery />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.fullWidthSection}>
          <h2 className={styles.subTitle}>
            <span className={styles.emoji}>✅</span> Лікування кісти куприка
          </h2>
          <p className={styles.text}>
            Методи лікування залежать від стадії захворювання — чи є запалення, свищ, гнійник, чи кіста перебуває в
            «спокійному» стані.
          </p>
          <p className={styles.text}>
            Залежно від форми та тривалості перебігу хвороби застосовується як консервативне (медикаментозне), так і
            хірургічне лікування.
          </p>
        </section>

        <section className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              <span className={styles.emoji}>✅</span> 1. Консервативне лікування (на початкових стадіях):
            </h3>
            <p className={styles.text}>
              {isExpandedTreatment
                ? ""
                : "Консервативне лікування включає антибактеріальну терапію, місцеве лікування та фізіотерапію..."}
            </p>

            {!isExpandedTreatment && (
              <button className={styles.expandButton} onClick={toggleTreatmentExpand}>
                Розгорнути <span className={styles.chevron}>▼</span>
              </button>
            )}

            {isExpandedTreatment && (
              <>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>📌</span> Антибактеріальна терапія — для зменшення запалення;
                  </li>
                  <li>
                    <span className={styles.listMarker}>📌</span> Місцеве лікування — антисептичні обробки, мазі
                    (іхтіолова, левомеколь тощо);
                  </li>
                  <li>
                    <span className={styles.listMarker}>📌</span> Фізіотерапія — для покращення кровообігу і прискорення
                    загоєння.
                  </li>
                </ul>

                <div className={styles.alertBox}>
                  <p className={styles.alertText}>
                    <span className={styles.alertIcon}>⚠️</span> Консервативне лікування лише тимчасово усуває симптоми.
                    Щоб позбутися проблеми назавжди — потрібне хірургічне втручання.
                  </p>
                </div>

                <h3 className={styles.subTitle}>
                  <span className={styles.emoji}>✅</span> 2. Хірургічне лікування
                </h3>
                <p className={styles.text}>
                  <span className={styles.textHighlight}>🔻</span> Операція є основним методом лікування, особливо при
                  наявності гною або хронічного свища.
                </p>
                <p className={styles.text}>Мета — повністю видалити кісту разом із усіма ходами.</p>
                <p className={styles.text}>Популярні методи:</p>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>•</span> Класична операція — повне висічення зшиванням рани або
                    залишенням її відкритою для самостійного загоєння;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> Лазерна вапоризація — менш травматична, з коротшим
                    періодом реабілітації;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> Пластичні методики — застосовуються при великих або
                    повторних кістаx (флап-пластика тощо).
                  </li>
                </ul>

                <p className={styles.text}>
                  <span className={styles.textHighlight}>✅</span> Післяопераційний період:
                </p>
                <ul className={styles.coloredList}>
                  <li>
                    <span className={styles.listMarker}>•</span> обробка шва або рани;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> обмеження фізичного навантаження;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> сидіння дозволяється лише після загоєння;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> регулярні перев`язки;
                  </li>
                  <li>
                    <span className={styles.listMarker}>•</span> дотримання гігієни та рекомендацій лікаря.
                  </li>
                </ul>

                <button className={styles.expandButton} onClick={toggleTreatmentExpand}>
                  Згорнути <span className={styles.chevron}>▲</span>
                </button>
              </>
            )}
          </div>

          <div className={styles.galleryColumn}>
            <TreatmentCoccyxCystGallery />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.fullWidthSection}>
          <h2 className={styles.subTitle}>
            <span className={styles.emoji}>✅</span> Профілактика
          </h2>
          <p className={styles.text}>Щоб уникнути рецидивів або попередити розвиток кісти:</p>
          <ul className={styles.coloredList}>
            <li>
              <span className={styles.listMarker}>🔹</span> Дотримуйтеся ретельної гігієни міжсідничної ділянки;
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Регулярно видаляйте зайве волосся (за потреби — лазерна
              епіляція);
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Уникайте тривалого сидіння без перерв;
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Не допускайте переохолодження куприкової ділянки;
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Контролюйте вагу і гормональний фон;
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Уникайте носіння тісної білизни та синтетичних тканин;
            </li>
            <li>
              <span className={styles.listMarker}>🔹</span> Ведіть активний спосіб життя — рух покращує кровообіг і
              зменшує ризик запалення.
            </li>
          </ul>

          <div className={styles.conclusionBox}>
            <p className={styles.conclusionText}>
              <span className={styles.emoji}>✅</span> Пам`ятайте: чим раніше звернетеся до лікаря — тим простішим буде
              лікування. Кіста куприка — це не тільки естетичний дефект, а й серйозне джерело хронічного інфекційного
              процесу.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CoccyxCyst
