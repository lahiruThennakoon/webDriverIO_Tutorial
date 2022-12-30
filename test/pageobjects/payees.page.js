

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */


let accountNo;
let payees= [];


class PayeesPage extends Page {
    /**
     * define selectors using getter methods
     */


    get Header() {

        return $('header>h1.CustomPage-heading');
    }
    get AddPayeeBtn() {

        return $('button.js-add-payee');
    }
    get InputPayeeName() {

        return $('input[name="apm-name"]');
    }

    get InputAccountNo() {

        return $('input[name="apm-bank"]');
    }

    get ConfirmPayeeNameBtn() {

        return $('div.popup-inner#ComboboxList-apm-name');
    }
    get SubmitPayeeBtn() {

        return $('button[type="Button"].js-submit');
    }

    get AddedPayee() {

        return $('//div[contains(@aria-label,"' + accountNo + '")]');

    }
    get PayeeAddedAlert() {

        return $("span[role='alert'].message");

    }
    get PayeeNameRequireedAlert() {

        return $('p=Payee Name is a required field. Please complete to continue.');

    }

    get FormErrorHeader() {

        return $(' div.error-header');

    }
    get WholePayeeList() {

        return $(' ul.List');

    }
    get PayeesList() {

        return $$('span.js-payee-name');

    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    async addNewPayee(payeeName, account) {
        await this.clickAddPayeeBtn();
        await this.addNewPayeeName(payeeName);
        await this.ConfirmPayeeName();
        await this.addAccountNo(account);
        await this.SubmitPayee();
    }


    async clickAddPayeeBtn() {

        await this.AddPayeeBtn.click();
    }
    async addNewPayeeName(payeeName) {
        await this.InputPayeeName.setValue(payeeName);

    }
    async ConfirmPayeeName() {
        await this.ConfirmPayeeNameBtn.click();

    }
    async SubmitPayee() {
        await this.SubmitPayeeBtn.click();

    }
    async addAccountNo(account) {
        await this.InputAccountNo.setValue(account.replace(/-/g, ''));
        accountNo = account;

    }
    async getPayeeList() {

       await this.PayeesList.forEach(element => {

            payees.push(element.getText())

        });

    }

    open() {
        return super.open('payees');
    }
}

module.exports = new PayeesPage();
