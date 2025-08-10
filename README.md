# TCS Tracking

A modern, responsive Next.js application for tracking TCS parcels with real-time updates. Built with performance and SEO in mind.

## Features

- 🚀 **Fast & Lightweight**: Built with Next.js 14 for optimal performance
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔍 **SEO Optimized**: Full meta tags, Open Graph, and structured data
- 📦 **Real-time Tracking**: Live tracking information from TCS API
- 🎨 **Modern UI**: Beautiful, intuitive interface with Tailwind CSS
- ⚡ **TypeScript**: Full type safety and better development experience
- 🔒 **Secure API**: Server-side API calls keep sensitive tokens secure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tcsTracker
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
TCS_TRACKING_API_URL=https://connect.tcscourier.com/tracking/api/Tracking/GetDynamicTrackDetail
TCS_API_HEADER_AUTH_TOKEN=your_actual_auth_token_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── csrf/
│   │   │   └── route.ts      # CSRF token generation endpoint
│   │   └── track/
│   │       └── route.ts      # Secure API endpoint with CSRF protection
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── page.tsx              # Main tracking page
│   └── globals.css           # Global styles with Tailwind
├── components/
│   ├── TrackingForm.tsx      # Tracking input form
│   └── TrackingResults.tsx   # Results display component
├── lib/
│   └── csrf.ts              # CSRF utility functions
├── types/
│   └── tracking.ts           # TypeScript interfaces
├── public/                   # Static assets
├── middleware.ts             # Security headers middleware
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## API Integration

The app uses a secure server-side API route:

- **Local Endpoint**: `/api/track?consignee={consignment_number}`
- **External API**: TCS tracking API (handled server-side)
- **Security**: Auth tokens are never exposed to the browser
- **Response**: JSON with shipment details, delivery info, and checkpoints

## Security Features

- **Server-side API calls**: Sensitive tokens never reach the browser
- **Environment variables**: Secure storage of API credentials
- **Input validation**: Proper validation of user inputs
- **Error handling**: Secure error messages without information leakage
- **CSRF Protection**: Comprehensive cross-site request forgery protection
  - Cryptographically secure token generation
  - HTTP-only cookie storage for secrets
  - Automatic token validation on all API requests
  - Protection against unauthorized cross-origin requests
- **Security Headers**: Additional security headers via middleware
  - X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
  - Content Security Policy (CSP)
  - Referrer Policy controls

## SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design
- Proper heading hierarchy

## Performance Optimizations

- Next.js App Router for optimal routing
- Tailwind CSS for minimal CSS bundle
- Optimized images and fonts
- Efficient component rendering
- Minimal JavaScript bundle

## Mobile Responsiveness

- Mobile-first design approach
- Touch-friendly interface
- Responsive grid layouts
- Optimized typography for all screen sizes
- Proper viewport configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 