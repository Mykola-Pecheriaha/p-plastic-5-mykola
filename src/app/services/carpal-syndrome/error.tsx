"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-[#2d3748] mb-4">Щось пішло не так!</h2>
        <p className="text-[#2d3748] mb-6">
          Виникла помилка при завантаженні сторінки: {error.message || "Невідома помилка"}
        </p>
        {process.env.NODE_ENV === "development" && error.digest && (
          <p className="text-sm text-gray-500 mb-4">
            <code>Код помилки: {error.digest}</code>
          </p>
        )}
        <button
          onClick={reset}
          className="bg-[#52a40e] text-white px-6 py-2 rounded-lg hover:bg-[#4a9209] transition-colors"
        >
          Спробувати знову
        </button>
      </div>
    </div>
  )
}
