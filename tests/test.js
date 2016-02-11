"use strict";

var test = require('selenium-webdriver/testing');
var LoginPage = require('../pageObjects/loginPage');
var AppPage = require('../pageObjects/appPage');
var LeadsPage = require('../pageObjects/leadsPage');
var SettingsPage = require('../pageObjects/settingsPage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {

  var loginP;
  var appP;
  var leadsP;
  var settingsP;
  var driver;

  this.timeout(20000);

  test.before(function () {
    driver = require('./driver').getDriver();
  });

  test.after(function () {
    if(driver) {
      driver.quit();
    }
  });

  test.it('Login and inputs username and password', function () {
    loginP = new LoginPage(driver);
    loginP.open();
    loginP.login('dimster-od@yandex.ru', '236754');
    appP = new AppPage(driver);
    appP.clickLeads();
  });

  test.it('Create new lead and check its status.', function () {
    leadsP = new LeadsPage(driver);
    leadsP.createNewLead();
    leadsP.fillForm();
    leadsP.getLeadStatus()
      .then(function (text) {
      assert(text, 'new-new-lead');
    });
  });

  test.it('Open last lead and check its status', function () {
    leadsP = new LeadsPage(driver);
    leadsP.open();
    leadsP.openLastLead();
    leadsP.getLeadStatus()
      .then(function (text) {
        assert(text, 'new-new-lead');
      })
  });

  test.it('Change default lead status in settings', function () {
    leadsP.openSettings();
    settingsP = new SettingsPage(driver);
    settingsP.openLeadsSettings();
    settingsP.openLeadStatuses();
    settingsP.editLeadStatus();
    settingsP.editLeadStatusName('new-new-lead');
    settingsP.saveLeadStatusName();
    leadsP.open();
    leadsP.openLastLead();
    leadsP.getLeadStatus().then(function (text) {
      assert(text, 'new-new-lead')
    });
  });
});
