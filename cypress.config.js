const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  screenshotsFolder: 'cypress/report/screenshots',
  videosFolder: 'cypress/report/videos',
  e2e: {
    baseUrl: 'https://maax.com/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config = cypressBrowserPermissionsPlugin(on, config)
    },  
    env: {
      "browserPermissions": {
        "geolocation": "allow"
      }
    },
    reporterOptions: {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report"
     },
  }
});
