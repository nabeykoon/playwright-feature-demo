const {chromium, firefox} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const email = await page.$('#email');
    await email.type('nabey@gmail.com', {delay:50});
    await page.click('#form_submit', {noWaitAfter:false});
    await page.waitForNavigation();
    await browser.close();
}) ();