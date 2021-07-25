import { SummaryActivity } from '../types/strava-types';

export const distanceByYear = (
  records: SummaryActivity[]
): Record<number, number> => {
  return records.reduce((prev, current) => {
    const year = current.date.getFullYear();
    if (!prev[year]) {
      prev[year] = 0;
    }
    prev[year] += current.distanceKM;
    return prev;
  }, {});
};
