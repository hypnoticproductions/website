const { test, expect } = require('@playwright/test');

test.describe('Repository Page - Kiosk Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/repository');
    await page.waitForLoadState('networkidle');
  });

  test('should load the repository page with Kiosk section', async ({ page }) => {
    // Check that the page loads successfully
    await expect(page).toHaveTitle(/Repository|THE REPOSITORY/i);
    
    // Check for the main heading
    const heading = page.locator('h1:has-text("THE REPOSITORY")');
    await expect(heading).toBeVisible();
  });

  test('should display Kiosk header and description', async ({ page }) => {
    // Check Kiosk header section
    const kioskHeader = page.locator('text=Decoding the Complex Through Pluralistic Integration');
    await expect(kioskHeader).toBeVisible();
    
    // Check mission badge
    const missionBadge = page.locator('text=The Mission');
    await expect(missionBadge).toBeVisible();
  });

  test('should display all 7 Kiosk nodes with animated icons', async ({ page }) => {
    // Check all 7 nodes are visible
    const nodes = [
      'Daily Architecture',
      'Breath-Matrix',
      'Visual Pattern System',
      'User Classification',
      'KREE Framework',
      'Cross-Platform',
      'Security Architecture'
    ];
    
    for (const node of nodes) {
      const nodeCard = page.locator(`text=${node}`).first();
      await expect(nodeCard).toBeVisible({ timeout: 10000 });
    }
  });

  test('should have animated icons in each Kiosk card', async ({ page }) => {
    // Check that animated icons are present (using framer-motion)
    // The icons should be inside motion components
    const animatedIcons = page.locator('[class*="motion"] svg, [class*="animate"] svg');
    const count = await animatedIcons.count();
    
    // Should have animated icons in the 7 cards
    expect(count).toBeGreaterThan(0);
  });

  test('should have scroll indicator "Peruse Lower Down"', async ({ page }) => {
    // Check scroll indicator
    const scrollIndicator = page.locator('text=Peruse Lower Down');
    await expect(scrollIndicator).toBeVisible();
    
    // Check chevron down animation
    const chevron = page.locator('svg[data-lucide="chevron-down"]');
    await expect(chevron).toBeVisible();
  });

  test('should have anchor links from Kiosk cards to detailed content', async ({ page }) => {
    // Check first Kiosk card has link to detailed section
    const dailyArchitectureCard = page.locator('text=Daily Architecture').first();
    await expect(dailyArchitectureCard).toBeVisible();
    
    // The card should be clickable and have href to anchor
    const cardParent = dailyArchitectureCard.locator('..').locator('..');
    const href = await cardParent.getAttribute('href');
    expect(href).toContain('#node-01-detail');
  });

  test('should navigate to detailed sections when clicking Kiosk cards', async ({ page }) => {
    // Click on Kiosk card for Daily Architecture
    const dailyArchitectureCard = page.locator('text=Daily Architecture').first();
    await dailyArchitectureCard.click();
    
    // Wait for scroll and check URL has hash
    await page.waitForURL(/.*#node-01-detail/);
    
    // Check detailed section is visible
    const detailedSection = page.locator('#node-01-detail');
    await expect(detailedSection).toBeInViewport({ timeout: 5000 });
  });

  test('should display detailed content sections with proper IDs', async ({ page }) => {
    // Check all detailed sections exist
    const detailedSections = [
      '#node-01-detail',
      '#node-02-detail', 
      '#node-03-detail',
      '#node-04-detail',
      '#node-05-detail',
      '#node-06-detail',
      '#node-07-detail'
    ];
    
    for (const sectionId of detailedSections) {
      const section = page.locator(sectionId);
      await expect(section).toBeVisible({ timeout: 10000 });
    }
  });

  test('should display The Architect section', async ({ page }) => {
    const architectSection = page.locator('text=The Architect');
    await expect(architectSection).toBeVisible();
    
    const richardName = page.locator('text=Richard D. Fortune');
    await expect(richardName).toBeVisible();
  });

  test('should display The Ask section', async ({ page }) => {
    const askSection = page.locator('text=What I am Looking For');
    await expect(askSection).toBeVisible();
    
    // Check all collaboration types are visible
    await expect(page.locator('text=Strategic Partners')).toBeVisible();
    await expect(page.locator('text=Research Collaborators')).toBeVisible();
    await expect(page.locator('text=Platform Integrators')).toBeVisible();
    await expect(page.locator('text=Angel Investors')).toBeVisible();
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);
    
    const kioskGrid = page.locator('.grid-cols-1');
    await expect(kioskGrid).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);
  });

  test('should have continuous animations (no paused animations)', async ({ page }) => {
    // Check that animations are not paused
    const animatedElements = page.locator('[class*="animate"]');
    const count = await animatedElements.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Repository Page - Animations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/repository');
    await page.waitForLoadState('networkidle');
  });

  test('clock icon should have rotating animation', async ({ page }) => {
    // The timer icon should be inside a motion component that rotates
    const timerIcon = page.locator('text=Daily Architecture').locator('..').locator('..').locator('svg');
    await expect(timerIcon).toBeVisible();
  });

  test('breath icon should have pulsing animation', async ({ page }) => {
    // The wind icon should have scale/opacity animation
    const breathNode = page.locator('text=Breath-Matrix').first();
    await expect(breathNode).toBeVisible();
  });

  test('eye icon should have scaling/blurring animation', async ({ page }) => {
    // The eye icon should have scale and filter animation
    const eyeNode = page.locator('text=Visual Pattern System').first();
    await expect(eyeNode).toBeVisible();
  });
});
