# Deployment Guide - GitHub Pages

This guide will help you deploy the NOIR Atelier static website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   cd frontend
   git init
   ```

2. **Create a `.gitignore` file** in the frontend folder (if it doesn't exist):
   ```
   node_modules/
   dist/
   .DS_Store
   *.log
   ```

### 2. Update Vite Config for GitHub Pages

The `vite.config.js` needs to be updated with the base path. Update it to:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repository name
  server: {
    port: 3000
  }
})
```

**Note:** Replace `your-repo-name` with your actual GitHub repository name.

### 3. Build the Project

```bash
cd frontend
npm run build
```

This creates a `dist` folder with all the static files.

### 4. Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** in the frontend folder:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will be available at: `https://your-username.github.io/your-repo-name/`

#### Option B: Manual Deployment (Simple)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push the `dist` folder contents to the `gh-pages` branch:**
   ```bash
   npm install -g gh-pages
   cd dist
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git branch -M gh-pages
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **gh-pages** branch
   - The site will be available at: `https://your-username.github.io/your-repo-name/`

## Alternative: Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://www.netlify.com/)**

3. **Drag and drop the `dist` folder** to Netlify

   OR

   **Connect your GitHub repository** and set:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Alternative: Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd frontend
   vercel
   ```

   OR

   **Connect your GitHub repository** on [Vercel](https://vercel.com/)

## Troubleshooting

### Routes Not Working

If you're using React Router, make sure your hosting service supports client-side routing. For GitHub Pages, you may need to add a `404.html` file that redirects to `index.html`.

### Images Not Loading

Make sure all image URLs are absolute (starting with `http://` or `https://`) or relative to the base path.

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 16 or higher
- Clear cache and rebuild: `rm -rf node_modules dist && npm install && npm run build`

## Success!

Once deployed, your NOIR Atelier website will be live and accessible to everyone! 🎉

