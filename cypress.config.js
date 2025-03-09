const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.seznam.cz/",
    viewportHeight: 720,
    viewportWidth: 1280
  },
});
