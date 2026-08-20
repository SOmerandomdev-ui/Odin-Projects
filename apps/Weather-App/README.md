# Weather-App

Webpack frontend with a Vercel serverless API route for weather data.

## Environment variables

Set `VISUAL_CROSSING_API_KEY` in the Vercel project settings (Production, Preview, and Development). Generate a new key at [Visual Crossing](https://www.visualcrossing.com/weather-api) and revoke any key that was previously committed to source control.

## Local development

```bash
npm install
npm run dev
```

For API routes locally, use `vercel dev` from this directory with `VISUAL_CROSSING_API_KEY` in a `.env.local` file.

## Deploy

Build output goes to `dist/`. The `/api/weather` route runs as a Vercel serverless function.

