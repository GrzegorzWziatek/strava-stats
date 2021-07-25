import { format } from 'date-fns';
import { SummaryActivity } from '../types/strava-types';

export const distanceByYearAndMonth = (
  records: SummaryActivity[]
): Record<number, number> => {
  return records.reduce((prev, current) => {
    const key = format(current.date, 'yyyy-MM');
    if (!prev[key]) {
      prev[key] = 0;
    }
    prev[key] += current.distanceKM;
    return prev;
  }, {});
};
