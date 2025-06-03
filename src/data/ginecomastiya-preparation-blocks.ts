import type { GalleryImage } from "../components/GinecomastiyaPreparation/GinecomastiyaPreparationGallery"

export interface PreparationBlock {
  title: string
  description: string
  images: GalleryImage[]
}

export const preparationBlocks: PreparationBlock[] = [
  {
    title: "Лікування гінекомастії хірургічним шляхом: підготовка до операції",
    description:
      "За відповідних показань призначається дата операції. Перед нею пацієнт проходить швидке комплексне обстеження, яке включає здачу аналізів, УЗД, профільний огляд фахівців. Пацієнтам пропонується поєднати в 1 візит консультацію, обстеження та операцію.",
    images: [
      {
        src: "/images/GinecomastiyaPreparation/ginecomas18.jpg",
        alt: "Підготовка до операції",
        width: 600,
        height: 400,
        title: "Підготовка",
      },
      {
        src: "/images/GinecomastiyaPreparation/ginecomas17.jpg",
        alt: "Обстеження пацієнта",
        width: 600,
        height: 400,
        title: "Обстеження",
      },
    ],
  },
  {
    title: "Лікування гінекомастії: проведення операції з видалення гінекомастії",
    description:
      "Метод проведення пластики визначається виходячи з виду патології. Справжня гінекомастія передбачає видалення залозистих тканин та відновлення природного контуру чоловічих грудей. Розріз здійснюється по колу ареоли. Після цього залишається косметичний шов, який через кілька місяців повністю зливається з кольором шкіри соска і зовсім непомітний для оточуючих.",
    images: [
      {
        src: "/images/GinecomastiyaPreparation/ginecomas25.jpg",
        alt: "Проведення операції",
        width: 600,
        height: 400,
        title: "Операція",
      },
      {
        src: "/images/GinecomastiyaPreparation/ginecomas24.jpg",
        alt: "Хірургічне втручання",
        width: 600,
        height: 400,
        title: "Втручання",
      },
    ],
  },
  {
    title: "Лікування гінекомастії: реабілітація",
    description:
      "Після хірургічного втручання, виконаного під загальною анестезією, пацієнт проводить у стаціонарі одну добу під контролем медичного персоналу. Імовірний дискомфорт в області грудей легко усувається знеболюючими.",
    images: [
      {
        src: "/images/GinecomastiyaPreparation/ginecomas22.jpg",
        alt: "Реабілітація після операції",
        width: 600,
        height: 400,
        title: "Реабілітація",
      },
      {
        src: "/images/GinecomastiyaPreparation/ginecomas21.jpg",
        alt: "Відновлення",
        width: 600,
        height: 400,
        title: "Відновлення",
      },
    ],
  },
]
