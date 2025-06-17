export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#e8f5e8" }}>
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: "#52a40e" }}></div>
        <p className="text-lg font-medium" style={{ color: "#2d3748" }}>
          Завантаження інформації про лікаря...
        </p>
      </div>
    </div>
  )
}
