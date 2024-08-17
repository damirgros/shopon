import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.men}>
          <Link href="/men" className={styles.text}>
            Men
          </Link>
        </div>
        <div className={styles.women}>
          <Link href="/women" className={styles.text}>
            Women
          </Link>
        </div>
      </div>
    </main>
  );
}
