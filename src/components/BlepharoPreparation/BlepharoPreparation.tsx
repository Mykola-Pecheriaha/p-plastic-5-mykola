"use client"

import type React from "react"
import styles from "./BlepharoPreparation.module.css"
import BlepharoPreparationGallery, { type GalleryImage } from "./BlepharoPreparationGallery"

interface BlepharoPreparationProps {
  backgroundColor?: string
}

const BlepharoPreparation: React.FC<BlepharoPreparationProps> = ({ backgroundColor = "#e8f5e8" }) => {
  // Зображення для першої галереї (підготовка до операції)
  const preparationImages: GalleryImage[] = [
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio5.jpg",
      alt: "Консультація з пластичним хірургом",
      width: 600,
      height: 400,
      title: "Консультація з пластичним хірургом",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio15.jpg",
      alt: "Підготовка до операції блефаропластики",
      width: 600,
      height: 400,
      title: "Підготовка до операції",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio4.jpg",
      alt: "Етапи підготовки до блефаропластики",
      width: 600,
      height: 400,
      title: "Підготовка до операції",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio2.jpg",
      alt: "Медичне обстеження перед операцією",
      width: 600,
      height: 400,
      title: "Підготовка до операції",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio3.jpg",
      alt: "Результати блефаропластики",
      width: 600,
      height: 400,
      title: "Результати блефаропластики",
    },
  ]

  // Зображення для другої галереї (пластика верхніх повік)
  const upperEyelidImages: GalleryImage[] = [
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio9.jpg",
      alt: "Розмітка верхніх повік перед операцією",
      width: 600,
      height: 400,
      title: "Розмітка верхніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio7.jpg",
      alt: "Етапи операції пластики верхніх повік",
      width: 600,
      height: 500,
      title: "Етапи операції пластики верхніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio8.jpg",
      alt: "Післяопераційний шов верхніх повік",
      width: 600,
      height: 400,
      title: "Післяопераційний шов верхніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio11.jpg",
      alt: "Результат пластики верхніх повік",
      width: 600,
      height: 400,
      title: "Результат пластики верхніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio10.jpg",
      alt: "Фінальний результат пластики верхніх повік",
      width: 600,
      height: 400,
      title: "Результат пластики верхніх повік",
    },
  ]

  // Зображення для третьої галереї (пластика нижніх повік)
  const lowerEyelidImages: GalleryImage[] = [
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio21.jpg",
      alt: "Процедура пластики нижніх повік",
      width: 500,
      height: 400,
      title: "Процедура пластики нижніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio16.jpg",
      alt: "Етапи пластики нижніх повік",
      width: 500,
      height: 400,
      title: "Процедура пластики нижніх повік",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio17.jpg",
      alt: "Кругова блефаропластика",
      width: 500,
      height: 400,
      title: "Кругова блефаропластика",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio20.jpg",
      alt: "Освіження погляду після блефаропластики",
      width: 500,
      height: 600,
      title: "Освіження погляду",
    },
    {
      src: "/images/blepharoPreparation/blepharoplastyPreparatio22.jpg",
      alt: "Результат кругової блефаропластики",
      width: 500,
      height: 500,
      title: "Кругова блефаропластика",
    },
  ]

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}> Пластика повік - блефаропластика</h2>

        {/* Перша секція: підготовка до операції */}
        <div className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h3 className={styles.sectionTitle}>Пластика повік (блефаропластика): підготовка до операції</h3>
              <p className={styles.text}>
                Перший крок до молодості та краси — консультація з пластичним хірургом Миколою Печерага в Чернівцях.
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>🔹 Прийом пацієнтів з усієї України</span>
                <br />
                <span className={styles.highlight}>🔹 Доступна відеоконсультація</span>
              </p>
              <p className={styles.text}>На індивідуальній зустрічі у клініці Vidnova:</p>
              <p className={styles.text}>
                <span className={styles.highlight}> Пацієнт та хірург обговорюють:</span>
              </p>
              <ul className={styles.list}>
                <li>особливості майбутньої операції</li>
                <li>нюанси періоду реабілітації</li>
                <li>очікуваний результат</li>
              </ul>
              <p className={styles.text}>
                <span className={styles.highlight}>
                  Фото до і після дають чітке уявлення про ефект хірургічного втручання.
                </span>
              </p>
              <p className={styles.text}>Обов`язкова підготовка:</p>
              <p className={styles.text}>
                <span className={styles.highlight}>🔹 Медичні аналізи — здаються у власній лабораторії клініки</span>
                <br />
                <span className={styles.highlight}>🔹Процедура триває до 10 хвилин</span>
                <br />
                <span className={styles.highlight}>🔹Результати видаються одразу</span>
              </p>
              <p className={styles.text}>Що варто врахувати:</p>
              <p className={styles.text}>
                <span className={styles.highlight}> За 2 тижні до операції бажано:</span>
              </p>
              <ul className={styles.list}>
                <li>припинити прийом медикаментів, що впливають на згортання крові (за погодженням з лікарем)</li>
                <li>уникати стресів та перенавантажень</li>
              </ul>
              <p className={styles.text}>
                <span className={styles.highlight}>
                  ✨ Блефаропластика — це не лише про красу, а й про впевненість у собі. Зробіть перший крок вже
                  сьогодні!
                </span>
              </p>
            </div>
            <div className={styles.galleryContent}>
              <BlepharoPreparationGallery images={preparationImages} galleryId="preparation-gallery" />
            </div>
          </div>
        </div>

        {/* Текстовий блок на всю ширину */}
        <div className={styles.fullWidthSection}>
          <h3 className={styles.sectionTitle}>Процес проведення операції</h3>
          <p className={styles.text}>
            У клініці діє сучасний формат «хірургія одного дня» — консультація, обстеження та саме оперативне втручання
            відбуваються в один день!
          </p>
          <p className={styles.text}>Особливості блефаропластики:</p>
          <p className={styles.text}>
            <span className={styles.highlight}>🔹 Місцева анестезія — без загального наркозу</span>
            <br />
            <span className={styles.highlight}>
              🔹 Стаціонар не потрібен — вже через кілька годин після процедури пацієнт повертається додому
            </span>
            <br />
            <span className={styles.highlight}>
              🔹 Пацієнт отримує індивідуальні рекомендації від пластичного хірурга
            </span>
          </p>
          <p className={styles.text}>Комплексний підхід до омолодження:</p>
          <p className={styles.text}>Блефаропластика часто поєднується з іншими процедурами, такими як:</p>
          <ul className={styles.list}>
            <li>підтяжка обличчя</li>
            <li>ліпофілінг</li>
          </ul>
          <p className={styles.text}>Це дозволяє досягнути максимально вираженого ефекту омолодження.</p>
          <p className={styles.text}>Які види блефаропластики виконує в нашій клініці:</p>
          <p className={styles.text}>
            <span className={styles.highlight}>🔹 Пластика верхніх повік</span>
            <br />
            <span className={styles.highlight}>🔹 Пластика нижніх повік</span>
          </p>
        </div>

        {/* Друга секція: пластика верхніх повік */}
        <div className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h3 className={styles.sectionTitle}>Пластика верхніх повік</h3>
              <p className={styles.text}>Показання до операції:</p>
              <ul className={styles.list}>
                <li>
                  <span className={styles.highlight}>
                    ✦ Надлишок шкіри у ділянці верхньої повіки (нависання над війним краєм);
                  </span>
                </li>
                <li>
                  <span className={styles.highlight}>
                    ✦ Підшкірна жирова грижа, яка формує похмурий та втомлений погляд.
                  </span>
                </li>
              </ul>
              <p className={styles.text}>
                <span className={styles.arrow}>⟶</span> Надлишок шкіри в цій зоні не лише візуально постарює, але й може
                погіршувати зір, спричиняти втому очей, ускладнювати нанесення макіяжу.
              </p>
              <p className={styles.text}>
                Операція «розплющує» око, освіжає погляд, прибирає зморшки та надає обличчю більш молодий вигляд.
              </p>
              <p className={styles.text}>Як проходить операція:</p>
              <p className={styles.text}>
                <span className={styles.highlight}>🔹 Хірургічний доступ здійснюється через верхню повіку.</span>
                <br />
                <span className={styles.highlight}>
                  🔹 Шов розміщується у природній складці — після загоєння він стає практично непомітним.
                </span>
              </p>
              <p className={styles.text}>Особливості процедури:</p>
              <ul className={styles.list}>
                <li>Проводиться амбулаторно, під місцевою анестезією</li>
                <li>Використовуються високоякісні внутрішньошкірні косметичні нитки</li>
                <li>Стаціонар не потрібен — через кілька годин після втручання пацієнт може йти додому</li>
                <li>Комфортний період реабілітації</li>
                <li>Зняття швів відбувається на 6–7 день</li>
              </ul>
            </div>
            <div className={styles.galleryContent}>
              <BlepharoPreparationGallery images={upperEyelidImages} galleryId="upper-eyelid-gallery" />
            </div>
          </div>
        </div>

        {/* Третя секція: пластика нижніх повік */}
        <div className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h3 className={styles.sectionTitle}>Пластика нижніх повік</h3>
              <p className={styles.text}>
                Нижня блефаропластика — це делікатне хірургічне втручання, спрямоване на видалення жирових гриж (мішків
                під очима) та надлишків в`ялої шкіри.
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>
                  🔹 Розріз виконується безпосередньо під лінією вій, що дозволяє приховати рубець у природній складці
                  шкіри.
                </span>
                <br />
                <span className={styles.highlight}>🔹 Операція проводиться амбулаторно, під місцевою анестезією.</span>
              </p>
              <p className={styles.text}>Що дає операція:</p>
              <ul className={styles.list}>
                <li>
                  <span className={styles.checkmark}>✔</span> Усунення жирових гриж
                </li>
                <li>
                  <span className={styles.checkmark}>✔</span> Позбавлення від набряклості під очима
                </li>
                <li>
                  <span className={styles.checkmark}>✔</span> Освіження погляду
                </li>
              </ul>
              <div className={styles.warningBox}>
                <p className={styles.warningText}>
                  <span className={styles.warning}>⚠️</span> Зморшки у зоні гусячих лапок не завжди зникають повністю
                  після операції.
                </p>
                <p className={styles.warningText}>
                  Для досягнення ідеального результату рекомендовано додатково застосовувати косметологічні процедури,
                  наприклад: — ін`єкції ботулотоксину (ботокс).
                </p>
              </div>
              <p className={styles.text}>Реабілітація:</p>
              <ul className={styles.list}>
                <li>Шви знімаються на 6–7 день</li>
                <li>Період відновлення зазвичай проходить комфортно та швидко</li>
              </ul>
              <p className={styles.text}>Кругова блефаропластика</p>
              <p className={styles.text}>
                Пластика нижніх повік часто поєднується з верхньою — така комбінована процедура називається круговою
                блефаропластикою.
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>
                  💫 Вона дозволяє миттєво омолодити та освіжити зону навколо очей, надаючи обличчю відпочилого та
                  молодшого вигляду.
                </span>
              </p>
            </div>
            <div className={styles.galleryContent}>
              <BlepharoPreparationGallery images={lowerEyelidImages} galleryId="lower-eyelid-gallery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlepharoPreparation
