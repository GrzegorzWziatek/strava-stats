import { SummaryActivity } from '../types/strava-types';
import { FormattedValue } from './stats';

export const distanceByYear = (
  records: SummaryActivity[]
): Record<number, FormattedValue> => {
  const years =  records.reduce((prev, current) => {
    const year = current.date.getFullYear();
    if (!prev[year]) {
      prev[year] = 0;
    }
    prev[year] += current.distanceKM;
    return prev;
  }, {});

  return Object.entries(years).reduce((prev, [key, value]) => {
    prev[key] = {
      value,
      formatted: (value as number).toFixed(2)
    };
    return prev;
  }, {});
};
