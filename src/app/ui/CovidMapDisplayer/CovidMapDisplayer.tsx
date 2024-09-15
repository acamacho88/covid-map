"use client";

import { useEffect, useState } from "react";
import { MapData } from "../../lib/types";
import html2canvas from "html2canvas";

interface CovidMapDisplayerProps {
  dataMaps: MapData[];
}

export default function CovidMapDisplayer({
  dataMaps,
}: CovidMapDisplayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // uncomment this to see the progression without screenshots
  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentIndex((currIndex) => {
  //         if (currIndex + 1 <= dataMaps.length - 1) {
  //           return currIndex + 1;
  //         } else {
  //           return 0;
  //         }
  //       }),
  //     1500
  //   );

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // uncomment this to save a screenshot for each day
  useEffect(() => {
    const screenshotTimer = setTimeout(() => {
      html2canvas(document.body).then((canvas) => {
        const data = canvas.toDataURL("image/jpg");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
          link.href = data;
          link.download = `covid_map_image_${currentIndex}.jpg`;

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setCurrentIndex((currIndex) => {
            if (currIndex + 1 <= dataMaps.length - 1) {
              return currIndex + 1;
            } else {
              return 0;
            }
          });
        }
      });
    }, 1500);

    return () => {
      clearTimeout(screenshotTimer);
    };
  }, [currentIndex]);

  return <>{dataMaps[currentIndex].dataMap}</>;
}
