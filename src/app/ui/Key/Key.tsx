import { colorScale } from "@/app/lib/colorScale";
import cc from "classcat";
import KeyElement from "./KeyElement/KeyElement";

import styles from "./key.module.scss";

export default function Key() {
  return (
    <div className={styles.outerWrapper}>
      <p className={styles.label}>
        AVERAGE DAILY CASES PER 100,000 PEOPLE IN PAST WEEK
      </p>
      <div className={styles.scaleWrapper}>
        {colorScale.map((item, index) => {
          return (
            <div
              className={cc({
                [styles.scaleSegment]: true,
                [styles.rightBorder]: index % 2 === 0,
              })}
              style={{ backgroundColor: item.color }}
            ></div>
          );
        })}
      </div>
      <div className={styles.caseLabelsWrapper}>
        {colorScale.map((item, index) => {
          return (
            index % 2 === 0 && (
              <KeyElement key={item.cases} item={item} index={index} />
            )
          );
        })}
      </div>
    </div>
  );
}
