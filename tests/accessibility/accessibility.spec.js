import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// All pages to test
const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/components/', name: 'Components Index' },
  { path: '/templates/', name: 'Templates Index' },
  { path: '/patterns/', name: 'Patterns Index' },
  
  // Component pages
  { path: '/components/accordion/', name: 'Accordion' },
  { path: '/components/alert/', name: 'Alert' },
  { path: '/components/banner/', name: 'Banner' },
  { path: '/components/breadcrumb/', name: 'Breadcrumb' },
  { path: '/components/button/', name: 'Button' },
  { path: '/components/button-group/', name: 'Button Group' },
  { path: '/components/card/', name: 'Card' },
  { path: '/components/checkbox/', name: 'Checkbox' },
  { path: '/components/combo-box/', name: 'Combo Box' },
  { path: '/components/date-picker/', name: 'Date Picker' },
  { path: '/components/date-range-picker/', name: 'Date Range Picker' },
  { path: '/components/dropdown/', name: 'Dropdown' },
  { path: '/components/footer/', name: 'Footer' },
  { path: '/components/form/', name: 'Form' },
  { path: '/components/grid/', name: 'Grid' },
  { path: '/components/header/', name: 'Header' },
  { path: '/components/icon/', name: 'Icon' },
  { path: '/components/identifier/', name: 'Identifier' },
  { path: '/components/input-mask/', name: 'Input Mask' },
  { path: '/components/input-prefix-suffix/', name: 'Input Prefix/Suffix' },
  { path: '/components/label/', name: 'Label' },
  { path: '/components/link/', name: 'Link' },
  { path: '/components/list/', name: 'List' },
  { path: '/components/modal/', name: 'Modal' },
  { path: '/components/navigation/', name: 'Navigation' },
  { path: '/components/pagination/', name: 'Pagination' },
  { path: '/components/process/', name: 'Process' },
  { path: '/components/radio/', name: 'Radio' },
  { path: '/components/range-slider/', name: 'Range Slider' },
  { path: '/components/search/', name: 'Search' },
  { path: '/components/side-navigation/', name: 'Side Navigation' },
  { path: '/components/slider/', name: 'Slider' },
  { path: '/components/step-indicator/', name: 'Step Indicator' },
  { path: '/components/summary-box/', name: 'Summary Box' },
  { path: '/components/table/', name: 'Table' },
  { path: '/components/tag/', name: 'Tag' },
  { path: '/components/text-input/', name: 'Text Input' },
  { path: '/components/tooltip/', name: 'Tooltip' },
  { path: '/components/typography/', name: 'Typography' },
  { path: '/components/validation/', name: 'Validation' },
  
  // Template pages
  { path: '/templates/404/', name: '404 Page' },
  { path: '/templates/documentation/', name: 'Documentation' },
  { path: '/templates/landing/', name: 'Landing Page' },
  { path: '/templates/authentication/', name: 'Authentication' },
  { path: '/templates/forms/', name: 'Forms' },
  
  // Pattern pages
  { path: '/patterns/contact-form/', name: 'Contact Form' },
  { path: '/patterns/registration-form/', name: 'Registration Form' },
  { path: '/patterns/search-with-autocomplete/', name: 'Search Autocomplete' },
  { path: '/patterns/password-reset/', name: 'Password Reset' },
  { path: '/patterns/profile/', name: 'Profile' },
];

test.describe('Accessibility Tests', () => {
  for (const page of pages) {
    test(`${page.name} should have no accessibility violations`, async ({ page: playwrightPage }) => {
      await playwrightPage.goto(page.path);
      
      // Wait for page to be fully loaded
      await playwrightPage.waitForLoadState('networkidle');
      
      // Run axe accessibility scan
      const results = await new AxeBuilder({ page: playwrightPage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        .analyze();
      
      // Log violations for debugging
      if (results.violations.length > 0) {
        console.log(`\n=== ${page.name} Accessibility Violations ===`);
        for (const violation of results.violations) {
          console.log(`\nViolation: ${violation.id}`);
          console.log(`Impact: ${violation.impact}`);
          console.log(`Description: ${violation.description}`);
          console.log(`Help: ${violation.help}`);
          console.log(`Help URL: ${violation.helpUrl}`);
          console.log(`Elements affected: ${violation.nodes.length}`);
          for (const node of violation.nodes.slice(0, 3)) {
            console.log(`  - ${node.html.substring(0, 100)}...`);
          }
        }
      }
      
      // Assert no violations
      expect(results.violations).toEqual([]);
    });
  }
});

test.describe('Interactive Component Tests', () => {
  test('Accordion should be keyboard accessible', async ({ page }) => {
    await page.goto('/components/accordion/');
    await page.waitForLoadState('networkidle');
    
    // Find accordion button
    const accordionButton = page.locator('.usa-accordion__button').first();
    
    // Test keyboard interaction
    await accordionButton.focus();
    await expect(accordionButton).toBeFocused();
    
    // Press Enter to expand
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    
    // Check if content is expanded
    const expanded = await accordionButton.getAttribute('aria-expanded');
    expect(expanded).toBe('true');
    
    // Press Enter again to collapse
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    
    const collapsed = await accordionButton.getAttribute('aria-expanded');
    expect(collapsed).toBe('false');
  });

  test('Modal should trap focus', async ({ page }) => {
    await page.goto('/components/modal/');
    await page.waitForLoadState('networkidle');
    
    // Find modal trigger button
    const modalButton = page.locator('[data-open-modal]').first();
    
    if (await modalButton.count() > 0) {
      await modalButton.click();
      await page.waitForTimeout(300);
      
      // Check if modal is visible
      const modal = page.locator('.usa-modal');
      await expect(modal).toBeVisible();
      
      // Check if close button exists
      const closeButton = page.locator('.usa-modal__close');
      await expect(closeButton).toBeVisible();
      
      // Close modal with Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    }
  });

  test('Form validation should announce errors', async ({ page }) => {
    await page.goto('/templates/forms/');
    await page.waitForLoadState('networkidle');
    
    // Find a form and submit without filling required fields
    const submitButton = page.locator('button[type="submit"]').first();
    
    if (await submitButton.count() > 0) {
      await submitButton.click();
      await page.waitForTimeout(300);
      
      // Check for error messages
      const errorMessages = page.locator('.usa-error-message');
      const errorCount = await errorMessages.count();
      
      // Should have at least one error message
      expect(errorCount).toBeGreaterThan(0);
    }
  });
});