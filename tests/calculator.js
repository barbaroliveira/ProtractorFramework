let homepage = require('../pages/homepage');

describe("demo calculator tests", function () {
  it("addition test", function () {

    homepage.get('http://juliemr.github.io/protractor-demo/');

    homepage.enterFirstNumber('2');

    homepage.enterSecondNumber('3');

    homepage.enterClick();

    homepage.verifyResult('5');

    browser.sleep(2000);
  });

  it("subtraction test", function () {

    homepage.get('http://juliemr.github.io/protractor-demo/');

    homepage.enterFirstNumber('2');

    homepage.enterSecondNumber('3');

    homepage.enterClick1();

    homepage.verifyResult('5');

    browser.sleep(2000);
  });
});