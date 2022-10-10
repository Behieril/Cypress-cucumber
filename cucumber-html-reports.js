const report = require("multiple-cucumber-html-reporter")

report.generate({
    jsonDir: "cypress/reports",
    reportPath: "./reports/cucumber-html-report.html",
    metadata: {
        browser:{
            name: "chrome",
            version: "106"
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10"

        }
    }
})