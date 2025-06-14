"use client"
import { useState } from "react"
import styles from "./PararectalFistulas.module.css"
import { PararectalFistulasGallery } from "./PararectalFistulasGallery"
import { PararectalSymptomGallery } from "./PararectalSymptomGallery"
import { PararectalTerapyGallery } from "./PararectalTerapyGallery"

interface PararectalFistulasProps {
  className?: string
}

export function PararectalFistulas({ className }: PararectalFistulasProps) {
  const [showFullCauses, setShowFullCauses] = useState(false)
  const [showFullSymptoms, setShowFullSymptoms] = useState(false)
  const [showFullTreatment, setShowFullTreatment] = useState(false)

  return (
    <div className={`${styles.pageWrapper} ${className || ""}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Параректальна нориця</h1>

        <section className={styles.introSection}>
          <h2 className={styles.sectionTitle}>Параректальна нориця –</h2>
          <p className={styles.introText}>
            Параректальна нориця — це патологічний канал, який з`єднує пряму кишку з навколишніми м`якими тканинами.
            Через цей хід можуть виділятися гній, кров та сукровиця, що завдає значного дискомфорту та загрожує
            серйозними ускладненнями. Цей стан суттєво знижує якість життя і потребує професійної медичної допомоги.
          </p>

          <div className={styles.warningBox}>
            <h3 className={styles.warningTitle}>
              <span className={styles.emoji}>⚠️</span> Причини утворення параректальної нориці
            </h3>
            <p className={styles.warningText}>
              Найчастіше нориці формуються на фоні хронічного парапроктиту — гнійного запалення в ділянці прямої кишки.
              Якщо запалення не лікувати, гнійник розкривається самостійно, утворюючи отвір і патологічний хід — норицю.
            </p>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.splitSection}>
          <div className={styles.textColumn}>
            <div className={styles.expandableText}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>✅</span> Інші чинники ризику:
              </h3>
              {showFullCauses ? (
                <>
                  <ul className={styles.bulletList}>
                    <li>травми прямої кишки;</li>
                    <li>хвороба Крона;</li>
                    <li>анальні тріщини;</li>
                    <li>часті запори або діарея;</li>
                    <li>пухлини органів малого таза;</li>
                    <li>інфекції, що передаються статевим шляхом;</li>
                    <li>ожиріння;</li>
                    <li>малорухливий спосіб життя.</li>
                  </ul>

                  <h4 className={styles.subTitle}>
                    <span className={styles.emoji}>✅</span> Види нориць прямої кишки
                  </h4>
                  <p className={styles.categoryTitle}>За кількістю отворів:</p>
                  <ul className={styles.bulletList}>
                    <li>Неповна — один вхідний отвір;</li>
                    <li>Повна — має вхід та вихід (з кишки до шкіри);</li>
                    <li>Внутрішня — обидва отвори знаходяться в прямій кишці.</li>
                  </ul>

                  <p className={styles.categoryTitle}>За розташуванням:</p>
                  <ul className={styles.bulletList}>
                    <li>Інтрасфінктерна — прохід під сфінктером;</li>
                    <li>Транссфінктерна — проходить крізь сфінктер;</li>
                    <li>Екстрасфінктерна — йде від кишки повз сфінктер у промежину.</li>
                  </ul>

                  <h4 className={styles.subTitle}>
                    <span className={styles.emoji}>✅</span> Стадії розвитку патології
                  </h4>
                  <ol className={styles.numberedList}>
                    <li>Формується вузький канал у тканинах.</li>
                    <li>Починається запалення та рубцювання.</li>
                    <li>Накопичується гній, посилюється запалення.</li>
                    <li>Розплавлення тканин, розширення отвору, глибоке ураження.</li>
                  </ol>

                  <button className={styles.expandButton} onClick={() => setShowFullCauses(false)}>
                    Згорнути <span className={styles.chevron}>▲</span>
                  </button>
                </>
              ) : (
                <>
                  <ul className={styles.bulletList}>
                    <li>травми прямої кишки;</li>
                    <li>хвороба Крона;</li>
                    <li>анальні тріщини;</li>
                    <li>часті запори або діарея...</li>
                  </ul>
                  <button className={styles.expandButton} onClick={() => setShowFullCauses(true)}>
                    Розгорнути <span className={styles.chevron}>▼</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <PararectalFistulasGallery />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.splitSection}>
          <div className={styles.textColumn}>
            <div className={styles.expandableText}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>✅</span> Симптоми параректальної нориці
              </h3>
              {showFullSymptoms ? (
                <>
                  <p className={styles.text}>
                    Клінічна картина залежить від типу нориці та стадії процесу. Симптоми можуть загострюватися або
                    зникати на час ремісії.
                  </p>
                  <p className={styles.categoryTitle}>Найчастіші прояви:</p>
                  <ul className={styles.bulletList}>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Біль, свербіж, печіння в анальній ділянці
                    </li>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Виділення (гній, сукровиця, серозна рідина, іноді
                      кал)
                    </li>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Почервоніння, набряк у періанальній зоні
                    </li>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Ускладнена та болісна дефекація
                    </li>
                  </ul>

                  <h4 className={styles.subTitle}>
                    <span className={styles.emoji}>✅</span> Коли звертатися до лікаря?
                  </h4>
                  <p className={styles.text}>
                    Не відкладайте візит до проктолога, якщо помітили будь-який із перелічених симптомів. Чим раніше ви
                    звернетеся, тим ефективніше пройде лікування та менший ризик ускладнень і рецидивів.
                  </p>

                  <div className={styles.callToActionBox}>
                    <p className={styles.callToAction}>
                      <span className={styles.emoji}>✅</span> Запишіться на консультацію в Клініці просто зараз —
                      заповніть форму зворотного зв`язку!
                    </p>
                  </div>

                  <h4 className={styles.subTitle}>Як діагностують норицю прямої кишки?</h4>
                  <p className={styles.text}>На прийомі проктолог проводить повну діагностику, яка включає:</p>
                  <ul className={styles.bulletList}>
                    <li>Збір анамнезу та скарг пацієнта.</li>
                    <li>Фізикальний огляд: пальпація, оцінка зовнішніх ознак.</li>
                    <li>
                      Інструментальні методи:
                      <ul className={styles.nestedList}>
                        <li>аноскопія;</li>
                        <li>ректороманоскопія;</li>
                        <li>зондування нориці;</li>
                        <li>УЗД, КТ або МРТ для уточнення локалізації ходу.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className={styles.text}>
                    У Клініці доступне повне обстеження за допомогою сучасного обладнання, яке дозволяє точно поставити
                    діагноз та визначити оптимальну тактику лікування.
                  </p>

                  <button className={styles.expandButton} onClick={() => setShowFullSymptoms(false)}>
                    Згорнути <span className={styles.chevron}>▲</span>
                  </button>
                </>
              ) : (
                <>
                  <p className={styles.text}>
                    Клінічна картина залежить від типу нориці та стадії процесу. Симптоми можуть загострюватися або
                    зникати на час ремісії.
                  </p>
                  <p className={styles.categoryTitle}>Найчастіші прояви:</p>
                  <ul className={styles.bulletList}>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Біль, свербіж, печіння в анальній ділянці
                    </li>
                    <li>
                      <span className={styles.listMarker}>🔹</span> Виділення (гній, сукровиця, серозна рідина...)
                    </li>
                  </ul>
                  <button className={styles.expandButton} onClick={() => setShowFullSymptoms(true)}>
                    Розгорнути <span className={styles.chevron}>▼</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <PararectalSymptomGallery />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.fullWidthSection}>
          <h2 className={styles.sectionTitle}>Чим небезпечна нориця прямої кишки?</h2>
          <p className={styles.fullWidthText}>
            Параректальна нориця — це не просто джерело постійного дискомфорту. Без належного лікування вона поступово
            призводить до деформації тканин сфінктера та промежини, що спричиняє їх рубцювання. У результаті порушується
            тонус сфінктера, виникають труднощі з дефекацією — з`являються постійні закрепи або мимовільне підтікання
            калових мас.
          </p>
          <p className={styles.fullWidthText}>
            Окрім цього, хронічна нориця прямої кишки може стати причиною небезпечних ускладнень:
          </p>
          <ul className={styles.bulletList}>
            <li>рецидивуючих абсцесів;</li>
            <li>системного запалення (сепсису);</li>
            <li>розвитку злоякісних пухлин.</li>
          </ul>
          <p className={styles.fullWidthText}>
            Саме тому важливо не зволікати з лікуванням і звернутися по медичну допомогу при перших симптомах.
          </p>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.splitSection}>
          <div className={styles.textColumn}>
            <div className={styles.expandableText}>
              <h3 className={styles.subTitle}>Лікування нориці прямої кишки</h3>
              {showFullTreatment ? (
                <>
                  <p className={styles.text}>
                    На жаль, лікування нориці прямої кишки без операції неможливе. Патологічний хід необхідно повністю
                    видалити, інакше він буде постійно запалюватися.
                  </p>
                  <p className={styles.categoryTitle}>Етапи лікування:</p>
                  <ol className={styles.numberedList}>
                    <li>
                      Усування загострення:
                      <ul className={styles.nestedList}>
                        <li>розкриття та дренування абсцесів;</li>
                        <li>антибактеріальна та протизапальна терапія.</li>
                      </ul>
                    </li>
                    <li>
                      Оперативне втручання:
                      <ul className={styles.nestedList}>
                        <li>видалення (висічення) патологічного каналу.</li>
                      </ul>
                    </li>
                  </ol>

                  <p className={styles.categoryTitle}>Сучасні методи хірургічного лікування:</p>
                  <ul className={styles.bulletList}>
                    <li>
                      Класичне хірургічне висічення – видалення нориці з можливістю встановлення силіконової петлі або
                      реконструкції тканин.
                    </li>
                    <li>
                      Радіохвильове висічення – малотравматичний метод із використанням радіоножа: мінімум крововтрати,
                      швидке загоєння.
                    </li>
                    <li>
                      Лазерна абляція – безконтактне випаровування патологічного ходу лазером, майже без болю та рубців.
                    </li>
                  </ul>

                  <p className={styles.text}>
                    У нашій клініці ми надаємо перевагу щадним методам, завдяки яким пацієнти швидко відновлюються після
                    операції – зазвичай протягом 4–6 тижнів.
                  </p>

                  <h4 className={styles.subTitle}>Рекомендації після операції</h4>
                  <ul className={styles.bulletList}>
                    <li>приймати призначені препарати;</li>
                    <li>дотримуватись гігієни періанальної ділянки;</li>
                    <li>уникати важких фізичних навантажень;</li>
                    <li>
                      дотримуватись дієти: виключити жирне, смажене, солоне, газовані напої; додати до раціону
                      клітковину (овочі, фрукти, каші).
                    </li>
                  </ul>

                  <h4 className={styles.subTitle}>Профілактика</h4>
                  <p className={styles.text}>Щоб знизити ризик утворення нориці прямої кишки:</p>
                  <ul className={styles.bulletList}>
                    <li>своєчасно лікуйте захворювання анального каналу;</li>
                    <li>підтримуйте належну гігієну;</li>
                    <li>уникайте закрепів і проносів;</li>
                    <li>ведіть активний спосіб життя;</li>
                    <li>дотримуйтесь збалансованого харчування.</li>
                  </ul>

                  <div className={styles.callToActionBox}>
                    <p className={styles.callToAction}>
                      Якщо ви вже зіткнулися з цією проблемою — не зволікайте! Запишіться на прийом до Клініки — ми
                      подбаємо про ваше здоров`я.
                    </p>
                  </div>

                  <button className={styles.expandButton} onClick={() => setShowFullTreatment(false)}>
                    Згорнути <span className={styles.chevron}>▲</span>
                  </button>
                </>
              ) : (
                <>
                  <p className={styles.text}>
                    На жаль, лікування нориці прямої кишки без операції неможливе. Патологічний хід необхідно повністю
                    видалити, інакше він буде постійно запалюватися.
                  </p>
                  <p className={styles.categoryTitle}>Етапи лікування:</p>
                  <ol className={styles.numberedList}>
                    <li>Усування загострення...</li>
                    <li>Оперативне втручання...</li>
                  </ol>
                  <button className={styles.expandButton} onClick={() => setShowFullTreatment(true)}>
                    Розгорнути <span className={styles.chevron}>▼</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <PararectalTerapyGallery />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.fullWidthSection}>
          <h2 className={styles.sectionTitle}>Індивідуальний підхід до кожного пацієнта</h2>
          <p className={styles.fullWidthText}>
            Наші хірурги підбирають оптимальний метод лікування, виходячи зі стадії захворювання, симптомів і загального
            стану здоров`я. Ми пропонуємо декілька варіантів терапії з детальним поясненням переваг і ризиків кожного —
            щоб ви могли зробити усвідомлений вибір.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PararectalFistulas
