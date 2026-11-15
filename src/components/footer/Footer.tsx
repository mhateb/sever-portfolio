import { email, footerSections, footerSocial, phone } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.kicker}>Начнём с разговора</p>
            <a className={styles.phone} href={phone.href}>
              {phone.display}
            </a>
            <a className={styles.email} href={email.href}>
              {email.display}
            </a>
          </div>
          <div className={styles.columns}>
            <nav className={styles.column} aria-label="Разделы">
              {footerSections.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <nav className={styles.column} aria-label="Ещё">
              {footerSocial.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <p className={styles.wordmark}>север/</p>

        <div className={styles.legal}>
          <p>© север, 2026 · Концепция бренда</p>
          <a href="/privacy">Политика конфиденциальности</a>
          <p>Дома, в которых хочется жить.</p>
        </div>
      </div>
    </footer>
  );
}
