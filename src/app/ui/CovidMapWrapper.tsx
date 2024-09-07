import { csv } from "d3-fetch";
import { splitDataByDate } from "../lib/processData";
import { CovidColumnHeaders, MapData } from "../lib/types";
import CovidMap from "./CovidMap/CovidMap";
import CovidMapDisplayer from "./CovidMapDisplayer/CovidMapDisplayer";

export default async function CovidMapWrapper() {
  const dataYears = ["2020"]; //,'2021','2022','2023'];
  const csvPaths = dataYears.map(
    (year) =>
      `https://raw.githubusercontent.com/nytimes/covid-19-data/master/rolling-averages/us-counties-${year}.csv`
  );

  const csvPromises = csvPaths.map((path) => {
    return new Promise<MapData[]>((resolve, reject) => {
      csv<CovidColumnHeaders>(path).then(async (counties) => {
        const dataSplitByDate = splitDataByDate(counties);

        const dataMaps = dataSplitByDate.map((data) => {
          return {
            dataMap: <CovidMap data={data} />,
            date: data[0].date,
          };
        });

        resolve(dataMaps);
      });
    });
  });

  const dataMapsResults = await Promise.all(csvPromises);
  const dataMaps = dataMapsResults.flat();

  return (
    <>
      {dataMaps && dataMaps.length ? (
        <CovidMapDisplayer dataMaps={dataMaps} />
      ) : (
        <></>
      )}
    </>
  );
}
