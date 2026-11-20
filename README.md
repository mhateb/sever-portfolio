# север/

Лендинг бренда модульных домов «север/». Одна страница: герой, коллекция моделей, как устроен дом, шаги стройки, шоу-дом, вопросы и заявка на каталог. Макет свёрстан для десктопа, планшета и телефона.

Заявка не уходит на сервер: форма проверяет имя и телефон в браузере и показывает подтверждение.

## Макет

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/1LD3PgeyAMLDaZO9od5nzt/Untitled?node-id=4-5&m=dev&embed-host=share" allowfullscreen></iframe>

## Стек

- [Next.js](https://nextjs.org) 16, App Router
- React 19
- TypeScript
- CSS Modules, без Tailwind
- ESLint

Шрифт Inter подключается через `next/font`.

## Скрипты

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Скорость

Оценки ниже сняты [Lighthouse](https://developer.chrome.com/docs/lighthouse/) 13.6 с продакшен-сборки (`npm run build && npm run start`), 20 ноября 2026. PageSpeed Insights использует тот же движок, но запускает его со своих серверов по публичному адресу и, если сайт уже живой, добавляет полевые данные Chrome. Пока домена нет, официальный отчёт PageSpeed снять нельзя. `npm run dev` для замера не подходит: там другие бандлы и нет оптимизаций продакшена.

Повторить локально:

```bash
npm run build && npm run start
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-mobile.html
npx lighthouse http://localhost:3000 --preset=desktop --output=html --output-path=./lighthouse-desktop.html
```

Зелёная зона категории — от 90. На телефоне включено стандартное замедление Lighthouse, поэтому цифры ниже, чем на десктопе.

### Телефон

![Производительность 91](https://img.shields.io/badge/Performance-91-0cce6b?style=flat-square)
![Доступность 96](https://img.shields.io/badge/Accessibility-96-0cce6b?style=flat-square)
![Лучшие практики 100](https://img.shields.io/badge/Best_Practices-100-0cce6b?style=flat-square)
![SEO 100](https://img.shields.io/badge/SEO-100-0cce6b?style=flat-square)

### Десктоп

![Производительность 99](https://img.shields.io/badge/Performance-99-0cce6b?style=flat-square)
![Доступность 96](https://img.shields.io/badge/Accessibility-96-0cce6b?style=flat-square)
![Лучшие практики 100](https://img.shields.io/badge/Best_Practices-100-0cce6b?style=flat-square)
![SEO 100](https://img.shields.io/badge/SEO-100-0cce6b?style=flat-square)

| | Телефон | Десктоп | Хорошо, если |
|---|---:|---:|---:|
| Первая отрисовка | 0,9 с | 0,2 с | до 1,8 с |
| Крупнейшая отрисовка | 3,5 с | 0,9 с | до 2,5 с |
| Блокировка потока | 7 мс | 0 мс | до 200 мс |
| Сдвиг вёрстки | 0 | 0 | до 0,1 |

Крупнейшая отрисовка на телефоне в жёлтой зоне. Остальные виталы и все четыре категории зелёные.

## Структура

- `src/app` — страницы: главная, политика конфиденциальности, 404
- `src/components` — секции лендинга
- `src/content` — тексты домов, шагов и вопросов
- `public/images` — фото и план дома
