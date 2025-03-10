import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { EmployeeManagementPage } from '../pages/EmployeeManagementPage';

dotenv.config();
test.use({ headless: false }); 

test('verify if user cannot update their own profile in Employee Management module', async ({page}) => {
    const loginPage = new LoginPage(page);
    const emPage = new EmployeeManagementPage(page);
    
    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(process.env.MANAGER_ID!, process.env.PASSWORD!, process.env.MANAGER_NAME!);

    await emPage.navigate('/EmployeeManagement/');

    await emPage.selectEmployeeRecord('MGR01');
    await emPage.checkEditPermission();

})