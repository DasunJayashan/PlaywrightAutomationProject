import{test,expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { RegisterPage } from '../pages/registerPage';
import { RegisterSuccessPage } from '../pages/registerSuccessPage';
test.describe('Apply hooks to all tests',()=>{
    let homePage;
    let registerPage;
    let registerSuccessPage;
    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        registerPage = new RegisterPage(page);
        registerSuccessPage=new RegisterSuccessPage(page);
        await homePage.goToHomePage();
        await homePage.clickOnRegister();
    });
    test.afterEach(async({page})=>{
        await page.close();
    });
    test('Verify navigation to the register success page @Reg', async ({ page }) => {
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
        await registerSuccessPage.checkPageUrl('https://demo.guru99.com/test/newtours/register_sucess.php');
        await registerSuccessPage.checkSalutationMessage('Dear First Name Test Last Name Test,');
        await registerSuccessPage.checkNote('Note: Your user name is User Name Test.');
    });
});