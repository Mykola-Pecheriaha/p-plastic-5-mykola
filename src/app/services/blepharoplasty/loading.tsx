export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#e8f5e8" }}>
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-16 w-16 border-b-4 mx-auto mb-4"
          style={{ borderColor: "#52a40e" }}
        ></div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: "#2d3748" }}>
          Завантаження...
        </h2>
        <p className="opacity-70" style={{ color: "#2d3748" }}>
          Підготовка інформації про блефаропластику
        </p>
      </div>
    </div>
  )
}
