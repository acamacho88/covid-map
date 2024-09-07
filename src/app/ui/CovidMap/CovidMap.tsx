"use client";

import { ReactElement } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { getFill } from "./helpers/utils";
import NewsBox from "../NewsBox/NewsBox";

import styles from "./covidMap.module.scss";
import Key from "../Key/Key";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

interface CovidMapProps {
  data: any;
}

export default function CovidMap({ data }: CovidMapProps): ReactElement {
  const dataDate = data[0].date;
  const date = new Date(dataDate.replaceAll("-", ","));

  return (
    <>
      <div className={styles.sideBoxWrapper}>
        <NewsBox date={date} />
        <Key />
      </div>
      <h3>{date.toDateString()}</h3>
      <ComposableMap projection={"geoAlbersUsa"}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find(
                (c: any) => c.geoid.split("-")[1] === geo.id
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getFill(cur ? cur.cases_avg_per_100k : null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}
