"use strict";

var test = require('selenium-webdriver/testing');
var LoginPage = require('../pageObjects/loginPage');
var AppPage = require('../pageObjects/appPage');
var LeadsPage = require('../pageObjects/leadsPage');
var SettingsPage = require('../pageObjects/settingsPage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {

  var loginP;
  var appPage;
  var leadsPage;
  var settingsPage;

  var driver;

  test.before(function () {
    driver = require('./driver').getDriver();
  });

  test.after(function () {
    if(driver) {
      driver.quit();
    }
  });

  test.it('Open login page and input username and password', function () {
    loginP = new LoginPage(driver);
    loginP.open();
    loginP.login('dimster-od@yandex.ru', '236754');
    appPage = new AppPage(driver);
    appPage.clickLeads();
  });

  //test.it('Create new lead and check its status', function () {
  //  leadsPage = new LeadsPage(driver);
  //  leadsPage.createNewLead();
  //  leadsPage.fillForm();
  //  leadsPage.getLeadStatus()
  //    .then(function (text) {
  //    assert(text, 'new-new-lead');
  //    });
  //});

  test.it('Open first lead on page and check its status', function () {
    leadsPage = new LeadsPage(driver);
    leadsPage.open();
    leadsPage.openLastLead();
    leadsPage.getLeadStatus()
      .then(function (text) {
        assert(text, 'new-new-lead');
      })
  });

  test.it('Changes lead status name in settings', function () {
    leadsPage.openSettings();
    settingsPage = new SettingsPage(driver);
    settingsPage.openLeadsSettings();
    settingsPage.openLeadStatuses();
    settingsPage.editLeadStatus();
    settingsPage.editLeadStatusName('new-new-lead');
    settingsPage.saveLeadStatusName();
  });

  test.it('Check that new lead status is in place', function () {
    leadsPage = new LeadsPage(driver);
    leadsPage.open();
    leadsPage.openLastLead();
    leadsPage.getLeadStatus()
      .then(function (text) {
        assert(text, 'new-new-lead');
      });
  });
});
