const BasePage = require("./Base.page");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    //locators
    this.userNameTxt = "#username";
    this.passwordTxt = "#password";
    this.loginBtn = "#log-in";
  }

  async navigate() {
    await super.navigate("index.html");
  }

  async enterUsername(username) {
    await this.page.fill(this.userNameTxt, username);
  }

  async enterUsername(password) {
    await this.page.fill(this.passwordTxt, password);
  }

  async clickLoginBtn() {
    await this.page.click(this.loginBtn);
  }
}

module.exports = LoginPage;
