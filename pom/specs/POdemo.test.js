const { chromium } = require("playwright");
const HomePage = require("../models/Home.page");
const LoginPage = require("../models/Login.page");

describe("UI tests for bookstore using playwright", () => {
  jest.setTimeout(20000);
  let browser = null;
  let page = null;
  let context = null;
  let homePage = null;
  let loginPage = null;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  afterAll(async () => {
    await context.close();
    await browser.close();
  });

  it("should be able to login", async () => {
    await loginPage.enterUsername("username");
    await loginPage.enterPassword("password");
    await loginPage.clickLoginBtn();
    expect(await page.title()).not.toBeNull();
  });

  it("should be logged in as Jack Gomaz", async () => {
    expect(await homePage.getUsername()).toBe("Jack Gomaz");
  });

  it("should have total balance balance of $350", async () => {
    expect(await homePage.getBalance("total")).toBe("$350");
  });

  it("should have credit availble balance of $17800", async () => {
    expect(await homePage.getBalance("credit")).toBe("$17800");
  });

  it("should have due today of $180", async () => {
    expect(await homePage.getBalance("due")).toBe("$180");
  });
});
