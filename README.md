# 🛒 The Daily Haul

A high-performance, fully responsive e-commerce application built with Next.js (App Router) and React. The Daily Haul delivers a seamless shopping experience across all device sizes, featuring Redux Toolkit for state management, FakeStoreAPI for dynamic data, and client-side form validation powered by Yup.

## 🧰 Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Redux Toolkit**
- **React Redux**
- **React Hook Form** + **Yup**
- **CSS Modules**
- **FakeStoreAPI**

## 📦 Dependencies

```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "@reduxjs/toolkit": "^2.11.2",
  "react-redux": "^9.2.0",
  "react-hook-form": "^7.71.1",
  "@hookform/resolvers": "^5.2.2",
  "yup": "^1.7.1"
}
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
public/
├── bin.svg
├── cart.svg
├── products.svg
├── profile.jpg
├── profile.svg
└── star.svg

src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   ├── page.jsx
│   │   │   └── page.module.css
│   │   └── register/
│   │       ├── page.jsx
│   │       └── page.module.css
│   ├── cart/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── products/
│   │   ├── page.jsx
│   │   ├── page.module.css
│   │   └── details/
│   │       └── [id]/
│   │           ├── page.jsx
│   │           └── page.module.css
│   ├── profile/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── layout.module.css
│   ├── not-found.js
│   ├── not-found.module.css
│   ├── page.js
│   ├── page.module.css
│   └── StoreProvider.js
│
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   └── StarRating/
│       ├── StarRating.jsx
│       └── StarRating.module.css
│
└── lib/
    ├── slices/
    │   ├── cartSlice.js
    │   └── userSlice.js
    ├── hook.js
    └── store.js
```

## ✨ Pages

- **Products** (`/products`) — fetches products from FakeStoreAPI, displays product list with star ratings
- **Product Details** (`/products/details/[id]`) — dynamic route with detailed product view
- **Login / Register** — built with React Hook Form + Yup validation, checks credentials against `fakestoreapi.com/users/{id}`. Example login: `johnd` / `m38rmF$`
- **Cart** — add/remove products, increase/decrease quantity (max 10), cart state managed with Redux
- **Profile** — user data stored and managed globally via Redux Toolkit

## 🧠 State Management (Redux Toolkit)

**User Slice**

```
initialState: {
  name: null,
  surname: null,
  age: null,
  isLoggedIn: false
}
```

Actions:

- `updateUser` – stores user info and marks user as logged in
- `deleteUser` – logs user out
- `restoreUser` – restores login state

**Cart Slice**

```
initialState: {
  cartProducts: []
}
```

Actions:

- `addToCart` – adds product or increases quantity (max 10)
- `deleteFromCart` – removes product
- `decreaseQuantity` – decreases quantity (minimum 1)

## 📝 Notes

- This project is frontend-only
- Authentication is simulated using FakeStoreAPI
- Tokens are stored in localStorage or sessionStorage
