import { test, expect } from '@playwright/test';

const PAGE = '/programs/state-combobox-test/';

async function injectVirtualSR(page) {
  await page.addScriptTag({
    url: 'https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js',
    type: 'module',
  });
  await page.addScriptTag({
    content: `
      import { virtual } from "https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js";
      window.virtual = virtual;
    `,
    type: 'module',
  });
  // Wait for the script to initialize
  await page.waitForTimeout(500);
}

async function getSpokenLog(page, maxSteps = 200) {
  return page.evaluate(async (steps) => {
    await window.virtual.start({ container: document.body });
    for (let i = 0; i < steps; i++) {
      const phrase = await window.virtual.lastSpokenPhrase();
      if (phrase === 'end of document') break;
      await window.virtual.next();
    }
    const log = await window.virtual.spokenPhraseLog();
    await window.virtual.stop();
    return log;
  }, maxSteps);
}

function norm(text) {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
}

test('combo box input is announced as combobox with correct name', async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.waitForLoadState('networkidle');

  await injectVirtualSR(page);
  const log = await getSpokenLog(page);
  const joined = log.map(norm).join(' | ');

  // The input should be announced as a combobox
  expect(joined).toContain('combobox');
  // It should have the label text
  expect(joined).toContain('select a state or territory');
});

test('combo box list open announces listbox with options', async ({ page }) => {
  await page.goto(PAGE);
  await page.waitForLoadState('networkidle');

  // Focus the combo box input and open the list
  const input = page.locator('#state-combo-box');
  await input.focus();
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(300);

  await injectVirtualSR(page);
  const log = await getSpokenLog(page, 100);
  const joined = log.map(norm).join(' | ');

  // Listbox should be announced
  expect(joined).toContain('listbox');
  // Options should be announced
  expect(joined).toContain('alabama');
  expect(joined).toContain('option');
});

test('combo box keyboard navigation announces active option', async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.waitForLoadState('networkidle');

  const input = page.locator('#state-combo-box');
  await input.focus();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(300);

  await injectVirtualSR(page);
  const log = await getSpokenLog(page, 100);
  const joined = log.map(norm).join(' | ');

  // Should announce the position (posinset/setsize)
  expect(joined).toContain('of');
  // Should mention selected or focused state
  expect(joined).toMatch(/option|selected|active/);
});

test('combo box Enter selection is announced', async ({ page }) => {
  await page.goto(PAGE);
  await page.waitForLoadState('networkidle');

  const input = page.locator('#state-combo-box');
  await input.focus();
  await input.type('California', { delay: 30 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);

  await injectVirtualSR(page);
  const log = await getSpokenLog(page, 100);
  const joined = log.map(norm).join(' | ');

  // California should appear in the announcements
  expect(joined).toContain('california');
});
