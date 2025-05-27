# Vite Project

A modern web application built with Vite for fast development and optimized production builds.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can check your Node.js version by running:
```bash
node --version
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```
   
   Using pnpm:
   ```bash
   pnpm install
   ```

## Development

To start the development server:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

The development server will start at `http://localhost:5173` by default. The page will automatically reload when you make changes to the source files.

## Building for Production

To create a production build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

Using pnpm:
```bash
pnpm build
```

The built files will be generated in the `dist` directory.

## Preview Production Build

To preview the production build locally:

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

Using pnpm:
```bash
pnpm preview
```

## Project Structure

```
├── public/          # Static assets
├── src/            # Source files
│   ├── assets/     # Project assets (images, fonts, etc.)
│   ├── components/ # Reusable components
│   ├── styles/     # CSS/SCSS files
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Application entry point
├── index.html      # HTML template
├── package.json    # Project dependencies and scripts
├── vite.config.js  # Vite configuration
└── README.md       # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (if configured)
- `npm run test` - Run tests (if configured)

## Environment Variables

Create a `.env` file in the root directory for environment variables:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=My Vite App
```

Access them in your code with `import.meta.env.VITE_API_URL`

## Customization

### Vite Configuration

Modify `vite.config.js` to customize build settings, add plugins, or configure development server options.

### Port Configuration

To run on a different port, you can:

1. Modify `vite.config.js`:
   ```js
   export default {
     server: {
       port: 3000
     }
   }
   ```

2. Or use command line:
   ```bash
   npm run dev -- --port 3000
   ```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Vite will automatically try the next available port
   - Or specify a different port using `--port` flag

2. **Node version compatibility**
   - Ensure you're using Node.js 18+ for best compatibility

3. **Clear cache**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Review error messages in the terminal and browser console
- Ensure all dependencies are properly installed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.