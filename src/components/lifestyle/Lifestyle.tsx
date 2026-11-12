import Image from "next/image";
import styles from "./Lifestyle.module.css";

export function Lifestyle() {
  return (
    <section className={styles.section} id="showroom" aria-labelledby="showroom-title">
      <Image
        className={styles.photo}
        src="/images/lifestyle.png"
        alt="Терраса дома: деревянное кресло, плед и утренний кофе в сосновом лесу"
        fill
        sizes="100vw"
      />
      <div className={styles.inner}>
        <div className={styles.top}>
          <p>Не просто дом. Другой ритм.</p>
          <p>05 / Жизнь</p>
        </div>
        <div className={styles.card}>
        <p className={styles.kicker}>Прочувствуйте, прежде чем решиться</p>
        <h2 className={styles.title} id="showroom-title">
          Некоторые вещи
          <br />
          нужно почувствовать.
        </h2>
        <p className={styles.text}>
          Приезжайте в наш шоу-дом. Откройте окна, пройдитесь босиком,
          представьте здесь своё утро.
        </p>
        <a className={styles.link} href="#contact">
          <span>Записаться на просмотр</span>
          <span aria-hidden="true">↗</span>
        </a>
        </div>
      </div>
    </section>
  );
}
