const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },

  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    reportFilename: 'mochawesome',
    reportDir: 'mochawesomeReports',
    mochaFile: 'reports/test-results-[hash].xml',  
  },
});
