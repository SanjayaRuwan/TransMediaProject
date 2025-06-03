# Playwright Automation Framework (UI + API)

This project is a modular and scalable end-to-end test automation framework built with **Playwright + JavaScript**, using the **Page Object Model (POM)** design pattern.

**Test Target**: [http://localhost:3000/](http://localhost:3000/)  
**Covers**: UI + API Testing

---

## Project Structure

├── tests/
│ ├── ui/
│ │ ├── board.test.js
│ │ └── list.test.js
│ └── api/
│ └── list.api.test.js
├── pages/
│ ├── BoardPage.js
│ └── ListPage.js
├── utils/
│ └── apiHelper.js
├── playwright.config.js
└── README.md


---

## Features

- Page Object Model (POM) for UI layer
- API testing integrated with REST APIs
- Playwright Test Runner
- HTML Report with screenshots, videos, and trace
- Supports local testing with [http://localhost:3000]

--------------------------------------------------------
UI Test run
npx playwright test tests/ui

API Tests
npx playwright test tests/api

Run All Tests with Report

npx playwright test
npx playwright show-report

--------------------------------------------------------
