# Remy Privacy

**Hosts the privacy policy for the Remy app as a small static site.**

Live: **https://remy-web-policy.vercel.app**

## Files

- `index.html`: the privacy policy, effective October 2, 2025
- `styles.css`: page styles, set in JetBrains Mono
- `script.js`: smooth scrolling and scroll-in animations
- `package.json`: `npm start` serves the folder locally; `npm run deploy` commits and pushes to `main`
- `setup.sh`: first-time git setup notes, written for GitHub Pages before the site moved to Vercel

## What the policy says

Remy collects a username, an email address (for registration, communication, and account recovery), and AI usage data: text queries, interactions with the AI, and feature usage. It says it collects no financial, health, government ID, or location data. Account details are kept while the account is active; AI usage data is kept temporarily for performance and abuse detection, and some anonymized data may be kept longer for analytics. Remy does not sell, rent, or trade personal information, but it may share limited data with service providers (hosting, authentication, analytics), when the law requires it, or in a merger or sale. Users can request access, correction, or deletion by email.

## Update and deploy

Preview with `npm start` (Python's `http.server` on http://localhost:8000). Vercel deploys the `main` branch to production, so edit `index.html`, update both dates at the top, and push to `main`.

Contact: keshav-krishnan@outlook.com
