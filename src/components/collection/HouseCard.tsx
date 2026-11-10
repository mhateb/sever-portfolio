"use client";

import Image from "next/image";
import type { House } from "@/content/houses";
import { requestHouse } from "@/lib/house-selection";
import styles from "./HouseCard.module.css";

export function HouseCard({ house }: { house: House }) {
  return (
    <article className={styles.card} id={`house-${house.id}`}>
      <div className={styles.photo}>
        <Image
          src={house.image}
          alt={house.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
        <div className={styles.badges}>
          <span className={styles.area}>{house.areaLabel}</span>
          {house.featured ? (
            <span className={styles.featured}>{house.featured}</span>
          ) : null}
        </div>
      </div>

      <div className={styles.nameRow}>
        <h3 className={styles.name}>{house.name}</h3>
        <button
          className={styles.arrow}
          type="button"
          onClick={() => requestHouse(house.id)}
        >
          <span className="visually-hidden">Обсудить {house.name}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p className={styles.tagline}>{house.tagline}</p>
      <p className={styles.specs}>{house.specs}</p>
      <div className={styles.priceRow}>
        <p className={styles.price}>{house.price}</p>
        <p className={styles.turnkey}>Под ключ</p>
      </div>
    </article>
  );
}
