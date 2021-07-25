import { format } from 'date-fns';
import { SummaryActivity } from '../types/strava-types';
import { formatSecondsToTime } from './format-seconds-to-time';
import { FormattedValue } from './stats';

export const timeByYearAndMonth = (
  records: SummaryActivity[]
): Record<number, FormattedValue> => {
  const years: Record<string, number> = records.reduce((prev, current) => {
    const key = format(current.date, 'yyyy-MM');
    if (!prev[key]) {
      prev[key] = 0;
    }
    prev[key] += current.moving_time;
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
