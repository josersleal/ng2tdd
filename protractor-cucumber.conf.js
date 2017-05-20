// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
'use script';
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './cucumber/features/**/*.feature'
  ],
  cucumberOpts: {
    require: [
      './cucumber/steps/**/*.steps.ts',
      './cucumber/support/*.ts'
    ],
    compiler: 'ts:ts-node/register',
    tags: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario or ~@ignore',
    format: [
      'pretty',
      'json:./cucumber/protractor-cucumber-report.json'
    ],
    profile: false,
    strict: true,
    'no-source': true
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'cucumber/tsconfig.e2e.json'
    });
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },
};
