import * as fs from 'fs';
import { generateReport } from './report/generate-report';
import { StravaRequest } from './request/strava-request';
import { prepareStats } from './stats/stats';

const main = async (local = false) => {
  const stravaRequest = new StravaRequest(local);
  let activities;

  if (local) {
    try {
      activities = JSON.parse(
        fs.readFileSync('activities.json', { encoding: 'utf-8' })
      );
    } catch (_e) {
      console.log('Error when trying to read activities.json file');
    }
  } else {
    await stravaRequest.init();
    activities = await stravaRequest.activitesRequest();
  }

  const stats = prepareStats(activities);
  const reportData = generateReport(stats, stravaRequest.athlete?.firstname || '');
  await fs.promises.writeFile('stats.json', JSON.stringify(stats, undefined, 2), { encoding: 'utf-8' });
  await fs.promises.writeFile('report.html', reportData, { encoding: 'utf-8' });
  console.log('Report generated.');
};

main(false);
