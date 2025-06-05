"use client"
import styles from "./LiposuctionIndicatio.module.css"
import LiposuctionIndicatioGallery from "./LiposuctionIndicatioGallery"

interface LiposuctionIndicatioProps {
  backgroundColor?: string
}

export function LiposuctionIndicatio({ backgroundColor = "#f0f9ff" }: LiposuctionIndicatioProps) {
  // Зображення для першої галереї
  const indicationImages = [
    {
      src: "/images/liposuctionIndicatio/liposuction5.jpg",
      alt: "Локальні скупчення жиру на животі",
      width: 800,
      height: 600,
      title: "Локальні скупчення жиру на животі",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction13.jpg",
      alt: "Жирові відкладення на спині (фланках)",
      width: 800,
      height: 600,
      title: "Жирові відкладення на спині (фланках)",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction2.jpg",
      alt: "Корекція форми в області стегон",
      width: 800,
      height: 600,
      title: "Корекція форми в області стегон",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction3.jpg",
      alt: "Зона галіфе",
      width: 800,
      height: 600,
      title: "Зона галіфе",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction7.jpg",
      alt: "Зона галіфе",
      width: 800,
      height: 600,
      title: "Зона галіфе",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction8.jpg",
      alt: "Зона галіфе",
      width: 800,
      height: 600,
      title: "Зона галіфе",
    },
    {
      src: "/images/liposuctionIndicatio/liposuction4.jpg",
      alt: "Зона галіфе",
      width: 800,
      height: 600,
      title: "Зона галіфе",
    },
  ]

  // Зображення для другої галереї
  const contraindicationImages = [
    {
      src: "/images/liposuctionIndicatio/contraindicatio1.jpg",
      alt: "Хронічні захворювання",
      width: 800,
      height: 600,
      title: "Хронічні захворювання",
    },
    {
      src: "/images/liposuctionIndicatio/abdominoPreparation27.jpg",
      alt: "Порушення згортання крові",
      width: 800,
      height: 600,
      title: "Порушення згортання крові",
    },
    {
      src: "/images/liposuctionIndicatio/abdominoPreparation28.jpg",
      alt: "Серйозні психічні розлади",
      width: 800,
      height: 600,
      title: "Серйозні психічні розлади",
    },
  ]

  return (
    <section className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок */}
        <h2 className={styles.mainTitle}>
          <span className={styles.icon}>✦</span> Ліпосакція: показання до проведення
        </h2>

        {/* Перший сегмент */}
        <div className={styles.segment}>
          <div className={styles.contentSplit}>
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <h3 className={styles.title}>
                  <span className={styles.titleIcon}>✦</span> Ліпосакція: показання до проведення
                </h3>
                <p className={styles.text}>Хірургічне втручання рекомендується у таких випадках:</p>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔹</span> за наявності «жирових пасток» — локальних скупчень жиру на:
                </p>
                <ul className={styles.list}>
                  <li>– животі</li>
                  <li>– спині (фланках)</li>
                  <li>– стегнах</li>
                  <li>– зоні «галіфе»</li>
                </ul>
                <p className={styles.text}>які не вдається усунути самостійно за допомогою масажу, спорту чи дієт;</p>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔹</span> після схуднення, коли необхідна корекція форм, особливо в
                  області стегон;
                </p>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔹</span> при надлишкових жирових відкладеннях у нижній частині
                  живота;
                </p>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔹</span> для вирішення естетичних проблем:
                </p>
                <ul className={styles.list}>
                  <li>– гінекомастія (збільшення грудних залоз у чоловіків)</li>
                  <li>– клімактеричний горб («холка бухгалтера», «вдовиний горб»)</li>
                </ul>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionIndicatioGallery images={indicationImages} />
            </div>
          </div>
        </div>

        {/* Другий сегмент */}
        <div className={styles.segment}>
          <h2 className={styles.fullWidthTitle}>
            <span className={styles.icon}>⚠️</span> Протипоказання до ліпосакції
          </h2>
          <p className={styles.fullWidthText}>
            Ліпосакція, як і будь-яке інше хірургічне втручання, має ряд медичних протипоказань, які необхідно
            враховувати перед плануванням операції.
          </p>
          <div className={styles.contentSplit}>
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔸</span> До основних протипоказань належать:
                </p>
                <ul className={styles.list}>
                  <li className={styles.importantItem}>
                    <span className={styles.redBullet}>❗</span> Хронічні захворювання:
                    <ul className={styles.nestedList}>
                      <li>цукровий діабет</li>
                      <li>ожиріння III–IV ступеня</li>
                      <li>серцево-легенева недостатність</li>
                      <li>захворювання щитовидної залози</li>
                      <li>хронічна недостатність нирок і печінки</li>
                    </ul>
                  </li>
                  <li>
                    <span className={styles.bullet}>🔹</span> гострі інфекційні захворювання;
                  </li>
                  <li>
                    <span className={styles.bullet}>🔹</span> вагітність та період годування грудьми;
                  </li>
                  <li>
                    <span className={styles.bullet}>🔹</span> онкологічні захворювання;
                  </li>
                  <li>
                    <span className={styles.bullet}>🔹</span> перенесений інфаркт або інсульт в анамнезі.
                  </li>
                </ul>
                <div className={styles.note}>
                  <span className={styles.noteBullet}>💡</span> У таких випадках необхідно стабілізувати стан пацієнта
                  або вилікувати супутнє захворювання перед плануванням операції.
                </div>
                <ul className={styles.list}>
                  <li className={styles.importantItem}>
                    <span className={styles.redBullet}>❗</span> Порушення згортання крові
                  </li>
                </ul>
                <p className={styles.text}>Це може ускладнити процес загоєння та підвищити ризик ускладнень.</p>
                <ul className={styles.list}>
                  <li className={styles.importantItem}>
                    <span className={styles.redBullet}>❗</span> Серйозні психічні розлади
                  </li>
                </ul>
                <p className={styles.text}>Операція потребує усвідомленого та стабільного психологічного стану.</p>
                <p className={styles.text}>
                  <span className={styles.bullet}>🔸</span> Індивідуальний підхід
                </p>
                <p className={styles.text}>
                  Остаточне рішення щодо можливості проведення ліпосакції приймає лікар, враховуючи:
                </p>
                <ul className={styles.nestedList}>
                  <li>загальний стан здоров`я</li>
                  <li>вік пацієнта</li>
                  <li>індивідуальні особливості організму</li>
                  <li>рівень мотивації та психоемоційний настрій</li>
                </ul>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <LiposuctionIndicatioGallery images={contraindicationImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiposuctionIndicatio
