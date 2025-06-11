"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#e8f5e8" }}>
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl mb-6" style={{ color: "#52a40e" }}>
          ⚠️
        </div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#2d3748" }}>
          Щось пішло не так!
        </h2>
        <p className="mb-6 opacity-80" style={{ color: "#2d3748" }}>
          Виникла помилка при завантаженні сторінки герніотомії. Спробуйте оновити сторінку.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#52a40e" }}
        >
          Спробувати знову
        </button>
      </div>
    </div>
  )
}
