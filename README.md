# Shoe eCommerce Website

A fully responsive shoe eCommerce website built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, and modern UI components. This project recreates the clean, modern aesthetic of premium shoe stores with a focus on user experience and accessibility.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse 15+ shoes with realistic dummy data
- **Advanced Filtering**: Filter by category, price range, tags, and sorting options
- **Product Details**: Image gallery, descriptions, pricing, and stock information
- **Shopping Cart**: Add/remove items, quantity management, persistent cart storage
- **Responsive Design**: Mobile-first approach with seamless desktop experience

### UI/UX Features
- **Modern Design**: Clean layout inspired by premium shoe stores
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Components**: Hover states, dropdown menus, and dynamic filters
- **Accessibility**: Semantic HTML5, ARIA labels, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient state management

### Technical Features
- **Next.js 14 App Router**: Latest React framework with server components
- **TypeScript**: Type-safe development with full IntelliSense support
- **Tailwind CSS**: Utility-first styling with custom design system
- **Zustand**: Lightweight state management for cart and products
- **Radix UI**: Accessible, unstyled component primitives

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom design tokens
- **State Management**: Zustand with persistence
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Build Tools**: PostCSS, Autoprefixer

## 📦 Project Structure

```
shoe-ecommerce/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── product/[id]/      # Dynamic product detail pages
│   ├── shop/              # Product catalog with filters
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Button, etc.)
│   ├── Navbar.tsx        # Navigation with dropdowns
│   ├── Footer.tsx        # Site footer
│   ├── ProductCard.tsx   # Product grid item
│   └── Filters.tsx       # Product filtering panel
├── lib/                   # Utility functions and stores
│   ├── store.ts          # Cart state management
│   ├── product-store.ts  # Product filtering state
│   └── utils.ts          # Helper functions
├── data/                  # Static data
│   └── products.ts       # Product catalog data
├── types/                 # TypeScript type definitions
│   └── index.ts          # Core type interfaces
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or setup the project**:
   ```bash
   # If you have the project files
   cd shoe-ecommerce
   
   # Install dependencies
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages & Routes

### Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Category navigation
- Trust indicators and features

### Shop (`/shop`)
- Product grid with filtering sidebar
- Category, price, tag, and sorting options
- Responsive layout with mobile filters
- Search and pagination ready

### Product Detail (`/product/[id]`)
- Image gallery with thumbnails
- Product information and specifications
- Quantity selector and add to cart
- Related products section
- Stock status and pricing

### Shopping Cart (`/cart`)
- Cart item management
- Quantity adjustments
- Order summary with shipping/tax
- Checkout flow ready
- Empty cart state

## 🎨 Design System

### Colors
- **Primary**: Blue-600 for CTAs and interactive elements
- **Neutral**: Gray scale for typography and borders
- **Accent**: Red-500 for discounts and alerts
- **Background**: White with subtle gray variations

### Typography
- **Headings**: Bold, clean sans-serif hierarchy
- **Body**: Readable text with proper line height
- **Responsive**: Scales appropriately across devices

### Components
- **Buttons**: Multiple variants (primary, outline, ghost)
- **Cards**: Consistent spacing and hover states
- **Forms**: Accessible input fields and controls
- **Navigation**: Dropdown menus and mobile responsive

## 🔧 Customization

### Adding Products
Edit `data/products.ts` to add or modify products:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  images: ["/image1.jpg", "/image2.jpg"],
  price: 199,
  oldPrice: 249,
  category: "Running",
  tags: ["comfortable", "performance"],
  stock: 15,
  description: "Product description...",
  featured: true
}
```

### Styling
- Modify `tailwind.config.js` for design system changes
- Update `app/globals.css` for global styles
- Component-specific styles use Tailwind utilities

### State Management
- Cart state: `lib/store.ts`
- Product filtering: `lib/product-store.ts`
- Both use Zustand with localStorage persistence

## 🌟 Key Features Implemented

### ✅ Completed
- [x] Next.js 14 with App Router
- [x] TypeScript configuration
- [x] Tailwind CSS setup
- [x] Responsive Navbar with dropdowns
- [x] Product catalog with 15+ items
- [x] Advanced filtering system
- [x] Product detail pages
- [x] Shopping cart functionality
- [x] State management with Zustand
- [x] Animations with Framer Motion
- [x] Mobile-responsive design
- [x] Accessibility features

### 🚧 Future Enhancements
- [ ] Search functionality
- [ ] User authentication
- [ ] Checkout process
- [ ] Payment integration
- [ ] Product reviews
- [ ] Wishlist functionality
- [ ] Admin panel
- [ ] Image optimization
- [ ] SEO enhancements

## 🤝 Contributing

This is a demonstration project showcasing modern web development capabilities. Feel free to:
- Fork the project
- Report issues
- Suggest improvements
- Use as a template for your own projects

## 📄 License

This project is for educational and demonstration purposes. Feel free to use and modify as needed.

## 🙏 Acknowledgments

- Design inspiration from modern shoe eCommerce sites
- UI components from Radix UI and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion
