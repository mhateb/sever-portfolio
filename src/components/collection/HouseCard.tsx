"use client";

import Image from "next/image";
import type { House } from "@/content/houses";
import { assetSrc } from "@/lib/asset-src";
import { requestHouse } from "@/lib/house-selection";

export function HouseCard({ house }: { house: House }) {
  return (
    <article className="flex min-w-0 scroll-mt-6 flex-col gap-[18px]" id={`house-${house.id}`}>
      <div className="relative h-[clamp(230px,24vw,340px)] overflow-hidden">
        <Image
          className="object-cover"
          src={assetSrc(house.image)}
          alt={house.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
        <div className="relative z-10 flex flex-col items-start gap-1.5 p-3.5">
          <span className="bg-cream px-2.5 py-[7px] text-[11px] leading-[1.25] font-medium">
            {house.areaLabel}
          </span>
          {house.featured ? (
            <span className="bg-lime px-2.5 py-[7px] text-[8px] leading-[1.25] font-medium tracking-index uppercase">
              {house.featured}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-card font-medium">{house.name}</h3>
        <button
          className="border-0 bg-transparent p-0 text-[24px] leading-none focus-ink"
          type="button"
          onClick={() => requestHouse(house.id)}
        >
          <span className="sr-only">Обсудить {house.name}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p className="text-[13px] leading-[1.25] text-muted">{house.tagline}</p>
      <p className="text-[12px] leading-[1.25] text-muted">{house.specs}</p>
      <div className="mt-auto flex items-end justify-between gap-3 border-t border-line pt-[18px]">
        <p className="text-price font-medium">{house.price}</p>
        <p className="text-[10px] leading-[1.25] text-muted">Под ключ</p>
      </div>
    </article>
  );
}
