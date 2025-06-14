"use client"
import { useState } from "react"
import styles from "./AnalFissure.module.css"
import { AnalFissureGallery } from "./AnalFissureGallery"
import { SymptomsAnalFissureGallery } from "./SymptomsAnalFissureGallery"
import { TreatmentAnalFissureGallery } from "./TreatmentAnalFissureGallery"

interface AnalFissureProps {
  className?: string
}

export function AnalFissure({ className }: AnalFissureProps) {
  const [expandedSections, setExpandedSections] = useState({
    types: false,
    riskFactors: false,
    treatment: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text
    return text.slice(0, limit) + "..."
  }

  return (
    <div className={`${styles.pageWrapper} ${className || ""}`}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Анальна тріщина</h1>
        </div>

        {/* Вступний текст */}
        <section className={styles.introSection}>
          <div className={styles.introCard}>
            <h2 className={styles.subTitle}>
              <span className={styles.emoji}>✅</span>
              Анальна тріщина (тріщина заднього проходу)
            </h2>

            <p className={styles.text}>
              Анальна тріщина — це лінійний або овальний поздовжній розрив слизової оболонки анального каналу. Така рана
              або виразка зазвичай виникає спонтанно та є одним із найпоширеніших проктологічних захворювань,
              поступаючись за частотою лише геморою.
            </p>

            <h3 className={styles.listTitle}>
              <span className={styles.emoji}>✅</span>
              Основні ознаки:
            </h3>

            <ul className={styles.bulletList}>
              <li>Гострий, пекучий біль під час та після дефекації</li>
              <li>Незначна кількість крові у калі або на туалетному папері</li>
              <li>Дискомфорт, свербіж або спазм анального отвору</li>
            </ul>

            <p className={styles.text}>
              <span className={styles.emoji}>📌</span>
              Тріщина виникає внаслідок травмування слизової оболонки (наприклад, твердим калом при закрепах), а також
              при підвищеному м`язовому тонусі або запальних процесах.
            </p>

            <div className={styles.alertBox}>
              <p className={styles.alertText}>
                <span className={styles.emoji}>✅</span>
                Якщо вчасно не звернутися до лікаря, тріщина може перейти у хронічну форму, що значно ускладнює
                лікування.
              </p>
            </div>
          </div>
        </section>

        {/* Перша секція - Типи тріщин */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.textColumn}>
                <h2 className={styles.subTitle}>
                  <span className={styles.emoji}>✅</span>
                  За характером клінічного перебігу анальні тріщини поділяються на:
                </h2>

                <div className={styles.contentBlock}>
                  {expandedSections.types ? (
                    <div className={styles.expandedContent}>
                      <div className={styles.typeSection}>
                        <h3 className={styles.listTitle}>
                          <span className={styles.emoji}>✅</span>
                          Гострі тріщини
                        </h3>
                        <ul className={styles.bulletList}>
                          <li>Зазвичай виникають після епізоду закрепу або діареї.</li>
                          <li>Часто самостійно гояться при нормалізації дефекації.</li>
                          <li>
                            Безслідно зникають у 40–60% випадків після відновлення м`якого та регулярного випорожнення.
                          </li>
                        </ul>
                      </div>

                      <div className={styles.typeSection}>
                        <h3 className={styles.listTitle}>
                          <span className={styles.emoji}>🔁</span>
                          Хронічні тріщини
                        </h3>
                        <ul className={styles.bulletList}>
                          <li>Зберігаються понад один місяць.</li>
                          <li>Супроводжуються ознаками хронічного процесу:</li>
                        </ul>
                        <ul className={styles.nestedList}>
                          <li>ущільнені (каллезні) краї;</li>
                          <li>оголений м`яз внутрішнього сфінктера;</li>
                          <li>поява сторожового горбка;</li>
                          <li>гіпертрофована анальна бахромка.</li>
                        </ul>
                      </div>

                      <div className={styles.typeSection}>
                        <h3 className={styles.listTitle}>
                          <span className={styles.emoji}>🌀</span>
                          Механізм переходу у хронічну форму:
                        </h3>
                        <p className={styles.text}>Якщо гостра тріщина не загоїлася, запускається порочне коло:</p>
                        <div className={styles.arrowList}>
                          <div className={styles.arrowItem}>
                            <span className={styles.emoji}>➡️</span>
                            Біль під час дефекації викликає спазм внутрішнього анального сфінктера.
                          </div>
                          <div className={styles.arrowItem}>
                            <span className={styles.emoji}>➡️</span>
                            Через підвищений тиск тріщина ховається між складками анального каналу та погано очищується.
                          </div>
                          <div className={styles.arrowItem}>
                            <span className={styles.emoji}>➡️</span>
                            Це спричиняє запалення, посилення болю, ще більший спазм сфінктера — і загоєння стає
                            неможливим.
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className={styles.text}>
                      {truncateText(
                        "Гострі тріщини зазвичай виникають після епізоду закрепу або діареї. Часто самостійно гояться при нормалізації дефекації. Хронічні тріщини зберігаються понад один місяць та супроводжуються ознаками хронічного процесу...",
                        150
                      )}
                    </p>
                  )}
                </div>

                <button onClick={() => toggleSection("types")} className={styles.expandButton}>
                  {expandedSections.types ? (
                    <>
                      Згорнути <span className={styles.chevron}>▲</span>
                    </>
                  ) : (
                    <>
                      Розгорнути <span className={styles.chevron}>▼</span>
                    </>
                  )}
                </button>
              </div>

              <div className={styles.galleryColumn}>
                <AnalFissureGallery />
              </div>
            </div>
          </div>
        </section>

        {/* Друга секція - Фактори ризику */}
        <section className={styles.contentSection}>
          <div className={styles.contentCardAlt}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.textColumn}>
                <h2 className={styles.subTitle}>
                  <span className={styles.emoji}>⚠️</span>
                  Фактори ризику виникнення анальних тріщин
                </h2>

                <div className={styles.contentBlock}>
                  {expandedSections.riskFactors ? (
                    <div className={styles.expandedContent}>
                      <p className={styles.text}>
                        Анальні тріщини можуть з`явитися під впливом різноманітних чинників, зокрема:
                      </p>

                      <ul className={styles.bulletList}>
                        <li>
                          Малорухливий спосіб життя — спричиняє застійні процеси та порушення кровообігу в ділянці
                          прямої кишки.
                        </li>
                        <li>Захворювання шлунково-кишкового тракту</li>
                        <li>
                          Травматизація анального каналу, зокрема:
                          <ul className={styles.nestedList}>
                            <li>наслідки хронічних закрепів;</li>
                            <li>грубе введення сторонніх предметів;</li>
                            <li>ускладнення після медичних процедур.</li>
                          </ul>
                        </li>
                        <li>Геморой — сприяє розтягненню тканин та створенню тріщин.</li>
                        <li>
                          Тривалі спазми анального сфінктера, пов`язані з порушеннями в роботі центральної нервової
                          системи.
                        </li>
                        <li>
                          Анатомічні особливості — вроджені дефекти чи будова прямої кишки, що підвищують ризик
                          мікротравм.
                        </li>
                      </ul>

                      <h3 className={styles.subTitle}>
                        <span className={styles.emoji}>✅</span>
                        Симптоми анальної тріщини
                      </h3>
                      <p className={styles.text}>
                        Анальна тріщина може мати гострий або хронічний перебіг. Симптоматика залежить від стадії та
                        тривалості процесу.
                      </p>

                      <div className={styles.symptomsSection}>
                        <h4 className={styles.listTitle}>
                          <span className={styles.emoji}>🔴</span>
                          Симптоми гострої тріщини:
                        </h4>
                        <ul className={styles.bulletList}>
                          <li>яскраво-червоні кров`янисті виділення після дефекації;</li>
                          <li>різкий біль і ускладнене випорожнення;</li>
                          <li>спазми анального сфінктера, що посилюють біль і заважають загоєнню.</li>
                        </ul>
                      </div>

                      <div className={styles.symptomsSection}>
                        <h4 className={styles.listTitle}>
                          <span className={styles.emoji}>🔵</span>
                          Симптоми хронічної тріщини:
                        </h4>
                        <ul className={styles.bulletList}>
                          <li>тривалі ниючі болі в області ануса, особливо після сидіння;</li>
                          <li>закрепи, спричинені страхом перед болем під час дефекації;</li>
                          <li>повторювані кровотечі та гнійні виділення з прямої кишки.</li>
                        </ul>
                      </div>

                      <h3 className={styles.subTitle}>
                        <span className={styles.emoji}>⚠️</span>
                        Можливі ускладнення
                      </h3>
                      <p className={styles.text}>
                        Якщо вчасно не звернутися до проктолога, анальна тріщина може призвести до серйозних наслідків:
                      </p>
                      <ul className={styles.bulletList}>
                        <li>значні крововтрати через тривалі або рясні кровотечі;</li>
                        <li>нестерпний біль внаслідок хронічного спазму сфінктера;</li>
                        <li>розвиток запальних ускладнень: парапроктит, анальні свищі;</li>
                        <li>у чоловіків можливе ураження передміхурової залози — простатит.</li>
                      </ul>
                    </div>
                  ) : (
                    <p className={styles.text}>
                      {truncateText(
                        "Анальні тріщини можуть з'явитися під впливом різноманітних чинників, зокрема: малорухливий спосіб життя, захворювання шлунково-кишкового тракту, травматизація анального каналу...",
                        150
                      )}
                    </p>
                  )}
                </div>

                <button onClick={() => toggleSection("riskFactors")} className={styles.expandButton}>
                  {expandedSections.riskFactors ? (
                    <>
                      Згорнути <span className={styles.chevron}>▲</span>
                    </>
                  ) : (
                    <>
                      Розгорнути <span className={styles.chevron}>▼</span>
                    </>
                  )}
                </button>
              </div>

              <div className={styles.galleryColumn}>
                <SymptomsAnalFissureGallery />
              </div>
            </div>
          </div>
        </section>

        {/* Заголовок лікування */}
        <section className={styles.treatmentHeaderSection}>
          <div className={styles.treatmentHeader}>
            <h2 className={styles.subTitle}>Лікування анальної тріщини</h2>
            <p className={styles.text}>
              Анальна тріщина — це пошкодження слизової оболонки анального каналу, яке викликає біль, кровотечу та
              дискомфорт при дефекації. Залежно від форми та тривалості перебігу хвороби застосовується як консервативне
              (медикаментозне), так і хірургічне лікування.
            </p>
          </div>
        </section>

        {/* Третя секція - Лікування */}
        <section className={styles.contentSection}>
          <div className={styles.contentCardAlt}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.textColumn}>
                <div className={styles.contentBlock}>
                  {expandedSections.treatment ? (
                    <div className={styles.expandedContent}>
                      <div className={styles.treatmentSection}>
                        <h3 className={styles.listTitle}>
                          <span className={styles.emoji}>✅</span>
                          Консервативна терапія (при гострій формі):
                        </h3>
                        <p className={styles.text}>Комплексне лікування включає:</p>
                        <ul className={styles.bulletList}>
                          <li>Очищувальні клізми та проносні препарати — полегшують процес дефекації</li>
                          <li>Спазмолітики — знімають напруження анального сфінктера</li>
                          <li>
                            Знеболювальні та загоювальні свічки — сприяють швидкому зменшенню болю та регенерації тканин
                          </li>
                        </ul>

                        <p className={styles.text}>
                          Раціон харчування також відіграє важливу роль. Рекомендується виключити:
                        </p>
                        <ul className={styles.bulletList}>
                          <li>
                            <span className={styles.emoji}>🚫</span>
                            алкоголь
                          </li>
                          <li>
                            <span className={styles.emoji}>🚫</span>
                            гострі спеції
                          </li>
                          <li>
                            <span className={styles.emoji}>🚫</span>
                            копченості
                          </li>
                          <li>
                            <span className={styles.emoji}>🚫</span>
                            продукти, що подразнюють кишечник
                          </li>
                        </ul>

                        <p className={styles.text}>
                          Завдяки правильному підходу в багатьох випадках вдається досягти повного загоєння без
                          операції.
                        </p>
                      </div>

                      <div className={styles.treatmentSection}>
                        <h3 className={styles.listTitle}>
                          <span className={styles.emoji}>✅</span>
                          Хірургічне лікування (при хронічній тріщині):
                        </h3>
                        <p className={styles.text}>
                          Якщо тріщина набуває хронічної форми, медикаментозна терапія зазвичай малоефективна. У таких
                          випадках рекомендовано хірургічне втручання:
                        </p>
                        <ul className={styles.bulletList}>
                          <li>Класичні операції</li>
                          <li>Лазерне видалення тріщини — сучасний, малотравматичний метод</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <p className={styles.text}>
                      {truncateText(
                        "Консервативна терапія (при гострій формі): Комплексне лікування включає очищувальні клізми та проносні препарати, спазмолітики, знеболювальні та загоювальні свічки...",
                        150
                      )}
                    </p>
                  )}
                </div>

                <button onClick={() => toggleSection("treatment")} className={styles.expandButton}>
                  {expandedSections.treatment ? (
                    <>
                      Згорнути <span className={styles.chevron}>▲</span>
                    </>
                  ) : (
                    <>
                      Розгорнути <span className={styles.chevron}>▼</span>
                    </>
                  )}
                </button>
              </div>

              <div className={styles.galleryColumn}>
                <TreatmentAnalFissureGallery />
              </div>
            </div>
          </div>
        </section>

        {/* Заключна частина */}
        <section className={styles.conclusionSection}>
          <div className={styles.conclusionCard}>
            <h2 className={styles.subTitle}>Індивідуальний підхід до кожного пацієнта</h2>
            <p className={styles.text}>
              Наші хірурги підбирають оптимальний метод лікування, виходячи зі стадії захворювання, симптомів і
              загального стану здоров`я. Ми пропонуємо декілька варіантів терапії з детальним поясненням переваг і
              ризиків кожного — щоб ви могли зробити усвідомлений вибір.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AnalFissure
