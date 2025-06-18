"use client"

interface TeamErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function TeamError({ error, reset }: TeamErrorProps) {
  console.error("Team page error:", error)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Щось пішло не так!</h2>
      <p className="text-gray-600 mb-4 text-center">Виникла помилка при завантаженні сторінки команди.</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Спробувати знову
      </button>
    </div>
  )
}
