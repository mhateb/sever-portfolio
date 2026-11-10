import { houses } from "@/content/houses";
import { HouseCard } from "./HouseCard";
import styles from "./Collection.module.css";

export function Collection() {
  return (
    <section className={styles.section} id="houses" aria-labelledby="houses-title">
      <div className={styles.head}>
        <div>
          <p className={styles.index}>02 / Коллекция</p>
          <h2 className={styles.title} id="houses-title">
            Свой масштаб счастья.
          </h2>
        </div>
        <p className={styles.lead}>
          Три дома. Один подход к жизни.
          <br />
          Выберите тот, который ближе вам.
        </p>
      </div>
      <div className={styles.grid}>
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </section>
  );
}
