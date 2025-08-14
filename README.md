# Pradeep's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js, showcasing UI/UX design and development skills.

## 🚀 Features

- **Modern Design**: Clean, professional interface with stunning animations
- **Responsive**: Optimized for all device sizes
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your database URL and other configuration.

4. Run the development server:
```bash
npm run dev
```

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account
- PostgreSQL database (you can use Vercel Postgres, Supabase, or any other provider)

### Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Set Environment Variables**:
   In your Vercel dashboard, add these environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NODE_ENV`: `production`

4. **Deploy**:
   - Vercel will automatically build and deploy your site
   - Your site will be available at `https://your-project-name.vercel.app`

### Database Setup

If you need a database, you can use:
- **Vercel Postgres**: Built-in PostgreSQL database
- **Supabase**: Free PostgreSQL with additional features
- **Railway**: Simple PostgreSQL hosting
- **Neon**: Serverless PostgreSQL

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities
│   │   └── hooks/          # Custom hooks
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data layer
├── shared/                 # Shared types and schemas
└── attached_assets/        # Static assets
```

## 🎨 Customization

- **Colors**: Edit `client/src/index.css` for color schemes
- **Content**: Update component files in `client/src/components/`
- **Images**: Replace images in `attached_assets/` or update URLs
- **Resume**: Replace the resume file in `attached_assets/`

## 📧 Contact Form

The contact form stores submissions in the database. In production, you might want to:
- Add email notifications
- Integrate with services like EmailJS or SendGrid
- Add spam protection

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run check`: Type checking
- `npm run db:push`: Push database schema

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

---

Built with ❤️ by Pradeep