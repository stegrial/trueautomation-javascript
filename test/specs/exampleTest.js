const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');

        await driver.findElement(By.css(ta('loginBtn', 'header div.jet-button__container > a'))).click();
        await driver.wait(until.titleIs('TrueAutomation.IO'), 1000);

        await driver.findElement(By.css(ta('signUpBtn', 'div.sign-up-container > a'))).click();
        await driver.findElement(By.name(ta('emailFld:colon:error', 'email'))).sendKeys('your@gmail.com');
    } finally {
        await driver.quit();
    }
})();