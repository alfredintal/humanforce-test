import { Page, expect } from '@playwright/test';

export class EmployeeManagementPage {
    constructor(private page: Page) {}

    async navigate(substring : string)
    {
        await this.page.goto(process.env.BASE_URL! + substring);
    }

    async selectEmployeeRecord(id : string)
    {
        const employeeRow = await this.page.locator('tr:has(td:text("MGR01"))');
        await employeeRow.click();

        const editBtn = this.page.locator('button:text("Edit")')
        await editBtn.click();

    }
    async checkEditPermission()
    {
        await expect(this.page.getByText('Editing own profile You do')).toBeVisible();
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