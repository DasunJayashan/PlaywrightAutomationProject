import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
test.describe('Apply hooks to all tests',()=>{
    let homePage;
    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        await homePage.goToHomePage();
    });
    test.afterEach(async({page})=>{
        await page.close();
    });
    test('verify navigation to the home page @Reg', async ({ page }) => {
        //Assert page url
        await homePage.checkPageUrl(process.env.url);
        //Assert page title
        await homePage.checkPageTitle('Welcome: Mercury Tours');
        //Assert register link visible or not
        await homePage.checkRegisterLink();
        await homePage.clickOnRegister();
    });
});
