import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
dotenv.config();

test('verify login as employee', async ({page}) => {
    // Used page-based implementation for login workflow to be resued in other tests as well
    const loginPage = new LoginPage(page);    
    await loginPage.navigate(process.env.BASE_URL!);
    await loginPage.login(process.env.EMPLOYEE_ID!, process.env.PASSWORD!, process.env.EMPLOYEE_NAME!);
})