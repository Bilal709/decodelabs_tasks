# Task 3 - Product Details Page & Interactivity

## Project Overview
This is the Week 3 submission for the Frontend Development Internship. The task implements a Product Details Page with JavaScript interactivity for an e-commerce marketplace.

## Technologies Used
- HTML5 (Semantic Elements)
- CSS3 (Flexbox, Grid)
- JavaScript (ES6)
- Google Fonts (Inter)
- Font Awesome Icons

## Features Implemented

### 1. Product Details Page

#### Product Images
- Main product image with large display
- Thumbnail gallery with click-to-change functionality
- Smooth image transition on thumbnail click
- Sticky image container on scroll

#### Product Information
- Product title with proper heading hierarchy
- Star rating system (4.5/5 stars)
- Pricing with discount display
  - Current price (highlighted in orange)
  - Original price (strikethrough)
  - Discount percentage badge (Save 38%)
- Product description with key features

#### Product Options
- **Color Selection**: 3 color options (Black, White, Blue)
  - Visual color dots with active state highlighting
  - Click to select functionality
- **Size Selection**: Dropdown menu (S, M, L, XL)
  - Default selection: Medium

#### Quantity Selector
- Increment/Decrement buttons (+ and -)
- Minimum quantity: 1
- Maximum quantity: 10
- Real-time quantity display

#### Add to Cart
- "Add to Cart" button with cart icon
- Displays alert with:
  - Quantity added
  - Selected size
  - Selected color
- Updates cart badge counter in header

#### Product Meta
- Free shipping on orders over $50
- 30-day return policy
- 2-year warranty included

### 2. Customer Reviews
- 3 customer reviews displayed
- Each review includes:
  - Reviewer name
  - Star rating
  - Review text
  - Review date
- Different rating variations (5-star, 4-star, 5-star)

### 3. Related Products
- 3 related product recommendations
- Each includes:
  - Product image
  - Product name
  - Price
  - "Buy Now" button
- Clicking "Buy Now" adds to cart and updates counter

### 4. JavaScript Interactivity

| Function | Description |
|----------|-------------|
| `addToCart()` | Adds main product to cart with quantity, size, color |
| `changeQuantity()` | Increases/decreases quantity (1-10) |
| `selectColor()` | Highlights selected color option |
| `changeImage()` | Changes main image on thumbnail click |
| `addRelatedToCart()` | Adds related products to cart |
| `performSearch()` | Search functionality with alert |
| Search Bar | Real-time search with button click or Enter key |

### 5. Search Functionality
- Search input field in header
- Search button with icon
- Enter key support
- Shows alert with search query

## Technical Specifications
- ✅ Semantic HTML5 elements
- ✅ External CSS only (no inline styles)
- ✅ CSS Grid for layout
- ✅ Flexbox for alignment
- ✅ Vanilla JavaScript (no libraries)
- ✅ DOM manipulation
- ✅ Event listeners
- ✅ Responsive design
- ✅ Pixel-perfect implementation
- ✅ Sticky header
- ✅ Footer fixed at bottom

## Project Structure