var webdriver = require('selenium-webdriver');
var driver;

/**
 * Javascript webdriver builder.
 * @returns {instance} of driver
 */
var getDriver = function() {
  if (driver) {
    return driver;
  } else {
      driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
      return driver;
  }
};

module.exports.getDriver = getDriver;