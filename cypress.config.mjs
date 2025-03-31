import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:5500`,
    specPattern: `cypress/e2e/**/*.spec.js`,
    supportFile: `cypress/support/e2e.js`,
    video: false
  }
});
