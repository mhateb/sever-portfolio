"use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { HOUSE_SELECT_EVENT, type SelectedSize } from "@/lib/house-selection";
import { cx } from "@/lib/cx";
import { maskPhone, nationalDigits } from "@/lib/phone";

const sizes: { id: SelectedSize; label: string }[] = [
  { id: "45", label: "45 м²" },
  { id: "80", label: "80 м²" },
  { id: "120", label: "120 м²" },
  { id: "unknown", label: "Не знаю" },
];

const inputClass =
  "w-full border-0 border-b bg-transparent px-0 pt-[17px] pb-4 text-base leading-[1.3] caret-ink shadow-[inset_0_-1px_0_transparent] transition-[border-color,box-shadow] duration-200 selection:bg-ink selection:text-lime focus:border-b-transparent focus:shadow-[inset_0_-2px_0_var(--color-ink)] focus:outline-none";

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
    <section className="scroll-mt-3 bg-lime" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-start gap-10 px-pad py-14 wide:grid-cols-[minmax(0,1fr)_minmax(280px,500px)] wide:gap-[70px] wide:py-20">
        <div>
          <p className="text-index font-medium tracking-index text-moss uppercase">
            07 / Ваш дом начинается здесь
          </p>
          <h2 className="mt-7 text-statement font-medium tracking-display" id="contact-title">
            А что, если
            <br />
            уже этим летом?
          </h2>
          <p className="mt-7 text-[16px] leading-[1.3] text-moss [&_br]:hidden wide:[&_br]:inline">
            Расскажите о своей мечте. Мы подберём дом,
            <br />
            рассчитаем стоимость и пришлём подробный каталог.
          </p>
          <p className="mt-7 text-[11px] leading-[1.3] text-moss">
            Без навязчивых звонков. По-человечески.
          </p>
        </div>

        {sent ? (
          <div className="flex min-h-[280px] flex-col justify-end gap-4 text-[16px] leading-[1.35]" role="status">
            <p className="text-[2rem] leading-[1.1] font-medium tracking-snug">
              Спасибо, {name.trim()}.
            </p>
            <p>
              {`Напишем по номеру ${phone.trim()} и пришлём каталог с расчётом${
                size === "unknown" ? "" : ` для дома ${size} м²`
              }.`}
            </p>
            <button
              className="mt-2 self-start border-0 border-b border-ink bg-transparent p-0 text-sm font-medium focus-ink"
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
          <form className="flex flex-col gap-[22px]" onSubmit={onSubmit} noValidate>
            <fieldset className="m-0 border-0 p-0">
              <legend className="mb-[22px] text-[15px] leading-[1.3] font-medium">
                Какой дом вам ближе?
              </legend>
              <div className="flex flex-wrap gap-2">
                {sizes.map((item) => {
                  const active = size === item.id;
                  return (
                    <button
                      key={item.id}
                      className={cx(
                        "border px-4 py-2.5 text-[12px] leading-[1.3] font-medium transition-colors duration-200 focus-ink",
                        active
                          ? "border-ink bg-ink text-cream hover:bg-ink"
                          : "border-form bg-transparent hover:border-ink hover:bg-ink/8",
                      )}
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

            <label className="flex flex-col">
              <span className="sr-only">Ваше имя</span>
              <input
                ref={nameRef}
                className={cx(
                  inputClass,
                  showName
                    ? "border-transparent shadow-[inset_0_-2px_0_var(--color-alert)] placeholder:text-alert focus:shadow-[inset_0_-2px_0_var(--color-alert)]"
                    : "border-form placeholder:text-moss",
                )}
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
                <span className="pt-2 text-[12px] leading-[1.35] text-alert" id="name-error" role="alert">
                  {nameMessage}
                </span>
              ) : null}
            </label>

            <label className="flex flex-col">
              <span className="sr-only">Телефон</span>
              <input
                ref={phoneRef}
                className={cx(
                  inputClass,
                  showPhone
                    ? "border-transparent shadow-[inset_0_-2px_0_var(--color-alert)] placeholder:text-alert focus:shadow-[inset_0_-2px_0_var(--color-alert)]"
                    : "border-form placeholder:text-moss",
                )}
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
                <span className="pt-2 text-[12px] leading-[1.35] text-alert" id="phone-error" role="alert">
                  {phoneMessage}
                </span>
              ) : null}
            </label>

            <button
              className="mt-1 flex w-full items-center justify-between border-0 bg-ink px-[22px] py-5 text-[15px] leading-[1.3] font-medium text-cream focus-ink"
              type="submit"
            >
              <span>Получить каталог и расчёт</span>
              <span className="text-[21px] font-normal text-lime" aria-hidden="true">
                ↗
              </span>
            </button>
            <p className="text-[10px] leading-[1.3] text-moss">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link className="underline underline-offset-2" href="/privacy">
                политикой конфиденциальности
              </Link>{" "}
              и обработкой персональных данных.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
