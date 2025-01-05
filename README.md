# Advanced Project Setup with MongoDB, Mongoose, Express, and TypeScript 🚀

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

Let’s get started! 🛠️

---

## Step 1: Initialize the Project Folder

1. Create a folder for your project. For example:
   ```bash
   mkdir server-starter
   ```
2. Open the folder in VS Code:
   ```bash
   code server-starter
   ```
3. Initialize the project with `npm`:
   ```bash
   npm init -y
   ```
   This will generate a `package.json` file.

---

## Step 2: Install Dependencies 📦

We need the following libraries:

- **express**
- **mongoose**
- **typescript** (as a dev dependency)
- **cors**
- **dotenv**

Install them one by one or all together with this command:

```bash
npm install express mongoose cors dotenv
npm install --save-dev typescript
```

### References for Documentation:

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [TypeScript](https://www.typescriptlang.org/download/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## Step 3: Set Up TypeScript

1. Initialize TypeScript configuration:
   ```bash
   tsc --init
   ```
   This creates a `tsconfig.json` file.
2. Update these options:
   ```json
   "rootDir": "./src",
   "outDir": "./dist",
   "include": ["src"],
   "exclude": ["node_modules"]
   ```

---

## Step 4: Project Structure

1. Create a `src` folder:
   ```bash
   mkdir src
   ```
2. Inside `src`, create these files and folders:
   - `app.ts`
   - `server.ts`
   - `src/app/config/index.ts`
   ```bash
   mkdir -p src/app/config
   touch src/app.ts src/server.ts src/app/config/index.ts
   ```

---

## Step 5: Configure dotenv 🌟

In `src/app/config/index.ts`, add:

```ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
```

Create a `.env` file in the root folder:

```env
PORT=5000
DATABASE_URL="Your MongoDB Atlas URL here"
```

---

## Step 6: Basic App Setup ✨

In `src/app.ts`, add:

```ts
import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
```

In `src/server.ts`, add:

```ts
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Connected to MongoDB');

    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

main();
```

---

## Step 7: Add ESLint and Prettier 🧹

1. Install ESLint and Prettier:

   ```bash
   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier --save-dev
   ```

2. Initialize ESLint:

   ```bash
   npx eslint --init
   ```

   **Answers to the prompts:**

   - How would you like to use ESLint? **To check syntax and find problems**
   - What type of modules does your project use? **JavaScript modules (import/export)**
   - Which framework? **None of these**
   - Does your project use TypeScript? **Yes**
   - Where does your code run? **Node**
   - Format? **JSON**

3. Update `.eslintrc.json`:

   ```json
   "extends": [
     "eslint:recommended",
     "plugin:@typescript-eslint/recommended",
     "prettier"
   ],
   "rules": {
     "no-console": "warn"
   }
   ```

4. Create a `.eslintignore` file:

   ```
   node_modules
dist
   ```

5. Add scripts to `package.json`:

   ```json
   "scripts": {
   "lint": "eslint src --ignore-path .eslintignore --ext .ts",
     "lint:fix": "eslint src --fix"
   }
   ```

6. Configure Prettier:
   Create `.prettierrc.json`:

   ```json
   {
     "semi": true,
     "singleQuote": true
   }
   ```

7. Add Prettier script:

   ```json
   "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\""
   ```

---

## Step 8: Running the Project 🏃‍♂️

1. Compile TypeScript to JavaScript:
   ```bash
   "build": "tsc",
   npm run build
   ```
2. Run the server:
   ```bash
   node dist/server.js
   ```

---

## Step 9: Use ts-node-dev for Development 🌟

1. Install ts-node-dev:
   ```bash
   npm install ts-node-dev --save-dev
   ```
2. Add a script for development:
   ```json
   "start:prod": "node dist/server.js",
   "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts"
   ```
3. Run the server in development mode:
   ```bash
   npm run start:dev
   ```

---

🎉 **Your backend project is ready!** You now have a modern setup with MongoDB, Mongoose, Express, and TypeScript. Happy coding! 🚀
