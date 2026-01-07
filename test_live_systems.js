const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];

  // Collect console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore CORS/font errors for file:// protocol testing - these are expected
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
    // Test the live-systems page
    console.log('Testing /live-systems page...');
    await page.goto('file:///workspace/out/live-systems.html');
    await page.waitForLoadState('networkidle');

    // Check for key elements
    const title = await page.locator('h1').first().textContent();
    console.log(`Found title: ${title}`);

    const hasSystems = await page.locator('text=HARvester').count() > 0 || await page.locator('text=HARVESTER').count() > 0;
    console.log(`Has HARVESTER system: ${hasSystems}`);

    const hasSafeTravel = await page.locator('text=SAFETRAVEL').count() > 0;
    console.log(`Has SAFETRAVEL system: ${hasSafeTravel}`);

    const hasAsk = await page.locator('text=THE ASK').count() > 0;
    console.log(`Has THE ASK section: ${hasAsk}`);

    if (errors.length > 0) {
      console.log('\nErrors found:');
      errors.forEach(err => console.log(err));
      process.exit(1);
    } else {
      console.log('\nNo console errors detected. Page loaded successfully!');
      process.exit(0);
    }
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
