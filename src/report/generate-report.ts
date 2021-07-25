import { StravaStats } from '../types/stats';
import { topTenReport } from './top-ten-report';

import { html } from './report.html';

export const generateReport = (stats: StravaStats, userName = '') => {
  let output;
  const topTenDistance = topTenReport(stats.topTenDistance);
  const topTenAvgSpeed = topTenReport(stats.topTenAvgSpeed);

  output = html.replace('{{user}}', userName);
  output = output.replace('{{distances}}', topTenDistance);
  output = output.replace('{{speeds}}', topTenAvgSpeed);

  return output;
};
