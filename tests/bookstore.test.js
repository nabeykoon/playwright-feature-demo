const { chromium } = require("playwright");
jest.setTimeout(20000);

describe("UI tests for bookstore using playwright", () => {
  let browser = null;
  let page = null;
  let context = null;
  let firstRowCells = null;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://demoqa.com/books");
  });

  afterAll(async () => {
    await context.close();
    await browser.close();
  });

  test("should load page", async () => {
    expect(page).not.toBeNull();
    expect(await page.title()).not.toBeNull();
  });

  test("should be able to search for the eloquent javascript book", async () => {
    await page.fill("#searchBox", "eloquent");
    firstRowCells = await page.$$('.rt-tbody [role="rowgroup"]:nth-of-type(1)');
    let imgUrl = await firstRowCells[0].$("img");
    expect(await imgUrl.getAttribute("src")).not.toBeNull();
  });

  test("should check the title of the book is okay", async () => {
    await page.fill("#searchBox", "eloquent");
    firstRowCells = await page.$$('.rt-tbody [role="rowgroup"]:nth-of-type(1)');
    expect(firstRowCells[1].innerText()).toBe(
      "Eloquent JavaScript, Second Edition"
    );
  });

  test("should check the author of the book is okay", async () => {
    await page.fill("#searchBox", "eloquent");
    firstRowCells = await page.$$('.rt-tbody [role="rowgroup"]:nth-of-type(1)');
    expect(firstRowCells[2].innerText()).toBe("Marijn Haverbeke");
  });

  test("should check the publisher of the book is okay", async () => {
    await page.fill("#searchBox", "eloquent");
    firstRowCells = await page.$$('.rt-tbody [role="rowgroup"]:nth-of-type(1)');
    expect(firstRowCells[3].innerText()).toBe("No Starch Press");
  });
});
