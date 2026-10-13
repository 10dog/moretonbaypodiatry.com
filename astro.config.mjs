import { defineConfig } from 'astro/config';

// GitHub Pages serves the site under /<repo>/ until the custom domain is
// attached, so the deploy workflow passes the base path in.
const base = process.env.BASE_PATH || '/';
const home = base.endsWith('/') ? base : `${base}/`;

export default defineConfig({
  site: 'https://www.moretonbaypodiatry.com',
  base,
  // Pages that existed on the old Wix site and are now sections of the home page.
  redirects: {
    '/about': `${home}#about`,
    '/referrals': `${home}#referrals`,
    '/contact': `${home}#contact`,
  },
});
