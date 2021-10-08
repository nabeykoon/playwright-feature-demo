const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    //check the second checkbox
    const checkboxes = await page.$$('input[type=checkbox]');
    await checkboxes[1].check();
    await checkboxes[0].uncheck();
    //Select the second radio button
    const radioButtons = await page.$$('input[type=radio]');
    await radioButtons[1].check();
    //closing browser
    await browser.close();
}) ();