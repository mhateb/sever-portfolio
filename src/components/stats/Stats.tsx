import styles from "./Stats.module.css";

const stats = [
  { value: "90 дней", label: "от идеи до новоселья" },
  { value: "от 5,9 млн ₽", label: "с готовой отделкой" },
  { value: "30 лет", label: "гарантия на каркас" },
] as const;

export function Stats() {
  return (
    <section className={styles.stats} aria-label="Коротко о домах">
      <ul className={styles.list}>
        {stats.map((item) => (
          <li key={item.label}>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.label}>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
