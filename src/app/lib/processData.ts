import { CovidColumnHeaders, CovidDataEntry } from "./types";
import { DSVRowArray } from 'd3-dsv';

export const splitDataByDate = (data: DSVRowArray<CovidColumnHeaders>): CovidDataEntry[][] => {
    const dataSplitByDate: CovidDataEntry[][] = [[]];

    let currentDate = data[0].date;
    let currentIndex = 0;

    data.forEach(item => {
        if (item.date !== currentDate) {
            dataSplitByDate.push([item])
            currentIndex++;
            currentDate = item.date;
        } else {
            dataSplitByDate[currentIndex].push(item);
        }
    })

    return dataSplitByDate;
}