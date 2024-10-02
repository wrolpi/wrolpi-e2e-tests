const {defineConfig} = require('cypress');

module.exports = defineConfig({
    e2e: {
        // Setup node events (if needed)
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        // Define the base URL for your tests
        baseUrl: 'https://10.0.0.8:443',
        // Define the folder where your test files are located
        specPattern: 'cypress/e2e/*.spec.js'
    }
});