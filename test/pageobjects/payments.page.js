

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
let everdayAmount;

class PaymentsPage extends Page {

    /**
     * define selectors using getter methods
     */
    get ChooseAccountFromBtn() {
        return $('button[data-testid="from-account-chooser"]');
    }

    get ChooseAccountToBtn() {

        return $('button[data-testid="to-account-chooser"]');
    }

    get EverydayAccountBtn() {

        return $('li:nth-of-type(2)>button[data-monitoring-label="Transfer Form Account Card"] ');
    }
    get BillsAccountBtn() {

        return $('li:nth-of-type(1)>button[data-monitoring-label="Transfer Form Account Card"] ');
    }

    get ToAccountsTabBtn() {

        return $('li[data-testid="to-account-accounts-tab"]');
    }

    get AmountInput() {

        return $('input[name="amount"]');
    }

    get DateInput() {

        return $('input[name="date"]');
    }

    get FrequencyDropDown() {

        return $('select[name="frequency"]');
    }

    get ParticularsForYouInput(){

        return $('input[data-pcr-field="0"][name="fromPcr"]')
    }

    get ParticularsForStatementInput(){

        return $('input[data-pcr-field="0"][name="fromPcr"]')
    }

    get CodeForStatementInput(){

        return $('input[data-pcr-field="1"][name="fromPcr"]')
    }

    get ReferenceForStatementInput(){

        return $('input[data-pcr-field="2"][name="fromPcr"]')
    }
    get ParticularsForPayeeInput(){

        return $('input[data-pcr-field="0"][name="toPcr"]')
    }

    get CodeForPayeeInput(){

        return $('input[data-pcr-field="1"][name="toPcr"]')
    }

    get ReferenceForPayeeInput(){

        return $('input[data-pcr-field="2"][name="toPcr"]')
    }

    get SubmitBtn(){

        return $('button[type="submit"][data-monitoring-label="Transfer Form Submit"]')
    }

    get ConfirmButton(){

        return $('button[data-testid="confirm-button"]')
    }
    get SuccessMessage(){

        return $('div.topbar-actions')
    }

    

    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async transferFromEverydayToBills(amount) {
        await this.ChooseAccountFromBtn.click();
        await this.EverydayAccountBtn.click();
        await this.ChooseAccountToBtn.click();
        await this.ToAccountsTabBtn.click();
        await this.BillsAccountBtn.click();
        await this.AmountInput.setValue(amount);
        await this.DateInput.clearValue();
        await this.FrequencyDropDown.selectByIndex(0);
        await this.ParticularsForStatementInput.setValue('testpcr');
        await this.CodeForStatementInput.setValue('testCode');
        await this.ReferenceForStatementInput.setValue('testReference');
        await this.ParticularsForPayeeInput.setValue('testpcr');
        await this.CodeForPayeeInput.setValue('testCode');
        await this.ReferenceForPayeeInput.setValue('testReference');
        await this.SubmitBtn.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('payments');
    }
}

module.exports = new PaymentsPage();
