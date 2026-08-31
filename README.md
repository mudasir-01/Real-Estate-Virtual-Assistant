# Muhammad Mudasir — Real Estate Virtual Assistant Website

A modern React + Vite portfolio/service website for a Real Estate Virtual Assistant.

## Included services

- Lead Generation — **$15 / 100 leads**
- Cold Calling — **$30 / 100 calls**
- Appointment Setting — **$100 / 3 appointments**
- 2+ years experience
- Works with real estate investors, agents, brokers, wholesalers, business owners and real estate companies
- Supports both buyer and seller lead campaigns
- Property niches: mobile homes/parks, RV parks, fix & flip, single-family, multifamily, self storage, vacant land and commercial
- Skip tracing, motivated seller leads, lead qualification, CRM/Google Sheets, follow-up and more

## Tech stack

- React
- Vite
- CSS
- Node.js + Express
- Nodemailer for contact-form email notifications

## Run the website

Install Node.js first.

```bash
npm install
```

For the website + contact-form API during development, use **two terminals**:

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

Then open:

`http://localhost:5173`

The Vite development server proxies `/api` requests to the Express server on port 5000.

## Enable email notifications

The contact form is wired to the Express backend. To receive an email whenever a client submits the form:

1. Copy `.env.example` to `.env`
2. Add your SMTP credentials.
3. For Gmail, turn on 2-Step Verification and create a Gmail **App Password**.
4. Put the App Password in `SMTP_PASS`.
5. Set `NOTIFY_EMAIL` to the inbox where you want inquiries.

Then run:

```bash
npm run server
```

For a simple production setup, build the React app and run the server:

```bash
npm run build
npm run server
```

The Express server serves the built React app and handles `/api/contact`.

## Important deployment note

If you deploy the frontend and backend on separate domains, change the `fetch("/api/contact")` URL in `src/App.jsx` to your deployed backend URL and configure CORS for that domain.

## Contact details used

- Muhammad Mudasir
- WhatsApp: +92 329 6649407
- Email: muhammadmudasir5223@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-mudasir-785340415

## Reviews

No fake testimonials were added. Replace the “Client Feedback” section with **real, verified client reviews** when you have them.

## Before publishing

- Add a professional headshot/logo if desired.
- Add verified client reviews.
- Add real portfolio/sample lead-list screenshots if you have permission to show them.
- Configure email notifications.
- Connect a custom domain.
- Test the contact form from a phone and desktop.
