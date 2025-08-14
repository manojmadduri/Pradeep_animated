# Pradeep P - Portfolio Website

## Overview

This is a professional portfolio website for Pradeep P, a Senior UI/UX Designer and Developer with 8+ years of experience. The website showcases his expertise in modern web development, UI/UX design, and full-stack development capabilities. Built as a modern single-page application, it features responsive design, dark/light theme support, and a contact form with backend persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Theme System**: Custom theme provider supporting light/dark/system modes with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite development server with hot module replacement and error overlay

### Data Storage Solutions
- **Current**: In-memory storage using JavaScript Map for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema**: Shared TypeScript schemas between frontend and backend using Drizzle and Zod

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Bundling**: ESBuild for server-side code bundling
- **Asset Management**: Vite asset handling with custom alias configuration

### Component Structure
- **Design System**: Comprehensive UI component library with consistent styling
- **Layout**: Responsive sidebar navigation with mobile-friendly collapsible menu
- **Sections**: Modular component architecture (Hero, About, Skills, Experience, Projects, Education, Contact)
- **Theming**: CSS custom properties with Tailwind integration for seamless theme switching

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling utilities

### Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: Schema validation for TypeScript with runtime type checking

### Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Fast build tool with plugins for React and development enhancements
- **TypeScript**: Type checking and enhanced developer experience
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Drizzle Kit**: Migration and schema management tools
- **Neon Database**: Serverless PostgreSQL provider (configured but not yet connected)

### Build and Deployment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Connect PG Simple**: PostgreSQL session store for future session management
- **Replit Integration**: Development environment optimizations and debugging tools