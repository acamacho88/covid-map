import { Suspense } from "react";
import styles from "./page.module.css";
import CovidMap from "./ui/covid-map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<h2>Loading map...</h2>}>
        <CovidMap />
      </Suspense>
    </main>
  );
}
