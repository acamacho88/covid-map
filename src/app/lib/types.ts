export interface CovidDataEntry {
    date: string;
    geoid: string;
    county: string;
    state: string;
    cases: string;
    cases_avg: string;
    cases_avg_per_100k: string;
    deaths: string;
    deaths_avg: string;
    deaths_avg_per_100k: string;
}

export type CovidColumnHeaders = 'date' | 'geoid' | 'county' | 'state' | 'cases' |
 'cases_avg' | 'cases_avg_per_100k' | 'deaths' | 'deaths_avg' | 'deaths_avg_per_100k';