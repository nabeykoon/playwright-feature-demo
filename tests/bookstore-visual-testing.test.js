const { chromium } = require("playwright");
const {
  ClassicRunner,
  Eyes,
  Target,
  RectangleSize,
} = require("@applitools/eyes-playwright");

describe.only("UI tests for HerokuApp dynamic content using playwright", () => {
  jest.setTimeout(50000);
  let browser = null;
  let page = null;
  let context = null;
  const eyes = new Eyes(new ClassicRunner());

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/dynamic_content");
  });

  afterAll(async () => {
    await context.close();
    await browser.close();
    await eyes.close();
  });

  test("Verify the look of the page", async () => {
    await page.waitForSelector("h3", { state: "attached" });
    await eyes.open(
      page,
      "Herokuapp",
      "Verify dynamic content",
      new RectangleSize(800, 600)
    );
    await eyes.check(Target.window().fully());
  });
});
