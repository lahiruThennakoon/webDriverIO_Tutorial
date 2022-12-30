

const Page = require('./page');
let PreEverydayBalance;
let PostEverydayBalance;
let PreBillBalance;
let PostBillBalance;
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get MenuBtn() {
        return $('button[type=button].Button');
    }

    get MenuPayeesBtn() {

        return $('.js-main-menu-payees');
    }

    get Header() {

        return $('header>h1.CustomPage-heading')
    }

    get EverydayAmount(){

        return $('(//span[@class="account-balance"])[1]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async navigateToPayeesPage() {
        await this.MenuBtn.click();
        await this.MenuPayeesBtn.click();
    }

    async getPreEverydayBalance() {
        PreEverydayBalance =await this.EverydayAmount.getText();
    }

    async getPostEverydayBalance() {
        PostEverydayBalance =await this.EverydayAmount.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new MainPage();
