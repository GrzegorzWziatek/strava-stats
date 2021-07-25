import { format } from 'date-fns';
import { SimplifiedActivity, SummaryActivity } from '../types/strava-types';

export const simplifyActivity = (
  activity: SummaryActivity
): SimplifiedActivity => {
  return {
    id: activity.id,
    avgSpeedKM: activity.avgSpeedKM,
    name: activity.name,
    date: activity.date,
    distance: activity.distance,
    distanceKM: activity.distanceKM,
    type: activity.type,
    dateStr: format(activity.date, 'yyyy-MM-dd HH:mm'),
    url: `https://www.strava.com/activities/${activity.id}`,
  };
};
