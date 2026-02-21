# Drive 'N Go Car Rental Service - Product Requirements Document

## Project Overview
Modern, responsive landing page and booking platform for Drive 'N Go Car Rental Service with full-stack capabilities.

## Original Problem Statement
Design a modern, responsive landing page for Drive 'N Go Car Rental Service with:
- Overall Style: Modern, clean, bold design with rounded UI and smooth animations
- Color Themes: Dark mode (default) with light mode toggle
- Complete booking system with date picker and location selection
- Real-time availability checking
- Admin dashboard for managing vehicles and bookings

## Architecture
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Features**: Theme toggle, responsive design, smooth animations, parallax effects

## User Personas
1. **Customers**: Individuals looking to rent cars for personal or business trips
2. **Admin Staff**: Managers who need to track bookings and manage vehicle fleet

## Core Requirements (Static)
1. Responsive landing page with dark/light theme toggle
2. Hero section with compelling CTA
3. Why Choose Us section (4 feature cards)
4. Featured Vehicles grid with filtering
5. How It Works (4-step process)
6. Customer Testimonials slider
7. Call to Action section
8. Booking system with date picker and location selection
9. Real-time availability indicator
10. Admin dashboard (planned)

## What's Been Implemented (December 2025)

### Phase 1 - Frontend with Mock Data ✓
**Date**: December 18, 2025

**Completed Features**:
- ✓ Navigation component with sticky header and mobile menu
- ✓ Hero section with parallax effect and animated elements
- ✓ Why Choose Us section with 4 feature cards (hover animations)
- ✓ Featured Vehicles grid with category filtering
- ✓ How It Works section with 4-step timeline
- ✓ Testimonials slider with auto-play
- ✓ Call to Action section with animated background
- ✓ Footer with quick links and contact info
- ✓ Booking page with date picker (Shadcn Calendar)
- ✓ Location selection dropdown
- ✓ Vehicle availability badges (Available/Booked)
- ✓ Booking summary with real-time cost calculation
- ✓ Booking confirmation page
- ✓ Dark/Light theme toggle (stored in localStorage)
- ✓ Smooth scroll animations
- ✓ Mobile-responsive design
- ✓ Mock data structure for vehicles, testimonials, bookings

**Mock Data Implemented**:
- `/app/frontend/src/mock/mockData.js`:
  - vehicles (6 cars with images, pricing, specs, availability)
  - testimonials (4 customer reviews with images)
  - bookings (sample booking records)
  - locations (5 pickup locations)

**Design Highlights**:
- Professional car rental imagery from Pexels
- Light red accent color (#e53935) throughout
- Glassmorphism effects
- Card hover animations with lift and glow
- Smooth transitions (300-500ms)
- Rounded corners (rounded-2xl, rounded-3xl)
- Shadow effects for depth

## API Contracts (To Be Implemented)

### Vehicles API
```
GET /api/vehicles - Get all vehicles
GET /api/vehicles/:id - Get single vehicle
POST /api/vehicles - Create vehicle (admin)
PUT /api/vehicles/:id - Update vehicle (admin)
DELETE /api/vehicles/:id - Delete vehicle (admin)
GET /api/vehicles/availability?startDate=&endDate= - Check availability
```

### Bookings API
```
GET /api/bookings - Get all bookings (admin)
GET /api/bookings/:id - Get single booking
POST /api/bookings - Create new booking
PUT /api/bookings/:id - Update booking status
DELETE /api/bookings/:id - Cancel booking
```

### Admin API
```
GET /api/admin/dashboard - Get dashboard stats
GET /api/admin/bookings - Get all bookings with filters
PUT /api/admin/bookings/:id/status - Update booking status
```

## Prioritized Backlog

### P0 - Backend Development (Next Phase)
- [ ] MongoDB models (Vehicle, Booking, User)
- [ ] CRUD endpoints for vehicles
- [ ] Booking creation and management endpoints
- [ ] Real-time availability checking logic
- [ ] Frontend-Backend integration
- [ ] Remove mock data and connect to real API

### P1 - Admin Dashboard
- [ ] Admin authentication
- [ ] Vehicle management interface
- [ ] Booking management interface
- [ ] Dashboard analytics (total bookings, revenue, popular vehicles)
- [ ] Booking status updates (confirmed, active, completed, cancelled)

### P2 - Enhanced Features
- [ ] Email notifications (SendGrid integration - deferred)
- [ ] Payment integration (Stripe)
- [ ] User accounts and booking history
- [ ] Advanced search and filters
- [ ] Multi-language support
- [ ] SEO optimization

## Next Tasks
1. Build backend API with FastAPI
2. Create MongoDB models for Vehicle, Booking
3. Implement CRUD endpoints
4. Integrate frontend with backend
5. Test booking flow end-to-end
6. Build admin dashboard

## Technical Notes
- Theme state managed via React Context + localStorage
- Date selection using Shadcn Calendar (date-fns for formatting)
- Booking data temporarily stored in localStorage (will migrate to database)
- All images optimized and loaded from Pexels CDN
- Smooth scroll and animations implemented with CSS keyframes
