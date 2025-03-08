const { expect } = require("@playwright/test");

exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.registerLnk=page.getByRole('link', { name: 'REGISTER', exact: true });
    }
    async goToHomePage(){
        await this.page.goto(process.env.url);
    }
    async checkPageUrl(url){
        await expect.soft(this.page).toHaveURL(url);
    }
    async checkPageTitle(title){
        await expect.soft(this.page).toHaveTitle(title);
    }
    async checkRegisterLink(){
        await expect.soft(this.registerLnk.first()).toBeVisible();
    }
    async clickOnRegister(){
        await this.registerLnk.click();
    }
}