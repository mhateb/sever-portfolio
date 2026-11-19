import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.title}>Такой страницы нет.</h1>
      <p className={styles.text}>
        Дома, каталог и заявка остались на главной.
      </p>
      <Link className={styles.link} href="/">
        На главную <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
