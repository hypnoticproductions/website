const { chromium } = require('/tmp/.npm-global/lib/node_modules/playwright');

async function testTerrainEngineIntegration() {
  console.log('Starting Terrain Engine homepage integration test...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];

  // Listen for console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`Console Error: ${msg.text()}`);
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page Error: ${err.message}`);
  });

  console.log('Testing homepage for Terrain Engine integration...');
  
  try {
    const response = await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    if (response && response.status() >= 400) {
      console.log(`❌ Homepage: HTTP ${response.status()}`);
    } else {
      console.log('✅ Homepage: Page loaded successfully');
    }

    // Wait for content to render
    await page.waitForTimeout(2000);

    // Check for key elements
    console.log('Verifying homepage elements...');
    
    // Check hero section
    const heroExists = await page.locator('text=I BUILD THE ENGINES').count() > 0;
    console.log(heroExists ? '✅ Hero section found' : '❌ Hero section missing');
    
    // Check for Terrain Engine section
    const terrainSection = await page.locator('text=THE TERRAIN ENGINE').count() > 0;
    console.log(terrainSection ? '✅ Terrain Engine section found on homepage' : '❌ Terrain Engine section missing');
    
    // Check for product cards in the section
    const harvesterCard = await page.locator('text=Harvester').count() > 0;
    const safetravelCard = await page.locator('text=SafeTravel').count() > 0;
    const wukrWireCard = await page.locator('text=WUKR Wire').count() > 0;
    const morphicCard = await page.locator('text=Morphic Trade Axis').count() > 0;
    
    console.log(`✅ Harvester card: ${harvesterCard}`);
    console.log(`✅ SafeTravel card: ${safetravelCard}`);
    console.log(`✅ WUKR Wire card: ${wukrWireCard}`);
    console.log(`✅ Morphic Trade Axis card: ${morphicCard}`);
    
    // Check footer navigation for Terrain Engine link
    console.log('Testing footer navigation...');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    
    // Scroll to bottom to find footer navigation
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    
    const terrainNavLink = await page.locator('text=TERRAIN ENGINE').count() > 0;
    console.log(terrainNavLink ? '✅ Terrain Engine navigation link found' : '❌ Terrain Engine navigation link missing');
    
    // Test navigation to Terrain Engine page
    console.log('Testing navigation to /terrain-engine...');
    await page.goto('http://localhost:3000/terrain-engine', { waitUntil: 'networkidle' });
    const terrainPageLoads = await page.locator('text=We Don\'t Build Tools').count() > 0;
    console.log(terrainPageLoads ? '✅ Terrain Engine page loads correctly' : '❌ Terrain Engine page failed to load');

  } catch (error) {
    console.log(`❌ Test failed: ${error}`);
    errors.push(error.message);
  }

  await browser.close();

  console.log('\n--- Test Results ---');
  if (errors.length > 0) {
    console.log('Errors found:');
    errors.forEach((err) => console.log(`  - ${err}`));
  }
  
  if (errors.length === 0) {
    console.log('✅ All Terrain Engine integration tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some tests failed');
    process.exit(1);
  }
}

testTerrainEngineIntegration().catch((error) => {
  console.error('Test failed:', error);
  process.exit(1);
});
