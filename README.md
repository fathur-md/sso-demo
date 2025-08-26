# SSO Student Portal Demo

A modern demo Single Sign-On (SSO) portal for students, built with ReactJS, Vite, and Tailwind CSS.  
This project is for educational and learning purposes only.

---

## 🚧 Project Status

> **Note:**  
> This project is **not yet complete**.  
> I am developing it step by step for learning, experimenting with each part (e.g. fetch data, useQuery, useState, authentication, routing, and more).  
> You may find unfinished features, placeholder data, or code samples intended for practice.

---

## ✨ Features

- **Login & Dashboard**: Secure login with mock student data, protected dashboard route.
- **Responsive UI**: Mobile-first design using Tailwind CSS.
- **Routing**: Client-side navigation with React Router DOM.
- **State Management**: Data fetching and caching via React Query.
- **Modern Animations**: Smooth transitions using Motion and Framer Motion.
- **Accessible Components**: Built with Headless UI and Lucide React icons.
- **Custom Hooks**: Includes authentication, logout, and delayed loading hooks.
- **Linting & Formatting**: ESLint and Prettier with Tailwind plugin.
- **Easy Deployment**: One-command deploy to GitHub Pages.

---

## 🗂️ Project Structure

```
src/
  App.jsx                # Main app and routing
  main.jsx               # Entry point
  index.css              # Tailwind & custom styles
  components/            # UI components (login, dashboard, navigation, etc.)
  hooks/                 # Custom React hooks
  layouts/               # Layout components
  pages/                 # Page-level components
  services/              # Data fetching utilities
  utils/                 # Utility functions (auth, etc.)
public/
  users.json             # Mock user data
  loginData.json         # Login page content
  dashboard.json         # Dashboard content
```

---

## 🚀 Getting Started

1. **Clone the repo:**

   ```sh
   git clone https://github.com/fathur-md/sso-demo.git
   cd sso-demo
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```

---

## 🛠️ Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [Lucide React](https://lucide.dev/)
- [Headless UI](https://headlessui.com/)
- [Motion](https://motion.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## 🧑‍💻 Usage Notes

- **Login Credentials:**  
  Use NIM/NIS: `123` and Password: `123` (see [users.json](public/users.json)).
- **Demo Only:**  
  No real student data is stored or processed.
- **Customization:**  
  All UI, data, and logic can be modified for learning purposes.

---

## 📄 Attribution & Disclaimer

All content, data, logos, images, and mockup data used in this project belong to Universitas Mercu Buana Yogyakarta.  
This project is for educational and learning purposes only and is not an official product of the university.

---
