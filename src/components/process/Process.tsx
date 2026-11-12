import { steps } from "@/content/steps";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-title">
      <p className={styles.index}>04 / От первого разговора до первого кофе</p>
      <h2 className={styles.title} id="process-title">
        Вы живёте. Мы строим.
      </h2>
      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step.index} className={styles.step}>
            <p className={styles.number}>{step.index}</p>
            <div>
              <h3 className={styles.name}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
              <p className={styles.time}>{step.time}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
