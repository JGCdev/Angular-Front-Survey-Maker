// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  apiEndpoint :          'http://localhost:8080/api/encuestas/',
  clientEndpoint:        'http://localhost:4200/',
  analyticsUA:           'UA-76107626-25',
  appSecret :            'L|f3|sT00s|-|0RT',
  sessionTime :          1800000, // 30 minutes * 60000 //time in milliseconds
  nameStorage:           'surveymaker',
  appName:               'Survey Maker'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
