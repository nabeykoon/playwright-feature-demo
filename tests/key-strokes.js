const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/key_presses");

  await page.click("#target");
  await page.keyboard.type("Added by keyboard API of playwright");
  await page.keyboard.down("Shift");

  for (let i = 0; i < " of playwright".length; i++) {
    await page.keyboard.press("ArrowLeft");
  }

  await page.keyboard.up("Shift");
  await page.keyboard.press("Backspace");
  await page.keyboard.type(" Successfully exeuted keystroke");

  await browser.close();
})();
