const { expect } = require("@playwright/test");
exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerText = page.getByRole('cell', { name: 'SIGN-ON REGISTER SUPPORT CONTACT To create your account, we\'ll need some basic' }).getByRole('img').nth(1);
        this.firstNameTxtBox = page.locator('input[name="firstName"]');
        this.lastNameTxtBox = page.locator('input[name="lastName"]');
        this.phoneTxtBox = page.locator('input[name="phone"]');
        this.emailTxtBox = page.locator('#userName');
        this.addressTxtBox = page.locator('input[name="address1"]');
        this.cityTxtBox = page.locator('input[name="city"]');
        this.stateTxtBox = page.locator('input[name="state"]');
        this.postalCodeTxtBox = page.locator('input[name="postalCode"]');
        this.countryTxtBox = page.getByRole('combobox');
        this.userNameTxtBox = page.locator('#email');
        this.passwordTxtBox = page.locator('input[name="password"]');
        this.confirmPasswordTxtBox = page.locator('input[name="confirmPassword"]');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
    }
    async checkRegisterPageName() {
        await expect.soft(this.registerText.first()).toBeVisible();
    }
    async register(userDetails) {
        const fields = [
            { element: this.firstNameTxtBox, value: userDetails.firstName },
            { element: this.lastNameTxtBox, value: userDetails.lastName },
            { element: this.phoneTxtBox, value: userDetails.phoneNumber },
            { element: this.emailTxtBox, value: userDetails.email },
            { element: this.addressTxtBox, value: userDetails.address },
            { element: this.cityTxtBox, value: userDetails.city },
            { element: this.stateTxtBox, value: userDetails.state },
            { element: this.postalCodeTxtBox, value: userDetails.postalCode },
            { element: this.countryTxtBox, value: userDetails.country, isDropdown: true },
            { element: this.userNameTxtBox, value: userDetails.userName },
            { element: this.passwordTxtBox, value: userDetails.password },
            { element: this.confirmPasswordTxtBox, value: userDetails.confirmPassword }
        ];

        for (const field of fields) {
            if (field.isDropdown) {
                await field.element.selectOption(field.value);
            } else {
                await field.element.fill(field.value);
            }
        }

        await this.submitBtn.click();
    }
}