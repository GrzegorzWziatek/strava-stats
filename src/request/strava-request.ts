import * as fs from 'fs';
import { URL } from 'url';
import { getSettings } from '../auth/auth';
import fetch from 'node-fetch';
import { AuthConfig, SummaryAthlete } from '../types/auth';
import { SummaryActivity } from '../types/strava-types';

export class StravaRequest {
  inited = false;
  settings: AuthConfig = null;
  athlete: SummaryAthlete;

  constructor(private readonly local = false) {}

  async init() {
    if (this.inited) {
      return this.settings;
    }

    return getSettings().then((s) => {
      this.settings = s;
      this.athlete = s.token.athlete;
      this.inited = true;
    });
  }

  async activitesRequest(): Promise<SummaryActivity[]> {
    return new Promise(async (resolve) => {
      const records = [];
      let stop = false;
      let page = 1;
      while (!stop) {
        console.log('Fetching activity page: ', page);
        const res = await this.activitesPage(page);
        if (Array.isArray(res) && res.length) {
          records.push(...res);
          stop = res.length !== 200;
        } else {
          stop = true;
        }
        page += 1;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      console.log('Total activities: ', records.length);
      if (!this.local) {
        await fs.promises.writeFile(
          'activities.json',
          JSON.stringify(records, undefined, 2),
          { encoding: 'utf-8' }
        );
        console.log('activities.json file written')
      }
      resolve(records);
    });
  }

  private async activitesPage(page: number): Promise<SummaryActivity[]> {
    const url = new URL('https://www.strava.com/api/v3/athlete/activities');
    url.searchParams.set('per_page', '200');
    url.searchParams.set('page', page.toString());

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.settings.token.access_token}`,
      },
    });

    return response.json();
  }
}
