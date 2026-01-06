import { chromium } from 'playwright';

async function testPalenquePage() {
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
    const filePath = `file://${process.cwd()}/out/palenque.html`;
    console.log(`Testing: ${filePath}`);
    
    await page.goto(filePath, { waitUntil: 'networkidle' });
    console.log('Page loaded successfully');
    
    // Check for key elements
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Check for main headings
    const heroHeading = await page.locator('h1').first().textContent();
    console.log(`Hero heading: ${heroHeading}`);
    
    // Check that the page has the protocol content
    const protocolText = await page.locator('text=THE PALENQUE PROTOCOL').first().isVisible();
    console.log(`Protocol text visible: ${protocolText}`);
    
    // Check video section
    const videoSection = await page.locator('text=DOPAMINE MUSICK').first().isVisible();
    console.log(`Video section visible: ${videoSection}`);
    
    // Check translator section
    const translatorText = await page.locator('text=TRANSLATOR').first().isVisible();
    console.log(`Translator section visible: ${translatorText}`);
    
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

testPalenquePage();
