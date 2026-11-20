import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-page px-pad pt-24 pb-[140px]">
      <p className="text-index font-medium tracking-index text-muted">404</p>
      <h1 className="mt-[18px] text-empty font-medium tracking-title">
        Такой страницы нет.
      </h1>
      <p className="mt-5 max-w-[36ch] text-[16px] leading-[1.4] text-muted">
        Дома, каталог и заявка остались на главной.
      </p>
      <Link className="mt-7 inline-flex items-center gap-2.5 text-sm font-medium focus-ink" href="/">
        На главную <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
