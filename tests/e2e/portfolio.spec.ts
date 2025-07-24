import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('should load portfolio page successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Portfolio.*upReon/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Our Portfolio');
  });

  test('should display portfolio stats', async ({ page }) => {
    // Check for stats in hero section
    await expect(page.locator('text=50+')).toBeVisible();
    await expect(page.locator('text=Projects Delivered')).toBeVisible();
    await expect(page.locator('text=30+')).toBeVisible();
    await expect(page.locator('text=Happy Clients')).toBeVisible();
    await expect(page.locator('text=98%')).toBeVisible();
    await expect(page.locator('text=Success Rate')).toBeVisible();
  });

  test('should display featured projects section', async ({ page }) => {
    // Scroll to featured projects
    await page.locator('text=Featured Projects').scrollIntoViewIfNeeded();
    
    // Check section exists
    await expect(page.locator('h2:has-text("Featured Projects")')).toBeVisible();
    
    // Check for project cards (should have at least 2 featured projects)
    const featuredCards = page.locator('.animate-card').filter({ hasText: 'FinTech' });
    await expect(featuredCards.first()).toBeVisible();
  });

  test('should have working category filters', async ({ page }) => {
    // Scroll to filter section
    await page.locator('text=All Projects').scrollIntoViewIfNeeded();
    
    // Check filter buttons exist
    await expect(page.locator('button:has-text("All Projects")')).toBeVisible();
    await expect(page.locator('button:has-text("Web Apps")')).toBeVisible();
    await expect(page.locator('button:has-text("Mobile Apps")')).toBeVisible();
    
    // Click on Web Apps filter
    await page.locator('button:has-text("Web Apps")').click();
    
    // Check if filter is active (should have different styling)
    await expect(page.locator('button:has-text("Web Apps")')).toHaveClass(/bg-neon-green/);
  });

  test('should display project cards', async ({ page }) => {
    // Scroll to projects grid
    await page.locator('text=All Projects').scrollIntoViewIfNeeded();
    
    // Check for project cards
    const projectCards = page.locator('.animate-card').filter({ hasText: 'FinTech' });
    await expect(projectCards.first()).toBeVisible();
    
    // Check project card content
    await expect(page.locator('text=FinTech Analytics Dashboard')).toBeVisible();
    await expect(page.locator('text=Next.js')).toBeVisible();
  });

  test('should open project modal when clicking on a project', async ({ page }) => {
    // Scroll to projects section
    await page.locator('text=All Projects').scrollIntoViewIfNeeded();
    
    // Click on a project card
    const firstProject = page.locator('.animate-card').filter({ hasText: 'FinTech' }).first();
    await firstProject.click();
    
    // Check if modal opens
    await expect(page.locator('.fixed.inset-0.z-50')).toBeVisible();
    
    // Check modal content
    await expect(page.locator('h2:has-text("FinTech Analytics Dashboard")')).toBeVisible();
    await expect(page.locator('text=Project Overview')).toBeVisible();
    await expect(page.locator('text=Technologies Used')).toBeVisible();
    await expect(page.locator('text=Key Results')).toBeVisible();
  });

  test('should close project modal', async ({ page }) => {
    // Open modal first
    await page.locator('text=All Projects').scrollIntoViewIfNeeded();
    const firstProject = page.locator('.animate-card').filter({ hasText: 'FinTech' }).first();
    await firstProject.click();
    
    // Wait for modal to open
    await expect(page.locator('.fixed.inset-0.z-50')).toBeVisible();
    
    // Close modal using X button
    await page.locator('button:has-text("×")').click();
    
    // Check if modal is closed
    await expect(page.locator('.fixed.inset-0.z-50')).toBeHidden();
  });

  test('should have CTA section at bottom', async ({ page }) => {
    // Scroll to bottom CTA
    await page.locator('text=Ready to Start Your Next Project').scrollIntoViewIfNeeded();
    
    // Check CTA content
    await expect(page.locator('h2:has-text("Ready to Start Your Next Project")')).toBeVisible();
    await expect(page.locator('a:has-text("Start Your Project")')).toBeVisible();
    await expect(page.locator('a:has-text("Build Your Team")')).toBeVisible();
  });

  test('should navigate to build team page from CTA', async ({ page }) => {
    // Scroll to CTA section
    await page.locator('text=Build Your Team').scrollIntoViewIfNeeded();
    
    // Click build team button
    await page.locator('a:has-text("Build Your Team")').click();
    
    // Check if navigated to build team page
    await expect(page).toHaveURL(/\/build-dream-team/);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if content adapts to mobile
    await expect(page.locator('h1')).toBeVisible();
    
    // Check if grid layout changes on mobile
    const projectGrid = page.locator('.grid');
    await expect(projectGrid).toBeVisible();
  });

  test('should have proper SEO meta tags', async ({ page }) => {
    // Check for meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /portfolio|projects/i);
  });
}); 