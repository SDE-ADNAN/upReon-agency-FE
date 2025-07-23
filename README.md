# upReon - Premium Digital Agency Website

A cutting-edge, modern agency website built with Next.js 15, featuring stunning animations, micro-interactions, and a premium dark theme with neon accents.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Premium Design**: Black/white theme with vibrant neon accents
- **Smooth Animations**: GSAP, Framer Motion, CSS animations
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Image optimization, code splitting, lazy loading
- **SEO Ready**: Comprehensive meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 AA compliant
- **Docker Ready**: Full containerization for easy deployment

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Custom components
- **Animations**: Framer Motion, GSAP, CSS animations
- **3D Elements**: Spline.design integration ready

### Development Tools
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier
- **Pre-commit Hooks**: Husky
- **Testing**: Playwright (E2E), Jest (Unit)
- **Containerization**: Docker & Docker Compose

## 🚦 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Docker (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd upreon-agency-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Development

### Using Docker Compose (Recommended)

1. **Development mode**
   ```bash
   docker-compose --profile dev up upreon-dev
   ```

2. **Production build**
   ```bash
   docker-compose up upreon-website
   ```

### Manual Docker Build

1. **Build the image**
   ```bash
   docker build -t upreon-website .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 upreon-website
   ```

## 📁 Project Structure

```
upreon-agency-website/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── (routes)/          # Route groups
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── animations/        # Animation components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── sections/         # Page sections
│   │   ├── ui/               # Reusable UI components
│   │   └── providers/        # Context providers
│   ├── lib/                  # Utilities and configurations
│   ├── hooks/                # Custom React hooks
│   └── styles/               # Additional styles
├── public/                   # Static assets
├── tests/                    # Test files
├── docker/                   # Docker configurations
├── docs/                     # Documentation
└── ...config files
```

## 🎨 Design System

### Color Palette
- **Primary**: Pure Black (#000000)
- **Secondary**: Dark Gray variants (#111111, #1a1a1a, #2a2a2a)
- **Accent Colors**:
  - Neon Green: #00ff88
  - Electric Blue: #0080ff
  - Hot Pink: #ff0080

### Typography
- **Primary**: Inter (clean, modern)
- **Code**: JetBrains Mono
- **Display**: Space Grotesk (headlines)

### Animations
- **Micro-interactions**: Hover effects, button presses
- **Scroll animations**: Fade-in, parallax effects
- **Loading states**: Smooth transitions
- **Page transitions**: Elegant route changes

## 📄 Pages

### Current Pages
- **Homepage** (`/`) - Hero, services, portfolio, team, contact
- **Portfolio** (`/portfolio`) - Project showcase (coming soon)
- **Build Dream Team** (`/build-dream-team`) - Team builder (coming soon)
- **Privacy Policy** (`/privacy`) - Legal compliance (coming soon)
- **Cookie Policy** (`/cookie-policy`) - Cookie compliance (coming soon)

### Planned Pages
- Services detail pages
- Project case studies
- About page
- Blog/insights
- Careers page

## 🧪 Testing

### Run Tests
```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# E2E tests with UI
pnpm test:e2e:ui
```

### Test Coverage
- Component rendering
- User interactions
- Form validation
- Navigation flows
- Performance metrics

## 🚀 Deployment

### Environment Variables
Create a `.env.local` file with:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yoursite.com
# Add other variables as needed
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Docker Production Deployment
```bash
# Build production image
docker build -t upreon-website .

# Run with Docker Compose
docker-compose --profile production up
```

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm type-check       # TypeScript type checking
pnpm format           # Format with Prettier

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:e2e         # Run E2E tests

# Analysis
pnpm analyze          # Bundle analyzer
```

## 🌟 Key Features Implementation

### Hero Section
- Animated floating elements
- Gradient text effects
- Interactive service cards
- Responsive design

### Services Section
- Hover animations
- Service cards with icons
- Progressive disclosure
- Call-to-action buttons

### Contact Form
- Form validation
- Smooth animations
- Error handling
- Success states

### Performance Optimizations
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email [support@upreon.com](mailto:support@upreon.com) or create an issue in the repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- All open-source contributors

---

Built with ❤️ by the upReon team
