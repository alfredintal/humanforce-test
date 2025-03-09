import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { RosteringManagerPage } from '../pages/RosteringManagerPage';

dotenv.config();
test.use({ headless: false }); 

test('verify login as employee', async ({page}) => {
    const loginPage = new LoginPage(page);
    const rmPage = new RosteringManagerPage(page);
    
    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(process.env.EMPLOYEE_ID!, process.env.PASSWORD!, process.env.EMPLOYEE_NAME!);

    await rmPage.navigate('/RosteringManager/');

    await rmPage.checkPermissions(process.env.NO_PERM_MESSAGE!);

    await rmPage.returnToDashboard();
})