import { steps } from "@/content/steps";

export function Process() {
  return (
    <section
      className="mx-auto w-full max-w-page px-pad py-16 phone:py-[88px]"
      id="process"
      aria-labelledby="process-title"
    >
      <p className="text-index font-medium tracking-index text-muted uppercase">
        04 / От первого разговора до первого кофе
      </p>
      <h2 className="mt-7 text-section font-medium tracking-title phone:mt-[50px]" id="process-title">
        Вы живёте. Мы строим.
      </h2>
      <ol className="m-0 mt-7 grid list-none grid-cols-1 gap-0 p-0 phone:mt-[50px] phone:grid-cols-2 phone:gap-x-7 phone:gap-y-8 wide:grid-cols-4 wide:gap-7">
        {steps.map((step) => (
          <li
            key={step.index}
            className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 gap-y-3.5 border-t border-line py-[21px] phone:flex phone:flex-col phone:gap-6 phone:py-0 phone:pt-5"
          >
            <p className="text-[2rem] leading-none text-muted phone:text-[2.75rem]">{step.index}</p>
            <div>
              <h3 className="text-[20px] leading-[1.25] font-medium phone:text-[21px]">{step.title}</h3>
              <p className="mt-3.5 text-[14px] leading-[1.25] text-muted">{step.text}</p>
              <p className="mt-3.5 text-[11px] leading-[1.25] font-medium">{step.time}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
