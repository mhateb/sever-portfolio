# север/

Лендинг бренда модульных домов «север/». Одна страница: герой, коллекция моделей, как устроен дом, шаги стройки, шоу-дом, вопросы и заявка на каталог. Макет свёрстан для десктопа, планшета и телефона.

Заявка не уходит на сервер: форма проверяет имя и телефон в браузере и показывает подтверждение.

Сайт опубликован на [GitHub Pages](https://mhateb.github.io/sever-portfolio/).

## Макет

[Макет лендинга в Figma](https://www.figma.com/design/1LD3PgeyAMLDaZO9od5nzt/Untitled?node-id=4-5&m=dev)

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

Оценки ниже сняты [Lighthouse](https://developer.chrome.com/docs/lighthouse/) 13.6 с опубликованного сайта [mhateb.github.io/sever-portfolio](https://mhateb.github.io/sever-portfolio/), 20 ноября 2026. Замер шёл с локальной машины. На телефоне включено стандартное замедление Lighthouse, поэтому цифры ниже, чем на десктопе. `npm run dev` для такого замера не подходит: там другие бандлы и нет оптимизаций продакшена. Локальный `npm run start` тоже даст другие числа: там Next сжимает картинки, а GitHub Pages отдаёт их как есть.

Повторить по живому адресу:

```bash
npx lighthouse https://mhateb.github.io/sever-portfolio/ --output=html --output-path=./lighthouse-mobile.html
npx lighthouse https://mhateb.github.io/sever-portfolio/ --preset=desktop --output=html --output-path=./lighthouse-desktop.html
```

Зелёная зона категории — от 90.

### Телефон

![Производительность 89](https://img.shields.io/badge/Performance-89-ffa400?style=flat-square)
![Доступность 96](https://img.shields.io/badge/Accessibility-96-0cce6b?style=flat-square)
![Лучшие практики 100](https://img.shields.io/badge/Best_Practices-100-0cce6b?style=flat-square)
![SEO 100](https://img.shields.io/badge/SEO-100-0cce6b?style=flat-square)

### Десктоп

![Производительность 100](https://img.shields.io/badge/Performance-100-0cce6b?style=flat-square)
![Доступность 96](https://img.shields.io/badge/Accessibility-96-0cce6b?style=flat-square)
![Лучшие практики 100](https://img.shields.io/badge/Best_Practices-100-0cce6b?style=flat-square)
![SEO 100](https://img.shields.io/badge/SEO-100-0cce6b?style=flat-square)

| | Телефон | Десктоп | Хорошо, если |
|---|---:|---:|---:|
| Первая отрисовка | 1,1 с | 0,4 с | до 1,8 с |
| Крупнейшая отрисовка | 3,8 с | 0,8 с | до 2,5 с |
| Блокировка потока | 50 мс | 0 мс | до 200 мс |
| Сдвиг вёрстки | 0 | 0 | до 0,1 |

На телефоне производительность 89 и крупнейшая отрисовка 3,8 с в жёлтой зоне. Доступность, лучшие практики, SEO и остальные виталы зелёные. На десктопе зелёные все четыре категории и все виталы.

## Структура

- `src/app` — страницы: главная, политика конфиденциальности, 404
- `src/components` — секции лендинга
- `src/content` — тексты домов, шагов и вопросов
- `public/images` — фото и план дома
