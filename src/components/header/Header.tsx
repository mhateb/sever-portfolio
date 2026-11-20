"use client";

import { useEffect, useRef, useState } from "react";
import { mainNav, phone } from "@/content/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header} id="top">
      <div className={styles.bar}>
        <a className={styles.logo} href="/#top">
          север/
        </a>

        <nav className={styles.nav} aria-label="Разделы">
          {mainNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.phone} href={phone.href}>
          {phone.display}
        </a>

        <a className={styles.discuss} href="/#contact">
          Обсудить проект
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          Меню
          <span aria-hidden="true">☰</span>
        </button>
      </div>

      {open ? (
        <div className={styles.panel} id="site-menu" role="dialog" aria-modal="true" aria-label="Меню">
          <div className={styles.panelBar}>
            <a className={styles.logo} href="/#top" onClick={close}>
              север/
            </a>
            <button
              ref={closeRef}
              className={styles.menuButton}
              type="button"
              onClick={close}
            >
              Закрыть
            </button>
          </div>
          <nav className={styles.panelNav} aria-label="Разделы">
            {mainNav.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={close}>
              Обсудить проект
            </a>
          </nav>
          <a className={styles.panelPhone} href={phone.href}>
            {phone.display}
          </a>
        </div>
      ) : null}
    </header>
  );
}
