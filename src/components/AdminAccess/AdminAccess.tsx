"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function AdminAccess() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(
        "Натиснута клавіша:",
        event.key,
        "Code:",
        event.code,
        "Ctrl:",
        event.ctrlKey,
        "Shift:",
        event.shiftKey,
        "Alt:",
        event.altKey
      )

      // Використовуємо event.code замість event.key для незалежності від розкладки
      // Ctrl + Alt + A (працює з будь-якою розкладкою)
      if (event.ctrlKey && event.altKey && event.code === "KeyA") {
        event.preventDefault()
        console.log("🚀 Перехід до адмін панелі через Ctrl+Alt+A...")
        router.push("/admin/questions")
      }

      // F10 (функціональна клавіша)
      if (event.code === "F10") {
        event.preventDefault()
        console.log("🚀 Перехід до адмін панелі через F10...")
        router.push("/admin/questions")
      }

      // Ctrl + Shift + Q (працює з будь-якою розкладкою)
      if (event.ctrlKey && event.shiftKey && event.code === "KeyQ") {
        event.preventDefault()
        console.log("🚀 Перехід до адмін панелі через Ctrl+Shift+Q...")
        router.push("/admin/questions")
      }

      // Alt + F12 (дуже рідко використовується)
      if (event.altKey && event.code === "F12") {
        event.preventDefault()
        console.log("🚀 Перехід до адмін панелі через Alt+F12...")
        router.push("/admin/questions")
      }

      // Додаткова комбінація для української розкладки
      // Ctrl + Alt + Ф (якщо хтось натискає на українській)
      if (event.ctrlKey && event.altKey && (event.key === "ф" || event.key === "a")) {
        event.preventDefault()
        console.log("🚀 Перехід до адмін панелі через Ctrl+Alt+Ф...")
        router.push("/admin/questions")
      }
    }

    console.log("AdminAccess компонент завантажений з підтримкою української розкладки")
    document.addEventListener("keydown", handleKeyPress)

    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [router])

  return null // Компонент невидимий
}
