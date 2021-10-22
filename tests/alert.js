const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 2000 });
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/alerts");

  //Alert message with OK
  var dialogListener = function () {
    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept("My confirmation message");
    });
  };
  //add dialog lister before the action trigger the alert
  dialogListener();
  await page.click("#alertButton");

  //alert message with OK and Cancel
  await page.click("#confirmButton");

  //Alert with confirmation text
  await page.click("#promtButton");

  await browser.close();
})();
