import Image from "next/image";
import { Button } from "@/components/button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>Модульные дома для большой жизни</p>
          <h1 className={styles.title} id="hero-title">
            Ближе
            <br />
            к природе.
          </h1>
        </div>
        <div className={styles.offer}>
          <p>
            Ваше место силы. Современный дом
            <br />
            с отделкой — за 90 дней,
            <br />
            без стройки на вашем участке.
          </p>
          <Button href="#houses">Выбрать свой дом</Button>
        </div>
      </div>

      <div className={styles.frame}>
        <Image
          className={styles.photo}
          src="/images/hero.png"
          alt="Модульный дом Север 80 с панорамными окнами среди сосен"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
        <div className={styles.caption}>
          <p>55°45′ с. ш.&nbsp;&nbsp;37°37′ в. д.</p>
          <p className={styles.badge}>
            <span aria-hidden="true">●</span> Создан для жизни
          </p>
        </div>
        <div className={styles.project}>
          <div>
            <p className={styles.model}>Север 80</p>
            <p className={styles.meta}>80 м²&nbsp;&nbsp;/&nbsp;&nbsp;2 спальни&nbsp;&nbsp;/&nbsp;&nbsp;бесконечность за окном</p>
          </div>
          <Button href="#house-80" variant="cream">
            Смотреть
          </Button>
        </div>
      </div>
    </section>
  );
}
