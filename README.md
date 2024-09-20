This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I had the idea to see a time lapse of the NYT's COVID-19 data of the entire country over all of the recorded years, 2020-2023. When I couldn't find one, I decided to make one myself.

Given the colossal dataset (several columns for every county in the US for every day for a little over three years) instead of viewing the animation live in the browser, which could be a slow experience, I decidedd to take a screenshot of the map every day and turn this into a video I could upload onto Vimeo and share.

The video can be found here: https://vimeo.com/1009692436?share=copy

That said, in the CovidMapDisplayer.tsx file, the top useEffect can be uncommented (and the bottom useEffect commented out) to see the animation without taking a screenshot of every day.

The years being displayed are controlled in the dataYears array at the top of the CovidMapWrapper.tsx file, the most the app can handle at once at the moment is two years.

I also added a news box in the upper left corner of the screen to provide a little context and orientation with both worldwide COVID milestones and relevant non-COVID related news stories.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Resources used

This app was created using the New York Times' publicly available data on the COVID-19 pandemic found at their github page here: https://github.com/nytimes/covid-19-data

Used react-simple-maps to display the data: https://www.react-simple-maps.io/

Used html2canvas to create the screenshots for each date: https://html2canvas.hertzen.com/

The dates for the calendar component were gathered from the following Wikipedia pages and Johns Hopkins article:

https://en.wikipedia.org/wiki/2020

https://en.wikipedia.org/wiki/2021

https://en.wikipedia.org/wiki/2022

https://en.wikipedia.org/wiki/2023

https://coronavirus.jhu.edu/pandemic-data-initiative/data-outlook/comparing-cases-deaths-and-hospitalizations-indicates-omicron-less-deadly
