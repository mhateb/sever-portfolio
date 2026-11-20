"use client";

import {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { HOUSE_SELECT_EVENT, type SelectedSize } from "@/lib/house-selection";
import { maskPhone, nationalDigits } from "@/lib/phone";
import styles from "./Contact.module.css";

const sizes: { id: SelectedSize; label: string }[] = [
  { id: "45", label: "45 м²" },
  { id: "80", label: "80 м²" },
  { id: "120", label: "120 м²" },
  { id: "unknown", label: "Не знаю" },
];

function nameError(value: string) {
  const cleaned = value.trim().replace(/\s+/g, " ");
  const letters = cleaned.match(/\p{L}/gu) ?? [];
  if (letters.length < 2) return "Напишите, как к вам обращаться";
  if (!/^[\p{L}][\p{L}\s.'’-]*$/u.test(cleaned)) {
    return "Оставьте в имени только буквы";
  }
  return undefined;
}

function phoneError(value: string) {
  const digits = nationalDigits(value);
  if (!digits) return "Нужен телефон, чтобы прислать расчёт";
  if (digits.length < 10) return "Введите телефон полностью";
  return undefined;
}

export function Contact() {
  const [size, setSize] = useState<SelectedSize>("80");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<{ name: boolean; phone: boolean }>({
    name: false,
    phone: false,
  });
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const caretRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const input = phoneRef.current;
    const caret = caretRef.current;
    if (!input || caret == null || document.activeElement !== input) return;
    input.setSelectionRange(caret, caret);
    caretRef.current = null;
  }, [phone]);

  useEffect(() => {
    const onSelect = (event: Event) => {
      const next = (event as CustomEvent<SelectedSize>).detail;
      setSize(next);
      setSent(false);
    };

    window.addEventListener(HOUSE_SELECT_EVENT, onSelect);
    return () => window.removeEventListener(HOUSE_SELECT_EVENT, onSelect);
  }, []);

  const nameMessage = nameError(name);
  const phoneMessage = phoneError(phone);
  const showName = (submitted || touched.name) && nameMessage;
  const showPhone = (submitted || touched.phone) && phoneMessage;

  const onPhoneChange = (value: string, cursor: number) => {
    const next = maskPhone(value, phone, cursor);
    caretRef.current = next.caret;
    setPhone(next.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (nameMessage) {
      nameRef.current?.focus();
      return;
    }
    if (phoneMessage) {
      phoneRef.current?.focus();
      return;
    }
    setSent(true);
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
              onClick={() => {
                setSent(false);
                setSubmitted(false);
              }}
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

            <label className={showName ? styles.fieldInvalid : styles.field}>
              <span className="visually-hidden">Ваше имя</span>
              <input
                ref={nameRef}
                name="name"
                autoComplete="name"
                placeholder="Ваше имя"
                value={name}
                aria-invalid={Boolean(showName)}
                aria-describedby={showName ? "name-error" : undefined}
                onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                onChange={(event) => setName(event.target.value)}
              />
              {showName ? (
                <span className={styles.error} id="name-error" role="alert">
                  {nameMessage}
                </span>
              ) : null}
            </label>

            <label className={showPhone ? styles.fieldInvalid : styles.field}>
              <span className="visually-hidden">Телефон</span>
              <input
                ref={phoneRef}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                aria-invalid={Boolean(showPhone)}
                aria-describedby={showPhone ? "phone-error" : undefined}
                onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
                onChange={(event) =>
                  onPhoneChange(
                    event.target.value,
                    event.target.selectionStart ?? event.target.value.length,
                  )
                }
              />
              {showPhone ? (
                <span className={styles.error} id="phone-error" role="alert">
                  {phoneMessage}
                </span>
              ) : null}
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
