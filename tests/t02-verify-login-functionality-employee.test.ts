import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';

dotenv.config();
test.use({ headless: false }); 

test('verify login as employee', async ({page}) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(process.env.EMPLOYEE_ID!, process.env.PASSWORD!, process.env.EMPLOYEE_NAME!);

})