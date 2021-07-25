import { StravaStats } from '../types/stats';
import { topTenReport } from './top-ten-report';

import { html } from './report.html';
import { yearOrMonthlyReport } from './year-or-monthly-report';

export const generateReport = (stats: StravaStats, userName = '') => {
  let output;
  const topTenDistance = topTenReport(stats.topTenDistance);
  const topTenAvgSpeed = topTenReport(stats.topTenAvgSpeed);
  const distanceByYear = yearOrMonthlyReport(stats.distanceByYear);
  const distanceByYearAndMonth = yearOrMonthlyReport(stats.distanceByYearAndMonth);
  const timeByYear = yearOrMonthlyReport(stats.timeByYear);
  const timeByYearAndMonth = yearOrMonthlyReport(stats.timeByYearAndMonth);

  output = html.replace('{{user}}', userName);
  output = output.replace('{{distances}}', topTenDistance);
  output = output.replace('{{speeds}}', topTenAvgSpeed);
  output = output.replace('{{distanceByYear}}', distanceByYear);
  output = output.replace('{{distanceByYearAndMonth}}', distanceByYearAndMonth);
  output = output.replace('{{timeByYear}}', timeByYear);
  output = output.replace('{{timeByYearAndMonth}}', timeByYearAndMonth);

  return output;
};
