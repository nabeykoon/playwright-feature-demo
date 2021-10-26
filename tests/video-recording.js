const { chromium } = require("playwright");

(async () => {

  //launching the browser
  const browser = await chromium.launch({ headless: false, slowMo: 100 });

  //create a browser context. Since recording happens on top of context
  const context = await browser.newContext({
    recordVideo: {
      dir: "./recordings"
    }
  });
  //creating a page inside a browser
  const page = await context.newPage();

  //navigating to site
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

  //click on start button
  await page.click("//button[contains(text(), 'Start')]");
  await page.waitForSelector('#loading');
  await page.waitForSelector('#loading', {state:'hidden'});
  //adding wait for debugging purposes only
  await page.waitForTimeout(100);
  await browser.close();
  
})();