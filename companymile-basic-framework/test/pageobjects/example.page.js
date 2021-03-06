const ComPage = require('./com.page');

class ExamplePage extends ComPage {
  /**
   * define selectors using getter methods
   */
  get buttonSample() {
    return $('#btn-sample')
  }

  /**
   * define actions methods
   */
  /**
   * login using username and password
   */
  clickSampleButton() {
    this.buttonSample.click();
  }

  /**
   * overwrite page url will open
   */
  open() {
    return super.open('/sample-page');
  }
}

module.exports = new ExamplePage();
