import { houses } from "@/content/houses";
import { HouseCard } from "./HouseCard";

export function Collection() {
  return (
    <section
      className="mx-auto w-full max-w-page px-pad pt-5 pb-[72px] cards:pb-[100px]"
      id="houses"
      aria-labelledby="houses-title"
    >
      <div className="flex flex-col items-start gap-4 cards:flex-row cards:items-start cards:justify-between cards:gap-5 mid:items-end">
        <div>
          <p className="text-index font-medium tracking-index text-muted uppercase">02 / Коллекция</p>
          <h2 className="mt-[18px] text-section font-medium tracking-title" id="houses-title">
            Свой масштаб счастья.
          </h2>
        </div>
        <p className="w-[220px] max-w-full text-left text-[14px] leading-[1.25] text-muted mid:w-[min(290px,100%)]">
          Три дома. Один подход к жизни.
          <br />
          Выберите тот, который ближе вам.
        </p>
      </div>
      <div className="mt-9 grid grid-cols-1 gap-9 cards:grid-cols-3 cards:gap-5">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </section>
  );
}
