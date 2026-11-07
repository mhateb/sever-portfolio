import type { ReactNode } from "react";
import styles from "./Button.module.css";

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

function classNames(variant: Variant, className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(" ");
}

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
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
