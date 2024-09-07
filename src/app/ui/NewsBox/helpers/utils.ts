export enum newsCategories {
  covid,
  news,
}

export interface NewsEvent {
  startDate: string;
  endDate?: string;
  text: string;
  category: newsCategories;
}

export const convertStringToDate = (dateString: string): Date => {
  const eventDateSplit = dateString.replaceAll("-", ",");
  return new Date(eventDateSplit);
};

export const newsEvents: NewsEvent[] = [
  {
    startDate: "2020-01-23",
    text: "Wuhan is quarantined",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-01-30",
    text: "WHO declares public health emergency",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-03-11",
    text: "WHO declares COVID-19 a pandemic",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-03-16",
    text: "Dow Jones falls 13%, second largest percentage drop in history",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-03-20",
    text: "Worldwide deaths surpass 10,000, cases surpass a quarter million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-03-26",
    text: "Worldwide deaths surpass 23,000, cases surpass a half million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-04-02",
    text: "Worldwide cases surpass 1 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-04-10",
    text: "Worldwide deaths surpass 100,000",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-04-15",
    text: "Worldwide cases surpass 2 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-04-27",
    text: "Worldwide cases surpass 3 million, US cases surpass 1 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-05-14",
    text: "Worldwide deaths surpass 300,000",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-05-21",
    text: "Worldwide cases surpass 5 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-05-25",
    text: "George Floyd murdered by police in Minneapolis",
    category: newsCategories.news,
  },
  {
    startDate: "2020-05-27",
    text: "US deaths surpass 100,000",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-06-06",
    endDate: "2020-06-30",
    text: "George Floyd protests",
    category: newsCategories.news,
  },
  {
    startDate: "2020-06-08",
    text: "Worldwide cases surpass 7 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-06-22",
    text: "Worldwide cases surpass 9 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-06-28",
    text: "Worldwide cases surpass 10 million, deaths surpass 500,000",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-07-22",
    text: "Worldwide cases surpass 15 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-08-04",
    text: "Beirut explosion kills 218",
    category: newsCategories.news,
  },
  {
    startDate: "2020-08-10",
    text: "Worldwide cases surpass 20 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-08-30",
    text: "Worldwide cases surpass 25 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-09-17",
    text: "Worldwide cases surpass 30 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-09-29",
    text: "Worldwide deaths surpass 1 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-10-05",
    text: "Worldwide cases surpass 35 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-10-19",
    text: "Worldwide cases surpass 40 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-11-01",
    endDate: "2021-03-01",
    text: "Approx: Alpha variant active",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-12-15",
    endDate: "2020-01-15",
    text: "Approx: Alpha variant peaks",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-11-03",
    text: "US Presidential election, Joe Biden defeats Donald Trump",
    category: newsCategories.news,
  },
  {
    startDate: "2020-11-25",
    text: "Worldwide cases surpass 60 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-12-04",
    text: "Worldwide cases surpass 65 million, deaths surpass 1.5 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-12-10",
    text: "US approves Pfizer vaccine for emergency use",
    category: newsCategories.covid,
  },
  {
    startDate: "2020-12-27",
    text: "Worldwide cases surpass 80 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-01-06",
    text: "Insurrection by Donald Trump and followers",
    category: newsCategories.news,
  },
  {
    startDate: "2021-01-15",
    text: "Worldwide deaths surpass 2 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-01-20",
    text: "Inauguration of Joe Biden and Kamala Harris",
    category: newsCategories.news,
  },
  {
    startDate: "2021-03-25",
    text: "Worldwide vaccines administered surpass 500 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-04-17",
    text: "Worldwide deaths surpass 3 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-04-24",
    text: "Worldwide vaccines administered surpass 1 billion",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-06-29",
    text: "Worldwide vaccines administered surpass 3 billion",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-07-01",
    endDate: "2021-11-15",
    text: "Approx: Delta variant active",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-09-01",
    endDate: "2021-10-01",
    text: "Approx: Delta variant peaks",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-07-08",
    text: "Worldwide deaths surpass 4 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2021-11-01",
    text: "Worldwide deaths surpass 5 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-01-01",
    endDate: "2022-04-01",
    text: "Approx: Omicron variant active",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-02-01",
    endDate: "2022-03-01",
    text: "Approx: Omicron variant peaks",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-01-07",
    text: "Worldwide cases surpass 300 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-01-28",
    text: "Worldwide vaccines administered surpass 10 bilion",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-02-24",
    text: "Russia invades Ukraine",
    category: newsCategories.news,
  },
  {
    startDate: "2022-03-07",
    text: "Worldwide deaths surpass 6 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-04-13",
    text: "Worldwide cases surpass 500 million",
    category: newsCategories.covid,
  },
  {
    startDate: "2022-09-19",
    text: "Queen Elizabeth II dies",
    category: newsCategories.news,
  },
  {
    startDate: "2022-10-28",
    text: "Elon Musk buys Twitter",
    category: newsCategories.news,
  },
  {
    startDate: "2022-11-15",
    text: "World population reaches 8 billion",
    category: newsCategories.news,
  },
  {
    startDate: "2023-05-05",
    text: "WHO ends COVID global health emergency status",
    category: newsCategories.covid,
  },
];
