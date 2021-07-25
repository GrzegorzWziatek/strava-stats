# strava-stats

This application is downloading all strava stats for user that is using this application.
Stats are grouped by activity type. And html report and json data will be generated.


## How to use this app

* create strava application as in guide: [https://developers.strava.com/docs/getting-started/#account](https://developers.strava.com/docs/getting-started/#account)
* set authorization callback domain in strava app to:`localhost`
* clone this repository
* install dependencies by `yarn install` or `npm i`
* run build task by `yarn build` or `npm run build`
* execute `cd build`
* execute `node main/index.js`
* follow application instructions
* stats will be downloaded and report.html file will be generated (alongside with raw activity data & stats json file)

## How to use app from release
* download app from release page: [https://github.com/GrzegorzWziatek/strava-stats/releases/tag/1.0.0](https://github.com/GrzegorzWziatek/strava-stats/releases/tag/1.0.0)
* open app in your terminal or cmd. 
* follow application instructions
* if you will open by doubleclick it will save report data to your home direcotry


