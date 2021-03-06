module.exports = class ComPage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`${path}`)
  }

  /**
   * Fire screenshot
   */
  capture(filename) {
    console.log("Take ScreenShot: ", filename)
    browser.saveScreenshot(`./test/screenshots/${filename}.png`)
  }

}
