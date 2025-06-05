"use client"
import styles from "./LiposuctionPreparation.module.css"
import LiposuctionPreparationGallery from "./LiposuctionPreparationGallery"

interface LiposuctionPreparationProps {
  backgroundColor?: string
}

export function LiposuctionPreparation({ backgroundColor = "#e8f5e8" }: LiposuctionPreparationProps) {
  // Зображення для першого сегменту
  const consultationImages = [
    {
      src: "/images/liposuction-preparation/lipoPreparatio2.jpg",
      alt: "Консультація перед ліпосакцією",
      width: 800,
      height: 600,
      title: "Визначення ділянки для ліпосакції",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio4.jpg",
      alt: "Обговорення деталей операції",
      width: 800,
      height: 600,
      title: "Консультація з пластичним хірургом",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio3.jpg",
      alt: "Планування результатів",
      width: 800,
      height: 600,
      title: "Планування результатів",
    },
  ]

  // Зображення для другого сегменту
  const preparationImages = [
    {
      src: "/images/liposuction-preparation/lipoPreparatio5.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Підготовка до ліпосакції",
    },
    {
      src: "/images/liposuction-preparation/gernioPreparation7.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Передопераційне обстеження",
    },
    {
      src: "/images/liposuction-preparation/gernioPreparation8.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Заборона шкідливих звичок",
    },
    {
      src: "/images/liposuction-preparation/preparation1.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "здоровий образ життя",
    },
  ]

  // Зображення для третього сегменту
  const operationImages = [
    {
      src: "/images/liposuction-preparation/lipoPreparatio6.jpg",
      alt: "Проведення ліпосакції",
      width: 800,
      height: 600,
      title: "Проведення ліпосакції",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio7.jpg",
      alt: "Вакуумна ліпосакція",
      width: 800,
      height: 600,
      title: "Вакуумна ліпосакція",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio8.jpg",
      alt: "Результати ліпосакції",
      width: 800,
      height: 600,
      title: "Ліпосакція підбріддя",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio9.jpg",
      alt: "Результати ліпосакції",
      width: 800,
      height: 800,
      title: "Тканевий дендрит",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio10.jpg",
      alt: "Результати ліпосакції",
      width: 800,
      height: 800,
      title: "Результати ліпосакції",
    },
  ]

  // Зображення для четвертого сегменту
  const rehabilitationImages = [
    {
      src: "/images/liposuction-preparation/lipoPreparatio11.jpg",
      alt: "Реабілітація після ліпосакції",
      width: 800,
      height: 600,
      title: "Реабілітація після ліпосакції",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio12.jpg",
      alt: "Компресійна білизна",
      width: 800,
      height: 600,
      title: "Компресійна білизна",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio13.jpg",
      alt: "Відновлення після ліпосакції",
      width: 800,
      height: 600,
      title: "Відновлення після ліпосакції",
    },
    {
      src: "/images/liposuction-preparation/lipoPreparatio14.jpg",
      alt: "Відновлення після ліпосакції",
      width: 800,
      height: 600,
      title: "Відновлення після ліпосакції",
    },
  ]

  return (
    <section className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>
          <span className={styles.titleIcon}>✦</span> Ліпосакція: підготовка до операції
        </h2>

        {/* Перший сегмент */}
        <div className={styles.segment}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✦</span> Консультація перед ліпосакцією
            </h3>
          </div>
          <div className={styles.segmentRow}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                Чи рекомендована операція у конкретному випадку? На це запитання відповість пластичний хірург на
                персональній консультації в клініці.
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>Фахівець із 25-річним досвідом у естетичній хірургії</span> щодня
                допомагає дівчатам набувати форм мрії!
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>Микола Печеряга</span> приймає пацієнтів з різних регіонів України і
                не тільки України.
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>📍 Консультація у Чернівцях</span> — щоденно крім вихідних.
              </p>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionPreparationGallery images={consultationImages} />
            </div>
          </div>
        </div>

        {/* Другий сегмент */}
        <div className={styles.segment}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✦</span> Ліпосакція: підготовка до операції
            </h3>
          </div>
          <div className={styles.segmentRow}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                Методика зменшення жирових відкладень відрізняється малоінвазивністю, тому хороший стан здоров`я
                пацієнта є обов`язковою умовою.
              </p>
              <div className={styles.listContainer}>
                <h4 className={styles.listTitle}>Передопераційна підготовка:</h4>
                <ul className={styles.list}>
                  <li>
                    <span className={styles.highlight}>За 10 днів</span> — припинити прийом медикаментів, які
                    розріджують кров
                  </li>
                  <li>
                    <span className={styles.highlight}>За 10 днів до операції</span> — припинити або суттєво зменшити
                    тютюнопаління.
                  </li>
                  <li>
                    <span className={styles.highlight}>За 2 тижні до операції</span> – відмовитися від алкоголю;
                  </li>
                  <li>
                    <span className={styles.highlight}>Після операції</span> — не палити щонайменше 1–1,5 місяці
                  </li>
                  <li>
                    <span className={styles.highlight}>За 2 дні до операції</span> — обмежити калорійність їжі, пити
                    більше води
                  </li>
                  <li>
                    <span className={styles.highlight}>У день операції</span> — не можна їсти та пити
                  </li>
                </ul>
              </div>
              <p className={styles.text}>
                <span className={styles.highlight}>Перед втручанням</span> пацієнт проходить швидке обстеження та здає
                аналізи у клініці.
              </p>
              <p className={styles.text}>
                На основі результатів пластичний хірург Микола Печеряга ухвалює остаточне рішення щодо проведення
                операції.
              </p>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionPreparationGallery images={preparationImages} />
            </div>
          </div>
        </div>

        {/* Третій сегмент */}
        <div className={styles.segment}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✦</span> Ліпосакція: проведення операції
            </h3>
          </div>
          <div className={styles.segmentRow}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                У клініці застосовується найефективніший метод видалення жиру —{" "}
                <span className={styles.highlight}>вакуумний</span>.
              </p>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkmark}>✔️</span> Жирові клітини розріджуються і виводяться через тонкі
                  (4–5 мм) канюлі за допомогою вакууму.
                </li>
                <li>
                  <span className={styles.checkmark}>✔️</span> Мікропроколи розташовуються у природних складках шкіри —
                  вони майже непомітні.
                </li>
                <li>
                  <span className={styles.checkmark}>✔️</span> Травматизація мінімальна, шви не накладаються.
                </li>
              </ul>
              <h4 className={styles.subTitle}>Ліпосакцію можна проводити:</h4>
              <ul className={styles.dotList}>
                <li>
                  <span className={styles.dot}>🔹</span> під місцевою анестезією;
                </li>
                <li>
                  <span className={styles.dot}>🔹</span> під загальним інгаляційним наркозом.
                </li>
              </ul>
              <h4 className={styles.subTitle}>Процедура може бути:</h4>
              <ul className={styles.dotList}>
                <li>
                  <span className={styles.dot}>🔹</span> самостійною;
                </li>
                <li>
                  <span className={styles.dot}>🔹</span> частиною інших операцій, таких як збільшення молочних залоз або
                  ліпоскульптурування сідниць (поєднання видалення жиру і пересадки його в сідниці).
                </li>
              </ul>
              <h4 className={styles.subTitle}>Якість результату залежить від стану шкіри:</h4>
              <ul className={styles.dashList}>
                <li>
                  <span className={styles.dash}>–</span> еластична шкіра добре скорочується, забезпечуючи чудовий
                  результат;
                </li>
                <li>
                  <span className={styles.dash}>–</span> при втраті пружності рекомендована підтяжка шкіри.
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionPreparationGallery images={operationImages} />
            </div>
          </div>
        </div>

        {/* Четвертий сегмент */}
        <div className={styles.segment}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✦</span> Ліпосакція: реабілітація після операції
            </h3>
          </div>
          <div className={styles.segmentRow}>
            <div className={styles.textColumn}>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>При місцевій анестезії:</h4>
                <ul className={styles.dotList}>
                  <li>
                    <span className={styles.dot}>🔹</span> пацієнт перебуває у свідомості, не відчуваючи болю;
                  </li>
                  <li>
                    <span className={styles.dot}>🔹</span> госпіталізація не потрібна — через 1 годину можна їхати
                    додому з рекомендаціями.
                  </li>
                </ul>
              </div>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>При загальному наркозі:</h4>
                <ul className={styles.dotList}>
                  <li>
                    <span className={styles.dot}>🔹</span> виписка з клініки — через 1 добу.
                  </li>
                </ul>
              </div>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>Протягом перших днів можливі:</h4>
                <ul className={styles.dotList}>
                  <li>
                    <span className={styles.dot}>🔹</span> оніміння прооперованої ділянки;
                  </li>
                  <li>
                    <span className={styles.dot}>🔹</span> набряки та синці;
                  </li>
                  <li>
                    <span className={styles.dot}>🔹</span> легкий дискомфорт, який усувається знеболювальними
                    препаратами.
                  </li>
                </ul>
              </div>
              <p className={styles.text}>
                <span className={styles.highlight}>Чутливість шкіри</span> повністю відновлюється за кілька тижнів.
              </p>
              <ul className={styles.dotList}>
                <li>
                  <span className={styles.dot}>🔹</span> Після ліпосакції живота та стегон обов`язкове носіння
                  компресійної білизни протягом 2–3 тижнів.
                </li>
                <li>
                  <span className={styles.dot}>🔹</span> Через 2 місяці можна поступово повертатися до фізичних
                  навантажень, саун і басейнів.
                </li>
              </ul>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>Коли видно результат?</h4>
                <ul className={styles.dotList}>
                  <li>
                    <span className={styles.dot}>🔸</span> Перші результати можна оцінити вже через 1 місяць.
                  </li>
                  <li>
                    <span className={styles.dot}>🔸</span> Вони стабільні та довготривалі, оскільки жирові клітини після
                    видалення не відновлюються у тих самих місцях.
                  </li>
                </ul>
              </div>
              <p className={styles.text}>
                <span className={styles.highlight}>❗ Однак для підтримки ефекту</span> важливо дотримуватися здорового
                способу життя:
              </p>
              <ul className={styles.dotList}>
                <li>
                  <span className={styles.dot}>🔸</span> правильне харчування;
                </li>
                <li>
                  <span className={styles.dot}>🔸</span> регулярні фізичні навантаження.
                </li>
              </ul>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>На консультації в клініці:</h4>
                <ul className={styles.list}>
                  <li>
                    Обговорюються побажання пацієнта і пояснюємо за і протів різних сучасних оперативних методик
                    герніотомій
                  </li>
                  <li>Уточнюються деталі та нюанси вибраної методики операції</li>
                  <li>Призначається передопераційне обстеження.</li>
                </ul>
              </div>
              <p className={styles.text}>
                <span className={styles.highlight}>Для пацієнтів з інших міст</span> пропонується максимально зручний
                формат: Консультація + обстеження + операція — в 1 візит!
              </p>
              <div className={styles.subsection}>
                <h4 className={styles.subTitle}>Передопераційна підготовка:</h4>
                <ul className={styles.list}>
                  <li>
                    <span className={styles.highlight}>❌ За 10 днів</span> — припинити прийом медикаментів, які
                    розріджують кров
                  </li>
                  <li>
                    <span className={styles.highlight}>❌ За 10 днів до операції</span> — утриматися від куріння
                  </li>
                  <li>
                    <span className={styles.highlight}>❌ Після операції</span> — не палити щонайменше 1–1,5 місяці
                  </li>
                  <li>
                    <span className={styles.highlight}>За 2 дні до операції</span> — обмежити калорійність їжі, пити
                    більше води
                  </li>
                  <li>
                    <span className={styles.highlight}>❌ У день операції</span> — не можна їсти та пити
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionPreparationGallery images={rehabilitationImages} />
            </div>
          </div>
        </div>

        {/* Нижній блок на всю ширину */}
        <div className={styles.fullWidthBlock}>
          <p className={styles.importantNote}>
            Правильна підготовка — запорука швидкої реабілітації та чудового результату.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LiposuctionPreparation
