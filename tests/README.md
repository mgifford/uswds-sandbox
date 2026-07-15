# Accessibility Testing

This project uses Playwright and axe-core for comprehensive accessibility testing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all accessibility tests
```bash
npm run test:accessibility
```

### Run tests for specific viewports
```bash
# Desktop only (1280x720)
npm run test:accessibility:desktop

# Tablet only (810x1080 - iPad)
npm run test:accessibility:tablet

# Mobile only (390x844 - iPhone 13)
npm run test:accessibility:mobile
```

### View test results
```bash
npm run test:accessibility:report
```

## Viewport Sizes

| Device | Width | Height | Orientation |
|--------|-------|--------|-------------|
| Desktop | 1280px | 720px | Landscape |
| Tablet | 810px | 1080px | Portrait |
| Mobile | 390px | 844px | Portrait |
| Mobile Landscape | 844px | 390px | Landscape |

## What's Tested

### Accessibility Checks (axe-core)
- WCAG 2.0 Level A compliance
- WCAG 2.0 Level AA compliance
- WCAG 2.1 Level A compliance
- WCAG 2.1 Level AA compliance
- Best practices

### Interactive Component Tests
- **Accordion**: Keyboard navigation (Enter/Space to expand/collapse)
- **Modal**: Focus trapping and Escape key to close
- **Form Validation**: Error announcement and required field validation

## Test Results

Results are saved in multiple formats:
- **HTML Report**: `test-results/accessibility-report/index.html`
- **JSON Report**: `test-results/accessibility-results.json`
- **Console Output**: Real-time feedback during test execution

## CI/CD Integration

Add to your CI pipeline:
```yaml
- name: Run accessibility tests
  run: |
    npm ci
    npx playwright install --with-deps
    npm run build
    npm run test:accessibility
```

## Dark Mode Testing

Dark mode testing will be available when USWDS adds better dark mode support. The test configuration is ready to add a dark mode project when needed.

## Troubleshooting

### Tests fail to find elements
- Ensure the site is built: `npm run build`
- Check if the dev server is running on the expected port

### Browser installation issues
```bash
# Install system dependencies (Linux)
npx playwright install-deps

# Reinstall browsers
npx playwright install --force
```

### Timeout errors
Increase timeout in playwright.config.js or run with:
```bash
npx playwright test --timeout=60000
```