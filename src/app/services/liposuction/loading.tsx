"use client"

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f5e8 0%, #f0f9ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "#52a40e",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "4px solid #e8f5e8",
            borderTop: "4px solid #52a40e",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px",
          }}
        />
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>Завантаження сторінки ліпосакції...</p>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  )
}
