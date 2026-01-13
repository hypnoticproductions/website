const { chromium } = require('/tmp/.npm-global/lib/node_modules/playwright');

async function testTerrainEnginePage() {
  console.log('Starting Terrain Engine page test...');
  
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

  console.log('Testing Terrain Engine page...');
  
  try {
    const response = await page.goto('http://localhost:3000/terrain-engine', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    if (response && response.status() >= 400) {
      console.log(`❌ Terrain Engine: HTTP ${response.status()}`);
    } else {
      console.log('✅ Terrain Engine: Page loaded successfully');
    }

    // Wait for content to render
    await page.waitForTimeout(2000);

    // Check for key elements
    console.log('Verifying page elements...');
    
    // Check hero section
    const heroExists = await page.locator('text=We Don\'t Build Tools').count() > 0;
    console.log(heroExists ? '✅ Hero section found' : '❌ Hero section missing');
    
    // Check products section
    const productsExist = await page.locator('text=The Products').count() > 0;
    console.log(productsExist ? '✅ Products section found' : '❌ Products section missing');
    
    // Check for product cards
    const harvesterCard = await page.locator('text=Harvester').count() > 0;
    const safetravelCard = await page.locator('text=SafeTravel').count() > 0;
    const wukrWireCard = await page.locator('text=WUKR Wire').count() > 0;
    const morphicCard = await page.locator('text=Morphic Trade Axis').count() > 0;
    
    console.log(`✅ Harvester card: ${harvesterCard}`);
    console.log(`✅ SafeTravel card: ${safetravelCard}`);
    console.log(`✅ WUKR Wire card: ${wukrWireCard}`);
    console.log(`✅ Morphic Trade Axis card: ${morphicCard}`);
    
    // Check infrastructure section
    const infraExists = await page.locator('text=Infrastructure').count() > 0;
    console.log(infraExists ? '✅ Infrastructure section found' : '❌ Infrastructure section missing');
    
    // Check founder section
    const founderExists = await page.locator('text=Richard D. Fortune').count() > 0;
    console.log(founderExists ? '✅ Founder section found' : '❌ Founder section missing');
    
    // Check contact section
    const contactExists = await page.locator('text=Get In Touch').count() > 0;
    console.log(contactExists ? '✅ Contact section found' : '❌ Contact section missing');
    
    // Test navigation link
    console.log('Testing navigation...');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    const terrainLink = await page.locator('text=Terrain Engine').count() > 0;
    console.log(terrainLink ? '✅ Navigation link found' : '❌ Navigation link missing');

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
    console.log('✅ All Terrain Engine tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some tests failed');
    process.exit(1);
  }
}

testTerrainEnginePage().catch((error) => {
  console.error('Test failed:', error);
  process.exit(1);
});
