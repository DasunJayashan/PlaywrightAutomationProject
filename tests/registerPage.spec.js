import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { RegisterPage } from '../pages/registerPage'
test.describe('Apply hooks to all tests', () => {
    let homePage;
    let registerPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
        await homePage.goToHomePage();
        await homePage.clickOnRegister();
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test('Verify navigation to the register page', async ({ page }) => {
        await registerPage.checkRegisterPageName();
    });
    test('Verify registration on the registration page @Reg', async ({ page }) => {
        await registerPage.register({
            firstName: "First Name Test",
            lastName: "Last Name Test",
            phoneNumber: "1234567890",
            email: "test@example.com",
            address: "123 Main St,Test",
            city: "Test City",
            state: "Test State",
            postalCode: "100",
            country: "AUSTRALIA",
            userName: "User Name Test",
            password: "password123",
            confirmPassword: "password123"
        });
    });
});
