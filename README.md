# Express TypeScript MongoDB Starter

A complete starter template for building Node.js applications with Express, TypeScript, MongoDB, and essential development tools.

## Technologies Used
- Express.js
- TypeScript
- MongoDB with Mongoose
- ESLint & Prettier
- Development utilities (ts-node-dev)

## Quick Start

```bash
# Clone the repository (if using git)
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run start:dev
```

## Detailed Setup Guide

### 1. Project Setup

```bash
# Create project directory
mkdir server-starter
cd server-starter

# Initialize project
npm init -y

# Install dependencies
npm install express mongoose cors dotenv
npm install -D typescript @types/express @types/cors @types/node ts-node-dev

# Initialize TypeScript
npx tsc --init
```

### 2. Configure TypeScript

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 3. Project Structure

```plaintext
src/
├── app/
│   └── config/
│       └── index.ts
├── app.ts
└── server.ts
```

### 4. Configuration Files

Create `.env` in root directory:
```env
PORT=5000
DATABASE_URL=your_mongodb_atlas_url_here
```

`src/app/config/index.ts`:
```typescript
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
```

`src/app.ts`:
```typescript
import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
```

`src/server.ts`:
```typescript
import config from './app/config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
```

### 5. Code Quality Tools

Install ESLint and Prettier:
```bash
# ESLint
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier
npm install --save-dev prettier eslint-config-prettier
```

`.eslintrc.json`:
```json
{
  "rules": {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-undef": "error"
  },
  "globals": {
    "process": "readonly"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
```

`.eslintignore`:
```plaintext
node_modules
dist
```

`.prettierrc.json`:
```json
{
  "semi": true,
  "singleQuote": true
}
```

### 6. VS Code Configuration

Add to `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### 7. NPM Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "build": "tsc",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "start:prod": "node ./dist/server.js",
    "lint": "eslint src --ignore-path .eslintignore --ext .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src"
  }
}
```

## Available Scripts

```bash
# Development
npm run start:dev    # Start development server with hot reload

# Production
npm run build       # Build for production
npm run start:prod  # Start production server

# Code Quality
npm run lint        # Check for linting errors
npm run lint:fix    # Fix linting errors
npm run prettier    # Check formatting
npm run prettier:fix # Fix formatting
```

## Important Notes

1. Create `.gitignore`:
```plaintext
node_modules
dist
.env
```

2. ESLint and Prettier should be installed in VS Code

3. MongoDB should be running locally or have a valid Atlas URL

## Common Issues

1. **Port Already in Use**
   - Change the PORT in .env file
   - Kill the process using the port

2. **MongoDB Connection Fails**
   - Check if MongoDB is running
   - Verify DATABASE_URL in .env
   - Check network connectivity

3. **TypeScript Errors**
   - Run `npm install @types/[package-name]` for missing types
   - Check `tsconfig.json` configuration

4. **ESLint/Prettier Conflicts**
   - Ensure eslint-config-prettier is in extends array
   - Clear VS Code cache and restart

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
