import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Contacts from "../components/Сontacts/Сontacts"
import Header from "../components/Header/Header"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import Footer from "../components/Footer/Footer"
import { AdminAccess } from "../components/AdminAccess/AdminAccess"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "Dr. Микола Печеряга – Пластичний хірург | plastic-p.com",
  description: "Офіційний сайт пластичного хірурга Миколи Печеряги. Консультації, операції, портфоліо, відгуки.",
  keywords:
    "пластичний хірург Чернівці, Печеряга Микола, пластика в Чернівцях, збільшення грудей, підтяжка грудей, блефаропластика, ринопластика, ліпосакція, контурна пластика, видалення горба шиї, пластика живота, хірург пластик, пластичні операції Україна",

  authors: [{ name: "Dr. Микола Печеряга" }],
  creator: "Dr. Микола Печеряга",
  metadataBase: new URL("https://www.plastic-p.com"),
  openGraph: {
    title: "Dr. Микола Печеряга – Пластичний хірург | plastic-p.com",
    description:
      "Пластичний хірург з великим досвідом. Операції обличчя, тіла, грудей. Фото робіт, відгуки, консультації.",
    url: "https://www.plastic-p.com",
    siteName: "Plastic P",
    locale: "uk_UA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {/* 👈 Фіксовані елементи зверху */}
            <Contacts />
            <Header />
            <Breadcrumbs />

            {/* 👈 Основний контент */}
            <main className="flex-1">{children}</main>

            {/* 👈 Футер знизу */}
            <Footer />
          </div>
        </ThemeProvider>
        <AdminAccess />
      </body>
    </html>
  )
}
