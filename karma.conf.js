// Karma configuration
// Generated on Sun Jan 17 2021 18:42:15 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // http://karma-runner.github.io/6.0/config/plugins.html
    // By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
    // plugins: [],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      '**/*.txt'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'junit', 'spec', 'coverage'],  // we do not need so many report here, in practice, only spec and coverage are needed
    // html:        used by karma-html-reporter
    // coverage:    used by karma-coverage
    // junit:       used by karma-junit-reporter, this one output xml file
    // spec:        used by karma-spec-reporter

    // simple coverage configure
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },
    // multiple coverage configure
    coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },   // remove this file property, the output will goes to console
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }, // remove this file property, the output will goes to console
      ]
    },

    // https://www.npmjs.com/package/karma-html-reporter
    // the default configuration
    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default

      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

    // https://www.npmjs.com/package/karma-junit-reporter
    // the default configuration
    junitReporter: {
      outputDir: '', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
    },

    // https://www.npmjs.com/package/karma-spec-reporter
    // default setting
    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: false,      // print the time elapsed for each spec
      failFast: true              // test would finish with error when a first fail occurs.
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], // , 'PhantomJS', 'IE'


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
