import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContents}>
        <div className={styles.headerLogo}>
          <Link href={"/"}>mokumoku</Link>
        </div>
        <div className={styles.headerNav}>
          <div className={styles.headerNavItem}>
            <Link href={"/HelloWorld"}>HelloWorld</Link>
          </div>
          <div className={styles.headerNavItem}>
            <Link href={"/HelloWorld"}>HelloWorld</Link>
          </div>
          <div className={styles.headerNavItem}>
            <Link href={"/HelloWorld"}>HelloWorld</Link>
          </div>
          <div className={styles.headerNavItem}>
            <Link href={"/HelloWorld"}>HelloWorld</Link>
          </div>
          <div className={styles.headerNavItem}>
            <Link href={"/HelloWorld"}>HelloWorld</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
