import { Page, expect } from "@playwright/test";

export class AreaPage {
    constructor(private page: Page) {}
    async navigate()
    {
          await this.page.goto('https://qatestchallenge3.humanforce.io/Admin/Area');
    }
    async createArea()
    {
        for (let i = 0; i < 3; i++) {
            await this.page.locator('a', {hasText: 'Add new record'}).click();
            await this.page.locator('#Name').fill('Name ' + i);
            await this.page.locator('#ShortName').fill('ShortName ' + i);
            await this.page.locator('#ExportCode').fill('ExportCode ' + i);
            await this.page.getByRole('button', {name: 'Save'}).click();
        }
    }
    async editArea(name : string, newName: string)
    {
        // Select the first created Area
        const row = this.page.locator('table tr', { has: this.page.locator('td', { hasText: name }) });
        await row.getByRole('button', {name: 'Edit'}).nth(0).click();
        await this.page.locator('#Name').fill(newName);
        await this.page.locator('#ShortName').fill('ShortName Edited');
        await this.page.locator('#ExportCode').fill('ExportCode Edited');
        await this.page.getByRole('button', {name: 'Save'}).click();
    }
    async deleteArea(newName : string)
    {
        // Locate the updated Area
        const newRow = this.page.locator('table tr', { has: this.page.locator('td', { hasText: newName }) });
        await newRow.getByRole('button', {name: 'Delete'}).click();
        await this.page.locator('#yesButton').click();
    }
    async unDeleteArea(newName : string)
    {
        await this.page.locator('a', {hasText: 'UnDelete'}).click();
        // Wait for the Undelete window to open
        await expect(this.page.locator('#undeleteDlg_wnd_title')).toBeVisible();
        // Utilize the filter function to narrow down to the unique name (based on Epoch)
        await this.page.getByLabel('UnDelete').getByRole('columnheader', { name: 'Filter Name' }).getByLabel('Filter').click();
        await this.page.locator('input[data-bind="value:filters[0].value"]').fill(newName);
        await this.page.getByRole('button', { name: 'Filter' }).click();
        // Use filters to confirm if the element is present on the Undelete table
        // Assert if the row exists after filtering   
        const row = this.page.locator('table tr', { has: this.page.locator('td', { hasText: newName }) });
        await row.getByRole('button', {name: 'Restore'}).click();
        await this.page.locator('button', {hasText: 'Close'}).click();
    }
    async checkArea(newName)
    {
        // Use filters to confirm if the element has been restored
        // Assert if the row exists after filtering
        await this.page.locator('#GridAreas').getByRole('columnheader', { name: 'Filter Name' }).getByLabel('Filter').click();
        const openForm = this.page.locator('form[aria-hidden="false"]');
        await openForm.locator('input[data-bind="value:filters[0].value"]').fill(newName);
        await openForm.getByRole('button', { name: 'Filter' }).click();
        await expect(this.page.locator('table tr', { has: this.page.locator('td', { hasText: newName }) })).toBeVisible();
    }
}

