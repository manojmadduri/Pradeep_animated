# Deployment Guide for Vercel

## Quick Deployment Steps

### 1. Prepare Your Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: your-portfolio-name
# - Directory: ./
# - Override settings? No
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

### 3. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

### 4. Database Options

#### Option A: Vercel Postgres (Recommended)
1. In Vercel Dashboard → Storage → Create Database
2. Select Postgres
3. Copy the connection string to `DATABASE_URL`

#### Option B: Supabase (Free)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy connection string to `DATABASE_URL`

#### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Create PostgreSQL database
3. Copy connection string to `DATABASE_URL`

### 5. Custom Domain (Optional)
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure TypeScript types are correct
- Verify environment variables are set

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check database is accessible from Vercel
- Run `npm run db:push` to create tables

### Static Assets
- Images should be in `attached_assets/` or use external URLs
- Resume file should be accessible at `/attached_assets/resume.docx`

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Contact form works
- [ ] Resume download works
- [ ] Mobile navigation works
- [ ] All animations work smoothly

## Updating Your Site

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel will automatically redeploy
```

Your portfolio will be live at: `https://your-project-name.vercel.app`