Simple website template that can be used as a blog, contact page and portfolio. Built with React, Next.js and Tailwind CSS. 

# Installation
Make sure you have [Node.js](https://nodejs.org/en) installed.

Clone and navigate:
```
git clone git@github.com:avrtt/nextjs-simple-website.git
cd nextjs-simple-website
```

Install required modules:
```
npm i
```

Run dev server:
```
npm run dev
```

Create and configure an `.env` file:
```
RESEND_KEY=< resend key >
SENDER_EMAIL=< resend key >
FORWARD_EMAIL=< resend key >
RECAPTCHA_SECRET_KEY=< recaptcha key >
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=< recaptcha key >
```
Learn more about these keys [here](https://resend.com/) and [here](https://www.google.com/recaptcha/admin/create).

# License
The Unlicense (no attribution is required).