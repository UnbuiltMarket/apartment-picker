# Apartment Picker

An interactive floor plan viewer for K4 Lofts apartments. This application allows users to browse available apartments on the 4th and 5th floors, with clickable apartment units that link to detailed information.

## Features

- Interactive floor plan visualization
- Toggle between 4th and 5th floor layouts
- Clickable apartment units with hover effects
- Responsive design
- Links to detailed apartment information on k4lofts.hu

## How to View on the Web

### Option 1: View Locally (Quick Start)

The simplest way to view the application:

1. Clone or download this repository
2. Open `index.html` directly in your web browser

**Note:** Some browsers may have restrictions when opening local files. If you encounter issues, use Option 2.

### Option 2: Local Development Server

For a better experience, use a local web server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server
```
Then open `http://localhost:8080` in your browser.

#### Using PHP (if installed):
```bash
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Deploy to the Web

Deploy this application to make it publicly accessible:

#### GitHub Pages (Free)

1. Go to your repository Settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select the branch (usually `main`)
4. Click "Save"
5. Your site will be available at `https://[username].github.io/apartment-picker/`

#### Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop the project folder onto Netlify's deploy interface
3. Or connect your GitHub repository for automatic deployments

#### Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect it as a static site and deploy it

## Project Structure

```
apartment-picker/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # Floor switching functionality
├── bg/                 # Floor plan background images
│   ├── 4bgpng.png     # 4th floor background
│   └── 5bgpng.png     # 5th floor background
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- SVG for interactive overlays

## Browser Compatibility

This application works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

[Add your license information here]
