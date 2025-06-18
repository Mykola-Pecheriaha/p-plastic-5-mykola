"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error("Services page error:", error) // Використовуємо error для логування

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Щось пішло не так!</h2>
      <p className="text-gray-600 mb-4">Виникла помилка при завантаженні сторінки послуг.</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Спробувати знову
      </button>
    </div>
  )
}
