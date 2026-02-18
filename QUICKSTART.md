# Quick Start Guide - Portfolio Website

## 🚀 Getting Started (3 Easy Steps)

### Step 1: Open Your Portfolio
1. Navigate to your portfolio folder: `C:\Users\U S E R\OneDrive\Desktop\portfolio-website`
2. Double-click `index.html` to open in your default browser
3. That's it! Your website is live locally

### Step 2: Customize Your Information
Replace these placeholders with your actual information:

**In `index.html`:**
- Line 35: `<h1 class="hero-title">Hi, I'm <span class="accent">Kamsini Sivakuru</span></h1>`
  - Replace `Kamsini Sivakuru` with your name
  
- Search for `YOUR_GITHUB_USERNAME` (appears 4 times)
  - Replace ALL instances with your actual GitHub username
  - Example: `https://github.com/kamsini-sivakuru`

- Line 67: `<button class="btn btn-primary" id="downloadCV">Download CV</button>`
  - This already works! Make sure `cv.pdf` is in the same folder

- Line 77: Email and other contact details
  - Update `yourname@gmail.com` with your email

### Step 3: Update Your CV
1. Create/prepare your CV as a PDF file
2. Name it exactly: `cv.pdf`
3. Place it in the portfolio folder (same location as `index.html`)
4. Done! The "Download CV" button will now download your CV

## ✨ What's Already Configured

✅ **Modern Design**: Professional navy blue + neon cyan color scheme
✅ **3D Animations**: Rotating cube and 3D hover effects
✅ **Responsive**: Works perfectly on mobile, tablet, and desktop
✅ **Smooth Scrolling**: Navigation links scroll smoothly to sections
✅ **Download CV**: Button downloads your PDF automatically
✅ **GitHub Links**: All GitHub links open in new tabs
✅ **Project Links**: All project links open in new tabs
✅ **Scroll Effects**: Fade-in animations and parallax effects
✅ **Mobile Menu**: Hamburger menu for mobile devices

## 🎨 Color Theme Used

As requested, I've used a professional color scheme perfect for tech portfolios:

```
Primary Background: #0a192f  (Deep Navy - Professional & Tech)
Accent Color:       #64ffda  (Neon Cyan - Modern & Eye-catching)
Text Color:         #ccd6f6  (Light Gray - Easy to read)
Card Background:    #112240  (Dark Blue - Nice contrast)
```

## 📋 What's Included in Each Section

### 1. **Navigation Bar** (Top of page)
   - Links: Home, About, Skills, Projects, Contact
   - Smooth scrolling to each section
   - Highlights current section as you scroll

### 2. **Hero Section** (Main landing area)
   - Your name and role prominently displayed
   - Professional tagline
   - Download CV button ⬇️
   - GitHub button (opens in new tab) 🔗
   - Rotating 3D cube animation 🎲
   - Social media links

### 3. **About Section**
   - Professional bio (already filled with your details)
   - Education background
   - Fun statistics (Projects, Skills, Years Learning)

### 4. **Skills Section**
   - 6 skill cards with hover effects:
     - HTML, CSS, JavaScript
     - Node.js/PHP, MySQL/MongoDB, Git & GitHub
   - Each card has a 3D hover effect

### 5. **Projects Section**
   - 4 sample projects with descriptions
   - Each project opens in a new tab when clicked
   - Projects included:
     - Portfolio Website
     - To-Do List Application
     - Student Management System
     - Mini E-Commerce Website

### 6. **Contact Section**
   - Email contact information
   - Location (Sri Lanka)
   - GitHub profile link (prominently displayed)

### 7. **Footer**
   - Copyright text with your name and year

## 🔧 How to Update Different Sections

### Update Your Projects
1. Open `index.html`
2. Find the Projects section (around line 240)
3. For each project, update:
   - Project title
   - Description
   - Technologies used (tags)
   - Project URL (the link that opens in new tab)

Example:
```html
<a href="YOUR_PROJECT_LINK" class="btn btn-small" target="_blank">View Project</a>
```

### Update Your Skills
1. Open `index.html`
2. Find the Skills section (around line 195)
3. For each skill, you can:
   - Change the skill name
   - Change the description
   - Change the icon (Font Awesome icons)

### Change Colors (Optional)
1. Open `style.css`
2. Find `:root` at the top (line 7)
3. Update the color variables:
   - `--primary-bg`: Main background color
   - `--accent-color`: Highlight/accent color
   - `--text-color`: Text color
   - `--card-bg`: Card background color

## 📱 Testing on Different Devices

Your portfolio is fully responsive! Test on:
- **Desktop**: Open in browser normally
- **Tablet**: Use browser's responsive design mode (F12 → Click device icon)
- **Mobile**: Use browser's responsive design mode with "Mobile" preset

## 🔗 Important Links That Need Updating

Search for these in `index.html` and update them:

1. `YOUR_GITHUB_USERNAME` - appears 4 times
   - Hero section GitHub button
   - Hero section social links
   - Contact section GitHub link
   - Contact section CTA button

2. `yourname@gmail.com` - your email address
   - Contact section
   - Update to your actual email

3. Project links - in the Projects section
   - Each "View Project" button should link to your actual projects

## 📂 File Structure

```
portfolio-website/
├── index.html      (Main HTML - Contains your content)
├── style.css       (Styling & Animations)
├── script.js       (Interactive features)
├── cv.pdf          (Your CV - Place your actual CV here)
└── README.md       (Documentation)
```

## ✅ Checklist Before Sharing Your Portfolio

- [ ] Updated your name (replace "Kamsini Sivakuru")
- [ ] Updated your GitHub username (4 places)
- [ ] Updated your email address
- [ ] Added your actual CV as `cv.pdf`
- [ ] Updated project titles and links
- [ ] Updated project descriptions
- [ ] Customized skills list if needed
- [ ] Tested "Download CV" button
- [ ] Tested all GitHub links open in new tabs
- [ ] Tested all project links open in new tabs
- [ ] Tested on mobile (use F12 → responsive design mode)
- [ ] Tested smooth scrolling navigation

## 🌐 Deploy Your Portfolio (Optional)

Once happy with your portfolio, you can deploy it for free:

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repo named `portfolio-website`
2. Upload all files to the repo
3. Enable GitHub Pages in repo settings
4. Your portfolio will be live at: `yourusername.github.io/portfolio-website`

### Option 2: Netlify
1. Go to netlify.com
2. Drag and drop your portfolio folder
3. Your site goes live instantly (free)

### Option 3: Vercel
1. Go to vercel.com
2. Upload your project
3. Get a live URL instantly

## 🎯 Tips for Success

1. **Keep it Updated**: Update your CV and projects regularly
2. **Quality over Quantity**: Show 3-4 best projects rather than many mediocre ones
3. **Real GitHub Links**: Make sure your GitHub projects are public and well-documented
4. **Fast Responses**: Check your email regularly for recruiter inquiries
5. **Professional Email**: Use a professional email address (firstname.lastname@email.com)
6. **Working Links**: Test all links before sharing with recruiters

## ❓ Troubleshooting

### CV Download Not Working
- Make sure `cv.pdf` is in the same folder as `index.html`
- Check the filename is exactly `cv.pdf` (case-sensitive on some systems)

### Links Not Opening in New Tab
- Check that `target="_blank"` is present in the link
- Some browsers may block this behavior - test in different browsers

### Animations Not Showing
- Make sure JavaScript is enabled in your browser
- Check browser console (F12 → Console) for errors
- Try refreshing the page

### Mobile Menu Not Working
- The hamburger menu appears only on screens narrower than 768px
- Test using browser's responsive design mode (F12)

## 📞 Need Help?

- Check the README.md file for more detailed information
- Review comments in HTML, CSS, and JavaScript files
- Test individual features using browser's developer tools (F12)

---

**Good luck with your job search! You've got this! 🚀**
