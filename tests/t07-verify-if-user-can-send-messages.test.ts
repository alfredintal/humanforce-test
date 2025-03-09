import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';

dotenv.config();
test.use({ headless: false }); 

test('verify admin CRUD operations in Area module', async ({page}) => {
    const loginPage = new LoginPage(page);
    const msgPage = new MessagesPage(page);
    
    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(process.env.ADMIN_ID!, process.env.PASSWORD!, process.env.ADMIN_NAME!);

    await loginPage.goToMessagesPage("View All Messages");

    await msgPage.createNewMessage(process.env.EMPLOYEE_ID!, process.env.EMPLOYEE_FULL_NAME!, process.env.TEST_MESSAGE!);

})