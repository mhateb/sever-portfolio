import Image from "next/image";
import styles from "./Architecture.module.css";

export function Architecture() {
  return (
    <section className={styles.section} id="technology" aria-labelledby="architecture-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.index}>03 / Архитектура заботы</p>
            <h2 className={styles.title} id="architecture-title">
              Снаружи — эстетика.
              <br />
              Внутри — ваша жизнь.
            </h2>
          </div>
          <p className={styles.lead}>
            Ничего случайного.
            <br />
            От первого луча солнца
            <br />
            до последней розетки.
          </p>
        </div>

        <div className={styles.mosaic}>
          <div className={styles.interior}>
            <Image
              src="/images/interior.png"
              alt="Гостиная дома Север: светлое дерево, мягкий диван и панорамное окно в лес"
              fill
              sizes="(max-width: 900px) 100vw, 760px"
            />
            <p className={styles.chip}>01 / Свет без границ</p>
          </div>

          <div className={styles.side}>
            <div className={styles.plan}>
              <p className={styles.planIndex}>02 / Каждый метр работает</p>
              <Image
                className={styles.drawing}
                src="/images/floorplan.svg"
                width={359}
                height={157}
                unoptimized
                alt="Планировка Север 80: гостиная, две спальни и санузлы"
              />
              <div className={styles.legend}>
                <p>Север 80</p>
                <p>2 спальни · 80 м²</p>
              </div>
            </div>
            <div className={styles.warm}>
              <p className={styles.warmIndex}>03 / Создан для нашей зимы</p>
              <p className={styles.warmTitle}>Тепло даже в −35°</p>
              <p className={styles.warmText}>
                200 мм утепления, тёплый пол и энергосберегающие стеклопакеты.
                Комфортно в любой сезон.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
