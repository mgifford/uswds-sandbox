import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:8080';

export default defineConfig({
  testDir: './tests/accessibility',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'test-results/accessibility-report' }],
    ['json', { outputFile: 'test-results/accessibility-results.json' }],
    ['list']
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'tablet',
      use: {
        ...devices['iPad (gen 7)'],
        viewport: { width: 810, height: 1080 },
      },
    },
    {
      name: 'mobile',
      use: {
        ...devices['iPhone 13'],
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: 'mobile-landscape',
      use: {
        ...devices['iPhone 13'],
        viewport: { width: 844, height: 390 },
      },
    },
  ],
  webServer: {
    command: 'npm run build && npm run serve',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});