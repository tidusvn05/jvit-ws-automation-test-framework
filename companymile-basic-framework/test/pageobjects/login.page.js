const ComPage = require('./com.page');

class LoginPage extends ComPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('input[name=email]')
  }
  get inputPassword() {
    return $('input[name=password]')
  }
  get divChooseCompany() {
    return $$(".user-list .user .service_name")
  }
  get btnSubmit() {
    return $('button[type="submit"]')
  }

  /**
   * define actions methods
   */

  /**
   * Login using username and password
   * @param {*} username
   * @param {*} password
   */
  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    browser.pause(1500)
    this.btnSubmit.click();
  }

  /**
   * Click and choose require company by name
   * @param {*} requireCompanyName
   */
  chooseCompany(requireCompanyName = 'JV-IT') {
    // console.log("chooseCompany")
    for (const companyEl of this.divChooseCompany) {
      const companyName = companyEl.getText();
      if (companyName.includes(requireCompanyName)) {
        companyEl.click();
        this.btnSubmit.click();
        return;
      }
    }
  }

  /**
   * overwrite page url will open
   */
  open() {
    return browser.url(`/login`)
  }
}

module.exports = new LoginPage();
