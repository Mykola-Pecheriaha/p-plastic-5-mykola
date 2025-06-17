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
    path: "/services",
    hasSubmenu: true,
    submenu: [
      {
        category: "Пластика обличчя",
        path: "/services/face",
        services: [
          { id: "facelift", name: "Підтяжка обличчя та шиї", path: "/services/facelift-section" },
          { id: "blepharoplasty", name: "Блефаропластика", path: "/services/blepharoplasty" },
          { id: "chin-surgery", name: "Пластика підборіддя", path: "/services/chin-surgery" },
          { id: "ottoplastic", name: "Корекція  вух", path: "/services/ottoplastic" },
        ],
      },
      {
        category: "Пластика грудей",
        path: "/services/breast",
        services: [
          { id: "breast-surgery", name: "Збільшення грудей", path: "/services/breast-surgery" },
          {
            id: "implant-removal",
            name: "Заміна або видалення імплантів",
            path: "/services/implant-removal-replacement",
          },
          {
            id: "mastopexy",
            name: "Підтяжка грудей, корекція соска та ареоли",
            path: "/services/mastopexy-with-nipple-correction",
          },
          { id: "ginecomastiya", name: "Гінекомастія", path: "/services/ginecomastiya" },
        ],
      },
      {
        category: "Пластика тіла",
        path: "/services/body",
        services: [
          { id: "abdominoplasty", name: "Абдомінопластика", path: "/services/abdominoplasty" },
          { id: "liposuction", name: "Ліпосакція", path: "/services/liposuction" },
          { id: "leg-surgery", name: "Пластика ніг", path: "/services/led-surgery" },
          { id: "neck-hump-removal", name: "Видалення шийного горба", path: "/services/liposuction" },
          { id: "buttock-augmentation", name: "Збільшення сідниць", path: "/services/buttock-augmentation" },
        ],
      },
      {
        category: "Загальна хірургія",
        path: "/services/general",
        services: [
          { id: "skintumors", name: "Видалення доброякісних пухлин", path: "/services/skintumors" },
          { id: "carpal-tunnel", name: "Карпальний канал", path: "/services/carpal-syndrome" },
          { id: "gerniotomiya", name: "Видалення гриж", path: "/services/gerniotomiya" },
          { id: "varicose", name: "Лікування варикозу", path: "/services/varicose" },
          { id: "proctology", name: "Проктологія", path: "/services/proctology" },
        ],
      },
    ],
  },
  {
    name: "Про лікаря",
    path: "/about",
    hasSubmenu: true,
    submenu: [
      {
        category: "Інформація про лікаря",
        path: "/about",
        services: [
          { id: "about-doctor", name: "Про лікаря", path: "/about" },
          { id: "team", name: "Команда", path: "/team" },
          { id: "ask-doctor", name: "Запитати лікаря", path: "/ask-doctor" },
        ],
      },
    ],
  },
  { name: "Портфоліо", path: "/portfolio" },
  { name: "Контакти", path: "/contacts" },
  { name: "Блог", path: "/blog" },
  { name: "Відгуки", path: "/reviews" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState<Record<string, boolean>>({})

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSubmenu = (menuKey: string) => {
    setSubmenuOpen(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  const openSubmenu = (menuKey: string) => {
    setSubmenuOpen({ [menuKey]: true }) // Закриваємо всі інші та відкриваємо тільки поточне
  }

  const closeSubmenu = (menuKey: string) => {
    setSubmenuOpen(prev => ({
      ...prev,
      [menuKey]: false,
    }))
  }

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setSubmenuOpen({})
  }

  const handleDesktopMenuClick = (menuKey: string) => {
    if (submenuOpen[menuKey]) {
      closeSubmenu(menuKey)
    } else {
      openSubmenu(menuKey)
    }
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
                      <Link
                        href={item.path}
                        className={`${styles.navLink} ${pathname.startsWith(item.path === "/about" ? "/about" : "/services") ? styles.active : ""}`}
                        onClick={e => {
                          e.preventDefault()
                          handleDesktopMenuClick(item.path)
                        }}
                      >
                        {item.name}
                        <ChevronDown size={16} className={styles.chevron} />
                      </Link>

                      {(submenuOpen[item.path] || false) && (
                        <div
                          className={styles.submenu}
                          onMouseLeave={() => {
                            setTimeout(() => closeSubmenu(item.path), 200)
                          }}
                        >
                          <div className={styles.submenuGrid}>
                            {item.submenu?.map(category => (
                              <div key={category.path} className={styles.submenuColumn}>
                                <Link href={category.path} className={styles.categoryLink} onClick={closeMenus}>
                                  {category.category}
                                </Link>
                                <ul className={styles.servicesList}>
                                  {category.services.map(service => (
                                    <li key={service.id}>
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
          <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.mobileNavList}>
              {navItems.map(item => (
                <li key={item.path}>
                  {item.hasSubmenu ? (
                    <div>
                      <Link
                        href={item.path}
                        className={`${styles.mobileNavLink} ${pathname.startsWith(item.path === "/about" ? "/about" : "/services") ? styles.active : ""}`}
                        onClick={() => {
                          closeMenus()
                        }}
                      >
                        {item.name}
                      </Link>

                      <button
                        className={styles.submenuToggle}
                        onClick={() => toggleSubmenu(item.path)}
                        aria-label="Розгорнути підменю"
                      >
                        <ChevronDown size={16} className={styles.chevron} />
                      </button>

                      {(submenuOpen[item.path] || false) && (
                        <div className={styles.mobileSubmenu}>
                          {item.submenu?.map(category => (
                            <div key={category.path} className={styles.mobileSubmenuSection}>
                              <Link href={category.path} className={styles.mobileCategoryLink} onClick={closeMenus}>
                                {category.category}
                              </Link>
                              <ul className={styles.mobileServicesList}>
                                {category.services.map(service => (
                                  <li key={service.id}>
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
