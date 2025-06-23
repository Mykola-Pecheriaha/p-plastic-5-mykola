"use client"
import { LiposuctionDetailsGallery } from "./LiposuctionDetailsGallery"
import styles from "./LiposuctionDetails.module.css"

interface LiposuctionDetailsProps {
  backgroundColor?: string
}

export function LiposuctionDetails({ backgroundColor = "#f0f9ff" }: LiposuctionDetailsProps) {
  // Зображення для головної галереї
  const mainGalleryImages = [
    {
      src: "/images/liposuction/liposuction18.jpg",
      alt: "Ілюстрація процедури ліпосакції",
      width: 800,
      height: 600,
      title: "Ділянки ліпосакції",
    },
    {
      src: "/images/liposuction/liposuction17.jpg",
      alt: "Результати ліпосакції",
      width: 800,
      height: 600,
      title: "Результати ліпосакції",
    },
    {
      src: "/images/liposuction/indication2.jpg",
      alt: "Сучасні пристрої для ліпосакції",
      width: 800,
      height: 600,
      title: "Шийний горб",
    },
  ]

  // Зображення для галереї першого сегменту
  const firstSegmentGalleryImages = [
    {
      src: "/images/liposuction/abdominoplastic2.jpg",
      alt: "Консультація перед ліпосакцією",
      width: 800,
      height: 600,
      title: "Консультація перед ліпосакцією",
    },
    {
      src: "/images/liposuction/liposuction6.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Підготовка до ліпосакції",
    },
    {
      src: "/images/liposuction/liposuction7.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Підготовка до ліпосакції",
    },
    {
      src: "/images/liposuction/liposuction8.jpg",
      alt: "Підготовка до ліпосакції",
      width: 800,
      height: 600,
      title: "Підготовка до ліпосакції",
    },
  ]

  // Зображення для галереї другого сегменту
  const secondSegmentGalleryImages = [
    {
      src: "/images/liposuction/liposuction12.jpg",
      alt: "Тумесцентна ліпосакція",
      width: 800,
      height: 600,
      title: "Тумесцентна ліпосакція",
    },
    {
      src: "/images/liposuction/liposuction9.jpg",
      alt: "Вакуумна ліпосакція",
      width: 800,
      height: 600,
      title: "Вакуумна ліпосакція",
    },
    {
      src: "/images/liposuction/liposuction11.jpg",
      alt: "Ультразвукова ліпосакція",
      width: 800,
      height: 600,
      title: "Ультразвукова ліпосакція",
    },
    {
      src: "/images/liposuction/liposuction13.jpg",
      alt: "Радіочастотна ліпосакція",
      width: 800,
      height: 600,
      title: "Радіочастотна ліпосакція",
    },
    {
      src: "/images/liposuction/liposuction10.jpg",
      alt: "Лазерна ліпосакція",
      width: 800,
      height: 600,
      title: "Лазерна ліпосакція",
    },
  ]

  return (
    <section className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Головна секція */}
        <div className={styles.mainSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainTitle}>
              <span className={styles.titleIcon}>✦</span> Що таке Ліпосакція?
            </h2>
            <h3 className={styles.subTitle}>
              <span className={styles.subtitleIcon}>🔹</span> Ліпосакція
            </h3>
            <p className={styles.mainText}>
              Ліпосакція — це хірургічна процедура, яка видаляє{" "}
              <span className={styles.boldText}>жирові відкладення</span> з певних ділянок тіла, таких як:
            </p>
            <ul className={styles.bulletList}>
              <li>живіт</li>
              <li>стегна</li>
              <li>сідниці</li>
              <li>руки</li>
              <li>шия</li>
            </ul>
            <div className={styles.importantNote}>
              <span className={styles.noteIcon}>⚠️</span>
              <strong>Важливо:</strong> Ліпосакція <span className={styles.highlightText}>не є методом схуднення</span>.
            </div>
            <p className={styles.mainText}>
              Це спосіб <span className={styles.highlightText}>контурного моделювання тіла</span> для покращення його
              форми та пропорцій.
            </p>
          </div>
          <div className={styles.galleryColumn}>
            <LiposuctionDetailsGallery images={mainGalleryImages} />
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Перший сегмент */}
        <div className={styles.segment}>
          {/* Верхня частина першого сегменту на всю ширину */}
          <div className={styles.fullWidthSection}>
            <h3 className={styles.segmentTitle}>
              <span className={styles.titleIcon}>✦</span> Ліпосакція — мистецтво ліній і форм
            </h3>
            <p className={styles.segmentText}>
              Ліпосакція — це не просто хірургічна процедура, а естетичне вдосконалення тіла. Вона спрямована на
              делікатне моделювання фігури: усунення стійких жирових відкладень для досягнення бажаної форми та
              пропорцій. Процедура проводиться на різних зонах — живіт, стегна, боки, руки, підборіддя — щоб відкрити
              природну красу контурів.
            </p>
            <div className={styles.statisticBox}>
              <span className={styles.boxIcon}>📊</span>З 2015 року ліпосакція входить до трійки найпопулярніших
              пластичних операцій у США та Європі. Це вибір тих, хто прагне гармонії у зовнішності без зайвих
              компромісів.
            </div>
          </div>

          {/* Нижня частина першого сегменту розділена на дві колонки */}
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <h3 className={styles.segmentSubtitle}>
                <span className={styles.subtitleIcon}>🔹</span> Ліпосакція — не для схуднення
              </h3>
              <p className={styles.segmentText}>
                Багато хто помилково вважає ліпосакцію швидким способом позбутися зайвої ваги. Проте це — міф. Операція
                не знижує масу тіла, а лише підкреслює лінії тіла, викреслюючи надлишкові обєми з точністю художника.
              </p>
              <div className={styles.warningBox}>
                <span className={styles.boxIcon}>❗️</span>
                Ліпосакція не призначена для боротьби з ожирінням. Ідеальний пацієнт — це людина з стабільною вагою, яка
                хоче позбутися локальних жирових відкладень, що накопичуються у так званих «депо-зонах» — найстійкіших
                ділянках тіла.
              </div>
              <h3 className={styles.segmentSubtitle}>
                <span className={styles.subtitleIcon}>🔹</span> Ліпосакція — для всіх
              </h3>
              <p className={styles.segmentText}>
                Стереотип, що ліпосакція — це виключно жіноча процедура, давно застарів. Все більше чоловіків обирають
                цей шлях, щоб підкреслити рельєфність, вдосконалити фігуру та повернути собі впевненість.
              </p>
              <div className={styles.quoteBox}>
                <span className={styles.boxIcon}>💬</span>
                Краса не має статі — вона має форму, гармонію і впевненість.
              </div>
              <div className={styles.keyPoints}>
                <p>🔹 Ліпосакція — це не про втечу від зайвого, а про шлях до себе справжнього.</p>
                <p>🔹 Це про баланс, легкість, і той особливий момент, коли ти дивишся у дзеркало й бачиш гармонію.</p>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionDetailsGallery images={firstSegmentGalleryImages} />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Другий сегмент */}
        <div className={styles.segment}>
          {/* Верхня частина другого сегменту на всю ширину */}
          <div className={styles.fullWidthSection}>
            <h3 className={styles.segmentTitle}>
              <span className={styles.titleIcon}>✦</span> Види ліпосакції живота
            </h3>
            <p className={styles.segmentText}>
              Відповідаючи на питання, як проводиться ліпосакція живота, важливо розглянути її основні методики. Сучасні
              клініки пластичної хірургії застосовують такі технології:
            </p>
            <h4 className={styles.methodTitle}>
              <span className={styles.methodIcon}>✅</span> Тумесцентна ліпосакція
            </h4>
            <p className={styles.segmentText}>
              Одна з найпоширеніших технік так званих вологих операцій. У зону втручання пластичний хірург вводить
              розчин Кляйна, що містить:
            </p>
            <ul className={styles.bulletList}>
              <li>анестетик (лідокаїн),</li>
              <li>сольовий розчин,</li>
              <li>адреналін.</li>
            </ul>
            <p className={styles.segmentText}>
              Цей коктейль знеболює тканини та розріджує жирові відкладення, полегшуючи їх виведення. Після цього
              виконується вакуумне відсмоктування жиру.
            </p>
            <div className={styles.warningBox}>
              <span className={styles.boxIcon}>⚠️</span>
              Недолік тумесцентної ліпосакції — підвищений ризик набряків і синців.
            </div>
            <h4 className={styles.methodTitle}>
              <span className={styles.methodIcon}>✅</span> Вакуумна ліпосакція
            </h4>
            <p className={styles.segmentText}>
              Найбільш популярний і ефективний метод боротьби з жировими відкладеннями. Через мікропроколи за допомогою
              канюлі, під`єднаної до вакуумного апарата, пластичний хірург делікатно видаляє жирову клітковину.
            </p>
            <div className={styles.benefitBox}>
              <span className={styles.boxIcon}>✅</span>
              Методика впливає саме на жирові клітини, ефективно зменшуючи обʼєм тканин та мінімізуючи ризик утворення
              синців.
            </div>
          </div>

          {/* Нижня частина другого сегменту розділена на дві колонки */}
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <h4 className={styles.methodTitle}>
                <span className={styles.methodIcon}>✅</span> Ультразвукова ліпосакція
              </h4>
              <p className={styles.segmentText}>На жирові відкладення спрямовується ультразвук, який:</p>
              <ul className={styles.bulletList}>
                <li>розігріває тканини,</li>
                <li>руйнує жировий шар.</li>
              </ul>
              <p className={styles.segmentText}>Особливо ефективна при невеликих обсягах жиру.</p>
              <h4 className={styles.methodTitle}>
                <span className={styles.methodIcon}>✅</span> Радіочастотна ліпосакція
              </h4>
              <p className={styles.segmentText}>Процедура відбувається за допомогою електрода та випромінювача:</p>
              <ul className={styles.bulletList}>
                <li>електрод поміщають під шкіру,</li>
                <li>випромінювач залишають на поверхні.</li>
              </ul>
              <div className={styles.benefitBox}>
                <span className={styles.boxIcon}>✔️</span>
                Між ними створюється радіохвильова енергія, яка руйнує жирові клітини.
              </div>
              <h4 className={styles.methodTitle}>
                <span className={styles.methodIcon}>✅</span> Лазерна ліпосакція
              </h4>
              <p className={styles.segmentText}>
                Одна з найсучасніших методик — використання лазерного зонда, який не лише:
              </p>
              <ul className={styles.bulletList}>
                <li>видаляє жир,</li>
                <li>але й стимулює вироблення колагену,</li>
                <li>покращує якість і пружність шкіри.</li>
              </ul>
              <p className={styles.segmentText}>
                Відмінність між ними полягає у способі руйнування жирових тканин та клітин.
              </p>
              <div className={styles.keyPoints}>
                <p>🔹 Кожен метод має свої особливості.</p>
                <p>🔹 Вибір техніки визначає хірург залежно від анатомії пацієнта та бажаного результату.</p>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionDetailsGallery images={secondSegmentGalleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiposuctionDetails
