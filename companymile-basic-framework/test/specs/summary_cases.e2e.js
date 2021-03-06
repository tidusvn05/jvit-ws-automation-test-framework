const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Login To UserSite', () => {

  it('Login using email and password', () => {
    console.log('Login sessionID', browser.sessionId)
    LoginPage.open();
    LoginPage.btnSubmit.waitForClickable({ timeout:3000 });
    LoginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);
    expect(LoginPage.divChooseCompany).toBeExisting();
  });

  it('Choose a company', () => {
    expect(LoginPage.divChooseCompany).toBeExisting();
    LoginPage.chooseCompany();

    expect(HomePage.showUsername).toBeExisting();
    expect(HomePage.showUsername).toHaveTextContaining(
      'Tan dat');
  });

});

