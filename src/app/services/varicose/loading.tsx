import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner}></div>
        <h2 className={styles.loadingTitle}>Завантаження...</h2>
        <p className={styles.loadingText}>Підготовуємо інформацію про лікування варикозного розширення вен</p>
      </div>
    </div>
  )
}
