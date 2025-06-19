"use client"

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#52a40e", marginBottom: "1rem" }}>Щось пішло не так!</h2>
      <p style={{ marginBottom: "2rem", color: "#2d3748" }}>Не вдалося завантажити сторінку послуг обличчя.</p>
      <button
        onClick={reset}
        style={{
          backgroundColor: "#52a40e",
          color: "white",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        Спробувати знову
      </button>
    </div>
  )
}
