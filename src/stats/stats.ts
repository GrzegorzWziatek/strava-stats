import { StravaStats } from '../types/stats';
import { SummaryActivity } from '../types/strava-types';
import { distanceByYear } from './distance-by-year';
import { distanceByYearAndMonth } from './distance-by-year-and-month';
import { groupByType } from './group-by-type';
import { timeByYear } from './time-by-year';
import { timeByYearAndMonth } from './time-by-year-and-month';
import { topTenAvgSpeed } from './top-ten-avg-speed';
import { topTenDistance } from './top-ten-distance';
import { transformRecords } from './transform-records';

export interface FormattedValue {
  value: number;
  formatted: string;
}

export const prepareStats = (stats: SummaryActivity[] = []): StravaStats => {
  const transformed = transformRecords(stats);
  const grouped = groupByType(transformed);

  const totals: StravaStats = {} as StravaStats;

  totals.topTenDistance = Object.entries(grouped).reduce(
    (prev, [key, data]) => {
      prev[key] = topTenDistance(data);
      return prev;
    },
    {}
  );

  totals.distanceByYear = Object.entries(grouped).reduce(
    (prev, [key, data]) => {
      prev[key] = distanceByYear(data);
      return prev;
    },
    {}
  );

  totals.distanceByYearAndMonth = Object.entries(grouped).reduce(
    (prev, [key, data]) => {
      prev[key] = distanceByYearAndMonth(data);
      return prev;
    },
    {}
  );

  totals.timeByYear = Object.entries(grouped).reduce((prev, [key, data]) => {
    prev[key] = timeByYear(data);
    return prev;
  }, {});

  totals.timeByYearAndMonth = Object.entries(grouped).reduce(
    (prev, [key, data]) => {
      prev[key] = timeByYearAndMonth(data);
      return prev;
    },
    {}
  );

  totals.topTenAvgSpeed = Object.entries(grouped).reduce(
    (prev, [key, data]) => {
      prev[key] = topTenAvgSpeed(data);
      return prev;
    },
    {}
  );

  return totals;
};
