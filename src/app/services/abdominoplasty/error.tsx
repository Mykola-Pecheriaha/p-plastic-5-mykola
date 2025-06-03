"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        backgroundColor: "#e8f5e8",
        color: "#2d3748",
        padding: "20px",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "8px",
          backgroundColor: "#f0f9ff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h2 style={{ color: "#52a40e", marginBottom: "20px" }}>Щось пішло не так!</h2>
        <p style={{ marginBottom: "20px" }}>{error.message || "Виникла помилка при завантаженні сторінки"}</p>
        <button
          onClick={reset}
          style={{
            backgroundColor: "#52a40e",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Спробувати знову
        </button>
      </div>
    </div>
  )
}
