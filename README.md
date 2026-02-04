# 📘 OpenLearny

**OpenLearny** is a personal, structured learning platform built to organize and revisit foundational to advanced concepts across STEM and Computer Science.

This project exists to solve a simple problem:  
> *Keeping learning notes structured, accessible from anywhere, and grounded in fundamentals.*

It is not a course, not a startup, and not a shortcut system.  
It is a continuously evolving learning log, built and refined while learning.

---

## 🌐 Live Website

- **URL:** openlearny.in/  
- **Hosting:** GitHub Pages (static deployment)

---

## 🎯 Purpose

OpenLearny is designed for:
- Students who want **structured revision**
- Beginners who want to see **how concepts are layered**
- Developers who want a **clean recall reference**

The emphasis is on:
- Fundamentals first
- Clear progression
- No unnecessary abstraction
- No hype or fake completeness

---

## 🧱 Tech Stack

This is a **pure frontend project**.

- **HTML** – content structure  
- **CSS** – layout, theming, responsiveness  
- **JavaScript** – navigation, interactivity, topic loading  

There is:
- ❌ No backend  
- ❌ No database  
- ❌ No authentication  
- ❌ No frameworks  

Everything runs in the browser.

---

## 📂 Project Structure
```
.
├── index.html # Main entry point
├── robots.txt
├── README.md
│
├── assets/ # Global images & logos
│ ├── hero.jpg
│ ├── openlearnyDarkLogo.svg
│ └── openlearnyWhiteLogo.svg
│
├── css/
│ └── style.css # Global styles
│
├── js/
│ ├── blackhole.js # Hero animation / visuals
│ ├── mobile-toggle.js # Mobile navigation logic
│ └── theme.js # Light/Dark theme handling
│
└── pages/
├── learn.html # Learning hub
├── dsa.html
├── web-core.html
│
├── css/
│ └── learn.css # Page-specific styles
│
├── js/
│ └── learn.js # Page-level logic
│
└── tech/
├── topic.html # Individual topic template
│
├── assets/
│ ├── openlearnyDarkLogo.svg
│ └── openlearnyWhiteLogo.svg
│
├── css/
│ └── style.css
│
└── js/
├── data.js # Topic data & structure
├── script.js
└── topic.js # Topic rendering & logic
```
---

## 🚀 Getting Started (Local Setup)

This project requires **no build tools** and **no dependencies**.

### 1. Clone the repository
```bash
git clone <repository-url>
```
### 2. Navigate to the project
```bash
cd openlearny
```
### 3. Run locally
Open index.html directly in your browser.

**No servers. No installs. No configuration.**
## 📖 Content Philosophy

- Notes are written **while learning**, not after pretending mastery
- Topics are broken down from **first principles upward**
- Progression is intentional, not rushed
- If something can’t be explained simply, it doesn’t belong yet

The structure evolves as understanding improves.

---

## 🔒 Contributions

This repository is **publicly accessible but not open for contributions**.

- ✅ You may read, clone, and learn from the code
- ✅ You may build your own version or adapt the structure
- ❌ Pull requests will not be accepted
- ❌ This is not a collaborative notes platform

This is a **personal learning system**, shared transparently.

---

## 📌 Current Scope

- STEM fundamentals  
- Web Development  
- Computer Science basics  

*(Expanding into Mathematics and Physics over time)*

There is **no fixed syllabus**.

---

## 👤 Author

Built by a Computer Science student as a solo project focused on clarity, consistency, and fundamentals-first learning.

---

## ⚠️ Limitations

- Static content only
- No user interaction beyond reading
- No search, no accounts, no persistence
- Not optimized for scale (by design)
