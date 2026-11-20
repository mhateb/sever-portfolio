const stats = [
  { value: "90 дней", label: "от идеи до новоселья" },
  { value: "от 5,9 млн ₽", label: "с готовой отделкой" },
  { value: "30 лет", label: "гарантия на каркас" },
] as const;

export function Stats() {
  return (
    <section className="mx-auto w-full max-w-page border-b border-line-soft" aria-label="Коротко о домах">
      <ul className="m-0 grid list-none grid-cols-3 gap-3 px-pad py-6 phone:gap-6 phone:py-8">
        {stats.map((item) => (
          <li key={item.label}>
            <p className="text-stat font-medium">{item.value}</p>
            <p className="mt-2 text-caption text-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
