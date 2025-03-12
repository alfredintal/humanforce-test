import { Page, expect } from '@playwright/test';

export class EmployeeManagementPage {
    constructor(private page: Page) {}
    async navigate(substring : string)
    {
        await this.page.goto(process.env.BASE_URL! + substring);
    }

    async selectEmployeeRecord(id : string)
    {
        await this.page.locator('table tr', { has: this.page.locator('td', { hasText: id }) }).click();
        this.page.locator('button', {hasText: 'Edit'}).click();
    }
    async checkEditPermission()
    {
        // Assert that the no permission error banner exists
        await expect(this.page.getByText('Editing own profile You do')).toBeVisible();
        // Assert that the user, on top of seeing the no permission error
        await this.page.locator('div.ui-dialog-buttonset').locator('button', {hasText: 'OK'}).click();
        // cannot actually edit the fields in the Employee Edit Page by checking 
        // if the Save button is present which is also used to update the fields
        // this means, regardless if there are input fields, as long as the user cannot send the request, it should not matter
        await expect(this.page.getByRole('button', {name: 'Save'})).not.toBeVisible();
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