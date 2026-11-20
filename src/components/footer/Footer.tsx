import Link from "next/link";
import { email, footerSections, footerSocial, phone } from "@/content/site";

const focus = "focus-lime";

export function Footer() {
  return (
    <footer className="overflow-clip bg-ink text-cream">
      <div className="@container mx-auto w-full max-w-page px-pad pt-10 pb-[calc(24px+2.5cqi)] phone:pt-14">
        <div className="flex flex-col items-start gap-8 phone:flex-row phone:justify-between phone:gap-10">
          <div>
            <p className="text-[9px] leading-[1.3] font-medium tracking-badge text-sage uppercase">
              Начнём с разговора
            </p>
            <a className={`mt-2.5 block text-[clamp(1.5rem,2vw,1.75rem)] leading-[1.3] font-medium ${focus}`} href={phone.href}>
              {phone.display}
            </a>
            <a className={`mt-2.5 inline-block text-[14px] leading-[1.3] text-sage ${focus}`} href={email.href}>
              {email.display}
            </a>
          </div>
          <div className="flex gap-8 phone:gap-[60px]">
            <nav className="flex flex-col gap-3 text-[12px] leading-[1.3]" aria-label="Разделы">
              {footerSections.map((item) => (
                <Link key={item.href} className={focus} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3 text-[12px] leading-[1.3]" aria-label="Ещё">
              {footerSocial.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    className={focus}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link key={item.label} className={focus} href={item.href}>
                    {item.label} <span aria-hidden="true">↗</span>
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>

        <p className="mt-8 mb-2 text-[27.8cqi] leading-[0.78] font-bold tracking-mark whitespace-nowrap phone:mt-11">
          север/
        </p>

        <div className="mt-3 flex flex-col items-start gap-4 border-t border-footer-line pt-5 text-[9px] leading-[1.3] text-sage phone:flex-row phone:justify-between">
          <p>© север, 2026 · Концепция бренда</p>
          <Link className={focus} href="/privacy">
            Политика конфиденциальности
          </Link>
          <p>Дома, в которых хочется жить.</p>
        </div>
      </div>
    </footer>
  );
}
