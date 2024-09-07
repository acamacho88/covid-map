import { Suspense } from "react";
import styles from "./page.module.css";
import CovidMapWrapper from "./ui/CovidMapWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<h2>Loading map...</h2>}>
        <CovidMapWrapper />
      </Suspense>
    </main>
  );
}
