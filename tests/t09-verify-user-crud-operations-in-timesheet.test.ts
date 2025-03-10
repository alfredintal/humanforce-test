import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { TimesheetPage } from '../pages/TimesheetPage';

dotenv.config();
test.use({ headless: false }); 

test('verify user CRUD operations in Timesheet module ', async ({page}) => {
    const loginPage = new LoginPage(page);
    const tsPage = new TimesheetPage(page);
    
    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(process.env.MANAGER_ID!, process.env.PASSWORD!, process.env.MANAGER_NAME!);

    await tsPage.navigate();
    
    await tsPage.createTimesheet('MGR01');

})