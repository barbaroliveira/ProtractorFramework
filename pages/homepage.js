let homepage = function(){
    let firstNumber = element(by.model('first'));

    let secondNumber = element(by.model('second'));

    let click = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
    }

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    }

    this.enterClick = function(){
        click.click();
    }

    this.verifyResult = function(result){
        let resultado = element(by.cssContainingText('.ng-binding', result));
        expect(resultado.getText()).toEqual(result);
    }
};

module.exports = new homepage();