const { defineConfig } = require("cypress");
const fs = require("fs");
const { beforeRunHook } = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "mochawesome-report",
      charts: true,
      reportPageTitle: "QA Automation Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      ignoreVideos: true,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("before:run", async (details) => {
        fs.rmSync("mochawesome-report", { recursive: true, force: true });
        await beforeRunHook(details);
      });
      return config;
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    video: true,
    experimentalRunAllSpecs: true,
    retries: {
      openMode: 0,
      runMode: 0,
    },
  },
});
