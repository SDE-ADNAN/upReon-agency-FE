import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Check if the page loads without errors
    await expect(page).toHaveTitle(/upReon/);
    
    // Check for main elements
    await expect(page.locator('h1')).toContainText('Digital Excellence');
    await expect(page.locator('h1')).toContainText('Redefined');
  });

  test('should have working navigation', async ({ page }) => {
    // Test navigation menu exists
    await expect(page.locator('nav')).toBeVisible();
    
    // Test navigation links
    await expect(page.locator('nav a[href="/"]')).toContainText('Home');
    await expect(page.locator('nav a[href="/#services"]')).toContainText('Services');
    await expect(page.locator('nav a[href="/portfolio"]')).toContainText('Portfolio');
    await expect(page.locator('nav a[href="/build-dream-team"]')).toContainText('Build Team');
    await expect(page.locator('nav a[href="/#contact"]')).toContainText('Contact');
  });

  test('should navigate to services section when clicking services link', async ({ page }) => {
    await page.locator('nav a[href="/#services"]').click();
    
    // Wait for scroll animation
    await page.waitForTimeout(1000);
    
    // Check if we're at the services section
    await expect(page.locator('#services')).toBeInViewport();
  });

  test('should have CTA buttons in hero section', async ({ page }) => {
    // Check for CTA buttons
    await expect(page.locator('text=Start Your Project')).toBeVisible();
    await expect(page.locator('text=View Our Work')).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    // Check for main sections
    await expect(page.locator('#services')).toBeVisible();
    
    // Scroll to view other sections
    await page.locator('#services').scrollIntoViewIfNeeded();
    await expect(page.locator('#services h2')).toContainText('What We Deliver');
    
    // Check services are displayed
    await expect(page.locator('text=Web Development')).toBeVisible();
    await expect(page.locator('text=Mobile Applications')).toBeVisible();
    await expect(page.locator('text=UI/UX Design')).toBeVisible();
  });

  test('should have working footer links', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check footer exists and has content
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer')).toContainText('upReon');
    
    // Check footer links
    await expect(page.locator('footer a[href="/privacy"]')).toBeVisible();
    await expect(page.locator('footer a[href="/cookie-policy"]')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if mobile menu button exists
    await expect(page.locator('button:has-text("☰")')).toBeVisible();
    
    // Check if desktop nav is hidden
    await expect(page.locator('nav.hidden')).toBeHidden();
    
    // Check if content is still visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have GSAP animations initialized', async ({ page }) => {
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check if GSAP is loaded (by checking for animated elements)
    const heroTitle = page.locator('.hero-title');
    await expect(heroTitle).toBeVisible();
    
    // Check for floating elements (they should be animated by GSAP)
    await expect(page.locator('.floating-element')).toHaveCount(6);
  });
}); 