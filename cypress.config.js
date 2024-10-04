const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://www.saucedemo.com/'
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    URL: 'https://www.saucedemo.com/'
  }
});
