const { chromium } = require("playwright");

describe('UI tests for bookstore using playwright', () => {

  let browser = null;
  let page = null;
  let context = null;

  beforeAll(async() => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.demoqa.com/books');
  });

  afterAll(async() => {
    await browser.close();
  });

  test('should load page', async() => {
    expect(page).not.toBeNull();
    expect(await page.title()).not.toBeNull();
  })
});

 