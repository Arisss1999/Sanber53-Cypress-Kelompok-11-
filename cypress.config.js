const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3uq1vb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
