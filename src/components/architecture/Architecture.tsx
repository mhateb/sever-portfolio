import Image from "next/image";

export function Architecture() {
  return (
    <section className="bg-ink text-cream" id="technology" aria-labelledby="architecture-title">
      <div className="mx-auto w-full max-w-page px-pad py-16 stack:py-[88px]">
        <div className="flex flex-col items-start gap-6 stack:flex-row stack:justify-between wide:items-end">
          <div>
            <p className="text-index font-medium tracking-index text-sage uppercase">
              03 / Архитектура заботы
            </p>
            <h2 className="mt-5 text-section font-medium tracking-title" id="architecture-title">
              Снаружи — эстетика.
              <br />
              Внутри — ваша жизнь.
            </h2>
          </div>
          <p className="w-auto text-[15px] leading-[1.25] text-sage stack:w-[180px] wide:w-[270px]">
            Ничего случайного.
            <br />
            От первого луча солнца
            <br />
            до последней розетки.
          </p>
        </div>

        <div className="mt-[46px] flex flex-col gap-5 stack:grid stack:grid-cols-[minmax(0,1.38fr)_minmax(280px,1fr)]">
          <div className="relative min-h-[350px] overflow-hidden stack:min-h-[420px] wide:min-h-[530px]">
            <Image
              className="object-cover"
              src="/images/interior.png"
              alt="Гостиная дома Север: светлое дерево, мягкий диван и панорамное окно в лес"
              fill
              sizes="(max-width: 900px) 100vw, 760px"
            />
            <p className="relative z-10 m-6 inline-block bg-cream px-3 py-2 text-[9px] leading-[1.25] font-medium tracking-index text-ink uppercase">
              01 / Свет без границ
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <div className="flex flex-1 flex-col gap-[18px] bg-plan px-6 py-[22px] text-ink">
              <p className="text-index font-medium tracking-index text-sage uppercase">
                02 / Каждый метр работает
              </p>
              <Image
                className="h-auto w-[359px] max-w-full"
                src="/images/floorplan.svg"
                width={359}
                height={157}
                unoptimized
                alt="Планировка Север 80: гостиная, две спальни и санузлы"
              />
              <div className="mt-auto flex justify-between gap-3 text-[12px] leading-[1.25] font-medium">
                <p>Север 80</p>
                <p className="text-[11px] font-normal text-sage">2 спальни · 80 м²</p>
              </div>
            </div>
            <div className="flex min-h-56 flex-col justify-between gap-7 bg-forest p-6">
              <p className="text-index font-medium tracking-index text-sage uppercase">
                03 / Создан для нашей зимы
              </p>
              <p className="text-warm font-medium tracking-snug text-lime">Тепло даже в −35°</p>
              <p className="max-w-[36ch] text-[14px] leading-[1.25]">
                200 мм утепления, тёплый пол и энергосберегающие стеклопакеты.
                Комфортно в любой сезон.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
