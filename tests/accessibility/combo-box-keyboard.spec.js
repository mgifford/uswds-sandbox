import { test, expect } from '@playwright/test';

const PAGE = '/programs/state-combobox-test/';

test.describe('Combo box keyboard tests', () => {
  test.describe.configure({ mode: 'serial' });

  test('ArrowDown opens the combo box list', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();

    // List should be hidden initially
    const list = page.locator('.usa-combo-box__list');
    await expect(list).toBeHidden();

    // Input should have combobox role
    await expect(input).toHaveAttribute('role', 'combobox');
    await expect(input).toHaveAttribute('aria-expanded', 'false');

    // ArrowDown opens the list
    await page.keyboard.press('ArrowDown');
    await expect(list).toBeVisible();
    await expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  test('ArrowDown navigates through options', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');

    // First option should be focused
    const firstOption = page.locator('.usa-combo-box__list-option').first();
    await expect(firstOption).toHaveClass(/focused/);

    // ArrowDown moves to next option
    await page.keyboard.press('ArrowDown');
    const secondOption = page.locator('.usa-combo-box__list-option').nth(1);
    await expect(secondOption).toHaveClass(/focused/);

    // aria-activedescendant should update
    const activeId = await input.getAttribute('aria-activedescendant');
    expect(activeId).toBeTruthy();
    const activeOption = page.locator('#' + CSS.escape(activeId));
    await expect(activeOption).toHaveClass(/focused/);
  });

  test('ArrowUp navigates back through options', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Go back up
    await page.keyboard.press('ArrowUp');
    const activeId = await input.getAttribute('aria-activedescendant');
    expect(activeId).toBeTruthy();
    const activeOption = page.locator('#' + CSS.escape(activeId));
    await expect(activeOption).toHaveClass(/focused/);
  });

  test('ArrowUp from first option closes the list', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');

    // First option should be focused
    const list = page.locator('.usa-combo-box__list');
    await expect(list).toBeVisible();

    // ArrowUp from first option closes the list
    await page.keyboard.press('ArrowUp');
    await expect(list).toBeHidden();
    await expect(input).toHaveAttribute('aria-expanded', 'false');
  });

  test('type-to-filter narrows options', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');

    // Type "pu" to filter
    await input.type('pu', { delay: 50 });

    // Puerto Rico should be visible, others filtered
    const options = page.locator('.usa-combo-box__list-option');
    const count = await options.count();
    expect(count).toBeGreaterThan(0);

    // All visible options should contain "pu" (case-insensitive)
    for (let i = 0; i < count; i++) {
      const text = (await options.nth(i).textContent()).toLowerCase();
      expect(text).toContain('pu');
    }
  });

  test('Enter selects the focused option', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Get the focused option text
    const activeId = await input.getAttribute('aria-activedescendant');
    const activeOption = page.locator('#' + CSS.escape(activeId));
    const expectedText = await activeOption.textContent();

    // Press Enter to select
    await page.keyboard.press('Enter');

    // Input value should update
    await expect(input).toHaveValue(expectedText);

    // List should close
    const list = page.locator('.usa-combo-box__list');
    await expect(list).toBeHidden();

    // Output region should show selection
    const output = page.locator('#combo-box-output');
    await expect(output).not.toHaveText('No selection');
  });

  test('Escape closes the list without selecting', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.keyboard.press('ArrowDown');

    const list = page.locator('.usa-combo-box__list');
    await expect(list).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(list).toBeHidden();
    await expect(input).toHaveAttribute('aria-expanded', 'false');
  });

  test('click selects an option', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.click();

    // List should open on click
    const list = page.locator('.usa-combo-box__list');
    await expect(list).toBeVisible();

    // Click "California"
    const caOption = page.locator('.usa-combo-box__list-option', {
      hasText: 'California',
    });
    await caOption.click();

    // Input should show California
    await expect(input).toHaveValue('California');

    // Output region should update
    const output = page.locator('#combo-box-output');
    await expect(output).toContainText('CA');
    await expect(output).toContainText('California');
  });

  test('type and Enter selects matching option', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const input = page.locator('#state-combo-box');
    await input.focus();
    await input.type('Puerto Rico', { delay: 30 });
    await page.keyboard.press('Enter');

    // Input should show Puerto Rico
    await expect(input).toHaveValue('Puerto Rico');

    // Output region should update
    const output = page.locator('#combo-box-output');
    await expect(output).toContainText('PR');
    await expect(output).toContainText('Puerto Rico');
  });
});

test.describe('Native select tests', () => {
  test('native select change event updates output', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const select = page.locator('#state-native-select');
    await select.selectOption('PR');

    await expect(select).toHaveValue('PR');

    const output = page.locator('#native-select-output');
    await expect(output).toContainText('PR');
    await expect(output).toContainText('Puerto Rico');
  });

  test('native select is keyboard accessible', async ({ page }) => {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');

    const select = page.locator('#state-native-select');
    await select.focus();

    // Tab through options (native select keyboard behavior varies by browser)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Verify the select has a value after keyboard interaction
    const value = await select.inputValue();
    expect(value).toBeTruthy();
  });
});
