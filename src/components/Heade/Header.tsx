"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle"

const navItems = [
  { name: "Головна", path: "/" },

  {
    name: "Послуги",
    path: "/services", // 👈 Основне посилання на загальну сторінку послуг
    hasSubmenu: true,
    submenu: [
      {
        category: "Пластика обличчя",
        path: "/services/face",
        services: [
          { name: "Підтяжка обличчя та шиї", path: "/services/facelift" },
          { name: "Блефаропластика", path: "/services/blepharoplasty" },
          { name: "Пластика підборіддя", path: "/services/chin-surgery" },
          { name: "Корекція клаповухості", path: "/services/ear-correction" },
          { name: "Пластика дольки вуха", path: "/services/earlobe-surgery" },
        ],
      },
      {
        category: "Пластика грудей",
        path: "/services/breast",
        services: [
          { name: "Збільшення грудей", path: "/services/breast-augmentation" },
          { name: "Видалення імплантів", path: "/services/implant-removal" },
          { name: "Підтяжка грудей", path: "/services/breast-lift" },
          { name: "Корекція соска та ареоли", path: "/services/nipple-correction" },
          { name: "Заміна імплантів грудей", path: "/services/implant-replacement" },
          { name: "Гінекомастія", path: "/services/gynecomastia" },
        ],
      },
      {
        category: "Пластика тіла",
        path: "/services/body",
        services: [
          { name: "Абдомінопластика", path: "/services/abdominoplasty" },
          { name: "Ліпосакція", path: "/services/liposuction" },
          { name: "Пластика ніг", path: "/services/leg-surgery" },
          { name: "Видалення шийного горба", path: "/services/neck-hump-removal" },
          { name: "Збільшення сідниць", path: "/services/buttock-augmentation" },
        ],
      },
      {
        category: "Загальна хірургія",
        path: "/services/general",
        services: [
          { name: "Видалення пухлин", path: "/services/tumor-removal" },
          { name: "Карпальний канал", path: "/services/carpal-tunnel" },
          { name: "Видалення гриж", path: "/services/hernia-removal" },
        ],
      },
    ],
  },
  { name: "Про нас", path: "/about" },
  { name: "Портфоліо", path: "/portfolio" },
  { name: "Контакти", path: "/contacts" },
  { name: "Блог", path: "/blog" },
  { name: "Відгуки", path: "/reviews" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen)
  }

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setSubmenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className="container mx-auto">
        <div className={styles.headerWrapper}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Модульний</span>
            <span className={styles.logoAccent}>Проєкт</span>
          </Link>

          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map(item => (
                <li key={item.path} className={styles.navItem}>
                  {item.hasSubmenu ? (
                    <div className={styles.submenuContainer}>
                      {/* 👈 Змінено button на Link для основного посилання */}
                      <Link
                        href={item.path}
                        className={`${styles.navLink} ${pathname.startsWith("/services") ? styles.active : ""}`}
                        onMouseEnter={() => setSubmenuOpen(true)}
                      >
                        {item.name}
                        <ChevronDown size={16} className={styles.chevron} />
                      </Link>

                      {submenuOpen && (
                        <div className={styles.submenu} onMouseLeave={() => setSubmenuOpen(false)}>
                          <div className={styles.submenuGrid}>
                            {item.submenu?.map(category => (
                              <div key={category.path} className={styles.submenuColumn}>
                                <Link href={category.path} className={styles.categoryLink} onClick={closeMenus}>
                                  {category.category}
                                </Link>
                                <ul className={styles.servicesList}>
                                  {category.services.map(service => (
                                    <li key={service.path}>
                                      <Link href={service.path} className={styles.serviceLink} onClick={closeMenus}>
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`${styles.navLink} ${pathname === item.path ? styles.active : ""}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Меню">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navItems.map(item => (
                <li key={item.path}>
                  {item.hasSubmenu ? (
                    <div>
                      {/* 👈 Змінено button на Link для мобільного меню */}
                      <Link
                        href={item.path}
                        className={`${styles.mobileNavLink} ${pathname.startsWith("/services") ? styles.active : ""}`}
                        onClick={() => {
                          // Закриваємо меню при переході на основну сторінку послуг
                          closeMenus()
                        }}
                      >
                        {item.name}
                      </Link>

                      {/* 👈 Додаткова кнопка для розгортання підменю */}
                      <button className={styles.submenuToggle} onClick={toggleSubmenu} aria-label="Розгорнути підменю">
                        <ChevronDown size={16} className={styles.chevron} />
                      </button>

                      {submenuOpen && (
                        <div className={styles.mobileSubmenu}>
                          {item.submenu?.map(category => (
                            <div key={category.path} className={styles.mobileSubmenuSection}>
                              <Link href={category.path} className={styles.mobileCategoryLink} onClick={closeMenus}>
                                {category.category}
                              </Link>
                              <ul className={styles.mobileServicesList}>
                                {category.services.map(service => (
                                  <li key={service.path}>
                                    <Link href={service.path} className={styles.mobileServiceLink} onClick={closeMenus}>
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`${styles.mobileNavLink} ${pathname === item.path ? styles.active : ""}`}
                      onClick={closeMenus}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
