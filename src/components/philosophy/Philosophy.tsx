export function Philosophy() {
  return (
    <section
      className="mx-auto w-full max-w-page px-pad py-[72px] mid:py-[100px]"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-1 items-start gap-5 mid:grid-cols-[300px_minmax(0,1fr)] mid:gap-12">
        <p className="text-index font-medium tracking-index text-muted uppercase">01 / Философия</p>
        <div className="flex flex-col gap-7">
          <h2 className="text-philosophy font-medium tracking-title" id="about-title">
            Не просто за город.
            <br />
            К себе настоящему.
          </h2>
          <div className="grid grid-cols-1 gap-4 phone:grid-cols-2 phone:gap-6">
            <p className="text-[17px] leading-[1.25]">
              Утро без будильника. Кофе на террасе. Лес, который начинается у
              порога. Мы создаём дома, в которых легко замедлиться и
              почувствовать главное.
            </p>
            <p className="text-[15px] leading-[1.25] text-muted">
              Архитектура без лишнего. Натуральные материалы, много света и
              каждый метр — для жизни. Всё готово к вашему первому вечеру дома.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
