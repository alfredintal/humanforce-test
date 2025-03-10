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
    // Navigate to timesheets page
    await tsPage.navigate();
    // Create timesheet
    await tsPage.createTimesheet(process.env.MANAGER_ID!);
    // Check if timesheet exists, then delete the timesheet 
    // and refresh the page to confirm if deletion is successful
    await tsPage.deleteTimeSheet(process.env.MANAGER_ID!);
})