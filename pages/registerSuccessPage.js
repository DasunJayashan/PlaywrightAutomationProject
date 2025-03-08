const { expect } = require("@playwright/test");

exports.RegisterSuccessPage=class RegisterSuccessPage{
    constructor(page){
        this.page=page;
        this.salutationMsgTxt=page.getByText('Dear First Name Test Last');
        this.noteTxt=page.getByText('Note: Your user name is User');
    }
    async checkPageUrl(url){
        await expect.soft(this.page).toHaveURL(url);
    }
    async checkSalutationMessage(salutationMessage){
        await expect.soft(this.salutationMsgTxt.first()).toHaveText(salutationMessage);
    }
    async checkNote(note){
        await expect.soft(this.noteTxt.first()).toHaveText(note);
    }
}