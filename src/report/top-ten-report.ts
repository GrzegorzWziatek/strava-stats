import { SimplifiedActivity } from '../types/strava-types';
import { generateLink } from './generate-link';
import { generateTable } from './generate-table';

export const topTenReport = (
  stats: Record<string, SimplifiedActivity[]>
): string => {
  const tableHeadings = ['Date', 'Distance', 'Average speed', 'Name', 'Link'];
  const tables = [];

  Object.entries(stats).forEach(([type, records]) => {
    const data = records.map((v) => [
      v.dateStr,
      v.distanceKM.toFixed(2),
      v.avgSpeedKM.toFixed(2),
      v.name,
      generateLink(v.url),
    ]);
    tables.push(generateTable(type, tableHeadings, data) + '\n ');
  });
  return tables.join('\n');
};
