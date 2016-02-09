"use strict";

var test = require('selenium-webdriver/testing');
var HomePage = require('../pageObjects/basePage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {
  var page;
  var driver;

  test.before(function () {
    driver = require('./driver').getDriver();
    page = new HomePage(driver, 'http://orteil.dashnet.org/cookieclicker/');
  });

  test.after(function () {
    driver.quit();
  });

  test.it('get title', function () {
    page.open();
    page.multipleClickElement({id : 'bigCookie'});
  });
});
