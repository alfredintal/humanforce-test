    // playwright.config.ts
    import { defineConfig } from '@playwright/test';

    const isHeadless = process.env.HEADLESS == 'false';

    export default defineConfig({
      projects: [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        },
        {
          name: 'Firefox',
          use: { browserName: 'firefox' },
        },
        {
          name: 'WebKit',
          use: { browserName: 'webkit' },
        },
      ],
      use: {
        headless: isHeadless,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
      // ... other configurations
      testDir: './tests',
      workers: 5, // Modify parallelism
      retries: 2, // Allow for multiple retries on failing tests
      // ... other configurations
    });