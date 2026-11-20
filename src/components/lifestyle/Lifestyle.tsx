import Image from "next/image";
import { assetSrc } from "@/lib/asset-src";

export function Lifestyle() {
  return (
    <section className="relative min-h-[650px] overflow-hidden text-paper phone:min-h-[620px]" id="showroom" aria-labelledby="showroom-title">
      <Image
        className="object-cover"
        src={assetSrc("/images/lifestyle.png")}
        alt="Терраса дома: деревянное кресло, плед и утренний кофе в сосновом лесу"
        fill
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-page flex-col justify-between px-pad py-6 phone:min-h-[620px] phone:py-10">
        <div className="flex justify-between gap-4 text-[9px] leading-[1.3] font-medium tracking-index uppercase">
          <p>Не просто дом. Другой ритм.</p>
          <p>05 / Жизнь</p>
        </div>
        <div className="w-full bg-cream px-5 py-6 text-ink phone:w-[min(460px,100%)] phone:px-8 phone:py-[30px]">
          <p className="text-[9px] leading-[1.3] font-medium tracking-index text-muted uppercase">
            Прочувствуйте, прежде чем решиться
          </p>
          <h2 className="mt-[22px] text-lifestyle font-medium tracking-snug" id="showroom-title">
            Некоторые вещи
            <br />
            нужно почувствовать.
          </h2>
          <p className="mt-[22px] text-[14px] leading-[1.3] text-muted">
            Приезжайте в наш шоу-дом. Откройте окна, пройдитесь босиком,
            представьте здесь своё утро.
          </p>
          <a
            className="mt-[22px] flex items-center justify-between border-t border-line-faq pt-3 text-[14px] leading-[1.3] font-medium focus-ink"
            href="#contact"
          >
            <span>Записаться на просмотр</span>
            <span className="text-[22px] font-normal" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
