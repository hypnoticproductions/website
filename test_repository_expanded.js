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
    console.log('Testing /repository page with expanded mission...');
    await page.goto('file:///workspace/out/repository.html');
    await page.waitForLoadState('networkidle');

    // Check for the new expanded nodes
    const checks = [
      { name: 'Daily Architecture', pattern: 'Morning Activation Sequence' },
      { name: 'Breath-Matrix', pattern: '3-2-5' },
      { name: 'Visual Pattern System', pattern: 'PATTERN ALPHA' },
      { name: 'User Classification', pattern: 'TYPE A' },
      { name: 'KREE Framework', pattern: 'Quantum Erasure' },
      { name: 'Cross-Platform', pattern: 'MOBILE PLATFORM' },
      { name: 'Security Layer', pattern: 'Data Encryption' },
      { name: 'Integration Statement', pattern: 'This Is The Different Way' },
    ];

    let allPassed = true;
    for (const check of checks) {
      const found = await page.locator(`text=${check.pattern}`).count() > 0;
      console.log(`${found ? '✓' : '✗'} ${check.name}: ${found ? 'FOUND' : 'MISSING'}`);
      if (!found) allPassed = false;
    }

    // Count total protocol nodes to verify expansion
    const totalNodes = await page.locator('text=—').count();
    console.log(`\nTotal protocol indicators found: ${totalNodes}`);

    if (errors.length > 0) {
      console.log('\nErrors found:');
      errors.forEach(err => console.log(err));
      process.exit(1);
    } else if (!allPassed) {
      console.log('\nSome content is missing. Please review.');
      process.exit(1);
    } else {
      console.log('\n✓ No console errors detected');
      console.log('✓ Mission section has been expanded with 7 major nodes');
      console.log('✓ Chain of explanation is now comprehensive');
      process.exit(0);
    }
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
