====================================================
  AWS CLOUD ENGINEER PORTFOLIO WEBSITE
  How to Set Up & Run in VS Code
====================================================

STEP 1 — OPEN IN VS CODE
--------------------------
1. Extract this ZIP file to any folder on your computer
2. Open VS Code
3. Go to File → Open Folder
4. Select the extracted "portfolio-website" folder
5. Click "Open"

STEP 2 — INSTALL LIVE SERVER (one time only)
----------------------------------------------
1. In VS Code, press Ctrl+Shift+X (Extensions panel)
2. Search for "Live Server" by Ritwick Dey
3. Click Install

STEP 3 — RUN YOUR PORTFOLIO
-----------------------------
1. Right-click on "index.html" in the VS Code Explorer panel
2. Click "Open with Live Server"
3. Your portfolio opens in the browser at: http://127.0.0.1:5500

OR simply double-click index.html to open in browser directly (without live reload).

====================================================
  WHAT YOU NEED TO REPLACE (Your Personal Info)
====================================================

Search for these placeholders in index.html and replace them:

1. "Your Name"         → Your actual full name
2. "your@email.com"    → Your real email address
3. "Your City, Country"→ Your location
4. "yourprofile"       → Your LinkedIn username
5. "yourusername"      → Your GitHub username
6. "yourhandle"        → Your Twitter/X handle
7. "yourusername"      → Your Upwork / Fiverr usernames
8. The About Me text   → Replace with your own bio (look for the comments <!-- REPLACE THIS TEXT -->)

====================================================
  HOW TO MAKE THE CONTACT FORM WORK
====================================================

1. Go to https://formspree.io/ and sign up for FREE
2. Click "New Form" and enter your email address
3. Copy the Form ID (looks like: xpzgkodq)
4. Open index.html and find this line:
       action="https://formspree.io/f/YOUR_FORMSPREE_ID"
5. Replace YOUR_FORMSPREE_ID with your actual ID
   Example: action="https://formspree.io/f/xpzgkodq"
6. Save the file. The form will now send emails to you!

====================================================
  HOW TO ADD YOUR RESUME PDF
====================================================

1. Export your CV as a PDF
2. Rename it to: resume.pdf
3. Put it in the: portfolio-website/assets/ folder
4. The "Download CV" button will work automatically

====================================================
  HOW TO ADD YOUR REAL CERTIFICATIONS
====================================================

In index.html, find the Certifications section and:
- Replace the certification names with your real ones
- Add a "Verify" link with your actual Credly / Badgr URL

====================================================
  HOW TO ADD YOUR REAL PROJECTS
====================================================

In index.html, find the Projects section and:
- Replace project titles and descriptions with your real work
- Update GitHub links with your actual repo URLs
- Update "Live Demo" links with your deployed project URLs

====================================================
  FILE STRUCTURE
====================================================

portfolio-website/
├── index.html          ← Main portfolio file (edit this)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← All animations & interactions
├── assets/
│   ├── profile.jpg     ← Your profile photo (already added)
│   ├── resume.pdf      ← ADD YOUR RESUME HERE
│   └── icons/          ← All tech stack SVG icons
└── README.txt          ← This file

====================================================
  SOCIAL MEDIA LINKS (update in index.html footer)
====================================================

Find these links in the <footer> section and update:
- LinkedIn:  href="https://linkedin.com/in/yourprofile"
- GitHub:    href="https://github.com/yourusername"
- Twitter/X: href="https://twitter.com/yourhandle"
- Upwork:    href="https://upwork.com/freelancers/yourprofile"
- Fiverr:    href="https://fiverr.com/yourusername"
- Email:     href="mailto:your@email.com"

====================================================
  DEPLOYING YOUR PORTFOLIO FOR FREE
====================================================

Option 1 — Netlify (Easiest):
1. Go to https://netlify.com
2. Drag and drop your "portfolio-website" folder
3. Your site is live in 30 seconds!
4. You get a free .netlify.app domain

Option 2 — GitHub Pages (Free):
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site is live at: yourusername.github.io/portfolio

====================================================
  Built with: HTML5 + CSS3 + Vanilla JavaScript
  No frameworks needed — works everywhere!
====================================================
