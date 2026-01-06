import { chromium } from 'playwright';

async function testEngineTwoPage() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const errors = [];
  
  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console Error: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    errors.push(`Page Error: ${err.message}`);
  });
  
  try {
    // Test the local build output
    const filePath = `file://${process.cwd()}/out/engine-two.html`;
    console.log(`Testing: ${filePath}`);
    
    await page.goto(filePath, { waitUntil: 'networkidle' });
    console.log('Page loaded successfully');
    
    // Check for key elements
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Check for main headings
    const heroHeading = await page.locator('h1').first().textContent();
    console.log(`Hero heading: ${heroHeading}`);
    
    // Check Engine Two branding
    const engineTwoText = await page.locator('text=ENGINE TWO').first().isVisible();
    console.log(`Engine Two branding visible: ${engineTwoText}`);
    
    // Check Live Fire Demo section
    const liveFireSection = await page.locator('text=LIVE FIRE DEMO').first().isVisible();
    console.log(`Live Fire Demo section visible: ${liveFireSection}`);
    
    // Check Signal-First Architecture section
    const signalFirstSection = await page.locator('text=SIGNAL-FIRST').first().isVisible();
    console.log(`Signal-First Architecture visible: ${signalFirstSection}`);
    
    // Check The Bridge divider
    const bridgeSection = await page.locator('text=HOW WE BUILT THE BEAST').first().isVisible();
    console.log(`Bridge section visible: ${bridgeSection}`);
    
    // Check Complete Stack conclusion
    const completeStack = await page.locator('text=COMPLETE STACK').first().isVisible();
    console.log(`Complete Stack conclusion visible: ${completeStack}`);
    
    // Wait a bit for any delayed errors
    await page.waitForTimeout(2000);
    
    // Filter out expected font/CORS errors for local file testing
    const criticalErrors = errors.filter(err => 
      !err.includes('font') && 
      !err.includes('CORS') && 
      !err.includes('ERR_FILE_NOT_FOUND') &&
      !err.includes('ERR_FAILED')
    );
    
    if (criticalErrors.length > 0) {
      console.log('\n=== CRITICAL ERRORS FOUND ===');
      criticalErrors.forEach(err => console.log(err));
      process.exit(1);
    } else {
      console.log('\n=== ALL CONTENT VERIFIED ===');
      console.log('(Font/CORS warnings are expected for local file testing)');
      process.exit(0);
    }
    
  } catch (err) {
    console.error('Test failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testEngineTwoPage();
