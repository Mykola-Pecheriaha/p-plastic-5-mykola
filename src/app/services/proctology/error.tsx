"use client"

import { useEffect } from "react"
import styles from "./error.module.css"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Proctology page error:", error)
  }, [error])

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>⚠️</div>
        <h2 className={styles.errorTitle}>Щось пішло не так</h2>
        <p className={styles.errorDescription}>
          Виникла помилка при завантаженні сторінки проктології. Спробуйте оновити сторінку або зверніться до підтримки.
        </p>
        <div className={styles.errorActions}>
          <button onClick={reset} className={styles.retryButton}>
            Спробувати знову
          </button>
          <button onClick={() => (window.location.href = "/")} className={styles.homeButton}>
            На головну
          </button>
        </div>
        {error.digest && <p className={styles.errorDigest}>Код помилки: {error.digest}</p>}
      </div>
    </div>
  )
}
