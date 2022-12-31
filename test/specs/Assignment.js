
const mainPage = require('../pageobjects/main.page');
const payeesPage = require('../pageobjects/payees.page');
const paymentsPage = require('../pageobjects/payments.page');

for (let i=0;i<3;i++){
describe('verify navigation to payees page using navigation menu', () => {
    it('verify payees page is getting loaded', async () => {

        await mainPage.open();
        await mainPage.navigateToPayeesPage();
        await expect(browser).toHaveUrl('https://www.demo.bnz.co.nz/client/payees');
        await expect(payeesPage.Header).toBeDisplayed();

    })
})

describe('verify adding a payee', () => {
    it('verify payee added message is displayed and payee is added to the list', async () => {

        await payeesPage.open();
        await payeesPage.addNewPayee('Test user', '01-0001-1234567-002');
        await expect(payeesPage.AddedPayee).toBeDisplayed();
        await expect(payeesPage.PayeeAddedAlert).toBeDisplayed();

    })
})

describe('verify mandatory Fields', () => {
    it('verify payee name  is a mandatory field', async () => {

        await payeesPage.open();
        await payeesPage.clickAddPayeeBtn();
        await payeesPage.addNewPayeeName('');
        await payeesPage.SubmitPayee();
        await expect(payeesPage.PayeeNameRequireedAlert).toBeDisplayed();
        await expect(payeesPage.FormErrorHeader).toBeDisplayed();
        await payeesPage.addNewPayeeName('lasith malinga');
        await payeesPage.ConfirmPayeeName();
        await expect(payeesPage.FormErrorHeader).not.toBeDisplayed();

    })
})

describe('verify sorting payees', () => {
    it('verify payees can be sorted by name', async () => {

        await payeesPage.open();
        await payeesPage.addNewPayee('Test user', '01-0001-1234567-002');
        await expect(payeesPage.WholePayeeList).toBeDisplayed();
        await expect(payeesPage.PayeeAddedAlert).toBeDisplayed();
        await payeesPage.getPayeeList();
    })
})

describe('verify payments page', () => {
    
    it('verify current balance is accurate', async () => {
        await mainPage.open();
        let preEverydayBalance = await mainPage.getPreEverydayBalance();
        await paymentsPage.open();
        await paymentsPage.transferFromEverydayToBills('500');
        await expect(paymentsPage.SuccessMessage).toBeDisplayed();
        let PostEverydayBalance = await mainPage.getPostEverydayBalance();
        let finalBalance = preEverydayBalance - PostEverydayBalance;
       
    })
})

}