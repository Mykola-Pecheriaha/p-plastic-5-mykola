"use client"

import React from "react"
import styles from "./ContactsIntro.module.css"

interface ContactsIntroProps {
  backgroundColor: string
}

const ContactsIntro: React.FC<ContactsIntroProps> = ({ backgroundColor }) => {
  return (
    <section className={styles.section} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакти</h2>
        <p className={styles.description}>
          Зв’яжіться з нами будь-яким зручним способом. Ми завжди на зв’язку та готові допомогти!
        </p>
        <ul className={styles.contactList}>
          <li>
            <strong>Телефон:</strong> <a href="tel:+380507575411">+38 (050) 757 54 11</a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
          </li>
          <li>
            <strong>Адреса:</strong> м. Чернівці, вул. Героїв Майдану, 226. 4 поверх. (вхід з вул.Рівенська)
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ContactsIntro
