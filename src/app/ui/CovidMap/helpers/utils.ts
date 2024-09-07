import { colorScale } from "@/app/lib/colorScale";

export const getFill = (avgCases: number | null): string => {
  if (!avgCases) {
    return "#d4d4d4";
  }

  const foundColor = colorScale.find((item) => item.cases > Number(avgCases));

  return foundColor?.color || "";
};
