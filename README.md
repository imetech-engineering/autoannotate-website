# AutoAnnotate website

**Live site:** [autoannotate.nl](https://autoannotate.nl)  
The homepage is **Dutch/English** (toggle **NL | EN** in the nav; choice is stored in `localStorage`). Copy lives in [`i18n.js`](i18n.js). An older snapshot may live under `/v0/` on deploy for reference.

## Product screenshots

Add real UI captures under [`images/product/`](images/product/) when available and wire them in `index.html` if you want a dedicated product strip.

## Features

- **Workflow**: Capture → Detect → Annotate → Export (COCO, YOLO, CSV, JSON, etc.)
- **Sections**: What AutoAnnotate is, glossary, capabilities, problem/solution, benefits, privacy/GDPR, market context, use cases, Maatje Pop proof, contact
- **Animations**: GSAP + ScrollTrigger (lightweight scroll reveals)

## Tech stack

- HTML5, CSS3, vanilla JS
- [`i18n.js`](i18n.js) + [`script.js`](script.js)
- GSAP (CDN)

## 💻 Local Development

**Pad-URL’s** (`/team`, `/en/contact`, …) zijn client-side routes. Een gewone “static file” server (of Live Server zonder SPA-modus) geeft daarvoor **404** als je het adres direct in de balk plakt. Gebruik daarom lokaal:

```bash
cd Website
npm install
npm start
```

Open daarna **http://localhost:5173/team** — de server (`serve -s`) stuurt onbekende paden naar `index.html`.

- **Alleen de homepage testen:** `index.html` openen of een simpele live server is genoeg.
- **Productie (autoannotate.nl):** zorg dat je host **óf** `404.html` gebruikt zoals GitHub Pages (kopie van `index.html`, staat al in de repo), **óf** een rewrite naar `index.html` (`.htaccess`, `vercel.json`, `web.config`, of Netlify `_redirects`).

## 📧 Contact form setup (manual)

The contact form sends submissions to both partners via [Web3Forms](https://web3forms.com/) (free, no ads for end users). Recipient addresses are configured only in Web3Forms (never in this repo) to avoid exposing them to scrapers. You need to add two access keys once:

1. **Create two Web3Forms access keys**
   - Go to [https://app.web3forms.com/](https://app.web3forms.com/)
   - Sign up or log in and verify your email.
   - Create a form and get an **Access Key** for the IMeTech contact inbox (use that address when creating the form in Web3Forms).
   - Create a second form, or use a second account, and get an **Access Key** for the R2R contact inbox.

2. **Put the keys in the website**
   - Open `index.html` and find the contact form (footer **Contact** block).
   - You’ll see two hidden inputs:
     - `id="access_key_imetech"` → set `value="YOUR_IMETECH_ACCESS_KEY"`
     - `id="access_key_r2r"` → set `value="YOUR_R2R_ACCESS_KEY"`
   - Replace the placeholder values with the two keys from step 1 (one key per email).

3. **Test**
   - Publish the site and submit the form. Both inboxes should receive the same submission. Emails use subject **"AutoAnnotate – Contactform"** and the message body starts with **[AutoAnnotate]** so you can filter them.

If you only have one key, you can leave one input empty; the form will then only send to the address linked to the key you filled in (and show a message that the form is not fully configured if both are empty).

## 🤝 Partners & Credits

AutoAnnotate is an initiative by:
- **[R2R Engineering](https://r2r.nl)**
- **[IMeTech Engineering](https://imetech.nl)**

Special thanks to the **SAR Maatje Pop** project for providing real-world validation of the platform.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
