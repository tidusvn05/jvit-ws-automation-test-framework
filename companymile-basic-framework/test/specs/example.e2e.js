const ExamplePage = require('../pageobjects/example.page');

describe('Sample test suite', () => {
  it('sample test case', () => {
    // Open example page
    ExamplePage.open();

    // Ensure sample button exist
    expect(ExamplePage.buttonSample).toBeExisting();

    // Click to button
    ExamplePage.clickSampleButton();

  });
});

