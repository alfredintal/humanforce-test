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

    await areaPage.createArea();

    await areaPage.editAndDeleteArea();

})