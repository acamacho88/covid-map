"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { MapData } from "../../lib/types";
import dayjs from "dayjs";
import Key from "../Key/Key";

import styles from "./covidMapDisplayer.module.scss";

interface CovidMapDisplayerProps {
  dataMaps: MapData[];
}

export default function CovidMapDisplayer({
  dataMaps,
}: CovidMapDisplayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((currIndex) => {
          if (currIndex + 1 <= dataMaps.length - 1) {
            return currIndex + 1;
          } else {
            return 0;
          }
        }),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.infoWrapper}>{/* <Key /> */}</div>
      {dataMaps[currentIndex].dataMap}
    </>
  );
}
