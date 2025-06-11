"use client"

import { useMemo } from "react"

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  text: string
}

export function useThemeColors(): ThemeColors {
  const colors = useMemo(
    () => ({
      primary: "#e8f5e8", // Світло-зелений
      secondary: "#f0f9ff", // Світло-блакитний
      accent: "#52a40e", // Зелений акцент
      text: "#2d3748", // Темний текст
    }),
    []
  )

  return colors
}
