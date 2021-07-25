import { FormattedValue } from '../stats/stats';
import { generateList } from './generate-list';

export const yearOrMonthlyReport = (
  stats: Record<string, Record<string, FormattedValue>>
): string => {
  const lists = [];
  Object.entries(stats).forEach(([type, records]) => {
    const data = Object.entries(records).map(([key, v]) => {
      return `${key} -  ${v.formatted}`;
    })
    lists.push(generateList(type, data));
  });


  return lists.map(list => (`<div class="col-sm-3"> ${list}</div>`)).join('\n');
};
