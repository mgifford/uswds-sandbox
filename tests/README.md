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

### Run combo box tests
```bash
# Combo box keyboard tests (Chrome + Firefox)
npm run test:combo-keyboard

# Combo box keyboard tests (Chrome only)
npm run test:combo-keyboard:chrome

# Combo box keyboard tests (Firefox only)
npm run test:combo-keyboard:firefox

# Combo box screenreader tests (Chrome only, requires GuidePup)
npm run test:combo-screenreader
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

### Combo Box Keyboard Tests
- **ArrowDown opens list**: `aria-expanded` transitions from false to true
- **ArrowDown/Up navigates options**: `aria-activedescendant` updates correctly
- **ArrowUp from first option closes list**: Returns focus to input
- **Type-to-filter**: Narrows options based on typed characters
- **Enter selects option**: Input value updates, list closes, output region shows selection
- **Escape closes list**: Without selecting
- **Click selects option**: Mouse interaction works
- **Type and Enter**: Filters and selects matching option
- **Native select fallback**: Change event updates output region

### Combo Box Screenreader Tests (GuidePup)
- **Input announced as combobox**: Correct role and name
- **Listbox announced on open**: Options visible to screen readers
- **Keyboard navigation announced**: Active option with position info
- **Selection announced**: Chosen option confirmed

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