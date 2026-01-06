const { chromium } = require('/tmp/.venv/lib/node_modules/playwright');

async function testWebsite() {
  console.log('Starting browser test...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Harvester', path: '/harvester' },
    { name: 'SafeTravel', path: '/safetravel' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  let allPassed = true;
  const errors = [];

  // Listen for console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`Console Error: ${msg.text()}`);
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page Error: ${err.message}`);
    allPassed = false;
  });

  for (const pageInfo of pages) {
    console.log(`Testing ${pageInfo.name} page...`);
    
    try {
      const response = await page.goto(`http://localhost:3000${pageInfo.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000,
      });

      if (response && response.status() >= 400) {
        console.log(`❌ ${pageInfo.name}: HTTP ${response.status()}`);
        allPassed = false;
      } else {
        console.log(`✅ ${pageInfo.name}: Page loaded successfully`);
      }

      // Wait a bit for any dynamic content
      await page.waitForTimeout(1000);

    } catch (error) {
      console.log(`❌ ${pageInfo.name}: Failed to load - ${error}`);
      allPassed = false;
    }
  }

  // Test navigation
  console.log('Testing navigation...');
  try {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    const navLinks = await page.locator('nav a').count();
    console.log(`✅ Navigation: Found ${navLinks} navigation links`);
  } catch (error) {
    console.log(`❌ Navigation test failed: ${error}`);
    allPassed = false;
  }

  await browser.close();

  console.log('\n--- Test Results ---');
  if (errors.length > 0) {
    console.log('Errors found:');
    errors.forEach((err) => console.log(`  - ${err}`));
  }
  
  if (allPassed && errors.length === 0) {
    console.log('✅ All tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some tests failed');
    process.exit(1);
  }
}

testWebsite().catch((error) => {
  console.error('Test failed:', error);
  process.exit(1);
});
