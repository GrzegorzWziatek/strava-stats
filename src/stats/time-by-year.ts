import { SummaryActivity } from '../types/strava-types';
import { formatSecondsToTime } from './format-seconds-to-time';
import { FormattedValue } from './stats';

export const timeByYear = (
  records: SummaryActivity[]
): Record<number, FormattedValue> => {
  const years: Record<string, number> = records.reduce((prev, current) => {
    const year = current.date.getFullYear();
    if (!prev[year]) {
      prev[year] = 0;
    }
    prev[year] += current.moving_time;
    return prev;
  }, {});

  return Object.entries(years).reduce((prev, [key, value]) => {
    prev[key] = {
      value,
      formatted: formatSecondsToTime(value),
    };
    return prev;
  }, {});
};
