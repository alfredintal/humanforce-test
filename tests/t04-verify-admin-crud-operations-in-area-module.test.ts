import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { AreaPage } from '../pages/AreaPage';
dotenv.config();
test.use({ headless: false }); 

test('verify admin CRUD operations in Area module', async ({page}) => {
    const loginPage = new LoginPage(page);   
    const areaPage = new AreaPage(page);
    await loginPage.navigate(process.env.BASE_URL!);
    await loginPage.login(process.env.ADMIN_ID!, process.env.PASSWORD!, process.env.ADMIN_NAME!);

    await areaPage.navigate();
    const newName = 'Name Edited + ' + Date.now().toString();
    await areaPage.createArea();
    await areaPage.editArea('Name 0', newName);
    await areaPage.deleteArea(newName);
    await areaPage.unDeleteArea(newName);
    await areaPage.checkArea(newName);
})