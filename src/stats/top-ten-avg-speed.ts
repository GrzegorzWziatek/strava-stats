import { SimplifiedActivity, SummaryActivity } from '../types/strava-types';
import { simplifyActivity } from './simplify-activity';

export const topTenAvgSpeed = (
  records: SummaryActivity[]
): SimplifiedActivity[] => {
  const list = [...records];
  list.sort((a, b) => a.avgSpeedKM - b.avgSpeedKM).reverse();
  return list.filter((_v, idx) => idx < 10).map((a) => simplifyActivity(a));
};
