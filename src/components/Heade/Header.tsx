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
          { id: "leg-surgery", name: "Пластика ніг", path: "/services/leg-surgery" },
          { id: "neck-hump-removal", name: "Видалення шийного горба", path: "/services/liposuction" },
          { id: "buttock-augmentation", name: "Збільшення сідниць", path: "/services/buttock-augmentation" },
        ],
      },
      {
        category: "Загальна хірургія",
        path: "/services/general",
        services: [
          { id: "tumor-removal", name: "Видалення пухлин", path: "/services/tumor-removal" },
          { id: "carpal-tunnel", name: "Карпальний канал", path: "/services/carpal-tunnel" },
          { id: "hernia-removal", name: "Видалення гриж", path: "/services/hernia-removal" },
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
          <div className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navItems.map(item => (
                <li key={item.path}>
                  {item.hasSubmenu ? (
                    <div>
                      <Link
                        href={item.path}
                        className={`${styles.mobileNavLink} ${pathname.startsWith("/services") ? styles.active : ""}`}
                        onClick={() => {
                          closeMenus()
                        }}
                      >
                        {item.name}
                      </Link>

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
