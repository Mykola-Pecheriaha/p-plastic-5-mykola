export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e8f5e8]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#52a40e] mx-auto mb-4"></div>
        <p className="text-[#2d3748] font-medium">Завантаження сторінки герніотомії...</p>
      </div>
    </div>
  )
}
