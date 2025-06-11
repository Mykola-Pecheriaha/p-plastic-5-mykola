"use client"
import styles from "./CarpaltReabil.module.css"
import { CarpaltReabilGallery } from "./CarpaltReabilGallery"
import { CarpalResultGallery } from "./CarpalResultGallery"
import Link from "next/link"

export function CarpaltReabil() {
  return (
    <section className={styles.carpalSection}>
      <div className={styles.container}>
        {/* Перший сегмент - Відновлення після операції */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>✅Відновлення після операції</h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹 Одразу після втручання вам порекомендують:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Піднімати руку вище рівня серця,</strong> щоб зменшити набряк.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Рухати пальцями,</strong> щоб запобігти скутості суглобів.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹Що очікувати після операції:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Легкий або помірний біль, набряк і скутість</strong> — це нормальні реакції.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Біль у долоні може зберігатися</strong> від кількох тижнів до кількох місяців.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Сила стискання та щипання</strong> зазвичай відновлюється через 2–3 місяці, але в складніших
                    випадках — до 6–12 місяців.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹Додаткові рекомендації:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Можливо, доведеться носити шину або бандаж</strong> упродовж кількох тижнів.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Вам буде дозволено виконувати легкі повсякденні дії</strong> досить швидко — у терміни,
                    узгоджені з вашим лікарем.
                  </li>
                </ul>
                🔹
              </div>

              <div className={styles.conclusion}>
                <span className={styles.emoji}>🎯</span>
                <strong>Терпіння та регулярне спостереження</strong> допоможуть вам повернутися до звичного ритму життя
                максимально комфортно та безпечно.
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <CarpaltReabilGallery />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Другий сегмент - Результати лікування */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>✅ Результати лікування</h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <p className={styles.introText}>
                🔹 <strong>У більшості пацієнтів після хірургічного втручання</strong> спостерігається суттєве
                покращення симптомів синдрому зап`ястного каналу.
              </p>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹 Важливо пам`ятати:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Повне одужання може бути поступовим</strong> і тривати до 1 року.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Якщо біль і слабкість не зникають протягом 2 місяців,</strong> лікар може направити вас до
                    терапевта кисті для пришвидшення відновлення.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹Фактори, що можуть уповільнити одужання:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Важкий або занедбаний синдром</strong> зап`ястного каналу.
                  </li>
                  <li>
                    <span className={styles.emoji}>🔹</span>
                    <strong>Супутні захворювання:</strong> артрит, тендиніт або інші проблеми, що викликають біль і
                    скутість у руці чи зап`ясті.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>🔹Рецидив синдрому — рідкісний, але можливий.</h3>
                <p className={styles.text}>
                  <span className={styles.emoji}>🔹</span>У таких випадках може знадобитися{" "}
                  <strong>додаткове лікування або повторне хірургічне втручання.</strong>
                </p>
              </div>
            </div>
            <div className={styles.galleryColumn}>
              <CarpalResultGallery />
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>Зв&apos;язатися з нами</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CarpaltReabil
