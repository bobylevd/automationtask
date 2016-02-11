var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var driver;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    return driver;
  }
};

module.exports.getDriver = getDriver;