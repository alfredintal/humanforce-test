import { Page, expect } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {} 
    async navigate(url : string)
    {
          await this.page.goto(url);
    }
    async login(user: string, pass: string, name : string)
    {
        // Locate all relevant elements
        await this.page.locator('#UserName').fill(user);
        await this.page.locator('#Password').fill(pass);
        await this.page.locator('#btnSubmit').click();
        const dashboardHeader = this.page.locator('span.home-header__info__name');

        // Assert to confirm if the right user was logged in
        await expect(dashboardHeader).toHaveText('Hello ' + name);

    }
    async goToMessagesPage(text : string)
    {
        await this.page.locator("a", { hasText: text }).click();
        await expect(this.page).toHaveURL('https://qatestchallenge3.humanforce.io/WebApp/modules/messages');
    }
}