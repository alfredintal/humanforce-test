import { Page, expect } from "@playwright/test";

export class MessagesPage {
    constructor(private page: Page) {}
    async createNewMessage(userId : string, name : string, message : string)
    {
        await this.page.getByRole('button', {name: 'New'}).click();

        await this.page.getByText(userId).click();

        await this.page.getByRole('button', { name: 'Add', exact: true }).click();

        await this.page.locator('textarea.hf-conversation-create__textarea').fill(message);

        await this.page.locator('button.hf-button.hf-button--size-middle.hf-button--bg-yellow', {hasText: 'Send'}).nth(0).click();
    }
    async checkMessage(name : string, message : string)
    {
        await this.page.reload();

        const curMsg = this.page.locator('div.hf-messages-sidebar-item.hf-messages-sidebar-item--active').nth(0);
        await expect(curMsg.getByText(name)).toBeVisible();
        await expect(curMsg.getByText(message)).toBeVisible();
    }
}