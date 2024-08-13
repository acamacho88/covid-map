'use client';

import { ReactElement, useEffect, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { csv } from "d3-fetch";
import { splitDataByDate } from "../lib/processData";
import { CovidColumnHeaders } from "../lib/types";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

export default function CovidMap(): ReactElement {
  const [splitData, setSplitData] = useState<any>([]);
  const [dataIndex, setDataIndex] = useState(0);

  const colorScale = ['#eadea9','#fba742','#ff6b09','#d7382e','#aa1e40','#711746','#521829'];
  
  const getFill = (avgCases: number | null): string => {
    return avgCases ? colorScale[Math.min(Math.floor(avgCases / 12), colorScale.length - 1)] : '#f3f3f3';
  }

  useEffect(() => {
    csv<CovidColumnHeaders>("/us-counties-2020.csv").then(counties => {
        const dataSplitByDate = splitDataByDate(counties);
        setSplitData(dataSplitByDate);

        setInterval(() => setDataIndex((original) => original + 1), 1000);
    })
  },[]);

  return (
    <>
      { splitData && splitData.length ? 
        <ComposableMap projection={'geoAlbersUsa'}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => 
              geographies.map((geo) => {
                const cur = splitData[dataIndex].find((c: any) => c.geoid.split('-')[1] === geo.id)
                return (
                  <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getFill(cur ? cur.cases_avg_per_100k : null)}/>
                );
              })
            }
          </Geographies>
        </ComposableMap>
        : <></>
      }
    </>
  )
}