const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
  env: {
    apiBaseUrl: 'https://demoqa.com/swagger'
},
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    reportFilename: 'mochawesome',
    reportDir: 'mochawesomeReports',
    mochaFile: 'reports/test-results-[hash].xml',  
  },
});
