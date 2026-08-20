// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  workers: 1,
  expect: {timeout: 50 * 1000  },
   reporter: 'html',
   retries :1,
   

  use: {
    
    actionTimeout : 10000,
    navigationTimeout : 10000,
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace:'on',
    
  },
  globalTimeout: 100000,
  projects: [
    {name: 'chromium', use: { ...devices['Desktop Chrome'] }},
   // {name: 'firefox', use: { ...devices['Desktop Firefox'] }},
   // {name: 'webkit', use: { ...devices['Desktop Safari'] }},
    //{name: 'Mobile Chrome', use: { ...devices['Pixel 5'] }},
  ]
  
});
//module.exports = config;
