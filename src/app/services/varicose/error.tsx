"use client"

import { useEffect } from "react"
import styles from "./error.module.css"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Varicose page error:", error)
  }, [error])

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>⚠️</div>
        <h2 className={styles.errorTitle}>Щось пішло не так!</h2>
        <p className={styles.errorDescription}>
          Виникла помилка при завантаженні сторінки лікування варикозного розширення вен.
        </p>
        <div className={styles.errorActions}>
          <button className={styles.retryButton} onClick={() => reset()}>
            Спробувати знову
          </button>
          <button className={styles.homeButton} onClick={() => (window.location.href = "/")}>
            На головну
          </button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <details className={styles.errorDetails}>
            <summary>Деталі помилки (тільки для розробки)</summary>
            <pre className={styles.errorMessage}>{error.message}</pre>
          </details>
        )}
      </div>
    </div>
  )
}
