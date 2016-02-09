
var webdriver = require('selenium-webdriver');

var getDriver = function () {
  return new webdriver.Builder()
    .forBrowser('chrome')
    .build();
};

module.exports.getDriver = getDriver;