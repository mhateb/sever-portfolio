import type { HouseSize } from "@/content/houses";

export type SelectedSize = HouseSize | "unknown";

export const HOUSE_SELECT_EVENT = "sever:select-house";

export function requestHouse(size: SelectedSize) {
  window.dispatchEvent(
    new CustomEvent<SelectedSize>(HOUSE_SELECT_EVENT, { detail: size }),
  );
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
