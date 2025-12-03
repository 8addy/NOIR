# NOIR Atelier - Luxury Fashion E-Commerce Website

A premium, elegant fashion e-commerce website template for a fictional high-end fashion brand. Built with React.js and Vite, featuring a sophisticated dark mode design inspired by luxury fashion houses like Saint Laurent, Givenchy, and Balmain.

**Static Frontend Application** - Ready for deployment on any static hosting service.

## 🎨 Design Philosophy

**Timeless. Minimal. Noir.**

The website follows a luxury dark mode theme with black, white, and grayscale as primary colors. The design is minimal, classy, modern, and fashion-editorial inspired, creating an immersive shopping experience.

## ✨ Features

### Frontend
- **React.js** with Vite for fast development
- **React Router** for navigation
- **Context API** for cart state management
- **TailwindCSS** for styling with custom dark mode palette
- **Framer Motion** for smooth animations
- **Fully responsive** design for all devices
- **LocalStorage** persistence for cart
- **Static data** - All product data is embedded in the frontend

### E-Commerce Features
- Product browsing with categories
- Advanced filtering (category, price, color, size, material)
- Product sorting (price, rating, latest)
- Product detail pages with image galleries
- Shopping cart with quantity management
- Checkout process
- Product reviews and ratings
- Newsletter signup
- Contact form

## 📁 Project Structure

```
project2/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── context/         # Cart context
│   │   ├── data/            # Static product data
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service (static data)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd project2/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:3000`

2. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

### Building for Production

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with all static files ready for deployment.

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

### Deployment

This is a static React application that can be deployed to:

- **GitHub Pages** - Use the `dist` folder
- **Netlify** - Connect your GitHub repo or drag & drop the `dist` folder
- **Vercel** - Connect your GitHub repo
- **Any static hosting service** - Upload the `dist` folder

## 📄 Available Pages

- **Home** (`/`) - Hero section, collections, featured products, newsletter
- **Shop** (`/shop`) - All products with filters and sorting
- **Product Detail** (`/product/:id`) - Product details, reviews, related products
- **Collections:**
  - Men (`/collection/men`)
  - Women (`/collection/women`)
  - Bags (`/collection/bags`)
  - Shoes (`/collection/shoes`)
  - Accessories (`/collection/accessories`)
- **Cart** (`/cart`) - Shopping cart with quantity management
- **Checkout** (`/checkout`) - Order placement form
- **About** (`/about`) - Brand story and philosophy
- **Contact** (`/contact`) - Contact form

## 📊 Data Management

All product data is stored statically in `frontend/src/data/mockData.js`. The API service (`frontend/src/services/api.js`) simulates async API calls but uses the static data directly.

### Data Structure
- **Products** - 12+ luxury fashion items with full details
- **Categories** - Men, Women, Shoes, Bags, Accessories
- **Reviews** - Stored with each product and can be added dynamically
- **Contact Form** - Logs submissions to console (can be connected to a service)

## 🎨 Design System

### Colors
- **Black**: `#000000`
- **Dark Gray**: `#111111`, `#222222`, `#333333`
- **Light Gray**: `#666666`, `#999999`
- **White**: `#ffffff`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Minimal, clean design
- Smooth animations and transitions
- Editorial-style layouts
- Luxury aesthetic

## 🛍️ Mock Data

The application includes 12+ luxury fashion products across different categories:
- Men's clothing (jackets, suits, shirts)
- Women's clothing (coats, dresses, trousers)
- Bags (shoulder bags, crossbody bags)
- Shoes (boots, loafers)
- Accessories (scarves, watches)

Each product includes:
- Multiple images
- Price, description, material
- Available sizes and colors
- Reviews and ratings
- Stock information

## 🔮 Future Improvements

### Recommended Enhancements
1. **Admin Dashboard**
   - Product management
   - Order management
   - User management
   - Analytics

2. **User Authentication**
   - Sign up / Sign in
   - User profiles
   - Order history
   - Wishlist functionality

3. **Payment Integration**
   - Stripe / PayPal integration
   - Secure payment processing
   - Order confirmation emails

4. **Advanced Features**
   - Search functionality
   - Product recommendations
   - Size guide
   - Live chat support
   - Social media integration

5. **Database**
   - Replace mock data with real database (MongoDB, PostgreSQL)
   - User sessions
   - Order persistence

6. **Performance**
   - Image optimization
   - Lazy loading
   - Caching strategies
   - SEO optimization

## 🛠️ Technologies Used

### Frontend
- React 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8
- TailwindCSS 3.3.6
- Framer Motion 10.16.16
- Axios 1.6.2

## 📝 Notes

- This is a **static frontend template/demo** project for showcasing purposes
- Payment processing is **simulated** (no real transactions)
- Product images use **Unsplash** placeholder URLs
- Cart data is stored in **localStorage** (browser-based)
- All product data is **static** and embedded in the frontend
- Reviews and contact form submissions are handled client-side (logged to console)
- Perfect for **GitHub Pages** deployment or any static hosting service

---

**NOIR Atelier** - *Timeless. Minimal. Noir.*

