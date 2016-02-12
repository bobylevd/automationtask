var webdriver = require('selenium-webdriver');
var driver;

/**
 * Javascript webdriver builder.
 * @param {string} name of browser
 * e.g. firefox, phantomjs, safari
 * default is chrome
 * @returns {instance} of driver
 */
var getDriver = function(name) {
  if (driver) {
    return driver;
  } else {
      driver = new webdriver.Builder()
        .withCapabilities(getBrowser(name))
        .build();
      driver.manage().window().maximize();
      return driver;
  }
};

var getBrowser = function (name) {
  switch (name){
    case 'firefox':
      return webdriver.Capabilities.firefox();
    case 'phantomjs':
      return webdriver.Capabilities.phantomjs();
    case 'safari':
      return webdriver.Capabilities.safari();
    default:
      return webdriver.Capabilities.chrome();
  }
};

module.exports.getDriver = getDriver;