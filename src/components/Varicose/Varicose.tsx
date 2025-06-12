"use client"
import { useState } from "react"
import styles from "./Varicose.module.css"
import { VaricoseGallery } from "./VaricoseGallery"
import { SymptomsVaricoseGallery } from "./SymptomsVaricoseGallery"
import { SurgeryVaricoseGallery } from "./SurgeryVaricoseGallery"

// Кольорова схема проєкту (однакова для світлої та темної теми)
const colors = {
  primary: "#e8f5e8", // Світло-зелений
  secondary: "#f0f9ff", // Світло-блакитний
  accent: "#52a40e", // Зелений акцент
  text: "#2d3748", // Темний текст
}

export function Varicose() {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean
  }>({
    causes: false,
    symptoms: false,
    stages: false,
    treatment: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className={styles.pageWrapper} style={{ backgroundColor: colors.primary }}>
      <div className={styles.container}>
        {/* Секція 1 - Причини та симптоми (primary фон) */}
        <div className={styles.fullWidthBackground} style={{ backgroundColor: colors.primary }}>
          <div className={styles.contentContainer}>
            <div className={styles.sectionContainer}>
              <div className={styles.textSection}>
                <h3 className={styles.sectionTitle} style={{ color: colors.accent }}>
                  ✅ Причини розвитку варикозу:
                </h3>
                <div className={styles.expandableText}>
                  {expandedSections.causes ? (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <ul className={styles.bulletList}>
                        <li className={styles.bulletItem}>Пошкодження клапанного апарату вен — головна причина</li>
                        <li className={styles.bulletItem}>Вагітність</li>
                        <li className={styles.bulletItem}>Спадковість</li>
                        <li className={styles.bulletItem}>Малорухливий спосіб життя</li>
                        <li className={styles.bulletItem}>Ожиріння</li>
                        <li className={styles.bulletItem}>Підвищений внутрішньочеревний тиск</li>
                        <li className={styles.bulletItem}>Вік</li>
                        <li className={styles.bulletItem}>Тромбози</li>
                        <li className={styles.bulletItem}>Плоскостопість, вальгусна деформація</li>
                      </ul>
                    </div>
                  ) : (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <ul className={styles.bulletList}>
                        <li className={styles.bulletItem}>Пошкодження клапанного апарату вен — головна причина</li>
                        <li className={styles.bulletItem}>Вагітність</li>
                        <li className={styles.bulletItem}>Спадковість</li>
                      </ul>
                    </div>
                  )}
                  <button
                    className={styles.expandButton}
                    style={{ color: colors.accent }}
                    onClick={() => toggleSection("causes")}
                  >
                    {expandedSections.causes ? "Згорнути" : "Розгорнути"}
                  </button>
                </div>
                <h3 className={styles.sectionTitle} style={{ color: colors.accent }}>
                  ✅ Симптоми, які не варто ігнорувати:
                </h3>
                <div className={styles.expandableText}>
                  {expandedSections.symptoms ? (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <ul className={styles.bulletList}>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Біль тупого характеру</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Відчуття розпирання в ногах</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>
                          Набряки та відчуття «важкості»
                        </li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Помітні розширені вени</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Свербіж, печіння, «мурашки»</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Синдром неспокійних ніг 🛌</li>
                      </ul>
                      <p className={styles.warningText}>
                        ❗Якщо не звернути увагу на симптоми та не розпочати лікування, хвороба може призвести до
                        серйозних ускладнень.
                      </p>
                    </div>
                  ) : (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <ul className={styles.bulletList}>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Біль тупого характеру</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Відчуття розпирання в ногах</li>
                      </ul>
                    </div>
                  )}
                  <button
                    className={styles.expandButton}
                    style={{ color: colors.accent }}
                    onClick={() => toggleSection("symptoms")}
                  >
                    {expandedSections.symptoms ? "Згорнути" : "Розгорнути"}
                  </button>
                </div>
              </div>
              <div className={styles.gallerySection}>
                <VaricoseGallery />
              </div>
            </div>
          </div>
        </div>

        {/* Декоративний розділювач */}
        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
          <div className={styles.dividerDot} style={{ backgroundColor: colors.accent }}>
            <div className={styles.dividerDotInner} style={{ backgroundColor: colors.secondary }}></div>
          </div>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Секція 2 - Стадії (secondary фон) */}
        <div className={styles.fullWidthBackground} style={{ backgroundColor: colors.secondary }}>
          <div className={styles.contentContainer}>
            <div className={styles.sectionContainer}>
              <div className={styles.textSection}>
                <h3 className={styles.sectionTitle} style={{ color: colors.accent }}>
                  ✅ Стадії варикозної хвороби (класифікація CEAP):
                </h3>
                <div className={styles.expandableText}>
                  {expandedSections.stages ? (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <table className={styles.stageTable}>
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: colors.accent, color: "#ffffff" }}>Стадія</th>
                            <th style={{ backgroundColor: colors.accent, color: "#ffffff" }}>Опис</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>С0</td>
                            <td>Біль, важкість, свербіж — без зовнішніх проявів</td>
                          </tr>
                          <tr style={{ backgroundColor: colors.primary }}>
                            <td>С1</td>
                            <td>Поява судинних зірочок та ретикулярних вен</td>
                          </tr>
                          <tr>
                            <td>С2</td>
                            <td>Видимі варикозно розширені вени</td>
                          </tr>
                          <tr style={{ backgroundColor: colors.primary }}>
                            <td>С3</td>
                            <td>З`являється набряк</td>
                          </tr>
                          <tr>
                            <td>С4</td>
                            <td>Зміни шкіри (пігментація, екзема)</td>
                          </tr>
                          <tr style={{ backgroundColor: colors.primary }}>
                            <td>С5</td>
                            <td>Заживлені виразки</td>
                          </tr>
                          <tr>
                            <td>С6</td>
                            <td>Відкриті трофічні виразки ⚠️</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className={styles.warningText}>⚠️ Ускладнення</p>
                      <p>
                        🩸 Найнебезпечніше — утворення тромбів. Наявність варикозу збільшує ризик тромбозу у 20 разів.
                      </p>
                    </div>
                  ) : (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <table className={styles.stageTable}>
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: colors.accent, color: "#ffffff" }}>Стадія</th>
                            <th style={{ backgroundColor: colors.accent, color: "#ffffff" }}>Опис</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>С0</td>
                            <td>Біль, важкість, свербіж — без зовнішніх проявів</td>
                          </tr>
                          <tr style={{ backgroundColor: colors.primary }}>
                            <td>С1</td>
                            <td>Поява судинних зірочок та ретикулярних вен</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <button
                    className={styles.expandButton}
                    style={{ color: colors.accent }}
                    onClick={() => toggleSection("stages")}
                  >
                    {expandedSections.stages ? "Згорнути" : "Розгорнути"}
                  </button>
                </div>
              </div>
              <div className={styles.gallerySection}>
                <SymptomsVaricoseGallery />
              </div>
            </div>
          </div>
        </div>

        {/* Декоративний розділювач */}
        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
          <div className={styles.dividerDot} style={{ backgroundColor: colors.accent }}>
            <div className={styles.dividerDotInner} style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Секція 3 - Важливість лікування (primary фон) */}
        <div className={styles.fullWidthBackground} style={{ backgroundColor: colors.primary }}>
          <div className={styles.contentContainer}>
            <div className={styles.compactSection}>
              <div className={styles.highlightBox} style={{ borderColor: colors.accent }}>
                <div className={styles.highlightIcon} style={{ color: colors.accent }}>
                  💡
                </div>
                <p className={styles.highlightText} style={{ color: colors.text }}>
                  <strong style={{ color: colors.accent }}>Чому важливо лікувати варикоз:</strong> Лікування має не лише
                  медичні, але й естетичні показання. Особливо це турбує жінок, які хочуть повернути ногам красу Не
                  відкладайте звернення до лікаря — сучасна флебологія дозволяє лікувати варикоз швидко, ефективно та
                  безболісно.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Декоративний розділювач */}
        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
          <div className={styles.dividerDot} style={{ backgroundColor: colors.accent }}>
            <div className={styles.dividerDotInner} style={{ backgroundColor: colors.secondary }}></div>
          </div>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Секція 4 - Методи лікування (secondary фон) */}
        <div className={styles.fullWidthBackground} style={{ backgroundColor: colors.secondary }}>
          <div className={styles.contentContainer}>
            <div className={styles.sectionContainer}>
              <div className={styles.textSection}>
                <h3 className={styles.sectionTitle} style={{ color: colors.accent }}>
                  ✅ Сучасні методи лікування:
                </h3>
                <div className={styles.expandableText}>
                  {expandedSections.treatment ? (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <p>Сучасні методи лікування включають:</p>
                      <ul className={styles.bulletList}>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Склеротерапія</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Лазерне лікування</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>
                          Мінімально інвазивна хірургія
                        </li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Компресійна терапія</li>
                      </ul>
                      <h4 className={styles.sectionTitle} style={{ color: colors.accent }}>
                        ✅ Лікування внутрішнього варикозу
                      </h4>
                      <p>
                        Сучасна медицина при внутрішньому варикозному розширенні вен найчастіше використовує
                        малоінвазивні методи або хірургічне видалення уражених вен.
                      </p>
                      <p className={styles.warningText}>
                        ❗Однак варто пам`ятати: такі процедури усувають лише наслідки, а не причину захворювання.
                      </p>
                      <h4 className={styles.sectionTitle} style={{ color: colors.accent }}>
                        ⚠️ Чому важливий комплексний підхід?
                      </h4>
                      <ul className={styles.bulletList}>
                        <li className={styles.bulletItem}>
                          Існує ризик рецидиву, якщо не відновити нормальний венозний кровотік.
                        </li>
                        <li className={styles.bulletItem}>
                          Лише комплексна стратегія лікування зменшує ймовірність повторного розвитку варикозу.
                        </li>
                      </ul>
                      <h4 className={styles.sectionTitle} style={{ color: colors.accent }}>
                        ✅ Найпоширеніші методи лікування:
                      </h4>
                      <p className={styles.importantText} style={{ color: colors.accent }}>
                        🔹 Склеротерапія / пінна склеротерапія
                      </p>
                      <p>У вену вводиться склерозант, що «запечатує» її зсередини.</p>
                      <p className={styles.importantText} style={{ color: colors.accent }}>
                        🔹 Лазерне лікування
                      </p>
                      <p>Лазерний промінь нагріває стінки вени, змушуючи її закритися.</p>
                      <p className={styles.importantText} style={{ color: colors.accent }}>
                        🔹 Перев`язка та видалення вен
                      </p>
                      <p>Уражені судини видаляються хірургічним шляхом.</p>
                    </div>
                  ) : (
                    <div className={styles.textContent} style={{ color: colors.text }}>
                      <p>Сучасні методи лікування включають:</p>
                      <ul className={styles.bulletList}>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Склеротерапія</li>
                        <li className={`${styles.bulletItem} ${styles.bulletItemBlue}`}>Лазерне лікування</li>
                      </ul>
                    </div>
                  )}
                  <button
                    className={styles.expandButton}
                    style={{ color: colors.accent }}
                    onClick={() => toggleSection("treatment")}
                  >
                    {expandedSections.treatment ? "Згорнути" : "Розгорнути"}
                  </button>
                </div>
              </div>
              <div className={styles.gallerySection}>
                <SurgeryVaricoseGallery />
              </div>
            </div>
          </div>
        </div>

        {/* Декоративний розділювач */}
        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
          <div className={styles.dividerDot} style={{ backgroundColor: colors.accent }}>
            <div className={styles.dividerDotInner} style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className={styles.dividerLine} style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Секція 5 - Індивідуальний підхід (primary фон) */}
        <div className={styles.fullWidthBackground} style={{ backgroundColor: colors.primary }}>
          <div className={styles.contentContainer}>
            <div className={styles.compactSection}>
              <div className={styles.finalSection}>
                <h3 className={styles.finalTitle} style={{ color: colors.accent }}>
                  Індивідуальний підхід до кожного пацієнта
                </h3>
                <div className={styles.finalContent} style={{ color: colors.text }}>
                  <p>
                    Наші хірурги підбирають оптимальний метод лікування, виходячи зі стадії захворювання, симптомів і
                    загального стану здоров`я. Ми пропонуємо декілька варіантів терапії з детальним поясненням переваг і
                    ризиків кожного — щоб ви могли зробити усвідомлений вибір.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
