# GONA ERP - Indonesian SME Management System

## Overview
GONA ERP is a Next.js-based enterprise resource planning (ERP) system designed specifically for Indonesian small and medium enterprises (SMEs). The application provides a comprehensive dashboard for managing sales, inventory, accounting, and business operations.

## Recent Changes (October 23, 2025)
- **Vercel to Replit Migration**: Successfully migrated the project from Vercel to Replit
- **Port Configuration**: Updated dev and start scripts to bind to 0.0.0.0:5000 for Replit compatibility
- **CSS Fix**: Resolved Tailwind CSS v4 compatibility issues by switching from `styles/global.css` to `app/globals.css`
- **Deployment Configuration**: Set up autoscale deployment with proper build and start commands
- **Dependencies**: Installed all npm packages (351 packages total)

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 (App Router)
- **React**: v19.0.0
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js with react-chartjs-2
- **TypeScript**: v5
- **Package Manager**: npm

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `dashboard/` - Main dashboard page
  - `globals.css` - Global styles with Tailwind CSS v4 configuration
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Landing page
- `components/` - React components
  - `features/dashboard/` - Dashboard-specific components (StatCard, SalesChart, TopProducts, etc.)
  - `layouts/` - Layout components (Header, Sidebar)
  - `ui/` - Reusable UI components (Avatar, Button, Card)
- `lib/` - Utility functions and helpers
- `public/` - Static assets
- `styles/` - Legacy CSS files (currently not in use)

### Key Features
1. **Dashboard**: Overview of daily sales, transactions, and low stock items
2. **Sales Chart**: Visual representation of sales data using Chart.js
3. **Inventory Management**: Track top products and low stock items
4. **Indonesian Language Support**: UI text in Bahasa Indonesia
5. **Dark Mode Support**: Theme configuration in Tailwind

## Development

### Running Locally
The development server is configured to run on port 5000:
```bash
npm run dev
```
Access at: http://0.0.0.0:5000

### Building for Production
```bash
npm run build
npm start
```

## Deployment
- **Target**: Autoscale (stateless web application)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

## Environment Variables
Currently, no external environment variables are required. The application uses mock data for demonstration purposes.

## Notes
- The project uses Tailwind CSS v4 with CSS variables defined in `app/globals.css`
- Custom colors include a distinctive yellow primary color (#FFF200) for the dashboard theme
- Font: Inter (Google Fonts via next/font)
- All text content is in Indonesian (Bahasa Indonesia)
