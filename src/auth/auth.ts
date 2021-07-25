import * as fs from 'fs';
import * as inquirer from 'inquirer';
import fetch from 'node-fetch';
import open from 'open';
import { URL, URLSearchParams } from 'url';
import { AuthConfig } from '../types/auth';

const configFile = 'config.json'

const storeSettings = async (settings) => {
  // store settings
  return fs.promises.writeFile(
    configFile,
    JSON.stringify(settings, undefined, 2),
    { encoding: 'utf-8' }
  );
};

const exchangeToken = async (code: string, settings: AuthConfig) => {
  const params = new URLSearchParams();
  params.append('client_id', settings.clientId);
  params.append('client_secret', settings.clientSecret);
  params.append('code', code);
  params.append('grant_type', 'authorization_code');

  const response = await fetch('https://www.strava.com/api/v3/oauth/token', {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  });
  return response.json();
};

export const getSettings = async (): Promise<AuthConfig> => {
  let settings: AuthConfig = JSON.parse(
    await fs.promises
      .readFile(configFile, { encoding: 'utf-8' })
      .catch(() => '{}')
  );
  const edgeTimestamp = Math.ceil(new Date().getTime() / 1000 + 1800);

  if (settings.token && settings.token?.expires_at > edgeTimestamp) {
    return settings;
  }

  if (!settings.clientId || !settings.clientSecret) {
    settings = await inquirer.prompt([
      {
        type: 'input',
        name: 'clientId',
        message: 'What is your strava client id?',
      },
      {
        type: 'input',
        name: 'clientSecret',
        message: 'What is your strava client secret?',
      },
    ]);
  }
  // store settings
  await storeSettings(settings);

  if (!settings.token || settings.token?.expires_at < edgeTimestamp) {
    const url = new URL('https://www.strava.com/oauth/authorize');
    url.searchParams.set('client_id', settings.clientId);
    url.searchParams.set('redirect_uri', 'http://localhost/strava');
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('approval_prompt', 'auto');
    url.searchParams.set('scope', 'read,activity:read');
    await open(url.toString());
  }

  const stravaResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'code',
      message:
        'After allowing strava to access your account please copy url you were redirected to',
    },
  ]);
  const stravaCodeUrl = new URL(stravaResponse.code);
  const code = stravaCodeUrl.searchParams.get('code');

  settings.token = await exchangeToken(code, settings);

  await storeSettings(settings);
  return settings;
};
