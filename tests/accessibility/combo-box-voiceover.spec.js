import { test, expect } from '@playwright/test';
import { guidepup } from '@guidepup/guidepup';

const PAGE = '/programs/state-combobox-test/';

test('combo box is announced correctly by VoiceOver', async ({ page }) => {
  const screenReader = guidepup;

  await screenReader.start();

  try {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Focus the combo box
    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.waitForTimeout(500);

    // Navigate with VoiceOver to hear the announcement
    await screenReader.stop();
  } catch (error) {
    await screenReader.stop();
    throw error;
  }
});

test('combo box keyboard interaction with VoiceOver', async ({ page }) => {
  const screenReader = guidepup;

  await screenReader.start();

  try {
    await page.goto(PAGE);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const input = page.locator('#state-combo-box');
    await input.focus();
    await page.waitForTimeout(500);

    // Open the list with ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);

    // Navigate down a few options
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);

    // Select with Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);

    // Verify selection
    const value = await input.inputValue();
    expect(value).toBeTruthy();

    await screenReader.stop();
  } catch (error) {
    await screenReader.stop();
    throw error;
  }
});
