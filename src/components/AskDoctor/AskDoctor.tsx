"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { useActionState } from "react"
import styles from "./AskDoctor.module.css"
import { submitQuestion } from "@/lib/actions/actions"

interface AskDoctorProps {
  backgroundColor?: string
  className?: string
}

export function AskDoctor({ backgroundColor = "#e8f5e8", className }: AskDoctorProps) {
  const [state, action, isPending] = useActionState(submitQuestion, null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  // Очищуємо форму після успішної відправки
  useEffect(() => {
    if (state?.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        question: "",
      })
    }
  }, [state?.success])

  return (
    <section className={`${styles.askDoctorSection} ${className || ""}`} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Запитати лікаря</h1>
          <p className={styles.subtitle}>
            Маєте питання про пластичну хірургію? Залиште своє запитання, і лікар обов`язково відповість вам
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Ліва частина - інформація */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <span className={styles.emoji}>👨‍⚕️</span>
                Професійна консультація
              </h3>
              <p className={styles.infoText}>
                Отримайте відповідь від досвідченого пластичного хірурга з багаторічною практикою
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <span className={styles.emoji}>⏰</span>
                Швидка відповідь
              </h3>
              <p className={styles.infoText}>Зазвичай відповідаємо протягом 24 годин у робочі дні</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <span className={styles.emoji}>🔒</span>
                Конфіденційність
              </h3>
              <p className={styles.infoText}>Ваші персональні дані та запитання залишаються конфіденційними</p>
            </div>

            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Або зв`яжіться напряму:</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span className={styles.contactText}>+38 (050) 7575411</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span className={styles.contactText}>pecheryag1968@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Права частина - форма */}
          <div className={styles.formColumn}>
            <form action={action} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Ім`я та прізвище <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="Введіть ваше ім'я"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="+38 (050) 123-45-67"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="question" className={styles.label}>
                  Ваше запитання <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  required
                  placeholder="Опишіть детально ваше запитання..."
                  rows={6}
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={isPending}>
                {isPending ? (
                  <>
                    <span className={styles.spinner}></span>
                    Відправляємо...
                  </>
                ) : (
                  <>
                    <span className={styles.buttonIcon}>📤</span>
                    Відправити запитання
                  </>
                )}
              </button>

              {/* Повідомлення про результат */}
              {state?.success && (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✅</span>
                  {state.message}
                </div>
              )}

              {!state?.success && state?.message && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>❌</span>
                  {state.message}
                </div>
              )}

              <p className={styles.disclaimer}>
                <span className={styles.disclaimerIcon}>ℹ️</span>
                Відправляючи форму, ви погоджуєтеся з обробкою персональних даних та політикою конфіденційності
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AskDoctor
