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
}