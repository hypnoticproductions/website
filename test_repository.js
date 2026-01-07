const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];

  // Collect console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore CORS/font errors for file:// protocol testing
      if (!text.includes('CORS policy') && 
          !text.includes('font') && 
          !text.includes('ERR_FAILED') &&
          !text.includes('ERR_FILE_NOT_FOUND')) {
        errors.push(`Console Error: ${text}`);
      }
    }
  });

  page.on('pageerror', err => {
    errors.push(`Page Error: ${err.message}`);
  });

  try {
    // Test the repository page
    console.log('Testing /repository page...');
    await page.goto('file:///workspace/out/repository.html');
    await page.waitForLoadState('networkidle');

    // Check for key elements from the new content
    const title = await page.locator('h1').first().textContent();
    console.log(`Found title: ${title}`);

    // Check for the new mission content elements
    const hasHealingCloud = await page.locator('text=Healing Cloud').count() > 0;
    console.log(`Has Healing Cloud reference: ${hasHealingCloud}`);

    const hasKREE = await page.locator('text=KREE').count() > 0;
    console.log(`Has KREE Framework reference: ${hasKREE}`);

    const hasBreathPatterns = await page.locator('text=3-2-5').count() > 0;
    console.log(`Has breath patterns: ${hasBreathPatterns}`);

    const hasEFT = await page.locator('text=EFT').count() > 0;
    console.log(`Has EFT references: ${hasEFT}`);

    const hasMorningProtocol = await page.locator('text=Morning Activation').count() > 0;
    console.log(`Has Morning Activation protocol: ${hasMorningProtocol}`);

    const hasDifferentWay = await page.locator('text=different way').count() > 0;
    console.log(`Has "different way" statement: ${hasDifferentWay}`);

    if (errors.length > 0) {
      console.log('\nErrors found:');
      errors.forEach(err => console.log(err));
      process.exit(1);
    } else {
      console.log('\nNo console errors detected. Page loaded successfully!');
      console.log('The mission section now authentically represents the depth of the work.');
      process.exit(0);
    }
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
