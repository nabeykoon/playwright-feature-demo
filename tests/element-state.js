const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/automation-practice-form");

  //print the element state
  const firstName = await page.$('#firstName');
  const checkboxSports = await page.$('#hobbies-checkbox-1');
  const submitButton = await page.$('#submit');

  console.log(await firstName.isDisabled());
  console.log(await firstName.isEnabled());
  console.log(await firstName.isEditable());
  console.log(await checkboxSports.isChecked());
  console.log(await checkboxSports.isVisible());
  console.log(await submitButton.isHidden());
  console.log(await submitButton.isVisible());

  //closing browser
  await browser.close();
})();
