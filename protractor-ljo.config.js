// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js
'use strict';
exports.config = {  
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  specs: [
    './e2e/matka/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
    debug: true
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  useAllAngular2AppRoots: true,
  cucumberOpts: {
    require: [
      './e2e/matka/stepdefinitions/**/*.steps.ts', './e2e/support/*.ts'
    ],
    compiler: 'ts:ts-node/register',
    tags: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario or ~@ignore',
    format: [
      'pretty',
      'json:./e2e/protractor-cucumber-report.json'
    ],
    profile: false,
    strict: true,
    'no-source': true
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
};
