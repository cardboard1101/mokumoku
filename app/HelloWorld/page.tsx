import styles from "./page.module.css";

export default function HelloWorld() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello World
      </main>
    </div>
  );
}
