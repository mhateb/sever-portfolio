import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Как север/ обращается с именем и телефоном, которые вы оставляете в форме консультации.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-page px-pad pt-[72px] pb-[120px]">
      <p className="text-index font-medium tracking-index text-muted">Документ</p>
      <h1 className="mt-[18px] max-w-[16ch] text-page font-medium tracking-title">
        Политика конфиденциальности
      </h1>
      <div className="mt-9 grid max-w-[62ch] gap-[18px] text-[16px] leading-[1.45] text-muted">
        <p className="text-ink">
          Форма на сайте нужна, чтобы подобрать дом и прислать каталог с
          расчётом. Мы спрашиваем имя, телефон и ориентир по площади.
        </p>
        <p>
          Эти данные видит команда север/, которая отвечает на заявки. Мы не
          передаём их для чужой рекламы и не звоним без повода: напишем по
          делу и только по указанному номеру.
        </p>
        <p>
          Заявку можно отозвать письмом на hello@sever.house — удалим
          обращение и перестанем писать.
        </p>
      </div>
    </main>
  );
}
