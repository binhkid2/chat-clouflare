# ChatCloudflare

Want to give Cloudflare Workers AI a try? This repo can help you get started quickly with a chat application built using Next.js, Tailwindcss and Workers AI. Based on [Nashex's wonderful GPT-4 Playground repo](https://github.com/Nashex/gpt4-playground).

## Demo
https://chat-llama2.pages.dev/
## Deploy
1. npx @cloudflare/next-on-pages
2. npx wrangler pages deploy .vercel/output/static
    #### your app is deployed but can't use yet
3. Goto your Cloudflare dashboard https://dash.cloudflare.com Workers & Pages section and go to setting of the Pages app you just deployed.
4. Add environment variables for CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_KEY
  CLOUDFLARE_ACCOUNT_ID you can find right in that page Workers & Pages/overview
 CLOUDFLARE_API_KEY (you can create a new key with just Workers AI access)
5.  Go to that page you deployed Settings>Functions>Compatibility flags section Add 'nodejs_compat' in both product, preview.

Finally run 'npx wrangler pages deploy .vercel/output/static' in your vscode again and your own Llama chat is ready for action!
