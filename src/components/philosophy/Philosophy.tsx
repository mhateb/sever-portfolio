import styles from "./Philosophy.module.css";

export function Philosophy() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.layout}>
        <p className={styles.index}>01 / Философия</p>
        <div className={styles.copy}>
          <h2 className={styles.title} id="about-title">
            Не просто за город.
            <br />
            К себе настоящему.
          </h2>
          <div className={styles.columns}>
            <p>
              Утро без будильника. Кофе на террасе. Лес, который начинается у
              порога. Мы создаём дома, в которых легко замедлиться и
              почувствовать главное.
            </p>
            <p className={styles.aside}>
              Архитектура без лишнего. Натуральные материалы, много света и
              каждый метр — для жизни. Всё готово к вашему первому вечеру дома.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
