import { ColorScale } from "@/app/lib/colorScale";

import styles from "./keyElement.module.scss";

export default function KeyElement({
  item,
  index,
}: {
  item: ColorScale;
  index: number;
}) {
  return (
    <div
      className={styles.caseLabel}
      // style={{ left: `${30 * (index + 1) - 8}px` }}
    >
      {item.cases}
    </div>
  );
}
