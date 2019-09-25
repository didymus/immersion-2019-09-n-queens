module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'lib/underscore.js',
      'lib/mustache.js',
      'lib/jquery-1.8.3.js',
      'lib/backbone.js',
      'lib/chai/chai.js',
      'src/*.js',
      'test/*.js',
    ],
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
