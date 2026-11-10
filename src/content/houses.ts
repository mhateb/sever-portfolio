export type HouseSize = "45" | "80" | "120";

export type House = {
  id: HouseSize;
  name: string;
  areaLabel: string;
  tagline: string;
  specs: string;
  price: string;
  image: string;
  imageAlt: string;
  featured?: string;
};

export const houses: House[] = [
  {
    id: "45",
    name: "Север 45",
    areaLabel: "45 м²",
    tagline: "Для двоих и больших планов",
    specs: "1 спальня · кухня-гостиная",
    price: "от 5,9 млн ₽",
    image: "/images/house-45.png",
    imageAlt: "Компактный модульный дом Север 45 в сосновом лесу",
  },
  {
    id: "80",
    name: "Север 80",
    areaLabel: "80 м²",
    tagline: "Место для всей вашей жизни",
    specs: "2 спальни · кухня-гостиная",
    price: "от 8,4 млн ₽",
    image: "/images/house-80.png",
    imageAlt: "Модульный дом Север 80 с террасой среди сосен",
    featured: "Выбор наших клиентов",
  },
  {
    id: "120",
    name: "Север 120",
    areaLabel: "120 м²",
    tagline: "Больше пространства для близких",
    specs: "3 спальни · 2 санузла",
    price: "от 11,8 млн ₽",
    image: "/images/house-120.png",
    imageAlt: "Просторный модульный дом Север 120 с двором среди деревьев",
  },
];
