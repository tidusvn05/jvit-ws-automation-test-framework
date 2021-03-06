const ComPage = require('./com.page');

class HomePage extends ComPage {
  /**
   * define selectors using getter methods
   */
  get showUsername() {
    return $('.balance-content p.username')
  }
  get giftBudget() {
    return $('.gift-budget p')
  }
  get modalCheckin() {
    return $(".checkin-modal")
  }
  get buttonsCheckin() {
    return $(".checkin-status .checkin-status__item:nth-child(2)")
  }
  get submitCheckin() {
    return $(".checkin-btn.active")
  }

  /**
   * define actions methods
   */
  doCheckin() {
    this.buttonsCheckin.click();
    browser.pause(2000);
    this.submitCheckin.click();
  }

  /**
   * Checkin if see checkin modal
   */
  doCheckInIfModalPresent() {
    console.log('doCheckInIfModalPresent');
    if( this.modalCheckin.isDisplayed() == true )
    {
      this.doCheckin()
      expect(this.modalCheckin).not.toBePresent();
    }
  }

}

module.exports = new HomePage();
