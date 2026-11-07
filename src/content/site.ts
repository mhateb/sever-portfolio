export const phone = {
  display: "+7 (495) 120-24-24",
  href: "tel:+74951202424",
} as const;

export const email = {
  display: "hello@sever.house",
  href: "mailto:hello@sever.house",
} as const;

export const mainNav = [
  { href: "#houses", label: "Дома" },
  { href: "#technology", label: "Технология" },
  { href: "#process", label: "Как строим" },
  { href: "#about", label: "О нас" },
] as const;

export const footerSections = [
  { href: "#houses", label: "Коллекция домов" },
  { href: "#technology", label: "Технология" },
  { href: "#showroom", label: "Шоу-дом" },
] as const;

export const footerSocial = [
  { href: "https://t.me/", label: "Telegram", external: true },
  { href: "https://vk.com/", label: "ВКонтакте", external: true },
  { href: "#contact", label: "Смотреть каталог", external: false },
] as const;
