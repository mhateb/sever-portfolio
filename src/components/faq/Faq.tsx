"use client";

import { useState } from "react";
import { faq } from "@/content/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="mx-auto grid w-full max-w-page grid-cols-1 gap-9 px-pad py-16 mid:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] mid:gap-[60px] mid:py-[100px]"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div>
        <p className="text-index font-medium tracking-index text-muted uppercase">
          06 / Важно знать
        </p>
        <h2 className="mt-5 text-faq font-medium tracking-title" id="faq-title">
          Хорошие вопросы.
          <br />
          Честные ответы.
        </h2>
      </div>
      <div>
        {faq.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div className="border-t border-line-faq py-6" key={item.question}>
              <h3 className="text-[18px] leading-[1.3] font-medium phone:text-[20px]">
                <button
                  className="flex w-full items-center justify-between gap-6 border-0 bg-transparent p-0 text-left focus-ink"
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="text-[24px] leading-none font-normal" aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {open ? (
                <p className="mt-[18px] max-w-[68ch] text-[15px] leading-[1.3] text-muted" id={panelId}>
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
