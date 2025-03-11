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
    async editAndDeleteArea()
    {
        // Set a name to be used as reference for the new Area
        const newName = 'Name Edited ' + Date.now().toString();
        // Select the first created Area
        const row = this.page.locator('table tr', { has: this.page.locator('td', { hasText: 'Name 0' }) });
        await row.getByRole('button', {name: 'Edit'}).click();
        await this.page.locator('#Name').fill(newName);
        await this.page.locator('#ShortName').fill('ShortName Edited');
        await this.page.locator('#ExportCode').fill('ExportCode Edited');
        await this.page.getByRole('button', {name: 'Save'}).click();
        // Locate the updated Area
        const newRow = this.page.locator('table tr', { has: this.page.locator('td', { hasText: newName }) });
        await newRow.getByRole('button', {name: 'Delete'}).click();
        await this.page.locator('#yesButton').click();

        this.unDeleteArea(newName);
    }

    async unDeleteArea(newName : string)
    {
        await this.page.locator('a', {hasText: 'UnDelete'}).click();
        await this.page.locator('a[aria-label="Go to the last page"]').click();
        const row = this.page.locator('table tr', { has: this.page.locator('td', { hasText: newName }) });
        await row.getByRole('button', {name: 'Restore'}).click();
        await this.page.locator('button', {hasText: 'Close'}).click();
    }

}

