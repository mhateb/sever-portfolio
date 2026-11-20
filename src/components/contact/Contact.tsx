"use client";

import { FormEvent, useEffect, useState } from "react";
import { HOUSE_SELECT_EVENT, type SelectedSize } from "@/lib/house-selection";
import styles from "./Contact.module.css";

const sizes: { id: SelectedSize; label: string }[] = [
  { id: "45", label: "45 м²" },
  { id: "80", label: "80 м²" },
  { id: "120", label: "120 м²" },
  { id: "unknown", label: "Не знаю" },
];

export function Contact() {
  const [size, setSize] = useState<SelectedSize>("80");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onSelect = (event: Event) => {
      const next = (event as CustomEvent<SelectedSize>).detail;
      setSize(next);
      setSent(false);
    };

    window.addEventListener(HOUSE_SELECT_EVENT, onSelect);
    return () => window.removeEventListener(HOUSE_SELECT_EVENT, onSelect);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Напишите, как к вам обращаться";
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      nextErrors.phone = "Нужен телефон, чтобы прислать расчёт";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
    }
  };

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.index}>07 / Ваш дом начинается здесь</p>
          <h2 className={styles.title} id="contact-title">
            А что, если
            <br />
            уже этим летом?
          </h2>
          <p className={styles.lead}>
            Расскажите о своей мечте. Мы подберём дом,
            <br />
            рассчитаем стоимость и пришлём подробный каталог.
          </p>
          <p className={styles.note}>Без навязчивых звонков. По-человечески.</p>
        </div>

        {sent ? (
          <div className={styles.success} role="status">
            <p className={styles.successTitle}>Спасибо, {name.trim()}.</p>
            <p>
              {`Напишем по номеру ${phone.trim()} и пришлём каталог с расчётом${
                size === "unknown" ? "" : ` для дома ${size} м²`
              }.`}
            </p>
            <button
              className={styles.again}
              type="button"
              onClick={() => setSent(false)}
            >
              Отправить другую заявку
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <fieldset className={styles.fieldset}>
              <legend>Какой дом вам ближе?</legend>
              <div className={styles.chips}>
                {sizes.map((item) => {
                  const active = size === item.id;
                  return (
                    <button
                      key={item.id}
                      className={active ? styles.chipActive : styles.chip}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSize(item.id)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className={styles.field}>
              <span className="visually-hidden">Ваше имя</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Ваше имя"
                value={name}
                aria-invalid={Boolean(errors.name)}
                onChange={(event) => setName(event.target.value)}
              />
              {errors.name ? <span className={styles.error}>{errors.name}</span> : null}
            </label>

            <label className={styles.field}>
              <span className="visually-hidden">Телефон</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Телефон +7 (___) ___-__-__"
                value={phone}
                aria-invalid={Boolean(errors.phone)}
                onChange={(event) => setPhone(event.target.value)}
              />
              {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
            </label>

            <button className={styles.submit} type="submit">
              <span>Получить каталог и расчёт</span>
              <span className={styles.submitArrow} aria-hidden="true">
                ↗
              </span>
            </button>
            <p className={styles.legal}>
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy">политикой конфиденциальности</a> и обработкой
              персональных данных.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
