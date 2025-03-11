# Humanforce Playwright Automation Test

This repository contains an automated test suite for QA Challenge using **Playwright** with **TypeScript**. The tests follow the **Page Object Model (POM)** for maintainability and verify key user interactions and validations.

---

## 📜 Acceptance Criteria

Feature: User Story #1 - Easy **(DONE)**
```
  Scenario: Navigate to 'Time & Attendance' page and read an article
    Given I am a viewer
    When I visit "https://www.humanforce.com/"
    And I navigate to the 'Time & Attendance' page
    Then I should see helpful resources at the bottom of the page
    When I select the '7 benefits of workforce analytics for business' article
    Then I should be able to read the article
```
Feature: User Story #2 - Easy **(DONE)**
```
  Scenario: Login successfully and see greeting
    Given I am an Employee with valid credentials
    When I visit "<test tenant>"
    And I log in with my credentials
    Then I should be redirected to the home page
    And I should see a greeting with my name
```
Feature: User Story #3 - Medium **(BLOCKED, THE HF ACADEMY BUTTON IS MISSING)**
```
  Scenario: Access HF Academy and read an article
    Given I am a Manager
    When I log in to "<test tenant>"
    And I click the 'HF Academy' button at the bottom left of the page
    Then a pop-up window should appear
    When I search for 'Personal'
    Then I should find an article titled 'How do I view or update my details'
    When I scroll down and select the article
    Then I should be able to read the article
    When I navigate back to the Home Page
    And I log out of the system
    Then I should be successfully logged out
```
Feature: User Story #4 - Hard **(DONE)**
```
  Scenario: Create, modify, and manage Areas
    Given I am an Admin
    When I navigate to "<test tenant>/Admin/Area"
    And I add multiple new Areas
    Then I should see all created Areas listed
    When I edit an Area
    Then the changes should be saved successfully
    When I delete an Area
    Then it should no longer be listed
    When I undelete the Area
    Then it should reappear in the list
```
Feature: User Story #5 - Very Hard **(SKIPPED)**
```
  Scenario: Import Employee data from CSV file
    Given I have downloaded the CSV file and updated Employee details
    When I visit "<test tenant>/IntegrationsCentral/"
    And I add a new 'File Import' task with Data type 'Employee Basic'
    And I upload the provided CSV file
    And I proceed without making changes
    Then I should see a pop-up about File Import
    When I select 'Import Only'
    Then the system should confirm the import completion
    When I navigate to "<test tenant>/EmployeeManagement/"
    And I set the Location filter to 'All Locations'
    Then I should see the imported employee in the system
```
Feature: User Story #6 - Easy **(DONE)**
```
  Scenario: Employee is prevented from accessing Rostering Manager page
    Given I am an Employee
    When I log in and navigate to "<test tenant>/RosteringManager/"
    Then I should be prevented from viewing the content
    And I should see a message explaining the restriction
    When I navigate back to the home page
    Then I should be able to continue with my work
```
Feature: User Story #7 - Medium **(DONE)**
```
  Scenario: Send a message via chat feature
    Given I am an Admin
    When I click 'View all messages' under the MESSAGES section on the Home Page
    And I send a new message to another employee
    Then the intended recipient should be correct
    And the message should be visible in the chat box
```
Feature: User Story #8 - Easy **(DONE)**
```
  Scenario: Manager is prevented from modifying their own profile
    Given I am a Manager
    When I navigate to "<test tenant>/EmployeeManagement/"
    And I try to edit my employee profile
    Then I should see a warning message
    And I should be prevented from saving any changes
```
Feature: User Story #9 - Medium **(DONE)**
```
  Scenario: Create and delete a timesheet
    Given I am a Manager
    When I navigate to "<test tenant>/TimesheetApp/modules/timesheetAdmin"
    And I create a new 'Timesheet from defaults' selecting myself as the employee
    Then I should see the created timesheet on the page
    When I delete the timesheet through the kebab menu
    Then the timesheet should be removed from the view
```


## 📌 Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)
- **Git** (for cloning the repository) - [Download Here](https://git-scm.com/)
- **Playwright** (installed via npm)

---

## 🛠️ Setup Instructions

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/alfredintal/humanforce-test.git
cd humanforce-test
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```
This will install:
- Playwright
- Jest/Mocha test runner
- Other required dependencies


---

## ▶️ Running Tests

### ✅ **Run All Tests**
```sh
npx playwright test or npm test
```

### ✅ **Run a Specific Test File**
```sh
npx playwright test or npm test < test file >.ts
```

### ✅ **Run Tests in Headless Mode**

Update playwright.config.ts:
- Tests run in headless mode by default, changing the param in playwright.config.ts below will update it to headed mode.
```sh
const isHeadless == 'false'
```
---
