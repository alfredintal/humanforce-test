    // playwright.config.ts
    import { defineConfig } from '@playwright/test';

    const isHeadless = process.env.HEADLESS !== 'false';

    export default defineConfig({
      use: {
        headless: isHeadless,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
      // ... other configurations
      testDir: './tests',
      workers: 1, // Disable parallelism
      // ... other configurations
    });