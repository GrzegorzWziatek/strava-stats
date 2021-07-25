import { FormattedValue } from '../stats/stats';
import { SimplifiedActivity } from './strava-types';

export interface StravaStats {
  topTenDistance: Record<string, SimplifiedActivity[]>;
  distanceByYear: Record<string, Record<string, number>>;
  distanceByYearAndMonth: Record<string, Record<string, number>>;
  timeByYear: Record<string, Record<string, FormattedValue>>;
  timeByYearAndMonth: Record<string, Record<string, FormattedValue>>;
  topTenAvgSpeed: Record<string, SimplifiedActivity[]>;
}
