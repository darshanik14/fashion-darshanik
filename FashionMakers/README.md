# Darshanik Apparels - Landing Page

A modern, responsive landing page for Darshanik Apparels, showcasing their B2B clothing manufacturing capabilities with a focus on visual design and user experience.

## Features

- Sleek dark-themed design with vibrant accent colors
- Fully responsive layout that works on all devices
- Animated elements and hover effects
- Contact form with validation
- Image optimization for fast loading
- Static site ready for deployment

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI components

## Deploying to Netlify

### Option 1: Direct Deploy from GitHub

1. Push this repository to GitHub
2. Log in to Netlify and click "New site from Git"
3. Select GitHub and authorize Netlify
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Manual Deploy

1. Run the build script: `./build-for-netlify.sh`
2. Log in to Netlify
3. Go to Sites page
4. Drag and drop the `dist` folder to the designated area
5. Your site is deployed!

### Option 3: Netlify CLI

1. Install Netlify CLI: `npm install netlify-cli -g`
2. Run the build script: `./build-for-netlify.sh`
3. Login to Netlify: `netlify login`
4. Deploy the site: `netlify deploy --prod`
5. When prompted, select the `dist` folder as your publish directory

## Development

To run this project locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to: `http://localhost:5000`

## License

[MIT License](LICENSE)