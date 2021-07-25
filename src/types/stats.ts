import { FormattedValue } from '../stats/stats';
import { SimplifiedActivity } from './strava-types';

export interface StravaStats {
  topTenDistance: Record<string, SimplifiedActivity[]>;
  topTenAvgSpeed: Record<string, SimplifiedActivity[]>;
  distanceByYear: Record<string, Record<string, FormattedValue>>;
  distanceByYearAndMonth: Record<string, Record<string, FormattedValue>>;
  timeByYear: Record<string, Record<string, FormattedValue>>;
  timeByYearAndMonth: Record<string, Record<string, FormattedValue>>;
}
