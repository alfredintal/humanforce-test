# Humanforce Playwright Automation Test

This repository contains an automated test suite for QA Challenge using **Playwright** with **TypeScript**. The tests follow the **Page Object Model (POM)** for maintainability and verify key user interactions and validations.

---

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

### 3️⃣ **Install Playwright Browsers**
```sh
npx playwright install
```
This ensures **Chromium, Firefox, and WebKit** browsers are available for testing.

---

## ▶️ Running Tests

### ✅ **Run All Tests**
```sh
npx playwright test or npm test
```

### ✅ **Run a Specific Test File**
```sh
npx playwright test < test file >.ts
```

### ✅ **Run Tests in Headless Mode**

Update playwright.config.ts:
- Tests run in headless mode by default, changing the param in playwright.config.ts below will update it to headed mode.
```sh
const isHeadless == 'false'
```
---
