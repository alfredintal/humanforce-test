import {test, expect} from '@playwright/test';
test.use({ headless: false }); 

test('Navigate to specified article', async ({page}) => {
    await page.goto('https:///www.humanforce.com');

    // Replace with the text of the link you want to select
    const linkText = 'Time & Attendance';
    const linkText2 = '7 benefits of workforce';

    // Click the first Time & Attendance text link and assert if the correct page is loaded
    await page.getByRole('link', { name: linkText }).click();
    await expect(page).toHaveURL('https://humanforce.com/product/workforce-management/time-and-attendance/')
    // Click on the 7 benefits of workforce card on the Helpful Resources section and assert if the correct article is loaded
    await page.getByRole('link', { name: linkText2 }).click();
    await expect(page).toHaveURL('https://humanforce.com/blog/7-benefits-of-workforce-analytics-for-business/')
});