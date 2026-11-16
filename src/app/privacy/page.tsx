import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Как север/ обращается с именем и телефоном, которые вы оставляете в форме консультации.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>Документ</p>
      <h1 className={styles.title}>Политика конфиденциальности</h1>
      <div className={styles.copy}>
        <p>
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
