const { chromium, devices } = require("playwright");
const iphone = devices['iPhone 11'];

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext({
    ...iphone,
    permissions:['geolocation'],
    geolocation:{latitude: 6.943450053600925, longitude: 79.86782827022176},
    locale: 'fr-FR'
  });
  const page = await context.newPage();
  await page.goto("https://www.google.com/maps");
  //adding wait for debugging purposes only
  await page.waitForTimeout(5000);
  await browser.close();
})();