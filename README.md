# Anushka Jamkar - Portfolio Website

A beautiful, modern, and fully responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Beautiful Design** - Modern UI with gradient colors and glassmorphism effects
- ✨ **Smooth Animations** - Powered by Framer Motion for stunning transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Optimized with Next.js 14
- 📧 **Contact Form** - Functional contact form with email integration
- 🌙 **Dark Theme** - Beautiful dark theme with purple and pink accents

## Sections

1. **Hero** - Eye-catching introduction with animated elements
2. **About** - Personal information and key features
3. **Skills** - Technical skills with progress bars
4. **Experience** - Professional experience timeline
5. **Projects** - Showcase of featured projects
6. **Contact** - Contact form and information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anushkasportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note**: For Gmail, you'll need to generate an App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password for "Mail"

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

- Edit `components/Hero.tsx` for hero section content
- Edit `components/About.tsx` for about section
- Edit `components/Experience.tsx` for work experience
- Edit `components/Projects.tsx` for project showcase
- Edit `components/Contact.tsx` for contact information

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

### Update Skills

Modify the `skills` array in `components/Skills.tsx`.

## Deployment

This portfolio can be deployed on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

For Vercel:
1. Push your code to GitHub
2. Import the repository to Vercel
3. Add environment variables
4. Deploy!

## License

This project is open source and available under the MIT License.

## Contact

Anushka Jamkar - anushkajamkar@gmail.com

---

Made with ❤️ by Anushka Jamkar

