# Sanabel Quranic Complex

A modern Angular 21 application built with TypeScript and Vite, designed for displaying and exploring Islamic Quranic content.

##  Project Overview

**Sanabel** is an Angular-based web application that provides an interactive platform for Quranic studies and exploration. This project demonstrates modern web development practices using:

- **Angular 21** - Latest Angular framework with modern features
- **TypeScript 5.9** - Strong type safety and modern JavaScript features
- **Vite** - Lightning-fast build tool for development and production
- **Component-Based Architecture** - Modular and reusable UI components
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

##  Live Demo

The application is automatically deployed to GitHub Pages with every push to the `main` branch.

**Live URL:** [https://Asklany22.github.io/sanabel/](https://Asklany22.github.io/sanabel/)

##  Features

-  Modern Angular components
-  Clean and intuitive user interface
-  Fully responsive design
-  Fast performance with Vite
-  Automatic CI/CD deployment via GitHub Actions
-  Optimized for content exploration

##  Tech Stack

| Technology | Version |
|-----------|---------|
| Angular | ^21.0.0 |
| TypeScript | ~5.9.0 |
| RxJS | ~7.8.2 |
| Angular CLI | ^21.0.0 |
| Node.js | 20+ (recommended) |

##  Installation

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager
- Git

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Asklany22/sanabel.git
   cd sanabel
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will open automatically at `http://localhost:4200`

##  Development Commands

### Development Server
```bash
npm start
# or
ng serve --open
```
Runs the development server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
# or
ng build --configuration production
```
Creates an optimized production build in the `dist/sanabel-quranic-complex` directory.

### Build in Development Mode
```bash
npm run watch
# or
ng build --watch --configuration development
```
Watches source files for changes and rebuilds incrementally.

### Run Tests
```bash
ng test
```
Executes the test suite using Karma and Jasmine.

### Linting
```bash
ng lint
```
Analyzes the code for stylistic and programming errors.

##  Project Structure

```
sanabel/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Root component
│   │   ├── app.component.html    # Root template
│   │   ├── app.component.css     # Root styles
│   │   └── ...                   # Feature components
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # Application entry point
│   └── styles.css                # Global styles
├── public/                        # Static assets
├── angular.json                   # Angular CLI configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── .github/workflows/
    └── deploy-pages.yml           # GitHub Actions CI/CD workflow
```

##  Deployment

### Automatic Deployment (GitHub Pages)

The project is configured with GitHub Actions for automatic deployment:

1. **Every push to `main` branch** triggers the deployment workflow
2. **GitHub Actions** automatically:
   - Installs dependencies
   - Builds the production bundle
   - Deploys to GitHub Pages

**Workflow file:** `.github/workflows/deploy-pages.yml`

### Manual Deployment

To manually build and prepare for deployment:

```bash
npm run build -- --configuration production
```

The output files are generated in `dist/sanabel-quranic-complex/`

### Deploy on Other Platforms

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/sanabel-quranic-complex`
4. Deploy!

#### Vercel
1. Import the GitHub repository to Vercel
2. Framework preset will auto-detect Angular
3. Build command: `npm run build`
4. Output directory: `dist/sanabel-quranic-complex`
5. Deploy!

##  Configuration

### Angular Configuration
Edit `angular.json` to customize:
- Build options
- Development server settings
- Output paths
- Asset handling

### TypeScript Configuration
Edit `tsconfig.json` and `tsconfig.app.json` to adjust:
- Compiler options
- Module resolution
- Strict type checking

### Base Href for Different Environments
The GitHub Actions workflow automatically sets `--base-href=/sanabel/` for GitHub Pages compatibility. For custom domains, modify the workflow file or build command.

##  Performance

- **Bundle Size:** Optimized with Vite and Angular's production build
- **Build Time:** Fast incremental builds with Vite
- **Loading:** Lazy loading support for route-based code splitting

##  Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

##  License

This project is open source and available under the MIT License.

##  Author

**Asklany22** - [GitHub Profile](https://github.com/Asklany22)

##  Support

For issues, questions, or suggestions, please open an [issue](https://github.com/Asklany22/sanabel/issues) on GitHub.

##  Quick Links

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Docs](https://pages.github.com/)

---

**Last Updated:** April 30, 2026

**Project Status:** Active Development 
