"use client"

import { useState, useEffect } from "react"
import { getAllQuestions, updateQuestionStatus, deleteQuestion } from "../../lib/actions/actions"
import styles from "./AdminQuestions.module.css"

interface QuestionFormData {
  id: string
  name: string
  email: string
  phone?: string
  question: string
  createdAt: Date
  status: "new" | "read" | "replied"
  type?: "question" | "consultation"
}

export function AdminQuestions() {
  const [questions, setQuestions] = useState<QuestionFormData[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "questions" | "consultations" | "new" | "read" | "replied">("all")

  useEffect(() => {
    console.log("AdminQuestions компонент завантажений")
    loadQuestions()
  }, [])

  const loadQuestions = async () => {
    try {
      console.log("Завантаження запитань...")
      const data = await getAllQuestions()
      console.log("Отримані запитання:", data)
      setQuestions(data)
    } catch (error) {
      console.error("Помилка завантаження запитань:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: string, status: "new" | "read" | "replied") => {
    try {
      await updateQuestionStatus(id, status)
      await loadQuestions()
    } catch (error) {
      console.error("Помилка оновлення статусу:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Ви впевнені, що хочете видалити це запитання?")) {
      try {
        await deleteQuestion(id)
        await loadQuestions()
      } catch (error) {
        console.error("Помилка видалення:", error)
      }
    }
  }

  const filteredQuestions = questions.filter(q => {
    if (filter === "all") return true
    if (filter === "questions") return q.type === "question"
    if (filter === "consultations") return q.type === "consultation"
    return q.status === filter
  })

  const getStatusBadge = (status: string) => {
    const badges = {
      new: { text: "Нове", class: styles.statusNew },
      read: { text: "Прочитано", class: styles.statusRead },
      replied: { text: "Відповіли", class: styles.statusReplied },
    }
    return badges[status as keyof typeof badges] || badges.new
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Завантаження запитань...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.icon}>🩺</span>
          Адмін панель - Запитання пацієнтів
        </h1>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{questions.length}</span>
            <span className={styles.statLabel}>Всього</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{questions.filter(q => q.status === "new").length}</span>
            <span className={styles.statLabel}>Нових</span>
          </div>
        </div>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
          onClick={() => setFilter("all")}
        >
          Всі ({questions.length})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "new" ? styles.active : ""}`}
          onClick={() => setFilter("new")}
        >
          Нові ({questions.filter(q => q.status === "new").length})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "read" ? styles.active : ""}`}
          onClick={() => setFilter("read")}
        >
          Прочитані ({questions.filter(q => q.status === "read").length})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "replied" ? styles.active : ""}`}
          onClick={() => setFilter("replied")}
        >
          Відповіли ({questions.filter(q => q.status === "replied").length})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "questions" ? styles.active : ""}`}
          onClick={() => setFilter("questions")}
        >
          Питання ({questions.filter(q => q.type === "question").length})
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "consultations" ? styles.active : ""}`}
          onClick={() => setFilter("consultations")}
        >
          Консультації ({questions.filter(q => q.type === "consultation").length})
        </button>
      </div>

      <div className={styles.debugInfo}>
        <p>Всього запитань: {questions.length}</p>
        <button
          onClick={loadQuestions}
          style={{
            padding: "10px",
            margin: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          🔄 Оновити зараз
        </button>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>📭</span>
          <h3>Запитань поки немає</h3>
          <p>Коли пацієнти надішлють запитання, вони з`являться тут</p>
        </div>
      ) : (
        <div className={styles.questionsList}>
          {filteredQuestions.map(question => (
            <div key={question.id} className={styles.questionCard}>
              <div className={styles.questionHeader}>
                <div className={styles.patientInfo}>
                  <h3 className={styles.patientName}>
                    <span className={styles.patientIcon}>{question.type === "consultation" ? "📅" : "👤"}</span>
                    {question.name}
                    {question.type === "consultation" && <span className={styles.consultationBadge}>Консультація</span>}
                  </h3>
                  <div className={styles.contactInfo}>
                    <a href={`mailto:${question.email}`} className={styles.email}>
                      📧 {question.email}
                    </a>
                    {question.phone && (
                      <a href={`tel:${question.phone}`} className={styles.phone}>
                        📞 {question.phone}
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.questionMeta}>
                  <span className={`${styles.statusBadge} ${getStatusBadge(question.status).class}`}>
                    {getStatusBadge(question.status).text}
                  </span>
                  <span className={styles.date}>{new Date(question.createdAt).toLocaleString("uk-UA")}</span>
                </div>
              </div>

              <div className={styles.questionContent}>
                <h4 className={styles.questionTitle}>💬 Запитання:</h4>
                <p className={styles.questionText}>{question.question}</p>
              </div>

              <div className={styles.questionActions}>
                <select
                  value={question.status}
                  onChange={e => handleStatusChange(question.id, e.target.value as "new" | "read" | "replied")}
                  className={styles.statusSelect}
                >
                  <option value="new">Нове</option>
                  <option value="read">Прочитано</option>
                  <option value="replied">Відповіли</option>
                </select>

                <a
                  href={`mailto:${question.email}?subject=Відповідь на ваше запитання&body=Шановний(а) ${question.name},%0D%0A%0D%0AДякуємо за ваше запитання:%0D%0A"${question.question}"%0D%0A%0D%0A`}
                  className={styles.replyBtn}
                >
                  📧 Відповісти
                </a>

                <button onClick={() => handleDelete(question.id)} className={styles.deleteBtn}>
                  🗑️ Видалити
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
