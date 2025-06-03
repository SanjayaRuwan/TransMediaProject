import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.test.js',
  retries: 0,
  timeout: 20000,
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'reports/html-report', open: 'never' }]]
 
});
