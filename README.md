# CodeTutor UI

**CodeTutor UI** is a modern, fully responsive front-end project built with React. It empowers teams to create visually appealing and highly interactive websites, with support from AI-powered tools to streamline content generation, design, and development workflows.

---

## ✨ Overview

CodeTutor UI mimics a website builder interface, integrating design flexibility, content control, and advanced automation features. With interactive videos, customer feedback, and smart UI components, it offers a smooth experience for designers, developers, and content teams alike.

---

## 📁 Project Structure

```
src/
├── App.jsx                     # Main entry point composing all components
├── App.css                     # Global styles
├── components/
│   ├── About.jsx              # AI-driven features showcase with videos and sections
│   ├── CompanyLogo.jsx        # Animated marquee of partner/company logos
│   ├── CustomerSection.jsx    # Video testimonials from users with stats and quotes
│   ├── DesignSection.jsx      # Tabbed interface to highlight design capabilities
│   ├── FeaturesSection.jsx    # Key feature list with icons and descriptions
│   ├── Footer.jsx             # Footer with links and social media icons
│   ├── Hero.jsx               # Hero/banner section (assumed from App.jsx)
│   ├── Navbar.jsx             # Navigation bar (assumed from App.jsx)
│   └── TryNow.jsx             # CTA section to engage users (assumed from App.jsx)
```

---

## 🚀 Features

### About Section (`About.jsx`)

- Scroll-based animation and video switching.
- Describes AI integration for content and layout generation.
- Includes interactive elements using the IntersectionObserver API.

### Company Logos (`CompanyLogo.jsx`)

- Horizontally scrolling animated list of trusted brand logos.
- Double-rendered list to create an infinite marquee effect.

### Customer Testimonials (`CustomerSection.jsx`)

- Video carousel of customer stories.
- Includes play/pause toggle and swipe navigation.
- Displays quotes, stats, logos, and author names.

### Design Highlights (`DesignSection.jsx`)

- Auto-rotating and manually switchable video tabs.
- Interactive design features like GSAP, Lottie, Rive support.
- Progress indicator and call-to-actions.

### Features Overview (`FeaturesSection.jsx`)

- Icon-based grid layout.
- Summarizes four main product capabilities:
  - Design and build
  - Publish and edit
  - Analyze and optimize
  - Scale and collaborate

### Footer (`Footer.jsx`)

- Structured into product, company, and resource links.
- Social media icons and copyright.
- Designed for scalability and user accessibility.

### Hero Section (`Hero.jsx`)

- Bold intro text and tagline
- Auto-playing background video
- CTA buttons: "Start building" and "Contact sales"

### Navbar (`Navbar.jsx`)

- Responsive navigation with dropdowns
- Mobile menu with animated transitions
- Integrated with React Router

### Try Now (`TryNow.jsx`)

- Prominent call to action to try the app for free
- Contact sales and hire partner options

---

## 📊 Tech Stack

- **React** – UI development
- **React Icons** – Iconography
- **TailwindCSS / Utility-first CSS** – Styling approach
- **IntersectionObserver API** – Scroll-based animation triggers
- **HTML5 Video API** – Interactive and auto-play video support
- **Responsive Design** – Mobile-first, adaptable layout

---

## ScreenShot

# Desktop view :

<img src='./src/assets/desktop.png'  width="800" height="400"/>

# Mobile view :

<img src='./src/assets/mobile.png'  width="400" height="550"/>

---

## 🚜 Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/code-tutor-ui.git
cd code-tutor-ui
npm install
```

### Running the App

```bash
npm start
```

---

## ✍️ Customization

Each component is modular and can be updated individually:

- Add more logos or update animation in `CompanyLogo.jsx`.
- Update testimonials or video links in `CustomerSection.jsx`.
- Modify tab details or video assets in `DesignSection.jsx`.
- Tweak content, style, or structure in any component as needed.

---

## 🙌 Contributing

Open to contributions! Feel free to fork the repo, submit PRs, or report issues.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📧 Contact

For inquiries, collaborations, or feedback:

- **Email**: sidshah895@gmail.com
- **Website**: https://siddharth-ai.github.io/codetutor-ui/

---

> Built with passion to empower creators and devs to launch beautiful digital experiences faster with AI.
