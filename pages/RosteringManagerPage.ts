import { Page, expect } from '@playwright/test';

export class RosteringManagerPage {
    constructor(private page: Page) {}

    async navigate(substring : string)
    {
        await this.page.goto(process.env.BASE_URL! + substring);
    }
    async checkPermissions(message : string)
    {
        const noPermMessage = this.page.getByText(message);
        await expect(noPermMessage).toBeVisible();   
    }

    async returnToDashboard()
    {    
        await this.page.locator('#MenuItem_Button_Home').click();      
        // Assert to confirm if the right user was logged in
        const dashboardHeader = this.page.locator('span.home-header__info__name');
        await dashboardHeader.isVisible();
        await expect(dashboardHeader).toHaveText('Hello ' + process.env.EMPLOYEE_NAME);
    }
}