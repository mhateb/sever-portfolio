import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "lime" | "cream" | "dark";

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButton = Common & {
  href: string;
};

type ActionButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink",
  cream: "bg-cream text-ink",
  dark: "bg-ink text-cream focus-lime [&_[data-arrow]]:text-lime",
};

function classNames(variant: Variant, className?: string) {
  return cx(
    "inline-flex w-fit items-center gap-[22px] self-start border-0 px-[22px] py-[18px] text-[14px] leading-[1.18] font-medium whitespace-nowrap hover:brightness-[0.97] focus-ink disabled:cursor-default disabled:opacity-70 disabled:filter-none",
    variants[variant],
    className,
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span data-arrow="" aria-hidden="true" className="text-[22px] leading-none font-normal">
        ↗
      </span>
    </>
  );
}

export function Button(props: LinkButton | ActionButton) {
  const variant = props.variant ?? "lime";
  const className = classNames(variant, props.className);

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http");
    return (
      <a
        className={className}
        href={props.href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        <Content>{props.children}</Content>
      </a>
    );
  }

  const action = props as ActionButton;
  return (
    <button
      className={className}
      type={action.type ?? "button"}
      onClick={action.onClick}
      disabled={action.disabled}
    >
      <Content>{action.children}</Content>
    </button>
  );
}
