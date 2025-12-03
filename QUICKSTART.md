# Quick Start Guide

## 🚀 Running the Application

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Start the Development Server

```bash
npm run dev
```

✅ Application running on http://localhost:3000

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

## 📦 Building for Production

To build the static site for deployment:

```bash
npm run build
```

This creates a `dist` folder with all static files ready for deployment to GitHub Pages, Netlify, Vercel, or any static hosting service.

## 📋 What to Test

1. **Home Page** - Browse hero section and collections
2. **Shop** - Filter products by category, price, etc.
3. **Product Detail** - View product images, add to cart
4. **Cart** - Manage quantities, proceed to checkout
5. **Checkout** - Fill out form (demo only)
6. **Collections** - Browse Men, Women, Bags, Shoes, Accessories
7. **About** - Read brand story
8. **Contact** - Submit contact form (logs to console)

## 🎨 Design Features

- **Dark Mode** - Pure black background with white text
- **Minimal Design** - Clean, editorial-style layouts
- **Smooth Animations** - Framer Motion transitions
- **Responsive** - Works on all screen sizes
- **Luxury Aesthetic** - Premium fashion brand feel

## 💡 Tips

- Cart persists in browser localStorage
- All product images are from Unsplash (placeholder)
- All data is static and embedded in the frontend
- Payment processing is simulated (no real transactions)
- Reviews and contact submissions are handled client-side

## 🚀 Deployment

This is a static React application. To deploy:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder to:**
   - GitHub Pages
   - Netlify (drag & drop or connect GitHub)
   - Vercel (connect GitHub)
   - Any static hosting service

Enjoy exploring NOIR Atelier! 🖤
