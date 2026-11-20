import Image from "next/image";
import { Button } from "@/components/button/Button";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-page" aria-labelledby="hero-title">
      <div className="flex flex-col items-stretch gap-8 px-pad pt-7 pb-10 mid:flex-row mid:items-end mid:pt-10">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <p className="text-[11px] leading-[1.18] font-medium tracking-normal text-muted uppercase">
            Модульные дома для большой жизни
          </p>
          <h1 className="text-hero font-medium tracking-display" id="hero-title">
            Ближе
            <br />
            к природе.
          </h1>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-[22px] text-[15px] leading-[1.18] text-muted mid:w-[302px] mid:text-[16px]">
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

      <div className="relative flex h-[clamp(420px,41vw,590px)] flex-col justify-between overflow-hidden px-pad py-6 text-paper mid:py-8">
        <Image
          className="object-cover"
          src="/images/hero.png"
          alt="Модульный дом Север 80 с панорамными окнами среди сосен"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
        <div className="relative z-10 flex items-start justify-between gap-4 text-[9px] leading-[1.18] font-medium tracking-index uppercase">
          <p>55°45′ с. ш.&nbsp;&nbsp;37°37′ в. д.</p>
          <p className="bg-overlay px-3 py-2 text-[8px] tracking-badge">
            <span aria-hidden="true">●</span> Создан для жизни
          </p>
        </div>
        <div className="relative z-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-model font-medium uppercase">Север 80</p>
            <p className="mt-2 text-[10px] leading-[1.18] mid:text-[13px]">
              80 м²&nbsp;&nbsp;/&nbsp;&nbsp;2 спальни&nbsp;&nbsp;/&nbsp;&nbsp;бесконечность за окном
            </p>
          </div>
          <Button
            href="#house-80"
            variant="cream"
            className="max-[720px]:[&>span:first-child]:sr-only"
          >
            Смотреть
          </Button>
        </div>
      </div>
    </section>
  );
}
