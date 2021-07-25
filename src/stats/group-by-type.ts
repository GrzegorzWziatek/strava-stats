import { ActivityType, SummaryActivity } from '../types/strava-types';

const createTypeIfNotExists = (
  type: ActivityType,
  obj: Record<string, SummaryActivity[]> = {}
) => {
  if (!Object.prototype.hasOwnProperty.call(obj, type)) {
    obj[type] = [];
  }
};

/*
 * Groups activities by type, ex. Walk, Run, etc
 */
export const groupByType = (
  records: SummaryActivity[]
): Record<string, SummaryActivity[]> => {
  return records.reduce((prev, current) => {
    createTypeIfNotExists(current.type, prev);
    prev[current.type].push(current);
    return prev;
  }, {});
};
