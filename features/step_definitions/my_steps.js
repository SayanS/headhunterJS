var {myStepDefinitionsWrapper}=require('cucumber');
myStepDefinitionsWrapper(function ({Given,When,Then}) {
    Given(/^Home page is opened$/, function (callback) {
        callback(null,'pending');
    });
    When(/^Enter "([^"]*)" into Global Search field$/, function (arg1, callback) {
        callback(null,'pending');
    });
    When(/^Ckick on Global Search button$/, function (callback) {
        callback(null,'pending');
    });
    Then(/^Search results page should be opened with title "([^"]*)"$/, function (arg1, callback) {
        callback(null,'pending');
    });
});
