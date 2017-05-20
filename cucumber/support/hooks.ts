const Cucumber = require('cucumber');
import { browser } from 'protractor';
import * as fs from 'fs';
// import { config } from './../../../protractor-cucumber-cli.conf.js';
import { defineSupportCode } from 'cucumber';
import * as reporter from 'cucumber-html-reporter';
import { mkdirp } from 'mkdirp';
// import * as chai from 'chai';
// import * as cap from 'chai-as-promised';
defineSupportCode(function ({ registerHandler, registerListener, After, setDefaultTimeout }) {
    setDefaultTimeout(10 * 1000);
    const jsonReports = process.cwd() + '/cucumber/reports/json';
    const htmlReports = process.cwd() + '/cucumber/reports/html';
    const targetJson = jsonReports + '/cucumber_report.json';
    // const chaiAll = chai.use(cap);
    // const expect2 = chaiAll.expect;
    registerHandler('BeforeFeature', function (event, callback) {
        // TODO: protractor cant serve the app using an 
        // environment other than default so it build always the 
        // APP defined at that dafault; the serve command in e2e comand 
        // is not taking the env parameter (investigate new angularcli v1 settings)
        // browser.get(browser.baseUrl);
        // browser.get(browser.params.baseUrl);
        browser.get('http://localhost:4200/');
        // browser.waitForAngularEnabled(true);
        setTimeout(callback, 5000);
    });

    After(function (scenario) {
        let world = this;
        if (scenario.scenario.exception) {
            return browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    });

    let cucumberReporterOptions = {
        theme: 'bootstrap',
        jsonFile: targetJson,
        output: htmlReports + '/matka_cucumber_reporter.html',
        reportSuiteAsScenarios: true
    };

    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                console.log(`Failed to save cucumber test results to json file. 
                             Failed to create html report.
                             `);
                console.log(err);
            }
        }
    };
    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });
    registerListener(jsonformatter);
})