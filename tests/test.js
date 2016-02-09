"use strict";

var test = require('selenium-webdriver/testing');
var LoginPage = require('../pageObjects/loginPage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {
  var page;
  var driver;

  test.before(function () {
    driver = require('./driver').getDriver();
    page = new LoginPage(driver, 'https://core.futuresimple.com/sales/users/login');
  });

  test.after(function () {
    driver.quit();
  });

  test.it('Login and inputs username and password', function () {
    page.open();
    page.inputUserName('me@dbobylev.info')
    page.inputPassword('236754aA!')
    page.clickSubmit()
  });
});
