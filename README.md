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
   git clone https://github.com/Abdul0925/Frontend-Case-Study.git
   cd Frontend-Case-Study
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

## Project Structure

```
├── public/          # Static assets
├── src/            # Source files
│   ├── assets/     # Project assets (images, fonts, etc.)
│   ├── components/ # Reusable components
│   ├── context/    # React context providers
│   ├── data/       # Static data and constants
│   ├── pages/      # Page components and routes
│   ├── types/      # TypeScript type definitions
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Application entry point
├── index.html      # HTML template
├── package.json    # Project dependencies and scripts
├── vite.config.js  # Vite configuration
└── README.md       # This file
```

## Environment Variables

Create a `.env` file in the root directory for environment variables:

```env
VITE_MAPBOX_TOKEN=
```

Access them in your code with `import.meta.env.VITE_MAPBOX_TOKEN`

## Customization

### Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Review error messages in the terminal and browser console
- Ensure all dependencies are properly installed


## Screenshots of project

![image](https://github.com/user-attachments/assets/b1d9bd77-049b-4ff6-a954-7e08c1f15052)

![image](https://github.com/user-attachments/assets/0507da8f-8aa2-4c1f-9e4b-64b3b50d6b49)

![image](https://github.com/user-attachments/assets/9d3b087a-a97f-4c24-925b-947428856ed5)

![image](https://github.com/user-attachments/assets/b0f19504-fd73-44b0-b31c-8c8e49a44fae)
