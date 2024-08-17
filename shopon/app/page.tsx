import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.men}>
          <div className={styles.text}>
            <a href="">Men</a>
          </div>
        </div>
        <div className={styles.women}>
          <div className={styles.text}>
            <a href="">Women</a>
          </div>
        </div>
      </div>
    </main>
  );
}
