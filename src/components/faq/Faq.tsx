"use client";

import { useState } from "react";
import { faq } from "@/content/faq";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.intro}>
        <p className={styles.index}>06 / Важно знать</p>
        <h2 className={styles.title} id="faq-title">
          Хорошие вопросы.
          <br />
          Честные ответы.
        </h2>
      </div>
      <div className={styles.list}>
        {faq.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div className={styles.item} key={item.question}>
              <h3 className={styles.question}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
              </h3>
              {open ? (
                <p className={styles.answer} id={panelId}>
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
