import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for: 30 seconds */
  timeout: 30 * 1000,
  expect: {
    /* Maximum time expect() should wait for the condition to be met: 5 seconds */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Automatically retry once if the staging server is flaky */
  retries: 1,
  /* Generate an HTML report upon completion */
  reporter: [['html', { open: 'never' }]],
  use: {
    /* Base URL of the Medusa Storefront Staging environment */
    baseURL: 'https://atqaa-medusa-storefront.vercel.app/vn',
    /* Capture screenshots and retain videos only when a test fails */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    /* Record a trace on the first retry for debugging */
    trace: 'on-first-retry',
  },

  /* Configure target browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
