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

## Структура

- `src/app` — страницы: главная, политика конфиденциальности, 404
- `src/components` — секции лендинга
- `src/content` — тексты домов, шагов и вопросов
- `public/images` — фото и план дома
