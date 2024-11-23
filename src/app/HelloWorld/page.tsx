import HelloWorldContents from "@/features/routes/HelloWorld/page";
import styles from "./page.module.css";

export default function HelloWorld() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HelloWorldContents />
      </main>
    </div>
  );
}
