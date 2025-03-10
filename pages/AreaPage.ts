import { Page, expect } from "@playwright/test";

export class AreaPage {
    constructor(private page: Page) {}
    async navigate()
    {
          await this.page.goto('https://qatestchallenge3.humanforce.io/Admin/Area');
    }
    async createArea()
    {

    }

}

