"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { mainNav, phone } from "@/content/site";

const logoClass =
  "text-[1.875rem] leading-[1.18] font-bold tracking-display phone:text-logo";
const menuButtonClass =
  "inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[13px] leading-[1.18] font-medium";

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
    <header className="relative z-10" id="top">
      <div className="mx-auto flex w-full max-w-page items-center justify-between gap-7 px-pad py-[22px] phone:py-[26px]">
        <Link className={logoClass} href="/#top">
          север/
        </Link>

        <nav className="hidden gap-7 text-[13px] leading-[1.18] font-medium nav:flex" aria-label="Разделы">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="hidden text-[14px] leading-[1.18] font-medium phone:inline" href={phone.href}>
          {phone.display}
        </a>

        <Link className="hidden items-center gap-2 text-[13px] leading-[1.18] font-medium phone:inline-flex" href="/#contact">
          Обсудить проект
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          className={`${menuButtonClass} phone:hidden`}
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
        <div
          className="fixed inset-0 z-50 flex flex-col gap-9 bg-cream px-pad pt-[22px] pb-10"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <div className="flex items-center justify-between">
            <Link className={logoClass} href="/#top" onClick={close}>
              север/
            </Link>
            <button ref={closeRef} className={menuButtonClass} type="button" onClick={close}>
              Закрыть
            </button>
          </div>
          <nav className="flex flex-col gap-[18px] text-menu font-medium tracking-snug" aria-label="Разделы">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={close}>
              Обсудить проект
            </Link>
          </nav>
          <a className="mt-auto text-[18px] font-medium" href={phone.href}>
            {phone.display}
          </a>
        </div>
      ) : null}
    </header>
  );
}
