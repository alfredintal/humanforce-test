import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { RosteringManagerPage } from '../pages/RosteringManagerPage';
dotenv.config();
test.use({ headless: false }); 

test('verify if users are blocked if they do not have access to a page', async ({page}) => {
    const loginPage = new LoginPage(page);
    const rmPage = new RosteringManagerPage(page);
    await loginPage.navigate(process.env.BASE_URL!);
    await loginPage.login(process.env.EMPLOYEE_ID!, process.env.PASSWORD!, process.env.EMPLOYEE_NAME!);
    // Navigate to Rostering Manager page, check the alerts in place
    // then redirect user back to Dashboard
    await rmPage.navigate('/RosteringManager/');
    await rmPage.checkPermissions(process.env.NO_PERM_MESSAGE!);
    await rmPage.returnToDashboard();
})