import fs from 'fs';
import path from 'path';

const resultsPath = 'test-results/accessibility-results.json';
const outputPath = 'src/_data/accessibility-report.json';

function generateSiteReport() {
  if (!fs.existsSync(resultsPath)) {
    console.log('No accessibility results found');
    // Create empty report
    const emptyReport = {
      timestamp: new Date().toISOString(),
      summary: { totalTests: 0, passed: 0, failed: 0, skipped: 0 },
      suites: [],
    };
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(emptyReport, null, 2));
    return;
  }
  
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalTests: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
    },
    suites: [],
  };
  
  // Process test suites
  function processSuite(suite, parentName = '') {
    const suiteName = parentName ? `${parentName} > ${suite.title}` : suite.title;
    
    // Process specs (test cases)
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        for (const result of test.results || []) {
          report.summary.totalTests++;
          
          const testName = spec.title;
          const status = result.status;
          const duration = result.duration || 0;
          const errors = result.errors?.map(e => e.message) || [];
          
          if (status === 'passed') report.summary.passed++;
          else if (status === 'failed') report.summary.failed++;
          else report.summary.skipped++;
          
          // Find or create suite
          let suiteReport = report.suites.find(s => s.name === suiteName);
          if (!suiteReport) {
            suiteReport = { name: suiteName, tests: [] };
            report.suites.push(suiteReport);
          }
          
          suiteReport.tests.push({
            name: testName,
            status,
            duration,
            errors,
          });
        }
      }
    }
    
    // Process nested suites
    for (const nestedSuite of suite.suites || []) {
      processSuite(nestedSuite, suiteName);
    }
  }
  
  for (const suite of results.suites || []) {
    processSuite(suite);
  }
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`Report generated: ${outputPath}`);
  console.log(`Summary: ${report.summary.totalTests} tests, ${report.summary.passed} passed, ${report.summary.failed} failed`);
}

generateSiteReport();