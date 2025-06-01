"use client"
import type React from "react"
import PreparationGallery from "./PreparationGallery"
import styles from "./BreastAugmentationPreparation.module.css"

interface BreastAugmentationPreparationProps {
  backgroundColor?: string
  // Видалено невикористаний параметр textColor
}

export interface GalleryImage {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
}

// Власний TextBlock компонент з контролем кольору
const CustomTextBlock: React.FC<{ text: string; isDark?: boolean }> = ({ text, isDark = false }) => {
  const textStyle = {
    color: isDark ? "#2d3748" : "inherit",
    whiteSpace: "pre-line" as const,
    lineHeight: "1.6",
    fontSize: "16px",
  }

  return (
    <div style={textStyle} className={styles.textContent}>
      {text}
    </div>
  )
}

const BreastAugmentationPreparation: React.FC<BreastAugmentationPreparationProps> = ({
  backgroundColor,
  // Видалено невикористаний параметр textColor
}) => {
  // Масиви зображень для галерей
  const implantsGalleryImages: GalleryImage[] = [
    {
      src: "/images/breast-augmentation-preparation/implant4.jpg",
      alt: "Різні типи грудних імплантів",
      title: "Типи імплантів",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/access3.jpg",
      alt: "Анатомічні імпланти",
      title: "Анатомічні імпланти",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/implant1.jpg",
      alt: "Круглі імпланти",
      title: "Круглі імпланти",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/implant6.jpg",
      alt: "Порівняння різних імплантів",
      title: "Порівняння імплантів",
      width: 800,
      height: 600,
    },
  ]

  const examinationGalleryImages: GalleryImage[] = [
    {
      src: "/images/breast-augmentation-preparation/preparation4.jpg",
      alt: "Консультація перед операцією",
      title: "Консультація",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/USD1.jpg",
      alt: "УЗД молочних залоз",
      title: "УЗД обстеження",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/mamograft15.jpg",
      alt: "Мамографія",
      title: "Мамографія",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/ecg.jpg",
      alt: "ЕКГ обстеження",
      title: "ЕКГ",
      width: 800,
      height: 600,
    },
  ]

  const placementGalleryImages: GalleryImage[] = [
    {
      src: "/images/breast-augmentation-preparation/implant7.jpg",
      alt: "Розташування імпланту під м'язом",
      title: "Під м'язом",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/access1.jpg",
      alt: "Розташування імпланту під залозою",
      title: "Під залозою",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/implant11.jpg",
      alt: "Комбіноване розташування імпланту",
      title: "Комбіноване розташування",
      width: 800,
      height: 600,
    },
    {
      src: "/images/breast-augmentation-preparation/implant5.jpg",
      alt: "Порівняння методів розташування",
      title: "Порівняння методів",
      width: 800,
      height: 600,
    },
  ]

  // Тексти для блоків
  const implantsText = `🟣 Види грудних імплантів
Вибір імплантатів — один із найважливіших етапів для пацієнтки. Необхідно визначитися з формою, структурою поверхні та типом наповнювача.
Грудні імплантати класифікуються за кількома критеріями:
• 🔹 Поверхня оболонки:
  ○ мікротекстурована
  ○ макротекстурована
  ○ мікрополіуританова
• 🔹 Форма:
  ○ кругла
  ○ анатомічна (краплеподібна)
• 🔹 Наповнювач:
  ○ різні типи силіконового гелю
🧬 Підбір імплантатів проводиться індивідуально, з урахуванням анатомічних особливостей організму та естетичних побажань пацієнтки. Це дозволяє досягти максимально природної, гармонійної та красивої форми грудей.`

  const examinationText = `🟣 Обстеження перед імплантацією грудей
Операція зі збільшення грудей вимагає ретельної підготовки. Техніка проведення втручання визначається лише після комплексного обстеження пацієнтки.
До обстеження входить:
• 🔹 УЗД молочних залоз
• 🔹 Мамографія (за потреби)
• 🔹 Огляд профільних спеціалістів
• 🔹 Загальні та спеціальні аналізи
• 🔹 ЕКГ
• 🔹 Флюорографія (ФОГК)
📌 Для іногородніх пацієнтів передбачена можливість поєднати консультацію, обстеження та здачу аналізів в один день, а також провести операцію під час того ж візиту. Це значно економить час і є зручним варіантом для пацієнтів з інших міст.`

  const placementText = `🟣 Розташування імпланту під час операції зі збільшення грудей
Місце встановлення імплантату залежить від вихідного стану молочної залози: її об'єму, наявного опущення, товщини підшкірної клітковини та інших анатомічних особливостей. Вибір способу розміщення імпланту ухвалюється пластичним хірургом індивідуально.
🔹 Можливі варіанти розташування імплантату:
• Під залозу (над м'язом)
• Під м'яз
• Комбіновано (частково під м'язом, частково під залозою)
📌 Пояснення технік:
🔸 Під залозу
Імплантат розміщується між тканиною молочної залози та великим грудним м'язом.
Мінус: у пацієнток із тонкою шкірою або невеликою кількістю підшкірного жиру імплантат може бути помітним або прощупуватися, викликаючи ефект контурованості.
🔸 Під м'яз
Імплантат розміщується між великим і малим грудними м'язами. Цей варіант забезпечує кращу маскування імпланту, зменшує ризик контурованості, а також стабілізує його положення.
🔍 Важливо: остаточне рішення щодо місця встановлення імплантату — над м'язом чи під ним — приймає хірург, враховуючи всі анатомічні особливості пацієнтки.
Рекомендуємо довіритися його професійній думці.`

  // Стилі для всього wrapper'а
  const wrapperStyle = {
    backgroundColor: backgroundColor || "#e8f5e8",
    color: "#2d3748", // ЗАВЖДИ темний текст
  }

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <div className={styles.container}>
        <h2
          className={styles.mainTitle}
          style={{ color: "#2d3748" }} // ЗАВЖДИ темний заголовок
        >
          Що потрібно знати перед операцією з мамопластики
        </h2>

        {/* Перший блок - Види імплантів */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <CustomTextBlock text={implantsText} isDark={true} /> {/* ЗАВЖДИ темний текст */}
          </div>
          <div className={styles.galleryColumn}>
            <PreparationGallery images={implantsGalleryImages} />
          </div>
        </div>

        {/* Другий блок - Обстеження */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <CustomTextBlock text={examinationText} isDark={true} /> {/* ЗАВЖДИ темний текст */}
          </div>
          <div className={styles.galleryColumn}>
            <PreparationGallery images={examinationGalleryImages} />
          </div>
        </div>

        {/* Третій блок - Розташування імпланту */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <CustomTextBlock text={placementText} isDark={true} /> {/* ЗАВЖДИ темний текст */}
          </div>
          <div className={styles.galleryColumn}>
            <PreparationGallery images={placementGalleryImages} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreastAugmentationPreparation
