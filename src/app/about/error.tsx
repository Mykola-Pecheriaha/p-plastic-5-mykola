"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#e8f5e8" }}>
      <div className="max-w-md mx-auto text-center p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d3748" }}>
            Щось пішло не так!
          </h2>
          <p className="mb-4" style={{ color: "#2d3748" }}>
            Виникла помилка при завантаженні сторінки про лікаря.
          </p>
        </div>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-lg font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#52a40e" }}
        >
          Спробувати знову
        </button>
      </div>
    </div>
  )
}
