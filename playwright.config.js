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

// Script to generate site-friendly report from JSON results
export async function generateSiteReport() {
  const fs = await import('fs');
  const path = await import('path');
  
  const resultsPath = 'test-results/accessibility-results.json';
  const outputPath = 'src/_data/accessibility-report.json';
  
  if (!fs.existsSync(resultsPath)) {
    console.log('No accessibility results found');
    return;
  }
  
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalTests: results.suites?.reduce((acc, suite) => acc + (suite.specs?.length || 0), 0) || 0,
      passed: 0,
      failed: 0,
      skipped: 0,
    },
    suites: [],
  };
  
  for (const suite of results.suites || []) {
    const suiteReport = {
      name: suite.title,
      tests: [],
    };
    
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        for (const result of test.results || []) {
          suiteReport.tests.push({
            name: spec.title,
            status: result.status,
            duration: result.duration,
            errors: result.errors?.map(e => e.message) || [],
          });
          
          if (result.status === 'passed') report.summary.passed++;
          else if (result.status === 'failed') report.summary.failed++;
          else report.summary.skipped++;
        }
      }
    }
    
    report.suites.push(suiteReport);
  }
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`Report generated: ${outputPath}`);
}