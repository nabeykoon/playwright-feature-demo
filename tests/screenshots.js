const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto("https://applitools.com/");

  //screenshot of page appeared within browser window
  await page.screenshot({path: process.cwd() + '//scrrenshots//' + 'applitools-webpage.png'});

  //capture the element
  const logo = await page.$('.logo');
  await logo.screenshot({path: process.cwd() + '//scrrenshots//' + 'applitools-logo.png'});

  //screenshot of entire page
  await page.screenshot({path: process.cwd() + '//scrrenshots//' + 'applitools-Fullpage.png', fullPage: true});
  await browser.close();
})();
