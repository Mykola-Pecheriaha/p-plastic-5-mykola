"use client"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f5e8 0%, #f0f9ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
        }}
      >
        <h2
          style={{
            color: "#dc2626",
            fontSize: "1.8rem",
            marginBottom: "20px",
          }}
        >
          ⚠️ Помилка завантаження
        </h2>
        <p
          style={{
            color: "#2d3748",
            marginBottom: "20px",
          }}
        >
          Виникла помилка при завантаженні сторінки ліпосакції
        </p>
        <button
          onClick={reset}
          style={{
            backgroundColor: "#52a40e",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = "#3d7a0a"
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = "#52a40e"
          }}
        >
          Спробувати знову
        </button>
      </div>
    </div>
  )
}
