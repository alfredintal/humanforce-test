import { Page, expect } from "@playwright/test";

export class TimesheetPage {
    constructor(private page: Page) {}
    
    async navigate()
    {
        await this.page.goto('https://qatestchallenge3.humanforce.io/TimesheetApp/modules/timesheetAdmin');
    }
    
    async createTimesheet(userId : string)
    {
        // Create Timesheet
        await this.page.locator('#TimesheetHeader_Button_CreateTimesheet').click();
        await this.page.locator('button.action-dropdown-button', {hasText: 'Timesheets from defaults'}).click();
        await this.page.locator('span', {hasText: userId}).click();
        await this.page.locator('#EmployeeSelector_Button_SelectEmployee').click();
        await this.page.locator('#TimesheetEditor_Button_SaveChanges').click();
        // Check the table for a row that matches the userId, if found, click on the kebab then proceed to delete the first element returned
        // as it will be the one we just created, to handle multiple similar entries since there is no ID per timesheet that is visible, we can loop and store the nth(0)
        // data but will still be unreliable if there's no variation on the created data
        const row = this.page.locator('table tr', { has: this.page.locator('td', { hasText: userId }).nth(0) });
        row.isVisible();
        await row.locator('div.hf-icon.hf-icon--kebab.hf-icon--size-small').click();
        await this.page.locator('span', {hasText: 'Delete'}).click();
        await this.page.locator('button', {hasText: 'Yes'}).click();
        await this.page.reload();
        // Assert if the entry was deleted
        await expect(row).toHaveCount(0);
    }
}