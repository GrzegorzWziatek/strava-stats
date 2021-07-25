import { SummaryActivity } from '../types/strava-types';

/*
 * calculates date & converts distance & speed to km/h
 * sorts by time descending
 */

export const transformRecords = (records: SummaryActivity[]) => {
  return records
    .map((r) => {
      r.date = new Date(r.start_date);
      r.distanceKM = r.distance / 1000;
      r.avgSpeedKM = r.average_speed * 3.6;
      return r;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};
