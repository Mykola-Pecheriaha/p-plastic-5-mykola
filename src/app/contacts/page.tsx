import React from "react"
import ContactsIntro from "@/components/Contacts/ContactsIntro" // перший блок, створимо пізніше
// import OtherContactBlocks from '@/components/...'; // майбутні компоненти

const ContactsPage: React.FC = () => {
  return (
    <div>
      {/* Перший блок контактної сторінки */}
      <ContactsIntro backgroundColor="#e8f5e8" />

      {/* Наступні блоки можна підключати далі таким чином: */}
      {/* <MapSection backgroundColor="#f0f9ff" /> */}
      {/* <ContactForm backgroundColor="#e8f5e8" /> */}
    </div>
  )
}

export default ContactsPage
